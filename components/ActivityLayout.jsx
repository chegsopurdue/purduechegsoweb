// components/ActivityLayout.jsx
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import styles from './ActivityLayout.module.css'

export default function ActivityLayout({ title, icon, intro, children }) {
  return (
    <>
      <Head>
        <title>{title} — Purdue ChE GSO</title>
      </Head>
      <Navbar />
      <main>
        <div className={styles.pageHeader}>
          <span className={styles.icon}>{icon}</span>
          <h1 className={styles.pageTitle}>{title}</h1>
          {intro && <p className={styles.intro}>{intro}</p>}
        </div>
        <div className={styles.content}>{children}</div>
      </main>
      <Footer />
    </>
  )
}