$(document).ready(function(){



  $('#mobile-menu').meanmenu({
    meanMenuContainer: '.mobile-menu-active',
    meanScreenWidth: "991",
    meanMenuCloseSize: "16px",
    meanRevealPositionDistance: "",
    meanDisplay: "block"
  });
  // ------------------------elevate zoom

    // ---------------------- Magnific Popup
    $('.popup-img').magnificPopup({
      type: 'image'
      // other options
    });


  // ---------------------------



  // ---------------------------
  $('#shishir').onePageNav({
    currentClass: 'active',
    changeHash: false,
    scrollSpeed: 250,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing',
    begin: function() {
      //I get fired when the animation is starting
    },
    end: function() {
      //I get fired when the animation is ending
    },
    scrollChange: function($currentListItem) {
      //I get fired when you enter a section and I pass the list item of the section
    }
  });


  // -----------------

  $('.fact-counter').counterUp({
    delay: 10,
    time: 1000
});


  // ---------------
  $('.testimonials-wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    dots: true,
    responsive: [

      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }

    ]

  });


  // -----------------

  $(window).on('scroll',function() {    
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
     $(".sticky").removeClass("scroll-header");
    }else{
     $(".sticky").addClass("scroll-header");
    }
   });
  //  ------------------



  $('#bar1').barfiller({ barColor: 'linear-gradient(to left, #F62E6C , #863456)'});

  $('#bar2').barfiller({ barColor: 'linear-gradient(to left, #F62E6C , #863456)'});

  $('#bar3').barfiller({ barColor: 'linear-gradient(to left, #F62E6C , #863456)'});



  $('#bar4').barfiller({ barColor: 'linear-gradient(to left, #F62E6C , #863456)'});
  $('#bar5').barfiller({ barColor: 'linear-gradient(to left, #F62E6C , #863456)'});
  $('#bar6').barfiller({ barColor: 'linear-gradient(to left, #F62E6C , #863456)'});
  
});



new WOW().init();