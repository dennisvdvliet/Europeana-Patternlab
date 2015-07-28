define(["jquery","imagesLoaded"],function(a,b){function c(a){console.log(a)}function d(){c("hideAllViewers()"),a(".media-viewer .object-media-audio").addClass("is-hidden"),a(".media-viewer .object-media-image").addClass("is-hidden"),a(".media-viewer .object-media-pdf").addClass("is-hidden"),a(".media-viewer .object-media-text").addClass("is-hidden"),a(".media-viewer .object-media-video").addClass("is-hidden")}function e(){c("initMedia()")}function f(){a(l).addClass("open")}function g(b,c){d(),a(".media-viewer .object-media-audio").removeClass("is-hidden"),require(["media_viewer_videojs"],function(a){a.init(a.getItemFromMarkup(c.target))})}function h(b,e){if(c("initMediaImage()   "+n),n)return d(),a(".media-viewer .object-media-image").removeClass("is-hidden"),void n.setUrl(e.url);var f=[],g=[],h=e.target.attr("data-uri");if(a(m+"[data-type=image]").each(function(){var b=a(this),d=b.attr("data-uri"),e=b.attr("data-height"),h=b.attr("data-width");d&&h&&e?f.push({src:d,h:e,w:h}):d?g.push(d):c("incomplete image data")}),g.length>0){a("body").append('<div id="img-measure" style="position:absolute; visibility:hidden;">');for(var i=0;i<g.length;i++)a("#img-measure").append('<img src="'+g[i]+'">');a("#img-measure").imagesLoaded(function(b,c,e){for(var g=0;g<b.length;g++){var i=a(b[g]);f.push({src:i.attr("src"),h:i.height(),w:i.width()})}a("#img-measure").remove(),require(["media_viewer_image"],function(b){n=b,d(),a(".media-viewer .object-media-image").removeClass("is-hidden"),n.init(f,h)})})}else c("full img meta-data given:\n	"+JSON.stringify(f)),require(["media_viewer_image"],function(b){n=b,d(),a(".media-viewer .object-media-image").removeClass("is-hidden"),n.init(f,h)})}function i(b,e){c("initMediaPdf(): "+e.url),e.url&&e.url.length>0&&require(["jquery"],function(){require(["pdfjs"],function(){require(["pdf_lang"],function(){require(["media_viewer_pdf"],function(b){d(),a(".media-viewer .object-media-pdf").removeClass("is-hidden"),b.init(e.url)})})})})}function j(b,c){d(),a(".media-viewer .object-media-video").removeClass("is-hidden"),require(["media_viewer_videojs"],function(a){a.init(a.getItemFromMarkup(c.target))})}function k(b){b.preventDefault(),b.stopPropagation(),a(this).hasClass("playable")?a(".media-viewer").trigger("object-media-"+a(this).attr("data-type"),{url:a(this).attr("data-uri"),target:a(this)}):c("media item not playable")}var l=".object-media-nav",m=l+" a",n=null;a(".media-viewer").on("media_init",e),a(".media-viewer").on("object-media-audio",g),a(".media-viewer").on("object-media-image",h),a(".media-viewer").on("object-media-pdf",i),a(".media-viewer").on("object-media-video",j),a(".media-viewer").on("object-media-open",f),a(m).on("click",k)});