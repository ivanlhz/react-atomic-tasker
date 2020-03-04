import React from 'react'
import {FaTwitter, FaLinkedin, FaYoutube, FaGithub} from 'react-icons/fa'
import styles from './footer.module.scss'

const Footer = () => (
  <div className={styles.footer}>
    <p>Author ivanlhz</p>
    <ul>
      <li>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://twitter.com/ivanlhz'
        >
          <FaTwitter />
        </a>
      </li>
      <li>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.linkedin.com/in/iv%C3%A1n-l%C3%B3pez-hdez/'
        >
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.youtube.com/channel/UCvlalcvS9Ah3L4j1SSxjtUw'
        >
          <FaYoutube />
        </a>
      </li>
      <li>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/ivanlhz'
        >
          <FaGithub />
        </a>
      </li>
    </ul>
  </div>
)

export default Footer
