import styles from './Ticker.module.css'

const DEFAULT_ITEMS = [
    { label: '📋 Anonymous feedback form open', href: 'https://purdue.ca1.qualtrics.com/jfe/form/SV_bOh7XT8LsJtlWLQ' },
    // { label: '📅 Add the GSO Google Calendar', href: 'https://calendar.google.com/calendar/embed?src=v3k26sl8evn1c6qaos8h6atli8%40group.calendar.google.com&ctz=America%2FNew_York' },
]

export default function Ticker({ items = DEFAULT_ITEMS }) {
  return (
    <div className={styles.ticker}>
      {/* <span className={styles.label}>What&rsquo;s On</span> */}
      <div className={styles.items}>
        {items.map((item, i) => (
          <span key={i} className={styles.item}>
            {item.href ? (
              <a
                href={item.href}
                className={styles.link}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                {item.label}
              </a>
            ) : (
              item.label
            )}
            {i < items.length - 1 && (
              <span className={styles.divider}>·</span>
            )}
          </span>
        ))}
      </div>
    </div>
  )
}