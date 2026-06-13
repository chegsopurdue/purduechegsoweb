// pages/symposium.jsx
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/Symposium.module.css'
import { useState } from 'react'
import Image from 'next/image'

const schedule = {
  thursday: [
    { time: '8:00 AM – 9:00 AM',   event: 'Breakfast', bold: true },
    { time: '8:30 AM – 11:00 AM',  event: 'Student Presentations (I)', bold: true },
    { time: '11:00 AM – 12:00 PM', event: 'Keynote Address', bold: true },
    { time: '12:00 PM – 2:00 PM',  event: 'Poster Session', bold: true },
    { time: '12:30 PM – 1:30 PM',  event: 'Lunch', bold: true },
    { time: '2:00 PM – 4:30 PM',   event: 'Student Presentations (II)', bold: true },
    { time: '6:00 PM',             event: 'Happy Hour + Awards Dinner', bold: true },
    { time: '',                    event: 'Ripple and Co.' },
  ],
  friday: [
    { time: 'All day', event: 'Interviews (optional)', bold: true },
  ],
}

const topics = [
  'Materials Science',
  'Pharmaceuticals',
  'Biotechnology',
  'Energy and Process Intensification',
  'Fluid Dynamics and Interfacial Phenomena',
  'Catalysis and Reaction Engineering',
]

const galleryPhotos = [
  '/images/symposium/photo-1.jpg',
  '/images/symposium/photo-2.jpg',
  '/images/symposium/photo-3.jpg',
  '/images/symposium/photo-4.jpg',
  '/images/symposium/photo-5.jpg',
  '/images/symposium/photo-6.jpg',
  '/images/symposium/photo-7.jpg',
  '/images/symposium/photo-8.jpg',
]

function Gallery() {
  return (
    <section className={styles.gallery}>
      <h2 className={styles.sectionTitle}>Previous Symposia</h2>
      <div className={styles.galleryGrid}>
        {galleryPhotos.map((src, i) => (
          <div key={i} className={styles.galleryItem}>
            <Image
              src={src}
              alt={`Symposium photo ${i + 1}`}
              width={400}
              height={280}
              className={styles.galleryPhoto}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default function Symposium() {
  return (
    <>
      <Head>
        <title>Graduate Research Symposium — Purdue ChE GSO</title>
      </Head>

      <Navbar />

      <main>
        {/* Hero banner */}
        <div className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroMeta}>35th Annual</div>
            <h1 className={styles.heroTitle}>Graduate Research Symposium</h1>
            <div className={styles.heroSchool}>Davidson School of Chemical Engineering</div>
            <div className={styles.heroDate}>August 20th, 2026</div>
            <div className={styles.heroDeadline}>
              Sign up by <strong>August 14th, 2026</strong>
            </div>
          </div>
        </div>

        {/* About + Registration cost */}
        <section className={styles.aboutRow}>
          <div className={styles.aboutText}>
            <h2 className={styles.sectionTitle}>About the Symposium</h2>
            <p>
              The Graduate Research Symposium is an event organized to showcase the research of 
              graduate students at Purdue University’s Davidson School of Chemical Engineering 
              to industrial representatives. The symposium offers graduating students a venue to 
              learn more about the opportunities that your company has to offer. 
            </p>
          </div>
          <div className={styles.costCard}>
            <div className={styles.costLabel}>Registration Cost</div>
            <div className={styles.costAmount}>$550*</div>
            <p className={styles.costNote}>
              *Waiver available for companies attending for the first time.
              Contact Phin Ariyaphuttarat for more information.
            </p>
          </div>
        </section>

        {/* Three columns: Schedule / How to Register / Topics */}
        <section className={styles.threeCol}>

          {/* Schedule */}
          <div className={styles.colCard}>
            <h2 className={styles.colTitle}>Tentative Schedule</h2>

            <div className={styles.dayLabel}>Thursday</div>
            <ul className={styles.scheduleList}>
              {schedule.thursday.map((item, i) => (
                <li key={i} className={styles.scheduleItem}>
                  <span className={styles.scheduleTime}>{item.time}</span>
                  <span className={item.bold ? styles.scheduleBold : styles.scheduleEvent}>
                    {item.event}
                  </span>
                </li>
              ))}
            </ul>

            <div className={styles.dayLabel} style={{ marginTop: '1.25rem' }}>Friday</div>
            <ul className={styles.scheduleList}>
              {schedule.friday.map((item, i) => (
                <li key={i} className={styles.scheduleItem}>
                  <span className={styles.scheduleTime}>{item.time}</span>
                  <span className={styles.scheduleEvent}>{item.event}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* How to Register */}
          <div className={styles.colCard}>
            <h2 className={styles.colTitle}>How to Register</h2>
            <ul className={styles.registerList}>
              <li>
                <span className={styles.registerIcon}>📍</span>
                The symposium will be conducted <strong>in person.</strong>
              </li>
              <li>
                <span className={styles.registerIcon}>💳</span>
                Payment accepted only through <strong>credit card.</strong>
              </li>
              <li>
                <span className={styles.registerIcon}>🔗</span>
                <a
                  href="https://web.cvent.com/event/1bf56c20-8163-4e98-8d50-0b83909f41ba/summary"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.registerLink}
                >
                  Register here via Purdue Conferences.
                </a>
              </li>
            </ul>

            <div className={styles.contactBox}>
              <div className={styles.contactTitle}>For queries, contact:</div>
              <div>Phin Ariyaphuttarat</div> 
              <div>Industry Liaison Head</div>
              <div>Phone: (914) 451-9776</div>
              <a href="mailto:pariyaph@purdue.edu" className={styles.registerLink}>
                pariyaph@purdue.edu
              </a>
            </div>

            <div className={styles.addressBox}>
              <div className={styles.contactTitle}>Venue</div>
              <div>Davidson School of Chemical Engineering</div>
              <div>Forney Hall of Chemical Engineering</div>
              <div>480 Stadium Mall Drive</div>
              <div>West Lafayette, Indiana 47907</div>
            </div>
          </div>

          {/* Topics + Includes */}
          <div className={styles.colCard}>
            <h2 className={styles.colTitle}>Registration Includes</h2>
            <div className={styles.includesRow}>
              <div className={styles.includeItem}>
                <span>📄</span>
                <span>Info Pamphlets</span>
              </div>
              <div className={styles.includeItem}>
                <span>📖</span>
                <span>Abstract &amp; Resume Booklets</span>
              </div>
              <div className={styles.includeItem}>
                <span>🎤</span>
                <span>Presentations &amp; Posters</span>
              </div>
            </div>

            <h2 className={styles.colTitle} style={{ marginTop: '1.5rem' }}>Topics</h2>
            <ul className={styles.topicsList}>
              {topics.map((t) => (
                <li key={t} className={styles.topicItem}>
                  <span className={styles.topicDot} />
                  {t}
                </li>
              ))}
            </ul>
          </div>

        </section>
      </main>

      <Gallery />

      <Footer />
    </>
  )
}