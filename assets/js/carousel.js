// smooth scroller
$(window).load(function(){
  $("nav").sticky({ topSpacing: 0 });
});

$('a[href*="#"]:not([href="#"])').click(function() {
if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
var target = $(this.hash);
target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
if (target.length) {
  $('html, body').animate({
    scrollTop: target.offset().top
  }, 1000);
  return false;
}
}
});

// carousel for projects
carousel = (function() {
  var box = $('.carousel');
  var next = $('.next');
  var prev = $('.prev');
  var items = $('.projects li');
  var counter = 0;
  var amount = items.length;
  var current = $('.current');

  box.addClass('active');

  function navigate(direction) {
    $(current).removeClass('current');
    counter = counter + direction;

    if (direction === -1 && counter < 0) {
      counter = amount - 1;
    } else if (direction === 1 && !items[counter]) {
      counter = 0;
    }

    current = items[counter];
    $(current).addClass('current');
  };


  next.on('click', function(){
    navigate(1);
  });
  prev.on('click', function() {
    navigate(-1);
  });
  navigate(0);
})();
