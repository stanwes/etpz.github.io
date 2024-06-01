$(document).ready(function(){
    $('.about-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        arrows: false,
        lazyLoad: 'progressive',
        speed: 800,
        });

        if ($(".services-slider").length) {
            $(".services-slider").slick({
              slidesToShow: 3,
              slidesToScroll: 1,
              autoplay: true,
              speed: 900,
              autoplaySpeed: 2000,
              infinite: true,
              arrows: false,
              dots: false,
              responsive: [
                {
                  breakpoint: 1025,
                  settings: {
                    slidesToShow: 2,
                  },
                },
                {
                  breakpoint: 575,
                  settings: {
                    slidesToShow: 1,
                  },
                },
              ],
            });
          }

          if ($(".product-slider").length) {
            $(".product-slider").slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              variableWidth: true,
              infinite: true,
              autoplay: false,
              dots: false,
              draggable: true,
              arrows: false,
              lazyLoad: 'progressive',
              speed: 950,
              autoplaySpeed: 2000, 
              responsive: [
                {
                  breakpoint: 576,
                  settings: {
                    centerMode: true,
                  },
                },
              ],
            });
          }

          if ($(".reviews-slider").length) {
            $(".reviews-slider").slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              variableWidth: true,
              infinite: true,
              autoplay: false,
              dots: false,
              draggable: true,
              arrows: false,
              lazyLoad: 'progressive',
              speed: 800,
              autoplaySpeed: 2000, 
              responsive: [
                {
                  breakpoint: 576,
                  settings: {
                    centerMode: true,
                  },
                },
              ],
            });
          }

          if ($(".blogs-slider").length) {
            $(".blogs-slider").slick({
              slidesToShow: 3,
              slidesToScroll: 1,
              autoplay: false,
              speed: 900,
              autoplaySpeed: 2000,
              infinite: true,
              arrows: false,
              dots: false,
              responsive: [
                {
                  breakpoint: 1025,
                  settings: {
                    slidesToShow: 2,
                  },
                },
                {
                  breakpoint: 576,
                  settings: {
                    slidesToShow: 1,
                  },
                },
              ],
            });
          }

    $('.btn-prev').click(function () {
        var $this = $(this).attr('data-slide');
        $('.' + $this).slick('slickPrev');
    });

    $('.btn-next').click(function () {
        var $this = $(this).attr('data-slide');
        $('.' + $this).slick('slickNext');
    });
});