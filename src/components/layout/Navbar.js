import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const signedIn = [
  {
    to: '/create',
    text: 'New Project',
  },
  {
    to: '/signout',
    text: 'Sign Out',
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

const NavBar = () => {
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

const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase,
  };
}

export default connect(mapStateToProps)(NavBar);
