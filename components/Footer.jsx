import Link from 'next/link'
import { footerLinks, social } from '../data/site'
import styles from './Footer.module.css'
import { IconMail, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <div className={styles.logo}>
        <Image
          src="/images/gsowhitegold.png"
          alt="Purdue ChE GSO"
          width={36}
          height={36}
          className={styles.logoImg}
        />
          <span className={styles.wordmark}>
            Purdue <em>ChE GSO</em>
          </span>
        </div>
        <p className={styles.tagline}>
          The Graduate Student Organization of the Davidson School of Chemical
          Engineering at Purdue University.
        </p>
        <div className={styles.social}>
          <a href={social.email} aria-label="Email" className={styles.socialBtn}>
            <IconMail size={18} />
          </a>
          <a href={social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className={styles.socialBtn}>
            <IconBrandInstagram size={18} />
          </a>
          <a href={social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={styles.socialBtn}>
            <IconBrandLinkedin size={18} />
          </a>
        </div>
      </div>

      {Object.entries(footerLinks).map(([group, links]) => (
        <div key={group} className={styles.col}>
          <div className={styles.colTitle}>{group}</div>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={styles.link}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel={l.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              {l.label}
            </a>
          ))}
        </div>
      ))}

      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} Purdue ChE GSO · Davidson School of Chemical Engineering</span>
        <span className={styles.badge}>Purdue University · West Lafayette, IN</span>
      </div>
    </footer>
  )
}
