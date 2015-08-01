

portfolio.Views.PreloaderView = Backbone.View.extend({
	el: 'div.preloader-container',
	template : portfolio.Templates["preloader"],
	
	initialize : function(){
	
		this.render();

	},

	render : function(){

		this.$el.append(this.template());
		$(".preloader-container").toggleClass("load-in");
		return this;
	},

	handleProgress : function( e ){

		var percentComplete = 0;
        if (e.lengthComputable) {  
            percentComplete = e.loaded / e.total;
        }
        $('.progress-bar').width(percentComplete * 100);

	},

	finishProgress : function(){
		$(".preloader-container").toggleClass("load-out");
		var self = this;
		setTimeout(
        	function(){
			self.remove();
			}
        	,400);
	}

});