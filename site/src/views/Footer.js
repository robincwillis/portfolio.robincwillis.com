

portfolio.Views.Footer = Backbone.View.extend({
	el : $('footer'),
	template: portfolio.Templates["footer"],
	initialize : function(){
		//this.render();
	},
	render : function(){
		this.$el.html(this.template());
		return this;
	}
});