this["portfolio"] = this["portfolio"] || {};
this["portfolio"]["Templates"] = this["portfolio"]["Templates"] || {};

this["portfolio"]["Templates"]["footer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"container-fluid\">\n	<div class=\"row-fluid\">\n		<div class=\"center\">\n			<ul class=\"inline nav\">\n				<li><a href=\"https://twitter.com/robincwillis\" class=\"trans\" title=\"Twitter\" target=\"_blank\"><img src=\"img/t_social_blk.svg\" class=\"social\" alt=\"Twitter\" /></a></li>\n				<li><a href=\"https://facebook.com/robincwillis\" class=\"trans\" title=\"Facebook\" target=\"_blank\"><img src=\"img/fb_social_blk.svg\" class=\"social\" alt=\"Facebook\" /></a></li>\n				<li><a href=\"http://www.linkedin.com/in/robincwillis\" class=\"trans\" title=\"Linked In\" target=\"_blank\"><img src=\"img/li_social_blk.svg\" class=\"social\" alt=\"Linked In\" /></a></li>\n				<li><a href=\"https://github.com/robincwillis\" class=\"trans\" title=\"Github\" target=\"_blank\"><img src=\"img/gh_social_blk.svg\" class=\"social\" alt=\"Github\" /></a></li>\n			</ul>\n		</div>\n\n	</div>\n</div>";
  });

this["portfolio"]["Templates"]["gallery"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "";


  return buffer;
  });

this["portfolio"]["Templates"]["header"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"navbar navbar-fixed-top\">\n		<div class=\"navbar-inner\">\n		    <div class=\"container-fluid\">\n		    	<a class=\"btn btn-navbar trans\" data-toggle=\"collapse\" data-target=\".nav-collapse\">\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                    </a>\n		    	<a href=\"http://robincwillis.com\" class=\"brand\">RCW</a>\n                <div class=\"nav-collapse collapse pull-right\">\n 	               <ul class=\"nav\">\n						<li><a href=\"http://robincwillis.com/blog\" class=\"trans\" title=\"Blog\">BLOG</a></li>\n						<li><a href=\"http://portfolio.robincwillis.com\" class=\"trans\" title=\"Work\">WORK</a></li>\n						<li><a href=\"http://robincwillis.com/projects\" class=\"trans\" title=\"Code\">CODE</a></li>\n 	               </ul>\n 	           </div>\n			</div>\n		</div>\n	</div>\n	<div class=\"container-fluid\">\n		<hr>\n	</div>";
  });

this["portfolio"]["Templates"]["preloader"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"preloader \">\n	<div class=\"progress-bar\"></div>\n</div>\n";
  });

this["portfolio"]["Templates"]["project"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "";
  buffer += "\n\n            <li><span class=\"label\">"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</span></li>\n\n          ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                        <li><span class=\"label\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.web),stack1 == null || stack1 === false ? stack1 : stack1.tags)),stack1 == null || stack1 === false ? stack1 : stack1.tag)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span></li>\n\n          ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <ul class=\"unstyled center\" id=\"project-links\">\n          <li><a href=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.web),stack1 == null || stack1 === false ? stack1 : stack1.links)),stack1 == null || stack1 === false ? stack1 : stack1.link)),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"trans\" target=\"_blank\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.web),stack1 == null || stack1 === false ? stack1 : stack1.links)),stack1 == null || stack1 === false ? stack1 : stack1.link)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></li>\n        </ul>\n        ";
  return buffer;
  }

  buffer += "\n<div class=\"row-fluid\">\n  <button type=\"button\" class=\"close\" aria-hidden=\"true\">&times;</button>\n</div>\n<div class=\"row-fluid\">\n    <div class=\"span12\">\n          <div id=\"frame\">\n          \n              <div id=\"wrapper\">\n                  <div id=\"nav-menu\">\n                    <ul id=\"nav\">\n                    </ul>\n                  </div>\n              </div>\n          </div>\n\n    </div>\n\n    <div class=\"span12\">\n        <h2>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h2>\n        <ul class=\"unstyled\" id=\"about-project\">\n          <li>";
  if (stack1 = helpers.date) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.date; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n          <li>";
  if (stack1 = helpers.medium) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.medium; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n          <li>";
  if (stack1 = helpers.dimensions) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.dimensions; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n        </ul>\n        <ul class=\"unstyled inline\">\n          ";
  stack2 = helpers.each.call(depth0, ((stack1 = ((stack1 = depth0.web),stack1 == null || stack1 === false ? stack1 : stack1.tags)),stack1 == null || stack1 === false ? stack1 : stack1.tag), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n        </ul>\n        <p>";
  if (stack2 = helpers.description) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.description; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</p>\n        ";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = depth0.web),stack1 == null || stack1 === false ? stack1 : stack1.links)),stack1 == null || stack1 === false ? stack1 : stack1.link), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    </div>\n</div>";
  return buffer;
  });

this["portfolio"]["Templates"]["taglist"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"row\">\n	<div class=\"span12\">\n		<ul class=\"unstyled inline\" id=\"tag-list\">\n			<li>\n				<a href=\"#\" class=\"tag trans\">Art</a>\n			</li>\n			<li>\n				<a href=\"#\" class=\"tag trans\">Architecture</a>\n			</li>\n			<li>\n				<a href=\"#\" class=\"tag trans\">Programming</a>\n			</li>\n			<li>\n				<a href=\"#\" class=\"tag trans\">Web Design</a>\n			</li>\n			<li>\n				<a href=\"#\" class=\"tag trans\">Graphic Design</a>\n			</li>\n		</ul>\n	</div>\n</div>\n";
  });

this["portfolio"]["Templates"]["test"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"entry\">\n  <h1>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n  <div class=\"body\">\n    ";
  if (stack1 = helpers.body) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.body; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n  </div>\n</div>";
  return buffer;
  });

this["portfolio"]["Templates"]["thumbnail"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "\n<a class=\"thumbnail effect\" href=\"#\">\n	<div class=\"thumb-container\">\n	<img class=\"thumb-trans\" src=\"https://s3.amazonaws.com/robincwillis-portfolio/";
  if (stack1 = helpers.thumb) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.thumb; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"\">\n	<div class=\"mask thumb-trans\"></div>\n  	<div class=\"content thumb-trans\">  \n    	<div class=\"info thumb-trans\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n  	</div>\n  	</div>\n\n</a>\n\n"
    + "\n\n";
  return buffer;
  });