import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Ticker from '../components/Ticker'
import ActivitiesGrid from '../components/ActivitiesGrid'
import SymposiumBanner from '../components/SymposiumBanner'
import ProspectiveSection from '../components/ProspectiveSection'
import OfficersGrid from '../components/OfficersGrid'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Purdue ChE GSO — Chemical Engineering Graduate Student Organization</title>
        <meta
          name="description"
          content="The Graduate Student Organization of the Davidson School of Chemical Engineering at Purdue University."
        />
      </Head>

      <Navbar />

      {/*
        Hero background image:
        1. Add your Purdue photo to public/images/ (e.g. public/images/hero-bg.jpg)
        2. Pass the path as bgImage="/images/hero-bg.jpg"
        3. Adjust overlayOpacity (0–1) to control how dark the overlay is.
           Lower = more photo visible. Higher = more legible text on bright photos.

        Example: <Hero bgImage="/images/hero-bg.jpg" overlayOpacity={0.5} />
      */}
      <Hero bgImage="/images/hero-bg-cropped.jpeg" overlayOpacity={0.6} />

      <Ticker />

      <ActivitiesGrid />

      {/*
        Symposium banner background:
        Same pattern — drop a photo in public/images/ and pass it here.
        Example: <SymposiumBanner bgImage="/images/forney-atrium.jpg" />
      */}
      <SymposiumBanner bgImage="/images/symposium-bg.jpg" />

      <ProspectiveSection />

      <Footer />
    </>
  )
}
