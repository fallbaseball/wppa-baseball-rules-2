$(function(){
  $('#all').click(function(){
    $('.item').show();
    return false;
  });
  
  $('#music').click(function(){
    $('.item').show();
    $('.item').not('.music').hide();
    return false;
  });
  
  $('#videos').click(function(){
    $('.item').show();
    $('.item').not('.video').hide();
    return false;
  });
  
  $('#singles').click(function(){
    $('.item').show();
    $('.item').not('.single').hide();
    return false;
  });
});