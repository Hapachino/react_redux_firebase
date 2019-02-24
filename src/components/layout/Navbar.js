import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const signedIn = [
  {
    to: '/create',
    text: 'New Project',
  },
  {
    onClick: 'signOut',
    text: 'Sign Out',
  },
  {
    to: '/',
    text: 'EB',
    className: 'btn btn-floating blue lighten-1',
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

function renderLinks(links, props) {
  const outputLinks = links.map(link => {
    const { to, className, text, onClick} = link;

    return (
      <li key={to || onClick}>
        {to ? 
        <NavLink to={to} className={className}>{text}</NavLink> :
        <a onClick={props[onClick]}>{text}</a>}
      </li>
    );
  });

  return (
    <ul className="right">
      {outputLinks}
    </ul>
  );
}

const NavBar = props => {
  const { auth } = props;
  const links = auth.uid ? 
    renderLinks(signedIn, props) : 
    renderLinks(signedOut, props);

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">Bulletin</Link>
        {links}
      </div>
    </nav>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
  };
}

export default connect(mapStateToProps, {
  signOut,
})(NavBar);
