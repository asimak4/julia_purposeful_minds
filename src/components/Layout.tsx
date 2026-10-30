import { useEffect, useLayoutEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import styles from './Layout.module.css';

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', isMobileMenuOpen);

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.classList.remove('no-scroll');
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [isMobileMenuOpen]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `${styles.navLink} ${isActive ? styles.activeNavLink : ''}`;

  return (
    <div className={styles.layoutContainer}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link to="/" className={styles.logoLink} onClick={closeMobileMenu}>
            <img
              src={`${process.env.PUBLIC_URL}/PurposefulMindsLogo.png`}
              alt=""
              className={styles.logoImage}
            />
            <span className={styles.brandName}>Purposeful Minds LLC</span>
          </Link>

          <button
            className={styles.mobileMenuButton}
            onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="primary-navigation"
          >
            <span />
            <span />
          </button>

          <div
            className={`${styles.navWrapper} ${isMobileMenuOpen ? styles.active : ''}`}
            id="primary-navigation"
          >
            <nav className={styles.nav} aria-label="Primary navigation">
              <ul className={styles.navList}>
                <li><NavLink to="/" end className={navLinkClass} onClick={closeMobileMenu}>Home</NavLink></li>
                <li><NavLink to="/about" className={navLinkClass} onClick={closeMobileMenu}>About</NavLink></li>
                <li><NavLink to="/services" className={navLinkClass} onClick={closeMobileMenu}>Services</NavLink></li>
                <li><NavLink to="/helpful-information" className={navLinkClass} onClick={closeMobileMenu}>FAQs</NavLink></li>
                <li><NavLink to="/client-login" className={navLinkClass} onClick={closeMobileMenu}>Client Portal</NavLink></li>
              </ul>
            </nav>
            <Link to="/contact" className={`${styles.ctaButton} button-style`} onClick={closeMobileMenu}>
              Let's connect <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </header>

      <main className={styles.mainContent}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <p className={styles.footerName}>Purposeful Minds LLC</p>
            <p>&copy; {new Date().getFullYear()} Purposeful Minds LLC. All rights reserved.</p>
          </div>
          <div className={styles.footerContact}>
            <a href="mailto:julia@purposefulmindsllc.com">julia@purposefulmindsllc.com</a>
            <p>4800 Hampden Ln #200<br />Bethesda, MD 20814</p>
          </div>
          <div className={styles.footerExplore}>
            <Link to="/legal">Legal Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
