//Project View
portfolio.Views.ProjectView = Backbone.View.extend({
	el : $('#project'),
	events : {
		'click .close':'loadGallery',
		'click .prev':'prevSlide',
		'click .next':'nextSlide',
		'click .dot':'goToSlide'
		//'mouseup #wrapper' : 'nextSlide'
	},
	template : portfolio.Templates["project"],
	initialize : function(){
		this.model.bind('projects:selected', this.render, this);
		console.log('finished init');
	},
	render : function(){
		
		var self = this;
		var html = this.template(this.model.selectedProject().toJSON())
		
		_.delay(function(){ 
			self.$el.html(html).hide().fadeIn(500);
			self.loadSlideShow();
		 }, 700);

		return this;
	},
	loadGallery : function(){
	
		this.model.selectedProject().select(false);
		this.removeSlideShow();
		this.trigger('show:listview');
	},

	loadSlideShow : function(){

		var slides = [];

		_(this.model.selectedProject().media.models).each(function(m){
			slides.push({
				img : m.get('text'),
				width : m.get('width'),
				height : m.get('height')
			});

		}, this);

		//document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);


		var slideshow = new SwipeView('#wrapper',{
			numberOfPages: slides.length
		});



		this.slideshow = slideshow;
		console.log(slideshow);
		console.log('PageWidth' + slideshow.pageWidth);

		//Navigation

		var nav_html = '<li class="prev"><div class="arrow-left"></div></li>';
		nav_html += '';

		for(i = 0; i< this.model.selectedProject().media.models.length; i++){
		
			if(i === 0){
				nav_html += '<li class="dot selected" id="'+i+'"></li>';
			}else{
				nav_html += '<li class="dot" id="'+i+'"></li>';
			}
				
		}
		nav_html += '<li class="next"><div class="arrow-right"></div></li>';

		$("#nav").html(nav_html);
        
		var dots = document.querySelectorAll('#nav li');

		//load swipeview data

		for(i=0; i<3; i++){

			page = i === 0 ? slides.length-1 : i-1;

			el = document.createElement('img');
			//el.className = 'loading';
			el.src = "https://s3.amazonaws.com/robincwillis-portfolio/" + slides[page].img;
			el.width = slides[page].width;
			el.height = slides[page].height;
			//el.onload = function () { this.className = ''; };
			slideshow.masterPages[i].appendChild(el);

		}

		console.log(slideshow.masterPages);


		slideshow.onFlip(function(){

			console.log("onFlip "+ slideshow);
			var el, upcoming, i;

			for(i=0; i<3; i++){
				upcoming = slideshow.masterPages[i].dataset.upcomingPageIndex;

				if( upcoming != slideshow.masterPages[i].dataset.pageIndex){
					el = slideshow.masterPages[i].querySelector('img');
					//el.className = 'loading';
					el.src = "https://s3.amazonaws.com/robincwillis-portfolio/" + slides[upcoming].img;
					el.width = slides[upcoming].width;
					el.height = slides[upcoming].height;
				}
			}
			document.querySelector('#nav .selected').className = '';
			dots[slideshow.pageIndex+1].className = 'selected';
		});

		slideshow.onMoveOut(function () {
			slideshow.masterPages[slideshow.currentMasterPage].className = slideshow.masterPages[slideshow.currentMasterPage].className.replace(/(^|\s)swipeview-active(\s|$)/, '');
		});

		slideshow.onMoveIn(function () {
			var className = slideshow.masterPages[slideshow.currentMasterPage].className;
			/(^|\s)swipeview-active(\s|$)/.test(className) || (slideshow.masterPages[slideshow.currentMasterPage].className = !className ? 'swipeview-active' : className + ' swipeview-active');
		});
	

	},

	nextSlide : function(){
		this.slideshow.next();
	},

	prevSlide : function(){
		this.slideshow.prev();
	},

	goToSlide : function(e){
		//document.querySelector('#nav .selected').className = '';
		this.slideshow.goToPage(parseInt(e.currentTarget.id));
		//e.currentTarget.class = 'selected';
	},

	removeSlideShow : function(){
		this.slideshow.destroy();
	}
});