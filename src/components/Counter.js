import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h3>Compteur : {count}</h3>
      <button onClick={() => setCount((c) => c + 1)}>Incrémenter</button>
      <button onClick={() => setCount((c) => c - 1)}>Décrémenter</button>
      <button onClick={() => setCount(0)}>Réinitialiser</button>
    </div>
  );
}

export default Counter;