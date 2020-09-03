$(window).on("scroll", function() {
  var scrollHeight = $(document).height();
  var scrollPos = $(window).height() + $(window).scrollTop();
  if(((scrollHeight - 100) >= scrollPos) / scrollHeight == 0){
    $('.load-more-villagers').click();
    console.log("bottom!");
  }
});
