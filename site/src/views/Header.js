

portfolio.Views.Header = Backbone.View.extend({
	el : $('header'),
	template: portfolio.Templates["header"],
	initialize : function(){
		//this.render();
	},
	render : function(){
		this.$el.html(this.template());
		return this;
	}
});