import { officers } from '../data/site'
import styles from './OfficersGrid.module.css'

const groups = ['top', 'middle1', 'middle2', 'bottom']

export default function OfficersGrid() {
  return (
    <section className={styles.section}>
      <div className="section-header">
        <h2 className="section-title">2026–27 Officers</h2>
      </div>

      {groups.map((group) => {
        const members = officers.filter((o) => o.group === group)
        return (
          <div key={group} className={styles.row}>
            {members.map((o) => (
              <div key={o.email} className={styles.card}>
                <div className={styles.avatar}>{o.initials}</div>
                <div className={styles.name}>{o.name}</div>
                <div className={styles.role}>{o.role}</div>
              </div>
            ))}
          </div>
        )
      })}
    </section>
  )
}