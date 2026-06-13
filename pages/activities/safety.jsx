// pages/activities/safety.jsx
import ActivityLayout from '../../components/ActivityLayout'

export default function Safety() {
  return (
    <ActivityLayout
      title="Safety"
      icon="🥽"
      intro="The GSO is committed to accounting for the safety of all students associated with the Davidson School of Chemical Engineering at Purdue University — including graduate students, undergraduate students, post-doctoral students, and visiting scholars."
    >
      <div className="actSection">
        <h2>Our Commitment</h2>
        <p>
          The GSO Safety Director and Student Advocacy Officer are responsible
          for representing all student groups to the department safety
          committee. To report safety concerns or suggestions about any aspect
          of the department, please fill out our anonymous survey.
        </p>
        <a
          href="https://purdue.ca1.qualtrics.com/jfe/form/SV_cw5HHG7M24pWgMl"
          target="_blank"
          rel="noreferrer"
          className="actLink"
        >
          Submit anonymous safety feedback →
        </a>
      </div>

      <div className="actSection">
        <h2>ChESS — Chemical Engineering Seminar Series</h2>
        <p>
          The Chemical Engineering Seminar Series (ChESS) hosts several safety
          seminars each year, inviting representatives from organizations
          external to the department to speak on various safety-related topics.
          These seminars are open to all students and provide valuable
          perspectives on lab safety, chemical handling, and workplace
          well-being.
        </p>
      </div>

      <div className="calendarBox">
        <h3>Stay Up to Date</h3>
        <p>
          Add the GSO calendar to stay informed about upcoming ChESS seminars
          and safety events.{' '}
          <a
            href="https://calendar.google.com/calendar/embed?src=v3k26sl8evn1c6qaos8h6atli8%40group.calendar.google.com&ctz=America%2FNew_York"
            target="_blank"
            rel="noreferrer"
            className="actLink"
          >
            Add to Google Calendar
          </a>
        </p>
      </div>
    </ActivityLayout>
  )
}