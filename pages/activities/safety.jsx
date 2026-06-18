// pages/activities/safety.jsx
import ActivityLayout from '../../components/ActivityLayout'
import Gallery from '../../components/Gallery'
import prefix from '../../utils/prefix'

const photos = [
    `${prefix}/images/safety/chess-1.JPEG`,
    `${prefix}/images/safety/cleanup-1.JPEG`,
    `${prefix}/images/safety/cleanup-2.JPEG`,
  ]

export default function Safety() {
  return (
    <ActivityLayout
      title="Safety"
      icon="🥽"
      intro="The GSO is committed to accounting for the safety of the students associated with the Davidson School of Chemical Engineering at Purdue University and to promoting a culture of safety within the department. We work closely with the department safety committee to ensure that student concerns are heard and addressed, and we organize events and initiatives to promote safety awareness and best practices among our members."
    >
      <div className="actSection">
        <h2>Our Commitment</h2>
        <p>
          The GSO Safety Chair and Student Advocacy Officer are responsible
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

      <div className="actSection">
        <h2>Office Clean-up Drive</h2>
        <p>
          The GSO organizes an annual office clean-up drive to promote a safe and
          organized workspace for all students. This event encourages students to
          declutter their work areas, properly dispose of hazardous materials, and
          share best practices for maintaining a safe and efficient office environment. 
          The clean-up drive fosters a sense of community and responsibility among 
          students while enhancing overall safety in the department.
        </p>
      </div>

      <div className="actSection">
        <h2>Gallery</h2>
        <Gallery photos={photos} />
      </div>

    </ActivityLayout>
  )
}