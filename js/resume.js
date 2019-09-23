(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav',
    offset: 50
  });



  $(function() {
    $('[data-toggle="tooltip"]').tooltip()
  })

  // Detech dark mode preferences
  function darkmode() {

    /* Set the matchMedia */
    if (!window.matchMedia) {
      return false;
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      /* Changes when we reach the min-width  */
      $('#sideNav').removeClass('navbar-light');
      $('#sideNav').addClass('navbar-dark');

      $('.bg-primary-light').addClass('bg-primary-dark');
      $('.bg-primary-light').removeClass('bg-primary-light');

      $('.text-primary-light').addClass('text-primary-dark');
      $('.text-primary-light').removeClass('text-primary-light');

      $('.button-light').addClass('button-dark');
      $('.button-light').removeClass('button-light');
    }
  }

  /* Call the function */
  darkmode();
  /* Attach the function to the resize event listener */
  window.addEventListener('darkmode', darkmode, false);

  // Show name in navigation if scroll out of about page
  function isVisibleInViewport(elem) {
    var y = elem.offsetTop;
    var height = elem.offsetHeight;

    while (elem = elem.offsetParent)
      y += elem.offsetTop;

    var maxHeight = y + height;
    var isVisible = (y < (window.pageYOffset + window.innerHeight)) && (maxHeight >= window.pageYOffset);
    return isVisible;

  }

  if ($('#about').length > 0) {
    $(window).scroll(function() {
      var canvas = document.getElementById('about');
      if (isVisibleInViewport(canvas)) {
        $('.nav-title').addClass('d-lg-none');
        $('.nav-title').removeClass('d-lg-block');
      } else {
        $('.nav-title').removeClass('d-lg-none');
        $('.nav-title').addClass('d-lg-block');
      }
    });
  } else {
    $('.nav-title').removeClass('d-lg-none');
    $('.nav-title').addClass('d-lg-block');
  }


})(jQuery); // End of use strict
