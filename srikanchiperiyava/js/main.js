jQuery(function ($) {

    $(".sidebar-dropdown > a").click(function() {
        $(".sidebar-submenu").slideUp(200);
        if (
            $(this)
            .parent()
            .hasClass("active")
        ) {
            $(".sidebar-dropdown").removeClass("active");
            $(this)
            .parent()
            .removeClass("active");
        } else {
            $(".sidebar-dropdown").removeClass("active");
            $(this)
            .next(".sidebar-submenu")
            .slideDown(200);
            $(this)
            .parent()
            .addClass("active");
        }
    });

    $("#close-sidebar").click(function() {
        $("body").removeClass("toggled");
    });
    $("#show-sidebar").click(function() {
        if(!$("body").hasClass("toggled"))
            $("body").addClass("toggled");
            else
            $("body").removeClass("toggled");
    });
    $(".scrollable-h-slick").slick({
        centerMode: true,
        centerPadding: "40px",
        dots: false,
        slidesToShow: 1,
        infinite: true,
        arrows: false,
        lazyLoad: "ondemand",
        autoplay:true,
        autoplaySpeed:5000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              centerMode: false
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });
    $(".testimonial-reel").slick({
        centerMode: true,
        centerPadding: "40px",
        dots: false,
        slidesToShow: 3,
        infinite: true,
        arrows: false,
        lazyLoad: "ondemand",
        autoplay:true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              centerMode: false
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });
});