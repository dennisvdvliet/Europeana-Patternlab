!function($){var t={topSpacing:0,bottomSpacing:0,className:"is-sticky",wrapperClassName:"sticky-wrapper",center:!1,getWidthFrom:"",responsiveWidth:!1},e=$(window),i=$(document),s=[],n=e.height(),a=function(){for(var t=e.scrollTop(),a=i.height(),o=a-n,r=t>o?o-t:0,c=0;c<s.length;c++){var p=s[c],l=p.stickyWrapper.offset().top,d=l-p.topSpacing-r;if(d>=t)null!==p.currentTop&&(p.stickyElement.css("position","").css("top",""),p.stickyElement.trigger("sticky-end",[p]).parent().removeClass(p.className),p.currentTop=null);else{var u=a-p.stickyElement.outerHeight()-p.topSpacing-p.bottomSpacing-t-r;0>u?u+=p.topSpacing:u=p.topSpacing,p.currentTop!=u&&(p.stickyElement.css("position","fixed").css("top",u),"undefined"!=typeof p.getWidthFrom&&p.stickyElement.css("width",$(p.getWidthFrom).width()),p.stickyElement.trigger("sticky-start",[p]).parent().addClass(p.className),p.currentTop=u)}}},o=function(){n=e.height();for(var t=0;t<s.length;t++){var i=s[t];"undefined"!=typeof i.getWidthFrom&&i.responsiveWidth===!0&&i.stickyElement.css("width",$(i.getWidthFrom).width())}},r={init:function(e){var i=$.extend({},t,e);return this.each(function(){var e=$(this),n=e.attr("id"),a=n?n+"-"+t.wrapperClassName:t.wrapperClassName,o=$("<div></div>").attr("id",n+"-sticky-wrapper").addClass(i.wrapperClassName);e.wrapAll(o),i.center&&e.parent().css({width:e.outerWidth(),marginLeft:"auto",marginRight:"auto"}),"right"==e.css("float")&&e.css({"float":"none"}).parent().css({"float":"right"});var r=e.parent();r.css("height",e.outerHeight()),s.push({topSpacing:i.topSpacing,bottomSpacing:i.bottomSpacing,stickyElement:e,currentTop:null,stickyWrapper:r,className:i.className,getWidthFrom:i.getWidthFrom,responsiveWidth:i.responsiveWidth})})},update:a,unstick:function(t){return this.each(function(){for(var t=$(this),e=-1,i=0;i<s.length;i++)s[i].stickyElement.get(0)==t.get(0)&&(e=i);-1!=e&&(s.splice(e,1),t.unwrap(),t.removeAttr("style"))})}};window.addEventListener?(window.addEventListener("scroll",a,!1),window.addEventListener("resize",o,!1)):window.attachEvent&&(window.attachEvent("onscroll",a),window.attachEvent("onresize",o)),$.fn.sticky=function(t){return r[t]?r[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void $.error("Method "+t+" does not exist on jQuery.sticky"):r.init.apply(this,arguments)},$.fn.unstick=function(t){return r[t]?r[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void $.error("Method "+t+" does not exist on jQuery.sticky"):r.unstick.apply(this,arguments)},$(function(){setTimeout(a,0)})}(jQuery);var Europeana_labs=window.Europeana_labs||{};!function($){Europeana_labs.init_stickynav=function(){if($(window).width()>800){var t=$(".footer").outerHeight(!0)+75;$(".js-sticky").sticky({topSpacing:100,bottomSpacing:t,responsiveWidth:!0,getWidthFrom:".js-getstickywidth"})}},Europeana_labs.init_accordions=function(){$(".js-accordion li > ul").parent().addClass("has-subnav"),$(".js-accordion .has-subnav ul").has(".is-current").show(),$(".js-accordion .is-current").parentsUntil($(".js-accordion"),".has-subnav").children("a").addClass("active"),$(".js-accordion").on("click",".has-subnav > a",function(t){t.preventDefault(),$(this).next("ul").is(":visible")?($(this).next("ul").slideUp("fast"),$(this).removeClass("active")):($(this).closest("ul").find(".active").next("ul").slideUp("fast"),$(this).closest("ul").find(".active").removeClass("active"),$(this).next().slideToggle("fast"),$(this).addClass("active"))})},$(function(){Europeana_labs.init_stickynav(),Europeana_labs.init_accordions()})}(jQuery);