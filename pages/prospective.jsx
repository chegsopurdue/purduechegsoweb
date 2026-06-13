// pages/prospective.jsx
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/Prospective.module.css'

export default function Prospective() {
  return (
    <>
      <Head>
        <title>Prospective Students — Purdue ChE GSO</title>
      </Head>

      <Navbar />

      <main>
        {/* Page header */}
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Prospective Students</h1>
          <p className={styles.pageSub}>
            Everything you need to know about joining the Purdue ChE graduate community.
          </p>
        </div>

        {/* Mentor-Mentee */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>Mentor–Mentee Program</h2>
            <p className={styles.body}>
              Navigating through a new environment, new campus, and new academic
              pursuits can be challenging. To alleviate the transition into
              graduate school, each new student to the department is paired with
              an older student who shares similar research interests and
              background through the <strong>mentor-mentee program</strong>. The
              goal of this program is to ensure each student receives a
              one-on-one opportunity to ask questions specifically about the
              research and faculty they are interested in, establish connections
              to researchers, and to find new friends through the various
              activities and socials we offer.
            </p>
          </div>
        </section>

        {/* First Year Events */}
        <section className={styles.section + ' ' + styles.sectionAlt}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>First-Year Events</h2>
            <p className={styles.body}>
              The GSO is committed to fostering a community for new first-year
              doctoral students. First-year representatives organize events that
              create opportunities for networking of friends and colleagues that
              lasts beyond the years at Purdue!
            </p>

            <div className={styles.eventsGrid}>

              <div className={styles.eventCard}>
                <div className={styles.eventIcon}>🎉</div>
                <h3 className={styles.eventName}>First-Year Block Party</h3>
                <p className={styles.eventDesc}>
                  Every year during orientation week, the GSO organizes a block
                  party to welcome newly arrived students to the Purdue family.
                  New students get to meet each other as well as faculty and
                  current students. All food and refreshments are provided by
                  the GSO — lawn games typically follow the meal!
                </p>
              </div>

              <div className={styles.eventCard}>
                <div className={styles.eventIcon}>🍦</div>
                <h3 className={styles.eventName}>Ice Cream Social</h3>
                <p className={styles.eventDesc}>
                  Students are invited for a study break to sweeten the first
                  semester blues with ice cream! Upper-year students are also
                  invited to foster network building within the department and
                  provide mentorship to first-year students.
                </p>
              </div>

              <div className={styles.eventCard}>
                <div className={styles.eventIcon}>🍪</div>
                <h3 className={styles.eventName}>Exam Treats</h3>
                <p className={styles.eventDesc}>
                  During the most stressful periods of the first semester, the
                  GSO provides baked and sweet treats to students to help
                  alleviate exam stress. Happy studying!
                </p>
              </div>

            </div>
          </div>
        </section>

        
      </main>

      <Footer />
    </>
  )
}