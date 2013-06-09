/*
 * Tag Filter For Portfolio
 * Robin Willis
 */
(function($){

    $.fn.extend({
    
        tagFilter: function(options){
          return this.each(function() {	
			var defaults = {};
            settings = $.extend(true, defaults, options);
            var selected = $(this);
            var callback = settings.callback;
			var filterArray = settings.curFilter;
            if (filterArray.length !== 0) {
            	for(i in settings.projectJson){
	            	var index = settings.projectJson[i].index;
	            	var tagArray = new Array();
            	
    	        	for(j in settings.projectJson[i].web.tags){
        	    		if(settings.projectJson[i].web.tags[j] instanceof Array){
            				for(k in settings.projectJson[i].web.tags[j]){
            					tagArray.push(settings.projectJson[i].web.tags[j][k]);
            				}
            			}else{
            				tagArray.push(settings.projectJson[i].web.tags[j]);
            			}
            		}
            		var filterEntry = true;
					for (var i = 0; i < tagArray.length; i++) {
						for (var n = 0; n < filterArray.length; n++) {
								
							if (tagArray[i] == filterArray[n]) {
								filterEntry = false;
								break;
							}
							if (filterEntry == false){
								break;
							}
						}
					}
                        					
                    if (filterEntry == false) {
                       	//Show Item
                       	$(selected).find('#'+index).parent().removeClass('filtered');
						$(selected).find('#'+index).parent().slideDown('slow');//.show();
					}
                    else {
						$(selected).find('#'+index).parent().addClass('filtered');
						$(selected).find('#'+index).parent().slideUp('slow',function(){
							// 	
							//callback();
					
						});//.hide();//.fadeOut(400);			
                    }// END FILTERING
                        
                    }
                    
             	}else{
             		$(selected).find('.proj_item').removeClass('filtered');
					$(selected).find('.proj_item').slideDown('slow');//.show()//.fadeIn(400);
				}
	
             
			      settings.callback(); 
          });
          
            }
      
            });
       
               

    
})(jQuery);
