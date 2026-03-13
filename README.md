# ⚛️ TP 3 – Navigation, Rendu Conditionnel & Ressources React


## 🎯 Objectifs

- Naviguer entre pages sans rechargement grâce à **React Router**
- Afficher du contenu selon des conditions avec les opérateurs **ternaire** et **logique**
- Générer des listes dynamiques avec **`map()`**
- Intégrer des **images**, **fichiers audio** et **styles CSS** dans React

---

## 📁 Structure du projet

```
src/
├── Accueil.js       → Page d'accueil avec liste, logo et audio
├── Apropos.js       → Page À propos
├── App.css          → Styles globaux
├── App.js           → Routeur principal + navigation
├── Connexion.js     → Rendu conditionnel (connecté / déconnecté)
├── index.js         → Point d'entrée + BrowserRouter
├── LecteurAudio.js  → Lecteur audio natif
├── ListeTaches.js   → Liste générée avec map()
└── Logo.js          → Affichage d'une image importée
```

---

## 📋 Résumé des étapes

| Étape | Sujet | Ce qu'on fait |
|-------|-------|---------------|
| 1 | Initialisation | Créer le projet avec `create-react-app` et lancer le serveur local |
| 2 | React Router | Installer `react-router-dom` pour la navigation SPA |
| 3 | Navigation | Créer les pages Accueil & Apropos, déclarer les routes dans App.js |
| 4 | `useState` | Afficher "Connecté" ou "Déconnecté" selon un état booléen |
| 5 | `map()` | Générer une liste de tâches depuis un tableau de données |
| 6 | Médias | Importer et afficher une image et un fichier audio |
| 7 | CSS | Appliquer des styles via `className` (et non `class`) |
| 8 | Exercices | 4 exercices pratiques pour consolider les acquis |

---

## 🔑 Concepts essentiels

**Rendu conditionnel** — Afficher A ou B selon une condition, ou rien du tout si la condition est fausse. Deux syntaxes possibles : l'opérateur ternaire `? :` et l'opérateur logique `&&`.

**Listes dynamiques** — La méthode `map()` parcourt un tableau et retourne un élément JSX pour chaque entrée. Chaque élément doit avoir une prop `key` unique.

**Navigation SPA** — `<Link>` remplace les balises `<a>` classiques pour naviguer sans recharger la page. `<Routes>` et `<Route>` associent chaque URL à un composant.

**Ressources** — Images et fichiers audio s'importent comme des modules JavaScript. En JSX, on utilise `className` à la place de `class` pour appliquer des styles CSS.

---

## 🧪 Exercices pratiques

| # | Composant | Objectif |
|---|-----------|----------|
| 1 | `Notifications.js` | Afficher un message uniquement si `notifications > 0` |
| 2 | `ListeCourses.js` | Recevoir un tableau en props et l'afficher avec `map()` |
| 3 | `Galerie.js` | Importer et afficher trois images depuis `src/` |
| 4 | `Contact.js` | Nouvelle page, nouvelle route `/contact`, nouveau lien dans `<nav>` |

---

## ⚠️ Pièges à éviter

- Écrire `class` au lieu de `className` → le style ne s'applique pas
- Oublier la prop `key` dans un `map()` → avertissement React en console
- Utiliser `<a href>` au lieu de `<Link to>` → rechargement complet de la page
- Ne pas entourer `<App>` avec `<BrowserRouter>` dans `index.js` → les routes ne fonctionnent pas

---

## 🎬 Vidéo de démonstration

https://github.com/user-attachments/assets/10607d85-66ab-40c7-b93c-99ef7a3ad380



*TP réalisé dans le cadre du cours de développement web – React*
