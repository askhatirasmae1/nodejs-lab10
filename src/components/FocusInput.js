import React, { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  return (
    <div className="card">
      <h3>Focus avec useRef</h3>

      <input ref={inputRef} placeholder="Clique sur focus..." />

      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </div>
  );
}

export default FocusInput;