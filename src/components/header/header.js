import React from 'react'
import styles from './header.module.scss'

const Header = ({text, navMenu}) => {
  return (
    <div className={styles.container}>
      <div className="pageName">
        <h1>{text}</h1>
      </div>
      <nav>
        <ul>
          {navMenu.map(
            element => <li key={element.text}><a href={element.url}>{element.text}</a></li>
          )}
        </ul>
      </nav>
    </div>
  )
}

export default Header