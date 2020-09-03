$(function(){
  $('#youtube').YTPlayer();
  $('.list li').hover(function(){
    $("ul:not(:animated)", this).slideDown();
  }, function(){
      $("ul.list_menu",this).slideUp();
  });
});