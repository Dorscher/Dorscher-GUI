import React from 'react'
import PropTypes from 'prop-types'
import { NavLink, Link } from 'react-router-dom';

const NavBar = props => {


  const linkList = props.links.map( (link) => (
    <li key={link.id}>
      {link.setActive 
      ? (<NavLink exact={link.exact ? true : undefined} strict={link.strict ? true : undefined} end={link.end ? "true" : undefined} className={link.className} to={link.to}>{link.label}</NavLink>)
      : (<Link exact={link.exact ? true : undefined} strict={link.strict ? true : undefined} end={link.end ? "true" : undefined} className={link.className} to={link.to}>{link.label}</Link>)
}
    </li>
  ));


  return (
      <ul className={props.className}>
          {linkList}
      </ul>
  )
}

NavBar.propTypes = {
    className: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      className: PropTypes.string,
      label: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
      exact: PropTypes.bool,
      strict: PropTypes.bool,
      end : PropTypes.bool,
      setActive: PropTypes.bool
    }))
}


export default NavBar;