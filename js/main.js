jQuery(document).ready(function($) {

	'use strict';

      var owl = $("#owl-testimonials");

        owl.owlCarousel({
          
          pagination : true,
          paginationNumbers: false,
          autoPlay: 6000, //Set AutoPlay to 3 seconds
          items : 1, //10 items above 1000px browser width
          itemsDesktop : [1000,1], //5 items between 1000px and 901px
          itemsDesktopSmall : [900,1], // betweem 900px and 601px
          itemsTablet: [600,1], //2 items between 600 and 0
          itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
          
      });

        function getPosition(element) {
          var xPosition = 0;
          var yPosition = 0;
      
          while(element) {
              xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
              yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
              element = element.offsetParent;
          }
      
          return { 'x': xPosition, 'y': yPosition };
        }

        var top_header = $('.parallax-content');
        top_header.css({'background-position':'center center'}); // better use CSS

        $(window).scroll(function () {
        var st = $(this).scrollTop();
        top_header.css({'background-position':'center calc(50% + '+(st*.5)+'px)'});
        });


        var top_header2 = $('.parallax-content2');
        var tpheader2 = document.querySelector('.parallax-content2')

        top_header2.css({'background-position':'center center'}); // better use CSS

        $(window).scroll(function () {
        var st = $(this).scrollTop() - getPosition(tpheader2)['y'];
        top_header2.css({'background-position':'center calc(50% + '+(st*.5)+'px)'});
        });


        var top_header3 = $('.parallax-content3');
        var tpheader3 = document.querySelector('.parallax-content3')

        top_header3.css({'background-position':'center center'}); // better use CSS

        $(window).scroll(function () {
        var st = $(this).scrollTop() - getPosition(tpheader3)['y'];
        top_header3.css({'background-position':'center calc(50% + '+(st*.5)+'px)'});
        });


        var top_header4 = $('.parallax-content4');
        var tpheader4 = document.querySelector('.parallax-content4')

        top_header4.css({'background-position':'center center'}); // better use CSS

        $(window).scroll(function () {

        // console.log(tpheader4);

        var st = $(this).scrollTop() - getPosition(tpheader4)['y'];

        // console.log($(this).scrollTop());
        // console.log(getPosition(tpheader4)['y']);

        top_header4.css({'background-position':'center calc(50% + '+(st*.5)+'px)'});
        });


        $('.counter').each(function() {
          var $this = $(this),
              countTo = $this.attr('data-count');
          
          $({ countNum: $this.text()}).animate({
            countNum: countTo
          },

          {

            duration: 8000,
            easing:'linear',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
              //alert('finished');
            }

          });  
          
        });


        $('.tabgroup > div').hide();
        $('.tabgroup > div:first-of-type').show();
        $('.tabs a').click(function(e){
          e.preventDefault();
            var $this = $(this),
            tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
            others = $this.closest('li').siblings().children('a'),
            target = $this.attr('href');
        others.removeClass('active');
        $this.addClass('active');
        $(tabgroup).children('div').hide();
        $(target).show();
      
        })



        $(".pop-button").click(function () {
            $(".pop").fadeIn(300);
            
        });

        $(".pop > span").click(function () {
            $(".pop").fadeOut(300);
        });


        $(window).on("scroll", function() {
            if($(window).scrollTop() > 100) {
                $(".header").addClass("active");
            } else {
                //remove the background property so it comes transparent again (defined in your css)
               $(".header").removeClass("active");
            }
        });


	/************** Mixitup (Filter Projects) *********************/
    	$('.projects-holder').mixitup({
            effects: ['fade','grayscale'],
            easing: 'snap',
            transitionSpeed: 400
        });



});
