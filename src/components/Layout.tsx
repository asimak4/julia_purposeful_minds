import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import styles from './Layout.module.css'; // Import the CSS Module

const Layout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation(); // Get location object

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when a link is clicked
  const handleNavLinkClick = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  // Effect to toggle .no-scroll class on body
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    // Cleanup function to remove the class if the component unmounts while menu is open
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isMobileMenuOpen]); // Re-run effect when isMobileMenuOpen changes

  // Effect to scroll to top on route change
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); // Re-run effect when pathname changes

  return (
    <div className={styles.layoutContainer}>
      <header className={styles.header}>
        <Link to="/" className={styles.logoLink} onClick={handleNavLinkClick}>
        <img src={`${process.env.PUBLIC_URL}/PurposefulMindsLogo.png`} alt="Purposeful Minds logo" className={styles.logoImage}/>
          <i>Purposeful Minds LLC</i> 
        </Link>
        
        <button className={styles.mobileMenuButton} onClick={toggleMobileMenu} aria-label="Toggle menu" aria-expanded={isMobileMenuOpen}>
          {isMobileMenuOpen ? '\u2715' : '\u2630'} {/* Basic X and Hamburger icons */}
        </button>

        <div className={`${styles.navWrapper} ${isMobileMenuOpen ? styles.active : ''}`}>
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li><Link to="/" className={styles.navLink} onClick={handleNavLinkClick}>Home</Link></li>
              <li><Link to="/about" className={styles.navLink} onClick={handleNavLinkClick}>About</Link></li>
              <li><Link to="/services" className={styles.navLink} onClick={handleNavLinkClick}>Services</Link></li>
              <li><Link to="/helpful-information" className={styles.navLink} onClick={handleNavLinkClick}>FAQS</Link></li>
              {/* <li><Link to="/contact" className={styles.navLink} onClick={handleNavLinkClick}>Contact</Link></li> */}
              <li><Link to="/client-login" className={styles.navLink} onClick={handleNavLinkClick}>Client Portal</Link></li>
            </ul>
          </nav>
          <Link to="/contact" className={`${styles.ctaButton} button-style`} onClick={handleNavLinkClick}>
            Contact Us
          </Link>
        </div>
      </header>
      
      <main className={styles.mainContent}>
        <Outlet />
      </main>
      
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} <i>Purposeful Minds LLC.</i> All rights reserved.</p>
        <p>julia@purposefulmindsllc.com | 4800 Hampden Ln #200, Bethesda, MD 20814</p>
        <p>
          <Link to="/legal" className={styles.footerLink} onClick={handleNavLinkClick}>
            Legal Terms
          </Link>
        </p>
      </footer>
    </div>
  );
};

export default Layout; 