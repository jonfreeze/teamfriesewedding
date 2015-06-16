$(function(){

  $('.navbar-default .navbar-nav>li>a').click(function(){
    event.preventDefault();

    var destination = $(this).attr('href');

    $.scrollTo(destination, 500)
  });

//  Modals
  $('.launchModal').click(function(){
    $('body').addClass('modal-on');
      $('.modal').fadeIn(300);
  });

  $('.close').click(function(){
    $('body').removeClass('modal-on');
      $('.modal').hide();

  $('.modal-wrapper').click(function(){
    $('body').removeClass('modal-on');
  });

  $('.modal').click(function(event){
    event.stopPropagation();
  });
});

  // Scroll below Navbar Transparency
  $(window).scroll(function() { 
  var scroll = $(window).scrollTop();

    if (scroll >= 700) {
        $(".scroll-top").removeClass("transparent");
    } else {
        $(".scroll-top").addClass("transparent");
    }
  });
});

// Loads Masonry after all page loads
$(function(){
    $(window).load(function(){
        $('.scroll-top').scrollTop();
    });
});

$(function() {
    $('body').vegas({
        slides: [
            { src: '../images/bg.jpg' },
            { src: '../images/bg2.jpg' }
        ]
    });
});

// Countdown Clock
function wedClock() {
  var clock = document.getElementById("countdown-holder"),
    targetDate = new Date(2015, 07, 02);

    clock.innerHTML = countdown(targetDate).toString();
      setInterval(function(){
        clock.innerHTML = countdown(targetDate).toString();
      }, 1000)
}
