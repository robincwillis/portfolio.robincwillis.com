/*
 * thumbNav for Portfolio
 * Robin Willis
 */

(function($){
	
	$.fn.extend({
	thumbNav : function(options){
	 return this.each(function() {
		var defaults = {};
		settings = $.extend(true, defaults, options);
		var selected = $(this);
		var navList = $('<div></div>').attr('id','thumbNav');
		$('#this').height(95);
		var curProject = [];
		for(i in settings.projectJson){
			if( settings.projectJson[i].name == settings.elementID){
				curProject = settings.projectJson[i];
				break;
			}
		}
		for(i in curProject.web.navigation.nav){
			var navImg = curProject.web.navigation.nav[i];
			var navIndex = curProject.web.navigation.nav[i].index;
			var navCell = $('<div class="thumb"></div>');
			var navLink = $('<a></a>').attr( {'href':navIndex,
			'class':'thumb_link'
			});
			var image =$('<img src='+navImg+' />').attr({
				'width':'50',
				'height':'50'
			})
			$(navCell).append(image);
			$(navLink).append(navCell);
			$(navList).append(navLink);	
		}
			$(selected).empty().append(navList).find('img').hide().fadeIn('slow');
 		});
	}
	});
	
})(jQuery);