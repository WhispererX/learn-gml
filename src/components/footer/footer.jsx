import React from 'react';
import { Link } from 'react-router';
import Logo from '/learn-gml-minimalistic-text.png';
import styles from './footer.module.css';
import { FaDiscord } from 'react-icons/fa6';
import { FaSquareFacebook } from 'react-icons/fa6';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';
import { SiGamemaker } from 'react-icons/si';


function Footer() {
  let thisYear = new Date().getFullYear();

  return (
    <footer>
      <div className={styles.links}>
        <div className={styles.logo}>
          {/* Image */}
          <Link to="/">
            <img src={Logo} alt="Logo" width={250} />
          </Link>
          {/* Slogan */}
          <p>Every Great Game Starts With a Line of Code.</p>
        </div>

        <div className={styles.container}>
          <div className={styles.column}>
            <h4>Support</h4>
            <Link to="/">FAQ</Link>
            <Link to="/">Contribute</Link>
            <Link to="/">Community</Link>
          </div>
          <div className={styles.column}>
            <h4>Tutorials</h4>
          </div>
          <div className={styles.column}>
            <h4>Legal</h4>
            <Link to="/terms">Terms</Link>
            <Link to="/privacy">Privacy</Link>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.socials}>
        <div className={styles.container}>
          <abbr title="Discord">
            <Link to="https://discord.gg/PH7TfjWnZG">
              <FaDiscord />
            </Link>
          </abbr>
          <abbr title="Facebook">
            <Link to="/">
              <FaSquareFacebook />
            </Link>
          </abbr>
          <abbr title="X (Twitter)">
            <Link to="/">
              <FaSquareXTwitter />
            </Link>
          </abbr>
          <abbr title="Github">
            <Link to="https://github.com/WhispererX/learn-gml">
              <FaGithub />
            </Link>
          </abbr>
          <abbr title="Gamemaker">
            <Link to="https://gamemaker.io/en">
              <SiGamemaker />
            </Link>
          </abbr>
        </div>
        <p>© {thisYear} All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
