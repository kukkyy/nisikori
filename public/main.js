function slideSwitch() {
   var $active = $('#slideshow img.active');

   if ( $active.length == 0 ) $active = $('#slideshow img:last');

   var $next =  $active.next().length ? $active.next()
      : $('#slideshow img:first');

   $active.addClass('last-active');

   $next.css({opacity: 0.0})
      .addClass('active')
      .animate({opacity: 1.0}, 1000, function() {
          $active.removeClass('active last-active');
      });
}

$(function() {
   setInterval( "slideSwitch()", 4000 );

   $("nav ul li").hover(function() {
      $(this).children().css({"color": "lightgreen"});
   },function() {
      $(this).children().css({"color": ""});
   });

   $(".newsB a").hover(function() {
      $(this).find(".text p:first-child").css({"color": "#0f5"});
   },function() {
      $(this).find(".text p:first-child").css({"color": ""});
   });
});

