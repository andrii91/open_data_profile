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
});
