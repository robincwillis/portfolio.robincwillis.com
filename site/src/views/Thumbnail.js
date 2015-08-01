//Thumbnail View
portfolio.Views.ThumbView = Backbone.View.extend({
	tagName : 'li',
	attributes:  function() {
	  return {
	    'data-filter': this.model.cid
	  };
	},
	className: 'span6 thumbnail-item',
	template : portfolio.Templates["thumbnail"],
	events : {
		'click' : 'selectProject'
	},
	initialize : function(){
		_.bindAll(this, 'render', 'selectProject');

	},
	render : function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},

	selectProject: function(){
		this.trigger('select:project', this.model);
	}
});