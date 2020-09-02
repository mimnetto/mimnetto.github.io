//Infinite scroll
$(window).on("scroll", function() {
  const scrollHeight = $(document).height();
  const scrollPos = $(window).height() + $(window).scrollTop();
  if(((scrollHeight - 100) >= scrollPos) / scrollHeight == 0){
    $('.load-more-villagers').click();
    console.log("bottom!");
  }
});
