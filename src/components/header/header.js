import React from 'react'
import styles from './header.module.scss'
import PropTypes from 'prop-types'

const Header = ({text, navMenu}) => {
  return (
    <div className={styles.container}>
      <div className='pageName'>
        <h1>{text}</h1>
      </div>
      <nav>
        <ul>
          {navMenu.length > 0 &&
            navMenu.map(element => (
              <li key={element.text}>
                <a href={element.url}>{element.text}</a>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  )
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
  navMenu: PropTypes.array,
}

export default Header
