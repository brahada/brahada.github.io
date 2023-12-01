import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Brahada</h2>
        <p><a href="mailto:Brahada29@gmail.com">Brahada29@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Brahada. I am a Software Engineer currently working at <a href="https://www.jpmorgan.com/global">JP Morgan</a>, and the co-founder of <a href="https://www.instagram.com/connect_zo/">ConnectZo</a>.
      Previously, I have worked at  <a href="https://arthena.com">Goldman Sachs</a>, <a href="https://samsungsem.com/global"> Samsung</a> and <a href="https://brightmoney.co">Bright</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Brahada <Link to="/">brahada.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
