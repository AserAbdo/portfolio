$(window).on("load", function () {

    "use strict";

    //Clear URL On Page Refresh
    var loc = window.location.href,
        index = loc.indexOf('#');

    if (index > 0) {
        window.location = loc.substring(0, index);
    }

    /* ===================================
        Page Piling
    ====================================== */
    if($(window).width() < 1280) {
        $('.pagedata').removeAttr('id');
        $('html, body').css('overflow-y', 'scroll');

    }
    else{
        $('#pagepiling').pagepiling({
            direction: 'vertical',
            sectionsColor: ['#171717', '#171717', '#171717',  '#171717', '#171717'],
            anchors: ['home', 'about', 'projects', 'certifications',  'contact'],
            scrollingSpeed: 500,
            easing: 'linear',
            loopBottom: false,
            loopTop: false,
            css3: true,
            navigation: {
                'bulletsColor': '#535353',
                'position': 'right',
                'tooltips': ['Home', 'About', 'Projects', 'Certifications', 'Contact'],
            },
            //events
            onLeave: function (index, nextIndex, direction) {
                //reaching our First section? The one with our normal site?

                $('.navbar-top-default').fadeOut();
                $('.slider-footer').fadeOut();
                $('.slider-copyright').fadeOut();

                if (nextIndex == 1) {
                    $('#pp-nav').fadeOut();
                }
                //leaving our last section? The one with our normal site?
                if (index == 1) {
                    $('#pp-nav').fadeIn();
                }

                if(nextIndex == 1 || nextIndex == 2 || nextIndex == 3 || nextIndex == 4 || nextIndex == 5 || nextIndex == 6 || nextIndex == 7 || nextIndex == 8 || nextIndex == 9 || nextIndex == 10){
                    setTimeout(function(){
                        $('.navbar-top-default').fadeIn();
                        $('.slider-footer').fadeIn();
                        $('.slider-copyright').fadeIn();
                    }, 600);

                }
            },
            afterLoad: function (anchorLink, index) {
            },
            afterRender: function () {
                $('#pp-nav').hide();
            },
        });
    }

    /* ===================================
               Loading Timeout
        ====================================== */

    $('.side-menu').removeClass('hidden');

    setTimeout(function(){
        $('.loader-bg').fadeToggle();

    }, 1500);

    // $('.navbar-collapse .navbar-nav .nav-link:nth-child(1)').addClass('active');
    $('.navbar-collapse .navbar-nav .nav-link:nth-child(2)').removeClass('active');
});

jQuery(function ($) {

    "use strict";

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 260) { // Set position from top to add class
            $('header').addClass('header-appear');
        }
        else {
            $('header').removeClass('header-appear');
        }
    });

    //scroll to appear
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 500)
            $('.scroll-top-arrow').fadeIn('slow');
        else
            $('.scroll-top-arrow').fadeOut('slow');
    });

    //Click event to scroll to top
    $(document).on('click', '.scroll-top-arrow', function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

    $(".scroll").on("click", function (event) {
        event.preventDefault();
        $("html,body").animate({
            scrollTop: $(this.hash).offset().top - 60}, 1200);
    });

    $(".slider-btn").on("click", function (event) {
        event.preventDefault();
        $("html,body").animate({
            scrollTop: $(this.hash).offset().top - 60}, 1200);
    });


});