# Projet 001 — Création d'un CV avec React et Vite

## 1. Présentation du projet
Ce projet m'a permis de créer mon CV à l'aide de React et de Vite.

Le CV est composé de trois composants :
- Informations personnelles (InfoPerso.jsx)
- Compétences (Competences.jsx)
- Expériences professionnelles (Experiences.jsx)

## 2. Technologies utilisées 
- React : permet de créer l'interface utilisateur avec des composants.
- Vite : permet de créer et de lancer le projet en développement.
- JavaScript : langage utilisé pour programmer les composants.
- JSX : syntaxe permettant d'écrire l'interface dans les composants React.
- CSS : permet de personnaliser le CV c-à-d le style.

## 3. Étapes de création du projet :

### Etape 1 : Création du projet

J'ai utilisé cette commande pour créer le projet et le nommer 001 avec React et Vite:
```bash
npm create vite@latest 001 -- --template react
```
### Etape 2 : Installation des dépendances
```bash
cd 001
npm install
```
La commande "npm install" installe les bibliothèques nécessaires au projet.
### Etape 3 : Lancement du projet
```bash
npm run dev
```
Cette commande permet de lancer le site dans le navigateur.
### Etape 4 : Création des composants
Un dossier "components" a été créé dans le dossier "src".

Il contient trois fichiers :
- InfoPerso.jsx : afficher les informations personnelles.
- Competences.jsx : afficher les compétences.
- Experiences.jsx : afficher les expériences professionnelles.
### Etape 5 : Assemblage des composants
Le fichier "App.jsx" importe les trois composants et les affiche dans l'application.

### Etape 6 : Mise en forme du CV

Les fichiers "App.css" et "index.css" contiennent les styles qui définissent les couleurs, les espacements, la mise en page et la responsivité.
## 4. Rôle des dossiers et fichiers indispensables :
### node_modules/ :
Contient les bibliotheques installées avec npm.
### public/ :
Contient les ressources statiques accessibles directement.
### src/ :
Contient le code source de l'application.
### src/components/:
Contient les composants React qui constituent les différentes parties du CV.
### App.jsx :
Composant principal qui assemble les trois composants du CV.
### App.css :
Contient les styles associés à la présentation du CV.
### index.css :
Contient les styles généraux de l'application.
### main.jsx :
Point d'entrée de React. Il initialise l'application et affiche le composant App.
### index.html :
Document HTML dans lequel l'application React est affichée.
### package.json :
Contient les informations du projet, les dépendances et les scripts disponibles.
### package-lock.json :
Enregistre les versions précises des dépendances installées.
### README.md :
Présente le projet, explique les étapes de création et décrit le role des dossiers et fichiers importants.
## 5. Commandes principales :
Créer le projet :
```bash
npm create vite@latest 001 -- --template react
```
Accéder au dossier :
```bash
cd 001
```
Installer les dépendances :
```bash
npm install
```
Lancer le serveur de développement :
```bash
npm run dev
```
Vérifier la compilation du projet :
```bash
npm run build
```
## 6. Conclusion :
Ce projet m'a permis de découvrir la création d'une application React avec Vite, la création de composants, l'importation et l'exportation de fichiers ainsi que l'organisation d'un projet web.