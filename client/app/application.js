module.exports = {
  initialize: function(data) {

    $('nav#navContainer').html(require('./templates/nav')(data));
    $('div#introContainer').html(require('./templates/intro')(data));
    $('div#teamContainer').html(require('./templates/team')(data));
    $('div#technologiesContainer').html(require('./templates/technologies')(data));
    $('footer#footer').html(require('./templates/footer')(data));
  }
};