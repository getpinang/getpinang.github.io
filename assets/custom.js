/*
------------------------------------------------------------------------
* Template Name    : Bueno | Responsive Bootstrap 4 Landing Template  * 
* Author           : Osama-Bakri                                      *
* Version          : 1.0.0                                            *
* Created          : July 2018                                        *
* File Description : Main Js file of the template                     *
*-----------------------------------------------------------------------
*/

/*global WOW, window, jQuery */

(function ($) {

    'use strict';

    // ==== wow animation ==== //
    new WOW().init();

    // ==== Loading Page ==== //
	$(window).on('load', function () {
        $('body .loading-screen').fadeOut(1000);
        $('html').css('overflow-y', 'visible');
    });

    // ==== scroll to top ==== //
	$(window).on('beforeunload', function () {
        $(window).scrollTop(0);
	});

    // ==== Scrolled NavBar ==== //
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 5) {
            $('nav').addClass('scroll');
        } else {
            $('nav').removeClass('scroll');
        }
    });

    /* ==== Back To Top ==== */
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 5) {
            $('.b-top').addClass('show');
        } else {
            $('.b-top').removeClass('show');
        }
    });

    $('#back-top').each(function () {
        $(this).on('click', function () {
            $('html,body').animate({
                scrollTop: 0
            }, 'slow');
            return false;
        });
    });

    // ==== Smooth Scroll ==== //
    $(".navbar-nav a").on('click', function () {
        $('html, body').animate({
        // Scroll To " Element Which Has The Same id "
            scrollTop: $('#' + $(this).data('target')).offset().top - 5
        }, 2000);
        return false;
    });

    // ==== Contact Form Details Buttons ==== //
    $('.contact .details .item button').on('click', function () {
        $(this).toggleClass('show');
        return false;
    });
    
}(jQuery));