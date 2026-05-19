import React, { useEffect, useRef, useState } from 'react';

function Stopwatch() {
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(0);

  const intervalRef = useRef(null);
  const startRef = useRef(0);

  const start = () => {
    setRunning(true);
    startRef.current = Date.now() - time;

    intervalRef.current = setInterval(() => {
      setTime(Date.now() - startRef.current);
    }, 10);
  };

  const stop = () => {
    setRunning(false);
    clearInterval(intervalRef.current);
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    setRunning(false);
    setTime(0);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const formatTime = () => {
    const seconds = Math.floor(time / 1000);
    const ms = Math.floor((time % 1000) / 10);

    return `${seconds}s ${ms}ms`;
  };

  return (
    <div className="card">
      <h3>Chronomètre useRef</h3>
      <h2>{formatTime()}</h2>

      {!running ? (
        <button onClick={start}>Démarrer</button>
      ) : (
        <button onClick={stop}>Arrêter</button>
      )}

      <button onClick={reset}>Réinitialiser</button>
    </div>
  );
}

export default Stopwatch;