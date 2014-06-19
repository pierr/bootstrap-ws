exports.config =
  sourceMaps: false
  paths:
    watched:['client']
  files:
    javascripts:
      joinTo:
        'javascripts/app.js': /^client(\/|\\)app/
        'javascripts/vendor.js': /^(bower_components|(client(\/|\\)vendor))/
    stylesheets:
      joinTo: 'stylesheets/app.css'
    templates:
      default: 'hbs'
      joinTo: 'javascripts/app.js'