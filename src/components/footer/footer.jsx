import React from 'react';
import { Link } from 'react-router';
import styles from './footer.module.css';

function Footer() {
  let thisYear = new Date().getFullYear();

  return (
    <footer>
      <div className={styles.links}>
        <div className={styles.logo}>
          {/* Image */}
          {/* Slogan */}
        </div>

        <div className={styles.container}>
          <Link to="/" className={styles.header}>
            Support
          </Link>
          <Link to="/">FAQ</Link>
          <Link to="/">Contribute</Link>
          <Link to="/">Community</Link>
          <Link to="/" className={styles.header}>
            Tutorials
          </Link>
          <Link to="/" className={styles.header}>
            Legal
          </Link>
          <Link to="/">Terms</Link>
          <Link to="/">Privacy</Link>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.container}>
          <Link to="/">{/* Discord */}</Link>
          <Link to="/">{/* Facebook */}</Link>
          <Link to="/">{/* Twitter */}</Link>
          <Link to="/">{/* Github */}</Link>
          <Link to="/">{/* Gamemaker */}</Link>
        </div>
        <p>© {thisYear} All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
