import React from 'react';
import ListeTaches from './ListeTaches';
import Logo from './Logo';
import LecteurAudio from './LecteurAudio';
import Notification from './Notification';
import ListeCours from './Courses';
import Photos from './Photos';

function Accueil() {
  return (
    <div>
      <h1>Page d'Accueil</h1>
      <p>Bienvenue sur notre application de démonstration.</p>
      <ListeTaches />
      <Logo />
      <LecteurAudio />
      <Notification notifications={3} />
      <ListeCours />
      <Photos />
    </div>
  );
}

export default Accueil;
