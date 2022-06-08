import React from 'react'
import PropTypes from 'prop-types'

const NavBar = props => {
  return (
    <ul>
        {props.array.map( (x) => {
            <li>{x}</li>
        })}
    </ul>
  )
}

NavBar.propTypes = {
    array: PropTypes.arrayOf(PropTypes.string)
}

export default NavBar