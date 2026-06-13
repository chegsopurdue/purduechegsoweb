import Link from 'next/link'
import { useState } from 'react'
import { navLinks } from '../data/site'
import styles from './Navbar.module.css'
import Image from 'next/image'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        <Image
          src="/images/gsoblackgold.png"
          alt="Purdue ChE GSO"
          width={36}
          height={36}
          className={styles.logoImg}
        />
        <span className={styles.wordmark}>
          Purdue <em>ChE GSO</em>
        </span>
      </Link>

      {/* Desktop links */}
      <ul className={styles.links}>
        {navLinks.map((link) =>
          link.children ? (
            <li
              key={link.label}
              className={styles.dropdown}
              onMouseEnter={() => setDropOpen(true)}
              onMouseLeave={() => setDropOpen(false)}
            >
              <span className={styles.link}>
                {link.label} <span className={styles.caret}>▾</span>
              </span>
              {dropOpen && (
                <ul className={styles.dropMenu}>
                  {link.children.map((child) => (
                    <li key={child.href}>
                      <Link href={child.href} className={styles.dropItem}>
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ) : (
            <li key={link.href}>
              <Link href={link.href} className={styles.link}>
                {link.label}
              </Link>
            </li>
          )
        )}
      </ul>

      <a
        href="https://calendar.google.com/calendar/embed?src=v3k26sl8evn1c6qaos8h6atli8%40group.calendar.google.com&ctz=America%2FNew_York"
        target="_blank"
        rel="noreferrer"
        className={styles.cta}
      >
       GSO Calendar
      </a>

      {/* Mobile hamburger */}
      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <span className={styles.mobileGroup}>{link.label}</span>
                {link.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className={styles.mobileLink}
                    onClick={() => setMenuOpen(false)}
                  >
                    — {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={styles.mobileLink}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  )
}
