/**
 * @author Robin Willis
 */

var portfolioPage=function(){
	
	var state = {};
	var curState = {};
	var projectList = [];
	var curFilterArray = [];
	var portfolioURL = 'xml/portfolio.xml';
	var showThumbnails = true;
	//---------------------------------------
	//ADDRESS OBJECT UPDATED BY EVENTS AND CALLS TO 
	//---------------------------------------				
	var initAddress = function(){	
		$.address.init(function(event){
			$.address.autoUpdate(false);
			$.address.crawlable(true);
			$.address.strict(true);	
			state["path"] = "/";
			state["params"] = {'q':''};
			if($.address.parameter('q')!= undefined){
				if($.address.parameter('q') instanceof Array){
					curFilterArray = $.address.parameter('q');	
				}else{
					curFilterArray.push( $.address.parameter('q'));		
				}	
			}	
			$('#project_navigation').loadProjectList({
				xml_url:portfolioURL,
				wrapper : '#project_navigation',
				precallback : start,
				callback : finish
			});
		});
	}
	var updateAddress = function(){
		$.address.change(function(event){	
			curState = QueryStringToHash($.address.value());				
				if(curState.params.q != state.params.q){
					updateProjectList(curFilterArray);		
				}
				
			if($.address.path() != state.path){
				var name = event.value.replace(/\//g,"").split("?")[0];
				updateProjectGallery(name);	
			}
			state = QueryStringToHash($.address.value());
		});
	};
	//---------------------------------------
	//DESERIALIZE QUERY STRING
	//---------------------------------------
	var QueryStringToHash = function (query) {
	  var params = {}
	  var query_string = {};
	  var path = query.split("?");
	  params["path"] = path[0];
	  if(typeof(path[1]) !== 'undefined'){
		  var vars = path[1].split("&");
		  for (var i=0;i<vars.length;i++) {
		    var pair = vars[i].split("=");
		    pair[0] = decodeURIComponent(pair[0]);
		    pair[1] = decodeURIComponent(pair[1]);
		        // If first entry with this name
		    if (typeof query_string[pair[0]] === "undefined") {
		      query_string[pair[0]] = pair[1];
		        // If second entry with this name
		    } else if (typeof query_string[pair[0]] === "string") {
		      var arr = [ query_string[pair[0]], pair[1] ];
		      query_string[pair[0]] = arr;
		        // If third or later entry with this name
		    } else {
		      query_string[pair[0]].push(pair[1]);
		    }
	  } 
		  params["params"] = query_string;  
	  }else{
		  params["params"] = {'q':''};
	  }
	  return params;
	};
	//-----------------------------------------------
	//AJAX CALL
	//-----------------------------------------------
	var start = function(){ 
		jQuery('#ajax_loader').html('<p>loading</p>');
	}
	var finish = function(returnJson){
	
		$(settings.wrapper).show();
		var projectJson = returnJson;
		var xmlArr = [];

		for(var i=0;i<projectJson.project.length;i++){
			
			if(projectJson.project[i].display === "on"){
				var xml_short_description = projectJson.project[i].description.substr(0,75);
	                if (xml_short_description.length==75){
						xml_short_description += "..."			
					}			
			xmlArr+= '<div class="proj_item">';
			xmlArr+= '<a id="'+projectJson.project[i].index+'" class="proj_link" href="/'+projectJson.project[i].name+'/">';
			xmlArr+= '<div class="img_container">';
			xmlArr+= '<img src="'+projectJson.project[i].thumb+'" width="600" height="100" />';
			xmlArr+= '</div>';
			xmlArr+= '<h2>'+projectJson.project[i].title+'</h2>';
			xmlArr+= '<span class="proj_date">'+projectJson.project[i].date+'</span>';
			xmlArr+= '<span class="proj_med">'+projectJson.project[i].medium+'</span>';
			xmlArr+= '<span class="proj_desc">'+xml_short_description+'</span>';
			xmlArr+= '</a></div>';			
			projectList.push(projectJson.project[i]);			
			}
	
		}
		
		$(xmlArr).appendTo(settings.wrapper);
		
		jQuery('#ajax_loader').remove();
		$('#tag_cloud').tagCloud(projectList, curFilterArray);
		$('#project_navigation').height($(window).height()-90);
		$("#project_navigation").autoScroll({entry:'.proj_item'});
		
		updateAddress();
		$.address.update();
		$.address.autoUpdate(true);
	}
	
	//-----------------------------------------------
	//BIND EVENTS CHANGE ADDRESS AND GLOBAL VARIABLES
	//-----------------------------------------------
	var bindEvents=function(){
		
	  	$('.panel').live('hover',function(){
	  		$('#header').fadeOut(400);
	  		showThumbnails = false;
	  	});
	  	
	  	$('.panel').live('mouseleave',function(e){
	  		showThumbnails = true;
	  	});
	  
	  	$('#container').live('mousemove',function(){
	  		if(showThumbnails == true){
	  			$('#header').show();
	  		}else{
	  			$('#header').hide();
	  		}
	  	})
	  
		$('.proj_item').live('mouseleave', function(){
			$(this).find('.img_container').stop().animate({
			'width':100}, 300,'swing').find('img').stop().animate({
			'left':-300},300,'swing');
		});
		
		$('.proj_item').live('mouseenter', function(){
			$(this).find('.img_container').stop().animate({
			'width':600}, 300,'swing').find('img').stop().animate({
			'left':0},300,'swing');		
		});
		
		$("#tag_filter").live('click', function(e){
			e.preventDefault();
			var testTag = $(this).text();
			updateFilterArray(testTag);	
			$.address.parameter('q','');
			for(var i=0;i<curFilterArray.length;i++){
				$.address.parameter('q',curFilterArray[i],true);
			}
			$(this).toggleClass('filter_on');		
		});

	    $('.proj_link').live('click',function(e){		
			e.preventDefault();
			var i = $(this).attr('href').replace(/^#/, ''); 
			$.address.path(i);		
		});
		
		$('.thumb_link').live('click',function(e){
			e.preventDefault();
			var i = $(this).attr('href').replace(/^#/, ''); 
			$.address.parameter('img',i);
			var off = ($(window).width()/2)-($('#gal_'+i).width()/2);
			$('#content_container').scrollTo($('#gal_'+i),
			{
				axis:'x',
				offset:off*-1,
				duration:500
				 }
			);
		});
		
		$(window).resize(function(){
			$('#project_navigation').height($(window).height()-90)

			delay(function(){
     			$('#project_navigation').autoScroll('update');
	    	}, 500);
		
		});
		var delay = (function(){
		  	var timer = 0;
		  	return function(callback, ms){
		    clearTimeout (timer);
		    timer = setTimeout(callback, ms);
		};
		})();
		
	}
	//-----------------------------------------------
	//CALL ON PAGE LOAD
	//-----------------------------------------------
	var updateFilterArray=function(testTag){

		if (curFilterArray.length == 0){
			curFilterArray[curFilterArray.length] = testTag;	
		}else{
        for(i = 0; i < curFilterArray.length; i ++){
			if (testTag == curFilterArray[i]){
				curFilterArray.splice(i, 1);
				break;
				}
			if(i == curFilterArray.length -1){
				curFilterArray.push(testTag);
				break;
				}
			}
		}
	}
	
	var updateProjectList=function(tagArray){	
	
		$('#project_navigation').tagFilter({
			projectJson : projectList,
			parentElement : 'project',
			curFilter: curFilterArray,
            callback: function(){$('#project_navigation').autoScroll('update')}
        });
	}
	
	var updateProjectGallery=function(id){
		
		$('#project_list_panel').panel('forceClose',$("#project_list_panel"));
		
		$('#content').projectGallery({
			projectJson : projectList,
			parentElement : 'project',
			elementID : id,
			parentAttr: 'name'
		});
		
		$('#thumbNavWrapper').thumbNav({
			projectJson : projectList,
			parentElement : 'project',
			elementID : id,
			parentAttr: 'name'
		});
	}
	//-----------------------------------------------
	//CALL ON PAGE LOAD
	//-----------------------------------------------
	var initPage=function(){
		$("#project_list_panel").panel({
			 		handle:'#project_list_panel > .panel_tab',
			 		content:'#project_list_panel > .panel_content',
			 		opened:false,
			 		direction : "left",
			      	openedSize : 640,
			      	openEvent : 'mouseenter',
			      	closeEvent : 'mouseleave',
			      	openSelector : '#project_list_panel',
			      	closeSelector : '#project_list_panel',	
		});		
		$("#project_description_panel").panel({
			 		handle:'#project_description_panel > .panel_tab',
			 		content:'#project_description_panel > .panel_content',
			 		opened:true,
			 		direction : "both",
			      	openedSize : 640,
			      	openEvent : 'mouseenter',
			      	closeEvent : 'mouseleave',
			      	openSelector : '#project_description_panel',
			      	closeSelector : '#project_description_panel',
		});	
	}

	var pageLoadOperations=function(){
		initPage();
		initAddress();
		bindEvents();		
	};

	return{
		init:pageLoadOperations
	};
}
	
//$(document).ready(function()
$(function () {
	var page= new portfolioPage();
	page.init();
});
