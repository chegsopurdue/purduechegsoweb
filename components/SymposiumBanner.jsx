import styles from './SymposiumBanner.module.css'

/**
 * SymposiumBanner
 *
 * Props:
 *   bgImage – path to background photo for the banner (optional).
 *             Drop a Forney Atrium or campus photo in public/images/
 *             and pass e.g. "/images/forney-atrium.jpg"
 */
export default function SymposiumBanner({ bgImage }) {
  return (
    <div className={styles.banner}>
      {bgImage && (
        <div
          className={styles.bg}
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      )}
      <div className={styles.overlay} />

      <div className={styles.content}>
        {/* <span className={styles.tag}>Annual Event</span> */}
        <h2 className={styles.title}>Graduate Research Symposium</h2>
        <p className={styles.sub}>
          Our flagship event — student research seminars, keynote speeches,
          and poster showcase. Open to all ChE graduate students.
        </p>
      </div>

      <a href="/symposium" className={styles.cta}>
        Learn More
      </a>
    </div>
  )
}
