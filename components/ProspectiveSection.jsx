import Link from 'next/link'
import styles from './ProspectiveSection.module.css'

const cards = [
  {
    icon: '👥',
    name: 'Mentor–Mentee Program',
    desc: 'Each new student is paired with a senior student sharing similar research interests to ease the transition into grad school.',
  },
  {
    icon: '🍦',
    name: 'First-Year Events',
    desc: 'Block party during orientation week, Ice Cream Social, Game Nights, and Exam Treats.',
  },
  {
    icon: '💬',
    name: 'Questions?',
    desc: 'First-Year Reps, Garrett and Ainslee, are available to answer any questions you may have.',
  },
]

export default function ProspectiveSection() {
  return (
    <section className={styles.section}>
      <div className="section-header">
        <h2 className="section-title">Prospective Students</h2>
        <Link href="/prospective" className="section-link">
          Full guide →
        </Link>
      </div>
      <div className={styles.grid}>
        {cards.map((c) => (
          <div key={c.name} className={styles.card}>
            <span className={styles.icon} aria-hidden="true">{c.icon}</span>
            <h3 className={styles.name}>{c.name}</h3>
            <p className={styles.desc}>{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
