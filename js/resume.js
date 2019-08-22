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
    target: '#sideNav'
  });



  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
  
  function isVisibleInViewport(elem)
{
    var y = elem.offsetTop;
    var height = elem.offsetHeight;

    while ( elem = elem.offsetParent )
        y += elem.offsetTop;

    var maxHeight = y + height;
    var isVisible = ( y < ( window.pageYOffset + window.innerHeight ) ) && ( maxHeight >= window.pageYOffset );
    return isVisible; 

}
  
  if($('#about').length > 0) {
	  $(window).scroll(function() {
		  var canvas = document.getElementById('about');
		  if(isVisibleInViewport(canvas)) {
			  $('.nav-title').addClass('d-sm-none');
			  $('.nav-title').removeClass('d-sm-block');
		  }
		  else {
			  $('.nav-title').removeClass('d-sm-none');
			  $('.nav-title').addClass('d-sm-block');
		  }
	  });
  }
  else {
	  $('.nav-title').removeClass('d-sm-none');
	  $('.nav-title').addClass('d-sm-block');
  }


})(jQuery); // End of use strict
