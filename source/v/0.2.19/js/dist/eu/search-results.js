define(["jquery","ga"],function(a,b){function c(a){console.log(a)}var d=a(".result-items"),e=function(){var b=d.find("h1:not(.js-ellipsis)"),c=[];b.css("overflow-y","auto"),b.each(function(){a(this).find("a")[0].offsetHeight>a(this).height()&&(a(this).addClass("js-ellipsis"),c.push(a(this)))}),b.css("overflow-y","hidden"),c.length>0&&require(["util_ellipsis"],function(b){b.create(a(c))});var e=d.find(".search-list-item.missing-image .item-image:not(.js-ellipsis)");e.size()>0&&(require(["util_ellipsis"],function(b){b.create(e,{fixed:'<span class="fixed"></span>'}),a(".search-list-item.missing-image .fixed").each(function(){var b=a(this).closest(".item-preview").next(".item-info").find(".icon");b?(a(this).parent().after(a(this)),a(this).html(b),a(this).css("position","static")):a(this).remove()})}),e.addClass("js-ellipsis"))},f=function(){var b=a(".icon-view-grid").closest("a"),c=a(".icon-view-list").closest("a"),f=function(){return"undefined"==typeof Storage?"list":localStorage.getItem("eu_portal_results_view")},g=function(a){"undefined"!=typeof Storage&&localStorage.setItem("eu_portal_results_view",a)},h=function(a){d.addClass("grid"),b.addClass("is-active"),c.removeClass("is-active"),a&&g("grid"),e()},i=function(a){d.removeClass("grid"),c.addClass("is-active"),b.removeClass("is-active"),a&&g("list")};b.on("click",function(a){a.preventDefault(),h(!0)}),c.on("click",function(a){a.preventDefault(),i(!0)}),"grid"==f()?h():i()},g=function(){a(".item-origin .external").on("click",function(){var d=a(this).attr("href");b("send",{hitType:"event",eventCategory:"Redirect",eventAction:d,eventLabel:"CTR List"}),c("GA: Redirect, Action = "+d)})},h=function(){if(f(),g(),"undefined"!=typeof Storage){var b=a(".breadcrumbs").data("store-channel-label"),c=a(".breadcrumbs").data("store-channel-name"),d=a(".breadcrumbs").data("store-channel-url");sessionStorage.eu_portal_channel_label=b,sessionStorage.eu_portal_channel_name=c,sessionStorage.eu_portal_channel_url=d}};return{initPage:function(){h()}}});