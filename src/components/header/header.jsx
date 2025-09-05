import React from 'react';
import { Link } from 'react-router';
import Navbar from './nav-bar/navbar';
import { AiFillHome } from 'react-icons/ai';
import { FaMap } from 'react-icons/fa';
import { IoChatboxEllipses } from 'react-icons/io5';
import { FaDonate } from 'react-icons/fa';
import PrimaryButton from '../primary-button/primary-button';

function Header() {
  return (
    <header>
      <Navbar>
        <Link to="/">
          <AiFillHome />
          About
        </Link>
        <Link to="/">
          <FaMap />
          Paths
        </Link>
        <Link to="/">
          <IoChatboxEllipses />
          Community
        </Link>
        <Link to="/">
          <FaDonate />
          Support us
        </Link>
        <PrimaryButton text="Get Started" />
      </Navbar>
    </header>
  );
}

export default Header;
