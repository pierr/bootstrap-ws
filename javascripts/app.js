(function(/*! Brunch !*/) {
  'use strict';

  var globals = typeof window !== 'undefined' ? window : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};

  var has = function(object, name) {
    return ({}).hasOwnProperty.call(object, name);
  };

  var expand = function(root, name) {
    var results = [], parts, part;
    if (/^\.\.?(\/|$)/.test(name)) {
      parts = [root, name].join('/').split('/');
    } else {
      parts = name.split('/');
    }
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function(name) {
      var dir = dirname(path);
      var absolute = expand(dir, name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var module = {id: name, exports: {}};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var require = function(name, loaderPath) {
    var path = expand(name, '.');
    if (loaderPath == null) loaderPath = '/';

    if (has(cache, path)) return cache[path].exports;
    if (has(modules, path)) return initModule(path, modules[path]);

    var dirIndex = expand(path, './index');
    if (has(cache, dirIndex)) return cache[dirIndex].exports;
    if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

    throw new Error('Cannot find module "' + name + '" from '+ '"' + loaderPath + '"');
  };

  var define = function(bundle, fn) {
    if (typeof bundle === 'object') {
      for (var key in bundle) {
        if (has(bundle, key)) {
          modules[key] = bundle[key];
        }
      }
    } else {
      modules[bundle] = fn;
    }
  };

  var list = function() {
    var result = [];
    for (var item in modules) {
      if (has(modules, item)) {
        result.push(item);
      }
    }
    return result;
  };

  globals.require = require;
  globals.require.define = define;
  globals.require.register = define;
  globals.require.list = list;
  globals.require.brunch = true;
})();
require.register("client/app/application", function(exports, require, module) {
module.exports = {
  initialize: function(data) {

    $('nav#navContainer').html(require('./templates/nav')(data));
    $('div#introContainer').html(require('./templates/intro')(data));
    $('div#teamContainer').html(require('./templates/team')(data));
    $('div#technologiesContainer').html(require('./templates/technologies')(data));
    $('footer#footer').html(require('./templates/footer')(data));
    $("#navContainer").scrollspy();
  }
};
});

;require.register("client/app/data", function(exports, require, module) {
module.exports = {
  projectName: "Direction technique",
  company: "Klee group",
  intro: {
    title: "DT de Klee Group",
    message: "Bienvenue sur le site de la direction technique. Nous nous occupons des elements suivants:",
    tasks: ["Veille technologique", "Assistance technique pour les avant ventes", "Développement des Frameworks de l'entreprise", "Suivi technique des projets"],
    button: "Contactez nous ...",
subTitle: "..."
  },
  sections: [{
    selector: "#introContainer",
    name: "Introduction"
  }, {
    selector: "#teamContainer",
    name: "L'équipe"
  }, {
    selector: "#technologiesContainer",
    name: "Les technos"
  }],
  contact: {
    email: "direction.technique@kleegroup.com",
    subject: "[DT] demande d'informations",
    body: "..."
  },
  teamName: "L'équipe",
  team: [{
    name: "Philippe",
    description: "DT manager",
    image: "images/philippe.png",
    technos: ["Java", "SQL"],
    twitter: "phlppchrtn"
  }, {
    name: "Nicolas",
    description: "Java specialist",
    image: "images/npiedeloup.png",
    technos: ["Java", "SQL", "CSS"],
    twitter: "NPi2Loup"
  }, {
    name: "Olivier",
    description: ".NET specialist",
    image: "images/oboitel.png",
    technos: [".NET", "SQL", "JavaScript"],
    twitter: "oboitel"
  }, {
    name: "François",
    description: "Specialist",
    image: "images/fconstantin.png",
    technos: [".NET", "SQL", "VM"],
    twitter: "archiklee"
  }, {
    name: "Frankie",
    description: "SQL",
    image: "images/flimont.png",
    technos: ["Java", "SQL"],
    twitter: "SpriteEsial"
  }, {
    name: "Pierre",
    description: "JS specialist",
    image: "images/pbesson.jpeg",
    technos: ["JavaScript", "CoffeeScript", "Node.js", "CSS"],
    twitter: "pbesson"
  }],
  technologies: {
    title: "Les technologies",
    values: [{
      name: "Java",
      image: "images/java.jpeg"
    }, {
      name: "JavaScript",
      image: "images/js.jpeg"
    }, {
      name: "html5",
      image: "images/html5.jpeg"
    }, {
      name: "CSS",
      image: "images/css.jpeg"
    }, {
      name: ".NET",
      image: "images/dotnet.jpeg"
    }, {
      name: "SQL",
      image: "images/sql.jpeg"
    }]
  }
};
});

;require.register("client/app/initialize", function(exports, require, module) {
/*jquery cors support.*/
$.support.cors = true;
$( document ).ready(function() {
  require('./application').initialize(require('./data'));
   
});

});

;require.register("client/app/templates/footer", function(exports, require, module) {
var __templateData = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "\r\n        <p>© ";
  if (helper = helpers.company) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.company); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " 2014</p>\r\n      ";
  return buffer;
  });
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("client/app/templates/home", function(exports, require, module) {
var __templateData = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "accueil.";
  });
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("client/app/templates/intro", function(exports, require, module) {
var __templateData = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "";
  buffer += "<li class=\"list-group-item\">"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "<span class=\"glyphicon glyphicon-star badge\">&nbsp</span></li>";
  return buffer;
  }

  buffer += "<div class=\"\">\r\n  <div class=\"container\">\r\n    <div class=\"page-header\">\r\n      <h1>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.intro)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "  <small>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.intro)),stack1 == null || stack1 === false ? stack1 : stack1.subTitle)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</small></h1>\r\n    </div>\r\n    \r\n    <p>\r\n      "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.intro)),stack1 == null || stack1 === false ? stack1 : stack1.message)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n      <ul class=\"list-group\">";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.intro)),stack1 == null || stack1 === false ? stack1 : stack1.tasks), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</ul>\r\n    </p>\r\n    <p><a href=\"mailto:"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.contact)),stack1 == null || stack1 === false ? stack1 : stack1.email)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "?subject="
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.contact)),stack1 == null || stack1 === false ? stack1 : stack1.subject)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "&amp;body="
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.contact)),stack1 == null || stack1 === false ? stack1 : stack1.body)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"btn btn-primary btn-lg\" role=\"button\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.intro)),stack1 == null || stack1 === false ? stack1 : stack1.button)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></p>\r\n  </div>\r\n</div>";
  return buffer;
  });
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("client/app/templates/nav", function(exports, require, module) {
var __templateData = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n              <li ><a href=\"";
  if (helper = helpers.selector) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.selector); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></li>\r\n            ";
  return buffer;
  }

  buffer += "<div class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\r\n      <div class=\"container\">\r\n        <div class=\"navbar-header\">\r\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\r\n            <span class=\"sr-only\">Toggle navigation</span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n          </button>\r\n          <a class=\"navbar-brand\" href=\"#\">";
  if (helper = helpers.projectName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.projectName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\">\r\n          <ul class=\"nav navbar-nav\">\r\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.sections), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n          </ul>\r\n        </div>\r\n       <!--/.navbar-collapse -->\r\n      </div>\r\n    </div>";
  return buffer;
  });
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("client/app/templates/team", function(exports, require, module) {
var __templateData = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n        <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-2 team-item\">\r\n          \r\n          <img class=\"img-circle\" data-src=\"holder.js/140x140\" alt=\"140x140\" src=\"";
  if (helper = helpers.image) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.image); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" style=\"width: 140px; height: 140px;\">\r\n          <h2>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h2>\r\n          \r\n          <p>\r\n            ";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "<br/>\r\n            <a href=\"https://twitter.com/";
  if (helper = helpers.twitter) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.twitter); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><b>@";
  if (helper = helpers.twitter) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.twitter); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</b></a>\r\n          </p>\r\n          \r\n          <div class=\"btn-group\">\r\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.technos), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "   \r\n          </div>\r\n        </div>\r\n        ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "";
  buffer += "<kbd>"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</kbd>&nbsp";
  return buffer;
  }

  buffer += "<div class=\"container team\">\r\n      <!-- Example row of columns -->\r\n      <h2>";
  if (helper = helpers.teamName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.teamName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h2>\r\n      <hr />\r\n      <div class=\"row\">\r\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.team), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n      </div>\r\n\r\n      <hr>\r\n</div>\r\n";
  return buffer;
  });
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("client/app/templates/technologies", function(exports, require, module) {
var __templateData = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n          <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-2 techo-item\">\r\n            \r\n            <img class=\"img-thumbnail\" data-src=\"holder.js/140x140\" alt=\"140x140\" src=\"";
  if (helper = helpers.image) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.image); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" style=\"width: 140px; height: 140px;\">          \r\n            <br/><br/>\r\n            <kbd>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</kbd>\r\n              \r\n          </div>\r\n        ";
  return buffer;
  }

  buffer += "<div class=\"container techno\">\r\n      <!-- Example row of columns -->\r\n      <h2>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.technologies)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h2>\r\n      <hr />\r\n      <div class=\"row\">\r\n        ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.technologies)),stack1 == null || stack1 === false ? stack1 : stack1.values), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n      </div>\r\n</div>\r\n";
  return buffer;
  });
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;