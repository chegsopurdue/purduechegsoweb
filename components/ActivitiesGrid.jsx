import Link from 'next/link'
import { activities } from '../data/site'
import styles from './ActivitiesGrid.module.css'

// Tabler icon map — add more as needed
const icons = {
  'goggles': '🥽',
  'confetti':     '🎉',
  'school':       '🎓',
  'leaf':         '🌱',
  'ball-football':'⚽',
  'world':        '🌍',
}

export default function ActivitiesGrid() {
  return (
    <section className={styles.section}>
      <div className="section-header">
        <h2 className="section-title">What We Do</h2>
        
      </div>
      <div className={styles.grid}>
        {activities.map((act) => (
          <Link href={act.href} key={act.name} className={styles.card}>
            <span className={styles.icon} aria-hidden="true">
              {icons[act.icon] ?? '◆'}
            </span>
            <h3 className={styles.name}>{act.name}</h3>
            <p className={styles.desc}>{act.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
