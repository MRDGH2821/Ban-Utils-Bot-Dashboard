alert('commands.js executed');

$('.categories li').on('click', function() {
  $('.categories li').removeClass('active');
  $('this').addClass('active');
});
