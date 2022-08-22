window.addEventListener('scroll',function(){
  var header = document.querySelector('header');
  header.classList.toggle('sticky',window.scrollY>0);
});

$("#toggle").click(function() {
  $(this).toggleClass("on");
  $("#menu").slideToggle();
});