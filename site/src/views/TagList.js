//Tag List View

portfolio.Views.TagListView = Backbone.View.extend({
	el : $('#tag-list'),
		
	events : {
		'click .tag': 'selectFilter'
	},
	template : portfolio.Templates['taglist'],
	initialize : function(){
		//this.render();

	},

	render : function(){
		this.$el.html(this.template());
		return this;
	},
	selectFilter : function( e ){
		//console.log($(this))
		
		var filter = '';
		
		//do we have a filter
		if($(e.target).hasClass('selected')){
			$(e.target).removeClass('selected');

		}else{
			filter = e.target.text;
	 		this.$('.tag').removeClass('selected');
			$(e.target).addClass('selected');

		}

		this.trigger('filter:listview', filter);
	}
});