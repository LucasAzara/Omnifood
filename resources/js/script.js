$(document).ready(function(){

    /* Used for Sticky Navegation */
   $('.js--section-features').waypoint(function(direction){
       if(direction == 'down'){
            $('nav').addClass('sticky');
       } else {
            $('nav').removeClass('sticky');
       }
   },{
       offset: '25%'
       /* Offset is when to activate it when it is 25% close to the section */
   })

   /* Scroll on Buttons */
   $('.js--scroll-to-plans').click(function(){
       $('html, body').animate({scrollTop: $('.js--section-plans').offset().top-80}, 1000)
       /* html, body is going to animate to section plans in 1 second */
       /* research animate jquery    */
   })

   $('.js--scroll-to-start').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top-80}, 1000)
        /* html, body is going to animate to section plans in 1 second */
        /* research animate jquery    */
    })
    
    /* Smooth Scrolling */

    $(function(){
        $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname
            ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                scrollTop: target.offset().top-80
                }, 1000, function() {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                } else {
                    $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                };
                });
            }
            }
        });
    })

    /* Animate on Scroll */

    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeIn');
    },{
        offset: '50%'
         /* Offset is when to activate it when it is 25% close to the section */
    })

    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated fadeInUp');
    },{
        offset: '50%'
        /* Offset is when to activate it when it is 25% close to the section */
    })

    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated fadeIn');
    },{
        offset: '50%'
        /* Offset is when to activate it when it is 25% close to the section */
    })

    $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animated pulse');
    },{
        offset: '50%'
        /* Offset is when to activate it when it is 25% close to the section */
    })

    /* Mobile Nav */

    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');// if the function you are going to use doesnt identify if it is a class or id put a # or . in front of it
        var icon = $('.js--nav-icon i'); // works just like css

        nav.slideToggle(200);
        if(icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        }else{
            icon.removeClass('ion-close-round');
            icon.addClass('ion-navicon-round');
        }

    })

    

})  