import React, { useState } from 'react';
import styles from '../../styles/componats/Navbar/Navbar.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Qurocity.ai</div>
      <ul className={`${styles.navLinks} ${isMobile ? styles.mobileNav : ''}`}>
        <li><a href="#languages">Languages</a></li>
        <li><a href="#blogs">Blogs</a></li>
        <li><a href="#meet-tutors">Meet The Tutors</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#session">1:1 Session</a></li>
        <li><button className={styles.learningCenter}>Learning Center</button></li>
      </ul>
      <div className={styles.hamburger} onClick={toggleMobileMenu}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
