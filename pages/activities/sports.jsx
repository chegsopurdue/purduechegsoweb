// pages/activities/sports.jsx
import ActivityLayout from '../../components/ActivityLayout'

export default function Sports() {
  return (
    <ActivityLayout
      title="Sports"
      icon="⚽"
      intro="The GSO organizes sporting events of all kinds to keep the graduate community active and connected outside the lab."
    >
      <div className="actSection">
        <h2>Sports Events</h2>
        <p>
          From classics like basketball, volleyball, and soccer to more unique
          events like Esports and bowling — there is something for everyone.
          Events are open to all ChE graduate students regardless of skill
          level.
        </p>
        <h3>End-of-Year Awards</h3>
        <p>
          At the end of each year the GSO recognizes standout athletic
          participation with two awards:
        </p>
        <ul>
          <li><strong>Grad-lete of the Year</strong> — awarded to the most outstanding individual athlete</li>
          <li><strong>Athletically Activated Research Group of the Year</strong> — awarded to the most active research group</li>
        </ul>
      </div>

      <div className="calendarBox">
        <h3>GSO Calendar</h3>
        <p>
          <a
            href="https://calendar.google.com/calendar/embed?src=v3k26sl8evn1c6qaos8h6atli8%40group.calendar.google.com&ctz=America%2FNew_York"
            target="_blank"
            rel="noreferrer"
            className="actLink"
          >
            Add to Google Calendar
          </a>
          {' '}·{' '}
          <a
            href="https://calendar.google.com/calendar/ical/v3k26sl8evn1c6qaos8h6atli8%40group.calendar.google.com/public/basic.ics"
            target="_blank"
            rel="noreferrer"
            className="actLink"
          >
            Add to Outlook / Apple Calendar
          </a>
        </p>
      </div>
    </ActivityLayout>
  )
}