// import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

export default function Page404(): JSX.Element {
  return (
    // <main className="page__main page__main--favorites page__main--favorites-empty">
    <div className="page__favorites-container container">
      <section className="favorites favorites--empty">
        <h1>Error 404</h1>
        <div className="favorites__status-wrapper">
          <b className="favorites__status">Page not found.</b>
          <Link to={AppRoute.Root}><p className="favorites__status-description">Go back to the main page.</p></Link>
        </div>
      </section>
    </div>
    // </main>
  );
}
