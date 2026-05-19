import React from 'react';
import { Link } from 'react-router-dom';
import Counter from '../components/Counter';
import Clock from '../components/Clock';
import WindowSize from '../components/WindowSize';
import ExpensiveCalculation from '../components/ExpensiveCalculation';
import Stopwatch from '../components/Stopwatch';
import FocusInput from '../components/FocusInput';
import MeasureBox from '../components/MeasureBox';
import ImperativeDemo from '../components/ImperativeDemo';
import CustomHooksDemo from '../components/CustomHooksDemo';

function HooksPage() {
  return (
    <div>
      <h2>Démonstration des Hooks React</h2>

      <Link className="btn-link" to="/">
        Retour accueil
      </Link>

      <div className="hooks-grid">
        <Counter />
        <Clock />
        <WindowSize />
        <ExpensiveCalculation />
        <Stopwatch />
        <FocusInput />
        <MeasureBox />
        <ImperativeDemo />
        <CustomHooksDemo />
      </div>
    </div>
  );
}

export default HooksPage;