$(document).ready(function() {
  $('.awesomeness_teller').on('click', function() {
    $('h2').html($(this).attr('data-heading'));
  });

  $('.skill_teller').on('click', function() {
    var skill = location.pathname.split('/').pop();

    $('h2').html(skill);
  })

  $('.meal_teller').on('click', function() {
    var i = Math.floor(Math.random()*meals.length);
    var randomMeal = meals[i];
    $('h2').html(randomMeal);
  })

});
