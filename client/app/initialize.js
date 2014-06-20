/*jquery cors support.*/
$.support.cors = true;
$( document ).ready(function() {
  require('./application').initialize(require('./data'));
   
});
