$(document).ready(function() {
  $('.awesomeness_teller').on('click', function() {
    $('h1').html($(this).attr('data-heading'));
  });

  // What other events do you need to bind to make the other pages work?
});
