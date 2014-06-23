bootstrap-ws
============

Bootstrap workshop.

## Hiérarchie des sources

- **README.md** contient les infos pour démarrer le projet.
- Les fichiers à la racines sont les fichiers de configuration des outils utilisés (package.json, bower.json et config.coffee).
- Le code de l'application se situe dans le répertoire client.

### Structure du répertoire client


#### app

Voici la structure du répertoire app.
##### templates

Contient les templates des pages (afin de rendre un peu dynamique le site par défaut.
- **nav.hbs** le menu du site.
- **intro.hbs** l'introduction
- **team.hbs** L'équipe que vous souhaitez décrire.
- **technologies.hbs** Les technologies que vous manipulez.

##### data.js
Contient l'ensemble des données à afficher dans la page.

## Wiki

Un wiki est disponible pour ce projet: [wiki](https://github.com/pierr/bootstrap-ws/wiki)

## Comment utiliser le projet

- Installer [Node.js](http://nodejs.org)
- Depuis le terminal: lancer les commandes suivantes: `npm install -g brunch bower`
- Depuis le terminal, cloner le repository git: `git clone https://github.com/pierr/bootstrap-ws.git`
- Se rendre dans le répertoire du projet: `cd $bootstrap-wsPath` et lancer les commandes suivantes `npm install` et `bower install`
- Lancer le watcher et le serveur [brunch](http://brunch.io) : `brunch w --server`
