define(["jquery","imagesLoaded"],function(a,b){function c(a){console.log(a)}function d(){c("hideAllViewers()"),a(".media-viewer .object-media-audio").addClass("is-hidden"),a(".media-viewer .object-media-image").addClass("is-hidden"),a(".media-viewer .object-media-pdf").addClass("is-hidden"),a(".media-viewer .object-media-text").addClass("is-hidden"),a(".media-viewer .object-media-video").addClass("is-hidden")}function e(){c("initMedia()")}function f(b,c){c.hide_thumb&&a(l).addClass("open"),a(m).removeClass("loading")}function g(b,c){d(),a(".media-viewer .object-media-audio").removeClass("is-hidden"),require(["media_viewer_videojs"],function(a){a.init(a.getItemFromMarkup(c.target))})}function h(b,e){if(c("initMediaImage()   "+n),n)return d(),a(".media-viewer .object-media-image").removeClass("is-hidden"),n.setUrl(e.url),void f();var g=[],h=[],i=e.target.attr("data-uri");if(a(m+"[data-type=image]").each(function(){var b=a(this),d=b.attr("data-uri"),e=b.attr("data-height"),f=b.attr("data-width");d&&f&&e?g.push({src:d,h:e,w:f}):d?h.push(d):c("incomplete image data")}),h.length>0){a("body").append('<div id="img-measure" style="position:absolute; visibility:hidden;">');for(var j=0;j<h.length;j++)a("#img-measure").append('<img src="'+h[j]+'">');a("#img-measure").imagesLoaded(function(b,c,f){for(var h=0;h<b.length;h++){var j=a(b[h]);g.push({src:j.attr("src"),h:j.height(),w:j.width()})}a("#img-measure").remove(),require(["media_viewer_image"],function(b){n=b,d(),a(".media-viewer .object-media-image").removeClass("is-hidden"),n.init(g,i)||(a(e.target).removeClass("playable"),a(e.target).find(".media-clickable-indicator").remove(),a(m).removeClass("loading"))})})}else c("full img meta-data given:\n	"+JSON.stringify(g)),require(["media_viewer_image"],function(b){n=b,d(),a(".media-viewer .object-media-image").removeClass("is-hidden"),n.init(g,i)||(a(e.target).removeClass("playable"),a(e.target).find(".media-clickable-indicator").remove(),a(m).removeClass("loading"))})}function i(b,e){c("initMediaPdf(): "+e.url),e.url&&e.url.length>0&&require(["jquery"],function(){require(["pdfjs"],function(){require(["pdf_lang"],function(){require(["media_viewer_pdf"],function(b){d(),a(".media-viewer .object-media-pdf").removeClass("is-hidden"),b.init(e.url)})})})})}function j(b,c){d(),a(".media-viewer .object-media-video").removeClass("is-hidden"),require(["media_viewer_videojs"],function(a){a.init(a.getItemFromMarkup(c.target))})}function k(b){b.preventDefault(),b.stopPropagation(),a(this).hasClass("playable")?(a(this).addClass("loading"),a(".media-viewer").trigger("object-media-"+a(this).attr("data-type"),{url:a(this).attr("data-uri"),target:a(this)})):c("media item not playable")}var l=".object-media-nav",m=l+" a",n=null;a(".media-viewer").on("media_init",e),a(".media-viewer").on("object-media-audio",g),a(".media-viewer").on("object-media-image",h),a(".media-viewer").on("object-media-pdf",i),a(".media-viewer").on("object-media-video",j),a(".media-viewer").on("object-media-open",f),a(m).on("click",k)});