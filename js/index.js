
$(document).ready(function() {



$(".hamburger").click(function() {
  $(this).hide();
  $('.cross').show();
  $(".menu").slideToggle();
});
$(".cross").click(function() {
  $(this).hide();
  $('.hamburger').show();
  $(".menu").slideToggle();

});
