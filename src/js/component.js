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
    });
    
    $('.filter-list li a').click(function(){
      if($(this).parents('.filter-list').hasClass('open')) {
        $(this).parents('.filter-list').find('li').removeClass('active');
        $(this).parents('.filter-list').find('li').addClass('hide');
        $(this).parent().removeClass('hide').addClass('active');
        $(this).parents('.filter-list').removeClass('open');
      }else{
        $(this).parents('.filter-list').find('li').removeClass('hide');
        $(this).parents('.filter-list').find('li').show(200);
        $(this).parents('.filter-list').addClass('open');
      }
    })

  }

  //чтоб нормально отрабатывала карусель
  $(window).resize(function () {
    if ($('#company-carousel').hasClass('company-carousel')) {
      location.reload();
    }
  })


  $('#up_btn, .up').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
    return false;
  });
  
   $('.scroll').click(function (e) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top
    }, 1500);

  });
  
   $('.connections-list li a').click(function (e) {
    e.preventDefault();
     $('.connections-list li a').removeClass('active');
     $('.connections-tab .content').removeClass('active');
      $(''+$(this).attr('href')).addClass('active');
     $(this).addClass('active');

  });


  $('.gmap').each(function () {
    var container = this;

    var mapOptions = {
      zoom: $(container).data('zoom'),
      zoomControl: true,
      mapTypeControl: false,
      streetViewControl: false,
      scrollwheel: false, //zoom on scroll
      draggable: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(container, mapOptions);
    var geocoder = new google.maps.Geocoder();

    geocoder.geocode({
        'address': $(container).data('address')
      },
      function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          new google.maps.Marker({
            position: results[0].geometry.location,
            map: map,
            icon: $(container).data('marker')
          });
          map.setCenter(results[0].geometry.location);
        }
      }
    );

  });
  
  $('.about-question').click(function(){
    $(this).toggleClass('active');
    $(this).find('.question-content').slideToggle(200);
  })

});