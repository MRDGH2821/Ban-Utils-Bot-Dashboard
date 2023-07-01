import React from 'react';
import Link from 'next/link';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <Link href="/">
        <a className="logo">Ban Utils</a>
      </Link>
      <nav>
        <Link href="/login">
          <a className="login-link">Login</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;