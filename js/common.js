$(window).load(function() {
  $(".menu").on("click", function() {
  $(this).children("ul").slideToggle();
  });
});
