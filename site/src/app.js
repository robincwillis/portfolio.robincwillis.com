(function($){

//App View
portfolio.Views.AppView = Backbone.View.extend({
	initialize : function(){

		//Collections
		this.projects = new portfolio.Collections.Projects();
		//Views
		this.preloaderView = new portfolio.Views.PreloaderView();
		//create a gallery view
		this.projectListView = new portfolio.Views.ProjectListView({collection: this.projects});
		//create a project view
		this.projectView = new portfolio.Views.ProjectView({model: this.projects});
		//create a taglist view
		this.tagListView = new portfolio.Views.TagListView();
		//create a header view
		this.header = new portfolio.Views.Header();
		//create a footer view
		this.footer = new portfolio.Views.Footer();

		this.listenTo(this.projectView, 'show:listview', this.showProjectListView);
		this.listenTo(this.projectListView, 'hide:listview', this.hideProjectListView);
		this.listenTo(this.tagListView, 'filter:listview', this.filterProjectList);

		var self = this;

		setTimeout(function(){
			self.fetchProjects();
		}, 300);
	},
	fetchProjects : function(){
		var self = this;
		this.projects.fetch({
			xhr: function() {

				var xhr = $.ajaxSettings.xhr();

				xhr.onprogress = self.preloaderView.handleProgress;
				return xhr;
			},
			success: function(){
				self.preloaderView.finishProgress();
				self.header.render();
				self.tagListView.render();
				_.delay(function(){ 
					self.footer.render();
				}, 500);
			}
		});
	},
	hideProjectListView : function(){
		this.projectListView.$el.fadeOut(500);
		this.tagListView.$el.fadeOut(500);
		this.footer.$el.fadeOut(500,function(){
			$(this).delay( 800 ).fadeIn(500);
		});
	},

	showProjectListView : function(){
		var self = this;
		this.footer.$el.fadeOut(500);
		this.projectView.$el.fadeOut(500,function(){
			$(this).empty();
		});
		_.delay(function(){ 
			self.projectListView.$el.fadeIn(500);
			self.tagListView.$el.fadeIn(500);
			self.footer.$el.fadeIn(500);
		}, 700);
		
	},
	filterProjectList : function(filter){
		this.projects.filterCollection(filter);
	}
});

var portfolioView = new portfolio.Views.AppView();

})(jQuery);