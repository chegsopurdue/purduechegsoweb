import styles from './Hero.module.css'

/**
 * Hero section
 *
 * Props:
 *   bgImage  – path to background photo, e.g. "/images/hero-bg.jpg"
 *              Drop your Purdue photo into public/images/ and pass the path here.
 *              If omitted, a dark navy placeholder is shown instead.
 *   overlayOpacity – number 0–1, controls how dark the overlay is (default 0.55)
 */
export default function Hero({ bgImage, overlayOpacity = 0.55 }) {
  return (
    <section className={styles.hero}>
      {/* Background layer */}
      {bgImage ? (
        <div
          className={styles.bg}
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      ) : (
        <div className={`${styles.bg} ${styles.bgPlaceholder}`} />
      )}

      {/* Dark overlay so text stays legible regardless of photo brightness */}
      <div
        className={styles.overlay}
        style={{ background: `rgba(14, 22, 40, ${overlayOpacity})` }}
      />

      {/* Content */}
      <div className={styles.content}>
        <span className={styles.tag}>
          Davidson School of Chemical Engineering · Purdue University
        </span>

        <h1 className={styles.title}>
          Chemical Engineering Graduate Student Organization
        </h1>

        <p className={styles.sub}>
          Supporting graduate students in Purdue&rsquo;s Davidson School of Chemical Engineering.
        </p>

        {/* <div className={styles.buttons}>
          <a href="/prospective" className={styles.btnPrimary}>
            Prospective Students
          </a>
          <a href="/symposium" className={styles.btnGhost}>
            2025–26 Symposium
          </a>
        </div> */}
      </div>
    </section>
  )
}
