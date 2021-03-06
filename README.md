bootstrap-ws
============

[Bootstrap workshop](http://pierr.github.io/bootstrap-ws/).

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

##### styles

Les feuilles css et [less](http://lesscss.org/) de l'application.
Il y a une feuille par template.

##### data.js
Contient l'ensemble des données à afficher dans la page.

#### assets
Contient l'ensemble des ressources statiques de l'application (images, polices).

#### vendor
Contient l'ensemble des dépendances non installées avec [bower](bower.io)

### Le répertoire _public_
Le répertoire **public** contient les sources _compilées_: on a don un fichier `index.html`, deux fichiers js : `app.js` et `vendor.js` et les ressources statiques.


## Wiki

Un wiki est disponible pour ce projet: [wiki](https://github.com/pierr/bootstrap-ws/wiki)

## Comment utiliser le projet

- Installer [Node.js](http://nodejs.org)
- Depuis le terminal: lancer les commandes suivantes: `npm install -g brunch bower`
- Depuis le terminal, cloner le repository git: `git clone https://github.com/pierr/bootstrap-ws.git`
- Se rendre dans le répertoire du projet: `cd $bootstrap-wsPath` et lancer les commandes suivantes `npm install` et `bower install`
- Lancer le watcher et le serveur [brunch](http://brunch.io) : `brunch w --server`
- Si jamais vous rencontrez des soucis pour lancer brunch, c'est que node n'est pas dans votre **PATH**, il faut donc écrire le chemin complet: `c:\Users\%username%\AppData\Roaming\npm\brunch w -s` ou `c:/Users/$username/AppData/Roaming/npm/brunch w -s` ou éventuellement ajouter `c:\Users\%username%\AppData\Roaming\npm\` dans votre PATH.
- Si vous n'avez pas envie de lancer les commandes en ligne de commande vous pouvez utiliser les scripts **.bat** ou **.sh** afin d'installer les prérequis et de lancer le serveur brunch.

