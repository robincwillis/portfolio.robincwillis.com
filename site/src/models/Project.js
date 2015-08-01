//Project
portfolio.Models.Project = Backbone.Model.extend({

	defaults : {
		state : ''
	},

	parse : function(data){

		var tags = ($.isArray(data.web.tags.tag)) ? data.web.tags.tag : [data.web.tags.tag];

		this.tags = new portfolio.Models.Tag({"tags":tags});
		this.media = new portfolio.Collections.Media(data.web.media.gal);
		//will fix in xml later
		if(data.web.links !== undefined){
			this.links = new portfolio.Collections.Links(data.web.links.link);
		}

		return data;
	},

	select: function(state){
		this.set({'state': state ? 'selected' : ''});
	}

});

