import type { Metadata } from 'next'
import Commitment from '../components/commitment/Commitment'
import Founder from '../components/founder/Founder'
import Mission from '../components/mission/Mission'
import Story from '../components/story/Story'
import Team from '../components/team/Team'
import { JsonLd } from '../components/seo/JsonLd'
import './aboutPage.scss'

const SITE_URL = 'https://birojasa-sahabat.com'
const PATH = '/about' // sesuaikan jika route berbeda

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Tentang Kami',
  description:
    'Kenali Birojasa Sahabat: misi, cerita, komitmen layanan, serta tim yang membantu pengurusan STNK lebih mudah, cepat, dan terpercaya di Indonesia.',
  alternates: { canonical: PATH },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: PATH,
    siteName: 'Birojasa Sahabat',
    title: 'Tentang Kami | Birojasa Sahabat',
    description:
      'Misi, cerita, komitmen, founder, dan tim Birojasa Sahabat untuk layanan pengurusan STNK yang mudah dan terpercaya.',
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/twitter-image.png'],
  },
  robots: { index: true, follow: true },
}

export default function AboutPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Tentang', item: `${SITE_URL}${PATH}` },
    ],
  }

  // Organization: pakai data yang memang tampil di halaman (founders + timeline)
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'Birojasa Sahabat',
    url: SITE_URL,
    description:
      'Birojasa Sahabat membantu pengurusan STNK dengan proses yang mudah, cepat, dan terpercaya.',
    foundingDate: '2017-02', // dari cerita "Pada Februari 2017..."
    founder: [
      { '@type': 'Person', name: 'Wanda Azhar', jobTitle: 'Co-founder' },
      { '@type': 'Person', name: 'Tatan Mulyana', jobTitle: 'Co-founder & CEO' },
    ],
  }

  const aboutPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${SITE_URL}${PATH}#about`,
    url: `${SITE_URL}${PATH}`,
    name: 'Tentang Kami | Birojasa Sahabat',
    description:
      'Informasi tentang misi, cerita, komitmen, founder, dan tim Birojasa Sahabat.',
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Birojasa Sahabat',
    },
    mainEntity: { '@id': `${SITE_URL}/#organization` },
  }

  return (
    <main>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={organizationJsonLd} />
      <JsonLd data={aboutPageJsonLd} />

      {/* 1 H1 untuk halaman About */}
      <header className="container" style={{ padding: '24px 0' }}>
        <h1 className="headingAbout">Tentang Birojasa Sahabat</h1>
        <p className='descAbout'>
          Kami membantu orang yang sibuk agar pengurusan STNK dan berkas kendaraan
          terasa lebih mudah, cepat, dan terpercaya.
        </p>
      </header>

      <Mission />
      <Story />
      <Commitment />
      <Founder />
      <Team />
    </main>
  )
}
