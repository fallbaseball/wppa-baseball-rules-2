$(function(){
  $('#all').click(function(){
    $('.item').show();
    return false;
  });
  
  $('#rookie').click(function(){
    $('.item').show();
    $('.item').not('.rookie').hide();
    return false;
  });
  
  $('#junior').click(function(){
    $('.item').show();
    $('.item').not('.junior').hide();
    return false;
  });
  
  $('#singles').click(function(){
    $('.item').show();
    $('.item').not('.single').hide();
    return false;
  });
});