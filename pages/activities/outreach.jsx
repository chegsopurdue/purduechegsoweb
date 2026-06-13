// pages/activities/outreach.jsx
import ActivityLayout from '../../components/ActivityLayout'

export default function Outreach() {
  return (
    <ActivityLayout
      title="Outreach"
      icon="🌍"
      intro="The GSO connects Purdue ChE graduate students with the local community through science education and environmental initiatives."
    >
      <div className="actSection">
        <h2>Science Outreach with Local Schools</h2>
        <p>
          The GSO runs an After School Science Education Program with Murdock
          Elementary, providing opportunities for graduate students to interact
          with and teach elementary school students, prepare educational
          materials (videos, posters), and more. Recently, we teamed up with
          graduate organizations from other departments to create short video
          lessons on various scientific concepts for students in K–5 grades.
        </p>
      </div>

      <div className="actSection">
        <h2>Murdock Elementary Science Night</h2>
        <p>
          Graduate students pair up and organize different science experiments
          to demonstrate to elementary school students. A fun, hands-on event
          that inspires young students and gives grad students a chance to
          share their passion for science.
        </p>
      </div>

      <div className="actSection">
        <h2>Winterization &amp; De-Trash the Wabash</h2>
        <p>
          Under these initiatives, we help the local West Lafayette–Lafayette
          community through winter preparation activities and clean-up of the
          Wabash River. These events are a great way to give back to the
          community that hosts us during our time at Purdue.
        </p>
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