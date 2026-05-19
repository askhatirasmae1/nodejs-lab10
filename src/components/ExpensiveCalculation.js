import React, { useCallback, useMemo, useState } from 'react';

function calculateFactorial(n) {
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

function ExpensiveCalculation() {
  const [number, setNumber] = useState(5);
  const [step, setStep] = useState(1);

  const factorial = useMemo(() => {
    return calculateFactorial(number);
  }, [number]);

  const increment = useCallback(() => {
    setNumber((n) => n + step);
  }, [step]);

  const decrement = useCallback(() => {
    setNumber((n) => Math.max(0, n - step));
  }, [step]);

  return (
    <div className="card">
      <h3>useMemo / useCallback</h3>

      <label>Pas :</label>
      <input
        type="number"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />

      <div>
        <button onClick={decrement}>-</button>
        <strong>{number}</strong>
        <button onClick={increment}>+</button>
      </div>

      <p>Factorielle : {factorial}</p>
    </div>
  );
}

export default ExpensiveCalculation;