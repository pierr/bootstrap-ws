module.exports = {
  projectName: "Direction technique",
  company: "Klee group",
  //Contenu des slides d'intro.
  intro: {
    title: "DT de Klee Group",
    message: "Bienvenue sur le site de la direction technique. Nous nous occupons des elements suivants:",
    tasks: ["Veille technologique", "Assistance technique pour les avant ventes", "Développement des Frameworks de l'entreprise", "Suivi technique des projets"],
    button: "Contactez nous ...",
    subTitle: "..."
  },
  //Contenu de la bar de navigation.
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
  //Contanu de la partie équipe.
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
    description: "SQL specialist",
    image: "images/flimont.png",
    technos: ["Java", "SQL"],
    twitter: "SpriteEsial"
  }, {
    name: "Pierre",
    description: "JS specialist",
    image: "images/pbesson.jpeg",
    technos: ["JavaScript", ".NET", "CSS"],
    twitter: "pierrebesson"
  }],
  //Contenu de la partie technologies.
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
  },
  //Contenu de la fenêtre modale.
  modal: {
    title: "Prise de contact avec la DT",
    body: "Prenez contact avec nous....",
    close: "Annuler",
    save: "Envoyer"
  },
  //Contenu de la fenêtre de succès.
  alert: {
    type: "info",
    title: "Merci.",
    message: "Nous prendrons contact avec vous le plus rapidement possible."
  }
};
