//Project List View
portfolio.Views.ProjectListView = Backbone.View.extend({

	el : $('#thumbs'),
	_views: {},

	initialize : function(){

		this.$el.isotope({
			animationEngine: 'best-available',
			itemSelector : '.thumbnail-item',
			layoutMode : 'fitRows'
		});

		this.listenTo(this.collection, "reset sync", this.render);
		this.collection.on("filter:thumbnails", this.filterThumbnails, this);
	},

	render : function (){
		console.log('project list render called ' + this.collection.models.length);
		
		
		_(this.collection.models).each(function(project){
			this.renderThumbnail(project);
		}, this);


	},

	renderThumbnail : function(thumb){
		var thumbView = new portfolio.Views.ThumbView({
			model:thumb
		});
		this._views[thumbView.model.cid] = thumbView;

		this.$el.append(thumbView.render().el);

        this.listenTo(thumbView, 'select:project', this.selectProject);

		this.$el.isotope('insert', $(thumbView.render().el));
	},

	filterThumbnails : function(filteredProjects){

		//weird isotope is only working with classe attributes

		_.each(filteredProjects, function(project) {
	       
	        this._views[project.cid].$el.addClass('filter');
	     }, this);


		 this.$el.isotope({ filter: '.filter'});
	        
	        _.each(filteredProjects, function(project) {
	        	this._views[project.cid].$el.removeClass('filter');
	        }, this);
	},

	selectProject: function(project){
		this.collection.select(project);
		this.trigger('hide:listview');
		this.trigger('show:detailview');
	}

});

