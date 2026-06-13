// pages/activities/sustainability.jsx
import ActivityLayout from '../../components/ActivityLayout'

export default function Sustainability() {
  return (
    <ActivityLayout
      title="Sustainability Initiatives"
      icon="🌱"
      intro="The GSO promotes sustainable practices within the department and actively engages with the broader West Lafayette–Lafayette community through service and environmental initiatives."
    >
      <div className="actSection">
        <h2>Coffee Mugs</h2>
        <p>
          To encourage the reduction of disposable cups at seminars and events,
          the GSO provides each incoming graduate student with their own coffee
          mug featuring a GSO logo design.
        </p>
      </div>

      <div className="actSection">
        <h2>Community Service</h2>
        <p>
          The GSO conducts volunteer activities every year to help the
          community of West Lafayette–Lafayette in various ways, including:
        </p>
        <ul>
          <li>Highway cleanup</li>
          <li>Food bank volunteering</li>
          <li>Food drive</li>
          <li>Arbor Day tree planting</li>
          <li>Clothing drive</li>
        </ul>
      </div>

      <div className="actSection">
        <h2>Food Finders Food Bank</h2>
        <p>
          We enjoy volunteering at local Food Finders Food Banks. Pantry shifts
          enable graduate students to directly help reduce food waste, provide
          food assistance to those in need, and protect the environment through
          community-based, multi-sector collaborations.
        </p>
        <h3>About Food Finders</h3>
        <ul>
          <li>Assisting Tippecanoe County and 15 surrounding counties since 1981</li>
          <li>Providing food to 120 Partner Agencies</li>
          <li>Distributes more than 9 million pounds of food annually</li>
          <li>Headquartered in Lafayette, IN</li>
          <li>Funded by United Way, foundations, grants, USDA, corporations, and individual donors</li>
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