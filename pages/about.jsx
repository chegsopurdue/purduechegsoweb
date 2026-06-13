import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { officers } from '../data/site'
import styles from '../styles/About.module.css'

const groups = [
  { key: 'top',     label: 'Leadership' },
  { key: 'middle1', label: 'Officers' },
  { key: 'middle2', label: 'Officers' },
  { key: 'bottom',  label: 'Officers' },
]

export default function About() {
  return (
    <>
      <Head>
        <title>About — Purdue ChE GSO</title>
      </Head>

      <Navbar />

      <main>
        {/* Page header */}
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>2026-2027 GSO Board</h1>
          <p className={styles.pageSub}>
            The Chemical Engineering Graduate Student Organization represents and
            supports all graduate students in the Davidson School of Chemical
            Engineering at Purdue University.
          </p>
        </div>

        {/* Officers by group */}
        {groups.map(({ key, label }) => {
          const members = officers.filter((o) => o.group === key)
          if (!members.length) return null
          return (
            <section key={key} className={styles.section}>
              <h2 className={styles.groupLabel}>{label}</h2>
              <div className={styles.grid}>
                {members.map((o) => (
                  <OfficerCard key={o.email} officer={o} />
                ))}
              </div>
            </section>
          )
        })}
      </main>

      <Footer />
    </>
  )
}

function OfficerCard({ officer: o }) {
  return (
    <div className={styles.card}>
      {/* Photo */}
      <div className={styles.photoWrap}>
        {o.photo ? (
            <Image
              src={o.photo}
              alt={o.name}
              width={240}
              height={200}
              className={styles.photo}
            />
          ) : (
            <div className={styles.photoPlaceholder}>{o.initials}</div>
          )}
      </div>

      {/* Identity */}
      <div className={styles.name}>{o.name}</div>
      {o.pronouns && (
        <div className={styles.pronouns}>{o.pronouns}</div>
      )}
      <div className={styles.role}>{o.role}</div>

      {/* Email */}
      {o.email && (
        <a href={`mailto:${o.email}`} className={styles.email}>
          {o.email}
        </a>
      )}

      {o.advisor && (
        <div className={styles.advisor}>Advisor: {o.advisor}</div>
      )}

      {/* Divider */}
      <hr className={styles.divider} />

      {/* Bio */}
      {o.bio && (
        <p className={styles.bio}>{o.bio}</p>
      )}

      {/* Role description */}
      {o.roleDesc && (
        <p className={styles.roleDesc}>{o.roleDesc}</p>
      )}
    </div>
  )
}