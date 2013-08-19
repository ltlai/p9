$(document).ready(function() {
  $('.awesomeness_teller').on('click', function() {
    $('h1').html($(this).attr('data-heading'));
  });

  $('.skill_teller').on('click', function() {
    var skill = location.pathname.split('/').pop();

    $('h1').html(skill);
  })

  // What other events do you need to bind to make the other pages work?
});
