!function($){"use strict";function t(t,e){this.itemsArray=[],this.$element=$(t),this.$element.hide(),this.isSelect="SELECT"===t.tagName,this.multiple=this.isSelect&&t.hasAttribute("multiple"),this.objectItems=e&&e.itemValue,this.placeholderText=t.hasAttribute("placeholder")?this.$element.attr("placeholder"):"",this.inputSize=Math.max(1,this.placeholderText.length),this.$container=$('<div class="bootstrap-tagsinput"></div>'),this.$input=$('<input type="text" placeholder="'+this.placeholderText+'"/>').appendTo(this.$container),this.$element.after(this.$container);var n=(this.inputSize<3?3:this.inputSize)+"em";this.$input.get(0).style.cssText="width: "+n+" !important;",this.build(e)}function e(t,e){if("function"!=typeof t[e]){var n=t[e];t[e]=function(t){return t[n]}}}function n(t,e){if("function"!=typeof t[e]){var n=t[e];t[e]=function(){return n}}}function i(t){return t?s.text(t).html():""}function a(t){var e=0;if(document.selection){t.focus();var n=document.selection.createRange();n.moveStart("character",-t.value.length),e=n.text.length}else(t.selectionStart||"0"==t.selectionStart)&&(e=t.selectionStart);return e}function r(t,e){var n=!1;return $.each(e,function(e,i){if("number"==typeof i&&t.which===i)return n=!0,!1;if(t.which===i.which){var a=!i.hasOwnProperty("altKey")||t.altKey===i.altKey,r=!i.hasOwnProperty("shiftKey")||t.shiftKey===i.shiftKey,o=!i.hasOwnProperty("ctrlKey")||t.ctrlKey===i.ctrlKey;if(a&&r&&o)return n=!0,!1}}),n}var o={tagClass:function(t){return"label label-info"},itemValue:function(t){return t?t.toString():t},itemText:function(t){return this.itemValue(t)},freeInput:!0,addOnBlur:!0,maxTags:void 0,maxChars:void 0,confirmKeys:[13,44],onTagExists:function(t,e){e.hide().fadeIn()},trimValue:!1,allowDuplicates:!1};t.prototype={constructor:t,add:function(t,e){var n=this;if(!(n.options.maxTags&&n.itemsArray.length>=n.options.maxTags||t!==!1&&!t)){if("string"==typeof t&&n.options.trimValue&&(t=$.trim(t)),"object"==typeof t&&!n.objectItems)throw"Can't add objects when itemValue option is not set";if(!t.toString().match(/^\s*$/)){if(n.isSelect&&!n.multiple&&n.itemsArray.length>0&&n.remove(n.itemsArray[0]),"string"==typeof t&&"INPUT"===this.$element[0].tagName){var a=t.split(",");if(a.length>1){for(var r=0;r<a.length;r++)this.add(a[r],!0);return void(e||n.pushVal())}}var o=n.options.itemValue(t),s=n.options.itemText(t),l=n.options.tagClass(t),u=$.grep(n.itemsArray,function(t){return n.options.itemValue(t)===o})[0];if(!u||n.options.allowDuplicates){if(!(n.items().toString().length+t.length+1>n.options.maxInputLength)){var p=$.Event("beforeItemAdd",{item:t,cancel:!1});if(n.$element.trigger(p),!p.cancel){n.itemsArray.push(t);var d=$('<span class="tag '+i(l)+'">'+i(s)+'<span data-role="remove"></span></span>');if(d.data("item",t),n.findInputWrapper().before(d),d.after(" "),n.isSelect&&!$('option[value="'+encodeURIComponent(o)+'"]',n.$element)[0]){var c=$("<option selected>"+i(s)+"</option>");c.data("item",t),c.attr("value",o),n.$element.append(c)}e||n.pushVal(),(n.options.maxTags===n.itemsArray.length||n.items().toString().length===n.options.maxInputLength)&&n.$container.addClass("bootstrap-tagsinput-max"),n.$element.trigger($.Event("itemAdded",{item:t}))}}}else if(n.options.onTagExists){var h=$(".tag",n.$container).filter(function(){return $(this).data("item")===u});n.options.onTagExists(t,h)}}}},remove:function(t,e){var n=this;if(n.objectItems&&(t="object"==typeof t?$.grep(n.itemsArray,function(e){return n.options.itemValue(e)==n.options.itemValue(t)}):$.grep(n.itemsArray,function(e){return n.options.itemValue(e)==t}),t=t[t.length-1]),t){var i=$.Event("beforeItemRemove",{item:t,cancel:!1});if(n.$element.trigger(i),i.cancel)return;$(".tag",n.$container).filter(function(){return $(this).data("item")===t}).remove(),$("option",n.$element).filter(function(){return $(this).data("item")===t}).remove(),-1!==$.inArray(t,n.itemsArray)&&n.itemsArray.splice($.inArray(t,n.itemsArray),1)}e||n.pushVal(),n.options.maxTags>n.itemsArray.length&&n.$container.removeClass("bootstrap-tagsinput-max"),n.$element.trigger($.Event("itemRemoved",{item:t}))},removeAll:function(){var t=this;for($(".tag",t.$container).remove(),$("option",t.$element).remove();t.itemsArray.length>0;)t.itemsArray.pop();t.pushVal()},refresh:function(){var t=this;$(".tag",t.$container).each(function(){var e=$(this),n=e.data("item"),a=t.options.itemValue(n),r=t.options.itemText(n),o=t.options.tagClass(n);if(e.attr("class",null),e.addClass("tag "+i(o)),e.contents().filter(function(){return 3==this.nodeType})[0].nodeValue=i(r),t.isSelect){var s=$("option",t.$element).filter(function(){return $(this).data("item")===n});s.attr("value",a)}})},items:function(){return this.itemsArray},pushVal:function(){var t=this,e=$.map(t.items(),function(e){return t.options.itemValue(e).toString()});t.$element.val(e,!0).trigger("change")},build:function(t){var i=this;if(i.options=$.extend({},o,t),i.objectItems&&(i.options.freeInput=!1),e(i.options,"itemValue"),e(i.options,"itemText"),n(i.options,"tagClass"),i.options.typeahead){var s=i.options.typeahead||{};n(s,"source"),i.$input.typeahead($.extend({},s,{source:function(t,e){function n(t){for(var n=[],r=0;r<t.length;r++){var o=i.options.itemText(t[r]);a[o]=t[r],n.push(o)}e(n)}this.map={};var a=this.map,r=s.source(t);$.isFunction(r.success)?r.success(n):$.isFunction(r.then)?r.then(n):$.when(r).then(n)},updater:function(t){i.add(this.map[t])},matcher:function(t){return-1!==t.toLowerCase().indexOf(this.query.trim().toLowerCase())},sorter:function(t){return t.sort()},highlighter:function(t){var e=new RegExp("("+this.query+")","gi");return t.replace(e,"<strong>$1</strong>")}}))}if(i.options.typeaheadjs){var l=i.options.typeaheadjs||{};i.$input.typeahead(null,l).on("typeahead:selected",$.proxy(function(t,e){i.add(l.valueKey?e[l.valueKey]:e),i.$input.typeahead("val","")},i))}i.$container.on("click",$.proxy(function(t){i.$element.attr("disabled")||i.$input.removeAttr("disabled"),i.$input.focus()},i)),i.options.addOnBlur&&i.options.freeInput&&i.$input.on("focusout",$.proxy(function(t){0===$(".typeahead, .twitter-typeahead",i.$container).length&&(i.add(i.$input.val()),i.$input.val(""))},i)),i.$container.on("keydown","input",$.proxy(function(t){var e=$(t.target),n=i.findInputWrapper();if(i.$element.attr("disabled"))return void i.$input.attr("disabled","disabled");switch(t.which){case 8:if(0===a(e[0])){var r=n.prev();r&&i.remove(r.data("item"))}break;case 46:if(0===a(e[0])){var o=n.next();o&&i.remove(o.data("item"))}break;case 37:var s=n.prev();0===e.val().length&&s[0]&&(s.before(n),e.focus());break;case 39:var l=n.next();0===e.val().length&&l[0]&&(l.after(n),e.focus())}var u=e.val().length,p=Math.ceil(u/5),d=u+p+1;e.attr("size",Math.max(this.inputSize,e.val().length))},i)),i.$container.on("keypress","input",$.proxy(function(t){var e=$(t.target);if(i.$element.attr("disabled"))return void i.$input.attr("disabled","disabled");var n=e.val(),a=i.options.maxChars&&n.length>=i.options.maxChars;i.options.freeInput&&(r(t,i.options.confirmKeys)||a)&&(i.add(a?n.substr(0,i.options.maxChars):n),e.val(""),t.preventDefault());var o=e.val().length,s=Math.ceil(o/5),l=o+s+1;e.attr("size",Math.max(this.inputSize,e.val().length))},i)),i.$container.on("click","[data-role=remove]",$.proxy(function(t){i.$element.attr("disabled")||i.remove($(t.target).closest(".tag").data("item"))},i)),i.options.itemValue===o.itemValue&&("INPUT"===i.$element[0].tagName?i.add(i.$element.val()):$("option",i.$element).each(function(){i.add($(this).attr("value"),!0)}))},destroy:function(){var t=this;t.$container.off("keypress","input"),t.$container.off("click","[role=remove]"),t.$container.remove(),t.$element.removeData("tagsinput"),t.$element.show()},focus:function(){this.$input.focus()},input:function(){return this.$input},findInputWrapper:function(){for(var t=this.$input[0],e=this.$container[0];t&&t.parentNode!==e;)t=t.parentNode;return $(t)}},$.fn.tagsinput=function(e,n){var i=[];return this.each(function(){var a=$(this).data("tagsinput");if(a)if(e||n){if(void 0!==a[e]){var r=a[e](n);void 0!==r&&i.push(r)}}else i.push(a);else a=new t(this,e),$(this).data("tagsinput",a),i.push(a),"SELECT"===this.tagName&&$("option",$(this)).attr("selected","selected"),$(this).val($(this).val())}),"string"==typeof e?i.length>1?i:i[0]:i},$.fn.tagsinput.Constructor=t;var s=$("<div />");$(function(){$("input[data-role=tagsinput], select[multiple][data-role=tagsinput]").tagsinput()})}(window.jQuery),jQuery&&function(t){function e(e,a){var r=e?t(this):a,o=t(r.attr("data-dropdown")),s=r.hasClass("dropdown-open");if(e){if(t(e.target).hasClass("dropdown-ignore"))return;e.preventDefault(),e.stopPropagation()}else if(r!==a.target&&t(a.target).hasClass("dropdown-ignore"))return;n(),s||r.hasClass("dropdown-disabled")||(r.addClass("dropdown-open"),o.data("dropdown-trigger",r).show(),i(),o.trigger("show",{dropdown:o,trigger:r}))}function n(e){var n=e?t(e.target).parents().addBack():null;if(n&&n.is(".dropdown")){if(!n.is(".dropdown-menu"))return;if(!n.is("A"))return}t(document).find(".dropdown:visible").each(function(){var e=t(this);e.hide().removeData("dropdown-trigger").trigger("hide",{dropdown:e})}),t(document).find(".dropdown-open").removeClass("dropdown-open")}function i(){var e=t(".dropdown:visible").eq(0),n=e.data("dropdown-trigger"),i=n?parseInt(n.attr("data-horizontal-offset")||0,10):null,a=n?parseInt(n.attr("data-vertical-offset")||0,10):null;0!==e.length&&n&&e.css(e.hasClass("dropdown-relative")?{left:e.hasClass("dropdown-anchor-right")?n.position().left-(e.outerWidth(!0)-n.outerWidth(!0))-parseInt(n.css("margin-right"),10)+i:n.position().left+parseInt(n.css("margin-left"),10)+i,top:n.position().top+n.outerHeight(!0)-parseInt(n.css("margin-top"),10)+a}:{left:e.hasClass("dropdown-anchor-right")?n.offset().left-(e.outerWidth()-n.outerWidth())+i:n.offset().left+i,top:n.offset().top+n.outerHeight()+a})}t.extend(t.fn,{dropdown:function(i,a){switch(i){case"show":return e(null,t(this)),t(this);case"hide":return n(),t(this);case"attach":return t(this).attr("data-dropdown",a);case"detach":return n(),t(this).removeAttr("data-dropdown");case"disable":return t(this).addClass("dropdown-disabled");case"enable":return n(),t(this).removeClass("dropdown-disabled")}}}),t(document).on("click.dropdown","[data-dropdown]",e),t(document).on("click.dropdown",n),t(window).on("resize",i)}(jQuery);var Site=window.Site||{};!function($){Site.init_Filters=function(){$(".js-showhide").on("click",function(t){$(this).parent().find(".js-extrafields").toggleClass("is-jshidden"),$(this).parent().toggleClass("is-expanded"),t.preventDefault()})},$(function(){Site.init_Filters()})}(jQuery);