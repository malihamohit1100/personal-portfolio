
import { useState } from 'react';

import ThemeToggle from '../ui/ThemeToggle';
import useActiveSection from '../../hooks/useActiveSection';

const navLinks = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

const Navbar = ({ theme, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const activeSection = useActiveSection();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar-custom">
      <nav
        className="container-custom flex min-h-[76px] items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="text-xl font-extrabold tracking-tight text-[var(--color-primary)]"
        >
          Maliha<span className="text-[var(--color-secondary)]">.</span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              aria-current={
                activeSection === link.id ? 'location' : undefined
              }
              onClick={closeMenu}
              className={`nav-link-custom ${
                activeSection === link.id
                  ? 'nav-link-active'
                  : ''
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle
            theme={theme}
            onToggle={toggleTheme}
          />

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={
              menuOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-text)] md:hidden"
          >
            <i
              className={`bi ${
                menuOpen ? 'bi-x-lg' : 'bi-list'
              } text-xl`}
              aria-hidden="true"
            ></i>
          </button>
        </div>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-[var(--color-border)] bg-[var(--color-bg)] px-6 py-5 md:hidden"
        >
          <div className="container-custom flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                aria-current={
                  activeSection === link.id ? 'location' : undefined
                }
                onClick={closeMenu}
                className={`nav-link-custom ${
                  activeSection === link.id
                    ? 'nav-link-active'
                    : ''
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
