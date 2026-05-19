import React from 'react';
import { Link } from 'react-router-dom';
import Greeting from '../components/Greeting';
import TodoList from '../components/TodoList';

function HomePage() {
  return (
    <div>
      <Greeting name="Utilisateur" />

      <p>Bienvenue dans notre application React avancée.</p>

      <Link className="btn-link" to="/hooks">
        Explorer les Hooks
      </Link>

      <Link className="btn-link" to="/about">
        À propos
      </Link>

      <TodoList />
    </div>
  );
}

export default HomePage;