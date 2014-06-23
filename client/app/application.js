function registerComponents(){
  /*Register Modal*/
  $('div#modalContainer').modal({show: false});
  $('div#modalContainer button[data-save]').on('click', function(event){
    $('div#modalContainer .modal').modal("hide");
    console.log('message evnoyé');
  });
  /*Register help button*/
  $("button#btn-need-help").on('click', function(){
    $('div#modalContainer .modal').modal('show');
  });


}

module.exports = {
  initialize: function(data) {

    $('nav#navContainer').html(require('./templates/nav')(data));
    $('div#introContainer').html(require('./templates/intro')(data));
    $('div#teamContainer').html(require('./templates/team')(data));
    $('div#technologiesContainer').html(require('./templates/technologies')(data));
    $('footer#footer').html(require('./templates/footer')(data));
    $("div#navContainer").scrollspy();
    $('div#modalContainer').html(require('./templates/modal')(data));
    //Bouton help sur le coôté.
    $('body').after(require('./templates/help')(data));
    //Register events
    registerComponents();
  }
};