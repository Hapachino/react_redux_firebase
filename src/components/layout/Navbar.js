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
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">Bulletin</Link>
        {renderLinks(signedIn, props)}
        {renderLinks(signedOut, props)}
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

export default connect(mapStateToProps, {
  signOut,
})(NavBar);
