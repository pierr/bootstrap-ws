function registerComponents(){
  /*Register Modal*/
  $('div#modalContainer').modal({show: false});
  /*Click on the modal save button.*/
  $('div#modalContainer button[data-save]').on('click', function(event){
    var modalData = {};
    /*Parse value from the form. Not optimal.*/
    $('[data-input-modal]', 'div#modalContainer .modal').each(function(elt){
      modalData[this.id] = this.value;
      //Remove the entered values.
      this.value = null;
    });
    
    $('div#modalContainer .modal').modal("hide");
    var alertData = require('./data').alert;
    alertData.email = modalData.email;
    
    $('div#alert-container').html(require('./templates/alert')({alert:alertData}));
    console.log('message evnoyé');
  });
  /*Register help button*/
  $("button#btn-need-help").on('click', function(){
    $('div#modalContainer .modal').modal('show');
  });


}

module.exports = {
  //Initialize the application with datas.
  initialize: function(data) {

    //Render the templates inside the html page.
    $('nav#navContainer').html(require('./templates/nav')(data));
    $('div#introContainer').html(require('./templates/intro')(data));
    $('div#teamContainer').html(require('./templates/team')(data));
    $('div#technologiesContainer').html(require('./templates/technologies')(data));
    $('footer#footer').html(require('./templates/footer')(data));
    $("div#navContainer").scrollspy();
    $('div#modalContainer').html(require('./templates/modal')(data));
    
    //Button contact on the right side.
    $('body').after(require('./templates/help')(data));
    
    //Register js components.
    registerComponents();
  }
};