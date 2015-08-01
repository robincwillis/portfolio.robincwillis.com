/*
Blogger Classic Tag Cloud plugin for $
Copyright (c) 2007-2009 Nik Makris (nikmakris.com)
Licensed under the MIT license (http://www.nikmakris.com/projects/BloggerClassicTagCloud/#license) 
Version: 1.0.0 (29/06/2009 21:35:00)
*/
(function($) { // Compliant with jquery.noConflict()
    	
		$.fn.extend({

		tagCloud : function(projectJson,filter) {


        return this.each(function() {
         	
		    var $container = $('<ul></ul>')
			var div = $(this);
			$(this).empty();

			var dedupedTags = [];
			var tags = getTags(projectJson); 

            tags.sort(caseInsensitiveCompare);
            //Redup tag list and create a multi-dimensional array to store 'tag' and 'tag count'
             var oldTag = '';
             var x = 0;
             $(tags).each(function() {
                 if (this.toString() != oldTag) {
                    // //Add new tag
                     dedupedTags[x] = [];
                     dedupedTags[x][0] = this.toString();
                     dedupedTags[x][1] = 1;
                     x++;
                 } else {
                    // //Increment tag count
                     dedupedTags[x - 1][1] = dedupedTags[x - 1][1] + 1;
                 }
                 oldTag = this.toString();
             });
            // // Loop through all unique tags and write the cloud
             $(dedupedTags).each(function(i) {
                 var $link = $('<a></a>').attr({
					 href: '#'+dedupedTags[i][0],
					 id:'tag_filter',
				
				 })
			
				 var $item = $('<li></li>').attr('id','tag_item');
                 var $span = $('<span></span>').attr('class','tag_count');
                 for(var j=0;j<filter.length;j++){
                	
                	 if(dedupedTags[i][0] == filter[j]){
                		 $link.addClass('filter_on');	
                	 }
              	 }
                 $link.append(dedupedTags[i][0]);
				 $span.append(' (' + dedupedTags[i][1] + ')');
                 $item.append($link);
				 $item.append($span);
				 $container.append($item);
             });
			 div.append($container);

        });
	
	function getTags(obj){
		var returnTags = [];
		for(var i in obj){
			for (var j in obj[i].web.tags){
				
				if(obj[i].web.tags[j] instanceof Array){
					
					for(var k in obj[i].web.tags[j]){
						returnTags.push(obj[i].web.tags[j][k]);	
					}	
				}else{
					returnTags.push(obj[i].web.tags[j]);		
				}
			
			}
		}
		return returnTags;
	}

    //Used to make JavaScript sort case-insensitive
    function caseInsensitiveCompare(a, b) {
        var anew = a.toLowerCase();
        var bnew = b.toLowerCase();
        if (anew < bnew) return -1;
        if (anew > bnew) return 1;
        return 0;
    }
 }

});

})(jQuery);
