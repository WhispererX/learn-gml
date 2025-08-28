import React from 'react';
import { Link } from 'react-router';
import { Children, useState } from 'react';
import Logo from '/learn-gml-minimalistic-text.png';
import { LuMenu } from 'react-icons/lu';
import { IoClose } from 'react-icons/io5';
import styles from './navbar.module.css';

function Navbar({ children }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <nav className={showMobileMenu ? styles.mobile : ''}>
      {/* Logo */}
      <Link to="/">
        <img src={Logo} alt="Logo" width={250} />
      </Link>

      {/* Close Mobile Menu */}
      <button
        className={styles.closeMenu}
        onClick={() => setShowMobileMenu(false)}>
        <IoClose />
      </button>

      {/* Links */}
      <ul className={styles.links}>
        {Children.map(children, (child) => (
          <li className={styles.link}>{child}</li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <button className={styles.menu} onClick={() => setShowMobileMenu(true)}>
        <LuMenu className={styles.menuIcon} />
      </button>
    </nav>
  );
}

export default Navbar;
