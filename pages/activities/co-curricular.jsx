// pages/activities/co-curricular.jsx
import ActivityLayout from '../../components/ActivityLayout'

export default function CoCurricular() {
  return (
    <ActivityLayout
      title="Co-Curricular Events"
      icon="🎓"
      intro="The GSO organizes academic and professional development events throughout the year to help graduate students grow beyond the lab."
    >
      <div className="actSection">
        <h2>Summer</h2>
        <h3>GSO Symposium — Poster Session</h3>
        <p>
          Every year the GSO holds a Symposium where students showcase their
          research. The poster session features around 30 posters from various
          research groups and topic areas — focused on either individual
          projects or the overall research focus of a group. It is a great
          opportunity for presenters to interact with industry representatives
          and for incoming students to learn about ongoing research across the
          department.
        </p>
      </div>

      <div className="actSection">
        <h2>Fall</h2>
        <h3>Future Postdoc Seminar</h3>
        <p>
          Hosted by a postdoc in our department, this seminar covers how to
          find and apply for postdoc positions as well as what life as a
          postdoc is like. It follows an open discussion format so students can
          gain as much as possible from the experience.
        </p>
        <a
          href="https://www.youtube.com/embed/zGl-3kTqJgo"
          target="_blank"
          rel="noreferrer"
          className="actLink"
        >
          Watch the 2020 virtual seminar recording →
        </a>

        <h3>Future Faculty Seminar</h3>
        <p>
          Similar to the Future Postdoc Seminar, this event gives graduate
          students the opportunity to learn about finding and applying for
          faculty positions from a faculty member in our department. A great
          resource for students looking to pursue a career in academia, also
          following a discussion format.
        </p>
      </div>

      <div className="actSection">
        <h2>Spring</h2>
        <h3>Truth and Beauty Seminar</h3>
        <p>
          A faculty member in our department discusses a science or technology
          related topic of general interest. This seminar provides an
          opportunity for students to learn about things happening in STEM
          outside the scope of our own department.
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