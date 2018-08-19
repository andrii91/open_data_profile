$(document).ready(function () {
  $('.articles-carousel').owlCarousel({
    loop: false,
    margin: 30,
    nav: true,
    dots: false,
    responsive: {
      0: {
        loop: true,
        items: 1
      },
      800: {
        items: 3
      }
    }
  })

  if ($(window).width() < 1200) {
    var companyCarousel = $('.company-carousel');
    companyCarousel.addClass('owl-carousel owl-theme');
    companyCarousel.owlCarousel({
      loop: true,
      margin: 15,
      nav: true,
      dots: false,
      center: true,
      responsive: {
        0: {
          loop: true,
          items: 2
        },
        800: {
          items: 3
        }
      }
    });

    var coutnCity = 20,
      countActive = 0,
      countItem = $('.city-item').length;
    $('.city-item').addClass('hidden');

    $('.city-item').each(function () {
      if (coutnCity == countActive) {
        return false;
      }
      $(this).removeClass('hidden');
      countActive++;
    });

    $('#more-city').click(function (e) {
      e.preventDefault();

      coutnCity = coutnCity + 20;
      if ($('.city-item').hasClass('hidden')) {
        $('.city-item.hidden').each(function () {
          if (coutnCity == countActive) {
            return false;
          }
          $(this).removeClass('hidden');
          countActive++;

        });

      } else {
        $('#more-city').hide();
      }
    })
  }
  
  //чтоб нормально отрабатывала карусель
  $(window).resize(function(){
    if($('#company-carousel').hasClass('company-carousel')) {
      location.reload();
    }
  })


});
