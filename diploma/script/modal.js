$('.modal-overlay').on('click', function(e){
if($(e.target).closest('.modal').length ==0){
    $(this).fadeOut()
}
})
$('.close').on('click', function(){
    $(this).parents('.modal-overlay').fadeOut();
})
$('#modal-button').on('click', function(){
  $('.modal-overlay').fadeIn();
})