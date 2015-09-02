define(["jquery","imagesLoaded"],function(a,b){function c(a){console.log(a)}function d(){c("hideAllViewers()"),a(".media-viewer .object-media-audio").addClass("is-hidden"),a(".media-viewer .object-media-iiif").addClass("is-hidden"),a(".media-viewer .object-media-image").addClass("is-hidden"),a(".media-viewer .object-media-pdf").addClass("is-hidden"),a(".media-viewer .object-media-text").addClass("is-hidden"),a(".media-viewer .object-media-video").addClass("is-hidden"),a(".media-viewer .object-media-iif").addClass("is-hidden")}function e(){c("initMedia()")}function f(b){c("remove playability..."),b.$thumb.removeClass("playable"),b.$thumb.find(".media-clickable-indicator").remove(),a(o).removeClass("loading"),a(".media-viewer .object-media-"+b.player).addClass("is-hidden")}function g(b,c){c.hide_thumb&&a(n).addClass("open"),a(o).removeClass("loading")}function h(b,c){d(),a(".media-viewer .object-media-audio").removeClass("is-hidden"),require(["media_viewer_videojs"],function(a){a.init(a.getItemFromMarkup(c.target))})}function i(b,e){c("initMediaIIIF() "+e.url),d(),a(".media-viewer .object-media-iiif").removeClass("is-hidden"),require(["leaflet"],function(a){require(["media_viewer_iiif"],function(a){a.init(e.url,e.target)})})}function j(b,e){if(c("initMediaImage()   "+p),p)return d(),a(".media-viewer .object-media-image").removeClass("is-hidden"),p.setUrl(e.url),void g(b,e);var h=[],i=[],j=e.target.attr("data-uri");if(a(o+"[data-type=image]").each(function(){var b=a(this),d=b.attr("data-uri"),e=b.attr("data-height"),f=b.attr("data-width");d&&f&&e?h.push({src:d,h:e,w:f}):d?i.push(d):c("incomplete image data")}),i.length>0){a("body").append('<div id="img-measure" style="position:absolute; visibility:hidden;">');for(var k=0;k<i.length;k++)a("#img-measure").append('<img src="'+i[k]+'">');a("#img-measure").imagesLoaded(function(b,c,g){for(var i=0;i<b.length;i++){var k=a(b[i]);h.push({src:k.attr("src"),h:k.height(),w:k.width()})}a("#img-measure").remove(),require(["media_viewer_image"],function(b){p=b,d(),a(".media-viewer .object-media-image").removeClass("is-hidden"),p.init(h,j)||f({$thumb:a(e.target)})})})}else c("full img meta-data given:\n	"+JSON.stringify(h)),require(["media_viewer_image"],function(b){p=b,d(),a(".media-viewer .object-media-image").removeClass("is-hidden"),p.init(h,j)||f({$thumb:a(e.target)})})}function k(b,e){c("initMediaPdf(): "+e.url),e.url&&e.url.length>0&&require(["jquery"],function(){require(["pdfjs"],function(){require(["pdf_lang"],function(){require(["media_viewer_pdf"],function(b){d(),a(".media-viewer .object-media-pdf").removeClass("is-hidden"),b.init(e.url)})})})})}function l(b,c){d(),a(".media-viewer .object-media-video").removeClass("is-hidden"),require(["media_viewer_videojs"],function(a){a.init(a.getItemFromMarkup(c.target))})}function m(b){if(b.preventDefault(),b.stopPropagation(),a(this).hasClass("playable")){a(this).addClass("loading");var d=a(this).attr("data-type");console.log("media controller will trigger eventobject-media-"+d),a(".media-viewer").trigger("object-media-"+d,{url:a(this).attr("data-uri"),target:a(this)})}else c("media item not playable")}var n=".object-media-nav",o=n+" a",p=null;a(".media-viewer").on("media_init",e),a(".media-viewer").on("object-media-audio",h),a(".media-viewer").on("object-media-iiif",i),a(".media-viewer").on("object-media-image",j),a(".media-viewer").on("object-media-pdf",k),a(".media-viewer").on("object-media-video",l),a(".media-viewer").on("object-media-open",g),a(".media-viewer").on("remove-playability",f),a(o).on("click",m)});