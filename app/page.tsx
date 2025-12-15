import type { Metadata } from 'next'
import Hero from './components/hero/Hero'
import CoverageArea from './components/coverageArea/CoverageArea'
import Services from './components/services/Services'
import AdsOne from './components/adsOne/AdsOne'
import Flow from './components/flow/Flow'
import Choose from './components/choose/Choose'
import AdsTwo from './components/adsTwo/AdsTwo'
import FaqComponent from './components/faqComponent/FaqComponent'
import ReviewComponent from './components/reviewComponent/ReviewComponent'
import { JsonLd } from './components/seo/JsonLd'

const SITE_URL = 'https://birojasa-sahabat.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Birojasa Sahabat',
    template: '%s | Birojasa Sahabat',
  },
  description:
    'Birojasa Sahabat membantu pengurusan STNK: perpanjangan, balik nama, mutasi, dan layanan terkait. Proses mudah, cepat, dan terpercaya.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: '/',
    siteName: 'Birojasa Sahabat',
    title: 'Birojasa Sahabat | Layanan Pengurusan STNK Terpercaya',
    description:
      'Pengurusan STNK (perpanjangan, balik nama, mutasi) dengan proses mudah, cepat, dan terpercaya.',
    // Siapkan file ini agar share di WA/FB bagus:
    // app/opengraph-image.png (1200x630)
    images: [{ url: '/images/logo.pngfavicon.ico', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export default function Home() {
  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#localbusiness`,
    name: 'Birojasa Sahabat',
    url: SITE_URL,
    description:
      'Layanan pengurusan STNK: perpanjangan, balik nama, mutasi, dan layanan terkait.',
    areaServed: 'ID',
    // Tambahkan hanya jika BENAR & tampil/valid secara bisnis:
    // telephone: '+62xxxxxxxxxx',
    // image: [`${SITE_URL}/opengraph-image.png`],
    // logo: `${SITE_URL}/logo.png`,
    // address: {
    //   '@type': 'PostalAddress',
    //   streetAddress: '...',
    //   addressLocality: '...',
    //   addressRegion: '...',
    //   postalCode: '...',
    //   addressCountry: 'ID',
    // },
    // sameAs: ['https://instagram.com/...', 'https://facebook.com/...'],
  }

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'Birojasa Sahabat',
    inLanguage: 'id-ID',
  }

  return (
    <main>
      {/* JSON-LD */}
      <JsonLd data={websiteJsonLd} />
      <JsonLd data={localBusinessJsonLd} />

      {/* Konten */}
      <Hero />
      <CoverageArea />
      <Services />
      <AdsOne />
      <Flow />
      <Choose />
      <AdsTwo />
      <FaqComponent />
      <ReviewComponent />
    </main>
  )
}
