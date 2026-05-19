import React from 'react';
import { Link, useParams } from 'react-router-dom';

function AboutPage() {
  const { section } = useParams();

  return (
    <div className="card">
      <h2>À propos</h2>

      <Link className="btn-link" to="/">
        Retour accueil
      </Link>

      {section === 'hooks' ? (
        <p>
          Les hooks permettent d'utiliser l'état, les effets et d'autres
          fonctionnalités React dans les composants fonctionnels.
        </p>
      ) : section === 'context' ? (
        <p>
          Le Context API permet de partager des données globales comme le thème.
        </p>
      ) : (
        <>
          <p>
            Cette application montre les hooks React fondamentaux et avancés.
          </p>

          <Link className="btn-link" to="/about/hooks">
            Hooks
          </Link>

          <Link className="btn-link" to="/about/context">
            Context
          </Link>
        </>
      )}
    </div>
  );
}

export default AboutPage;