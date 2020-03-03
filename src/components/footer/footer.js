import React from 'react'
import { FaTwitter, FaLinkedin } from 'react-icons/fa'
import styles from './footer.module.scss'

const Footer = () => (<div className={styles.footer}>
  <p>Author ivanlhz</p>
  <ul>
    <li>
      <a href="https://twitter.com/ivanlhz"><FaTwitter /></a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/iv%C3%A1n-l%C3%B3pez-hdez/"><FaLinkedin /></a>
    </li>
  </ul>
</div>)

export default Footer;