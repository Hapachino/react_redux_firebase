import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const signedIn = [
  {
    to: '/',
    text: 'New Project',
  },
  {
    to: '/',
    text: 'Log Out',
  },
  {
    to: '/',
    text: 'EB',
    class: 'btn btn-floating blue lighten-1',
  }
];

const signedOut = [
  {
    to: '/signup',
    text: 'Sign Up',
  },
  {
    to: '/signin',
    text: 'Sign In',
  }
];

function renderLinks(links) {
  const outputLinks = links.map(link => {
    return (
      <li key={link.to}>
        <NavLink to={link.to} className={link.class}>{link.text}</NavLink>
      </li>
    );
  });

  return (
    <ul className="right">
      {outputLinks}
    </ul>
  );
}

export default () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">Bulletin</Link>
        {renderLinks(signedIn)}
        {renderLinks(signedOut)}
      </div>
    </nav>
  );
}
