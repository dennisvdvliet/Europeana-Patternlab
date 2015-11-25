/*
 * jQuery dropdown: A simple dropdown plugin
 *
 * Copyright A Beautiful Site, LLC. (http://www.abeautifulsite.net/)
 *
 * Licensed under the MIT license: http://opensource.org/licenses/MIT
 *
*/
if (jQuery) (function ($) {

    $.extend($.fn, {
        dropdown: function (method, data) {

            switch (method) {
                case 'show':
                    show(null, $(this));
                    return $(this);
                case 'hide':
                    hide();
                    return $(this);
                case 'attach':
                    return $(this).attr('data-dropdown', data);
                case 'detach':
                    hide();
                    return $(this).removeAttr('data-dropdown');
                case 'disable':
                    return $(this).addClass('dropdown-disabled');
                case 'enable':
                    hide();
                    return $(this).removeClass('dropdown-disabled');
            }

        }
    });

    function show(event, object) {

        var trigger = event ? $(this) : object,
			dropdown = $(trigger.attr('data-dropdown')),
			isOpen = trigger.hasClass('dropdown-open');

        // In some cases we don't want to show it
        if (event) {
            if ($(event.target).hasClass('dropdown-ignore')) return;

            event.preventDefault();
            event.stopPropagation();
        } else {
            if (trigger !== object.target && $(object.target).hasClass('dropdown-ignore')) return;
        }
        hide();

        if (isOpen || trigger.hasClass('dropdown-disabled')) return;

        // Show it
        trigger.addClass('dropdown-open');
        dropdown
			.data('dropdown-trigger', trigger)
			.show();

        // Position it
        position();

        // Trigger the show callback
        dropdown
			.trigger('show', {
				dropdown: dropdown,
				trigger: trigger
			});

    }

    function hide(event) {

        // In some cases we don't hide them
        var targetGroup = event ? $(event.target).parents().addBack() : null;

        // Are we clicking anywhere in a dropdown?
        if (targetGroup && targetGroup.is('.dropdown')) {
            // Is it a dropdown menu?
            if (targetGroup.is('.dropdown-menu')) {
                // Did we click on an option? If so close it.
                if (!targetGroup.is('A')) return;
            } else {
                // Nope, it's a panel. Leave it open.
                return;
            }
        }

        // Hide any dropdown that may be showing
        $(document).find('.dropdown:visible').each(function () {
            var dropdown = $(this);
            dropdown
				.hide()
				.removeData('dropdown-trigger')
				.trigger('hide', { dropdown: dropdown });
        });

        // Remove all dropdown-open classes
        $(document).find('.dropdown-open').removeClass('dropdown-open');

    }

    function position() {

        var dropdown = $('.dropdown:visible').eq(0),
			trigger = dropdown.data('dropdown-trigger'),
			hOffset = trigger ? parseInt(trigger.attr('data-horizontal-offset') || 0, 10) : null,
			vOffset = trigger ? parseInt(trigger.attr('data-vertical-offset') || 0, 10) : null;

        if (dropdown.length === 0 || !trigger) return;

        // Position the dropdown relative-to-parent...
        if (dropdown.hasClass('dropdown-relative')) {
            dropdown.css({
                left: dropdown.hasClass('dropdown-anchor-right') ?
					trigger.position().left - (dropdown.outerWidth(true) - trigger.outerWidth(true)) - parseInt(trigger.css('margin-right'), 10) + hOffset :
					trigger.position().left + parseInt(trigger.css('margin-left'), 10) + hOffset,
                top: trigger.position().top + trigger.outerHeight(true) - parseInt(trigger.css('margin-top'), 10) + vOffset
            });
        } else {
            // ...or relative to document
            dropdown.css({
                left: dropdown.hasClass('dropdown-anchor-right') ?
					trigger.offset().left - (dropdown.outerWidth() - trigger.outerWidth()) + hOffset : trigger.offset().left + hOffset,
                top: trigger.offset().top + trigger.outerHeight() + vOffset
            });
        }
    }

    $(document).on('click.dropdown', '[data-dropdown]', show);
    $(document).on('click.dropdown', hide);
    $(window).on('resize', position);

})(jQuery);

//
// Site specific js file - Search site
//


/* Namespace for the site */
var Site = window.Site || {};

/* Create a closure to maintain scope of the '$'
   and remain compatible with other frameworks.  */
(function($) {

    // Initialise the show/hide panel functionality - cross site
    Site.init_showhide = function(){

		$('.js-showhide').on('click', function(event){

		  var self = $(this);
		  var parent = $(this).parent();
		  parent.find(".js-showhide-panel").toggleClass("is-jshidden");  // apply the toggle to the ul
		  parent.toggleClass('is-expanded');

		  // Swap the text for the value in data-text-original and back again
		  if (self.text() === self.data("text-swap")) {
		    self.text(self.data("text-original"));
		  } else {
		    self.data("text-original", self.text());
		    self.text(self.data("text-swap"));
		  }

		  event.preventDefault();
		});

    };

    Site.init_accordion_tabs = function(){

		$('.accordion-tabs').each(function() {
			$(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
		});

		$('.accordion-tabs').on('click', 'li > a', function(event) {
			if (!$(this).hasClass('is-active')) {

				var accordionTabs = $(this).closest('.accordion-tabs');
				accordionTabs.find('.is-open').removeClass('is-open').hide();

				$(this).next().toggleClass('is-open').toggle();
				accordionTabs.find('.is-active').removeClass('is-active');
				$(this).addClass('is-active');
			}

			event.preventDefault();
		});

    };

    Site.init_hitarea = function(){
		$('.js-hitarea').on('click', function(event) {
			if (event.target === this) {
				$(this).find("input").focus();
			}
			event.preventDefault();
		});
    };

    // Initialise the sticky sidebar navigation - cross site
    Site.init_stickynav = function(){

        if($(window).width() > 800){

            var footerheight = $(".footer").outerHeight( true ) + 75;

            $(".js-sticky").sticky({
                topSpacing:100,
                bottomSpacing: footerheight,
                responsiveWidth: true,
                getWidthFrom: ".js-getstickywidth"
            });
        }

    };



    //same as $(document).ready();
    $(function() {
    	Site.init_showhide();
    	Site.init_accordion_tabs();
    	Site.init_hitarea();
    	Site.init_stickynav();
    });
})(jQuery);

