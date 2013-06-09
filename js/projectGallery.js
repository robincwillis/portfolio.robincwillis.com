/*
 * projectGallery for Portfolio
 * Robin Willis
 */

(function($){
	
	$.fn.extend({
	
	projectGallery : function(options){
		return this.each(function() {
     //   	$.ajax(settings.ajaxOpts);	
		var defaults = {
			//ajaxOpts: {dataType: ($.browser.msie) ? "text" : "xml", contentType: 'text/xml'}

		};
		
		settings = $.extend(true, defaults, options);
		var selected = $(this);
		var curProject = [];
		$(selected).find('.media_cell').remove();//.live('fadeOut');
		$(selected).find('.media_cell').remove();
		$(document).find('#content').width('550px');
		var contentWidth = 0;
	
		for(i in settings.projectJson){
			if( settings.projectJson[i].name == settings.elementID){
				curProject = settings.projectJson[i];
				break;
			}
		}
				var proj_Title = $('#proj_description')
					.find('h1').empty().append(curProject.title);
					
					var tab_Title = $('#project_tab_title')
					.empty().append(curProject.title);
					
					var proj_Medium = $('#proj_description')
					.find('#medium').empty().append(curProject.medium);
					
					var proj_Dimensions = $('#proj_description')
					.find('h4').empty().append(curProject.dimensions);
					
					var proj_Description = $('#proj_description')
					.find('p').empty().append(curProject.description);
					
					var link_Intro = $('#proj_description')
					.find('#link_intro').empty();
					
					var link_List = $('#proj_description')
					.find("#link_list").empty();
					
					var link_Rule = $('#proj_description')
					.find("hr").hide();
			
					//TODO Multiple links, should move links in our xml to web section	
					//check if we have multiple links
					if(curProject.web.links != undefined){
						
					
					if(curProject.web.links instanceof Array){
						

					}else{
						var linkText = curProject.web.links.link.text;
						var linkURL = curProject.web.links.link.url;
						var link_item = $('<li></li>');
						 var link =$('<a></a>').attr({
							'href' : linkURL,
							 'target' : 'blank'
						 });
							 link.append(linkText);
							 link_item.append(link);
							 link_List.append(link_item);
							 $('li').last().addClass('last');
					}
					}
					
					var marginLeft =($(window).width()/2)-(parseFloat( curProject.web.media.gal[0].width)/2);
					if(marginLeft < 0){marginLeft = 20}
					var marginRight  =($(window).width()/2)-(parseFloat( curProject.web.media.gal[curProject.web.media.gal.length-1].width)/2);

					
					contentWidth = marginRight;
					$(document).find('#content').css('margin-left',marginLeft+'px');
					
					for(i in curProject.web.media.gal){

						var mediaLink = curProject.web.media.gal[i];
						var mediaIndex = curProject.web.media.gal[i].index; 
						var mediaWidth = curProject.web.media.gal[i].width; 
						var mediaHeight = curProject.web.media.gal[i].height; 
						var mediaEmbed = curProject.web.media.gal[i].embed; 
						
						if(i == curProject.web.media.gal.length-1)
						{
							contentWidth = contentWidth + parseFloat(mediaWidth);
						}else{
							contentWidth = contentWidth + parseFloat(mediaWidth)+40;
						}
						
							
						$(document).find('#content').width(contentWidth +'px');
							
						if (mediaEmbed == 'blip') {
							var blipEmbedCode = '<object><embed src="' + mediaLink + '" type="application/x-shockwave-flash" width="' + mediaWidth + '" height="' + mediaHeight + '" allowscriptaccess="always" allowfullscreen="true" wmode="transparent"></embed></object>';
							var mediaItem = blipEmbedCode;
						}
						else {
							
								var image = $('<img  />').attr({
									'src': mediaLink,
									'width': mediaWidth,
									'height': mediaHeight
								})
								
								var mediaItem = image;
						}
							
						var mediaWrapper = $('<a></a>').attr('href','#gal_'+mediaIndex).append(mediaItem);
						var cell = $('<div></div>').attr({
							'class': 'media_cell',
							'id' : 'gal_' + mediaIndex
						})
						.css('width', mediaWidth+'px')
						.css('height', mediaHeight+'px')
						.append(mediaWrapper);
													
						$(selected).append(cell).find('img').hide().fadeIn('slow');
					}
				
			    if(settings.callback !== undefined){
                    settings.callback();
                }
						
					
				
		


    });	

		
	
	}	
		
	});
	
})(jQuery);