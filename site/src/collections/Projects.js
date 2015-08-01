//Projects
portfolio.Collections.Projects = Backbone.Collection.extend({
	model : portfolio.Models.Project,
	url: portfolio.xml_url,

	initialize: function(models){
		this.original = models;
	},

	parse : function(data){
	
		var parse = [];

		var portfolio = $.xml2json(data);
		
		_.each(portfolio.project, function(p){
			if(p.display == 'on'){
				parse.push(p);
			}
		});
		return parse;
	},
	//override fetch method to get xml instead of json
	fetch: function(options) {
		options = options || {};
		options.dataType = "xml";

		return Backbone.Collection.prototype.fetch.call(this, options);
	},
	select: function(model){
		if( this.selectedProject() ){
			this.selectedProject().select(false);
		}
		this.selected = model;
		this.selected.select(true);

		this.trigger('projects:selected');
  },
  selectedProject: function(){
	return this.selected;
  },
  filterCollection: function(filter){
		if (filter === '') {
			this.trigger("filter:thumbnails", this.models);
			
		} else {
			console.log('need to redo this logic for tags');
			
			//this.reset(this.original, { silent: true });
				
			
			var filtered = _.filter(this.models, function (item) {
				return _.contains(item.tags.get("tags"), filter);
			});

			console.log(filtered);
			this.trigger("filter:thumbnails", filtered);
			//this.reset(filtered);
		}
  }

});