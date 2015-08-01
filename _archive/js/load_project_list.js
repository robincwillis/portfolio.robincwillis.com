/**
 * @author Robin Willis
 */


(function($){
	
	$.fn.extend({
		
	loadProjectList : function(options) {
		
	//function xml_parser(wrapper, callback){
	
	var defaults = {
			ajaxOpts: {dataType: ($.browser.msie) ? "text" : "xml", contentType: 'text/xml'},
			xml_entry : 'project',
			xml_url : 'xml/portfolio.xml',
			wrapper : 'selector',
			jsonObject : {},
	};
	
	settings = $.extend(true, defaults, options);
	
	if(settings.precallback !== undefined){
    	settings.precallback();
    }

	
	//hide content
	$(settings.wrapper).hide();
	
	//Get XML Data
	$.ajax({
		type:'get',
		url:settings.xml_url,
		dataType: 'xml',
		success: function(xml_list){
			
			settings.jsonObject = $.xml2json(xml_list);

			
						
			if(settings.callback !== undefined){

    			settings.callback(settings.jsonObject);
    		}
		
			
			
		}
	});
}
});
})(jQuery);