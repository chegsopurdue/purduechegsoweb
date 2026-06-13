import '../styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
          // Playfair Display + DM Sans https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500&display=swap
          // Fraunces + Inter https://fonts.googleapis.com/css2?family=Fraunces:wght@700;900&family=Inter:wght@300;400;500&display=swap
          // Outfit + Outfit https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;700;900&display=swap
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
