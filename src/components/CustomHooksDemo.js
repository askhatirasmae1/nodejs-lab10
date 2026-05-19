import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import useMediaQuery from '../hooks/useMediaQuery';
import useOnlineStatus from '../hooks/useOnlineStatus';

function CustomHooksDemo() {
  const [name, setName] = useLocalStorage('name', '');
  const smallScreen = useMediaQuery('(max-width: 600px)');
  const online = useOnlineStatus();

  return (
    <div className="card">
      <h3>Hooks personnalisés</h3>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Votre nom"
      />

      <p>Nom sauvegardé : {name}</p>
      <p>Écran : {smallScreen ? 'Petit écran' : 'Grand écran'}</p>
      <p>Connexion : {online ? 'En ligne' : 'Hors ligne'}</p>
    </div>
  );
}

export default CustomHooksDemo;