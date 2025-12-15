import type { Metadata } from 'next'
import ServicesBox from '../components/servicesBox/ServicesBox'
import { JsonLd } from '../components/seo/JsonLd'
import './servicesPage.scss'

const SITE_URL = 'https://birojasa-sahabat.com'
const PATH = '/layanan'

export const metadata: Metadata = {
  title: 'Layanan Pengurusan STNK | Perpanjangan, Balik Nama, Mutasi',
  description:
    'Daftar layanan Birojasa Sahabat: perpanjangan STNK tahunan & 5 tahunan, balik nama, ubah bentuk/warna, mutasi masuk, ganti nomor plat, STNK hilang/rusak, dan plat custom. Lihat persyaratan tiap layanan.',
  alternates: { canonical: PATH },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: PATH,
    siteName: 'Birojasa Sahabat',
    title: 'Layanan Pengurusan STNK | Birojasa Sahabat',
    description:
      'Perpanjangan STNK, balik nama, mutasi, ganti plat, STNK hilang/rusak, dan lainnya.',
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/twitter-image.png'],
  },
  robots: { index: true, follow: true },
}

export default function ServicesPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Layanan', item: `${SITE_URL}${PATH}` },
    ],
  }

  // Anchor mengikuti id yang kita set di ServicesBox
  const items = [
    ['Perpanjang STNK Tahunan', 'perpanjang-stnk-tahunan'],
    ['Perpanjang STNK 5 Tahunan', 'perpanjang-stnk-5-tahunan'],
    ['Balik Nama', 'balik-nama'],
    ['Ubah Bentuk/Warna', 'ubah-bentuk-warna'],
    ['Mutasi Masuk', 'mutasi-masuk'],
    ['Ganti Nomor Plat', 'ganti-nomor-plat'],
    ['STNK Hilang/Rusak', 'stnk-hilang-rusak'],
    ['No Plat Custom (Pilihan)', 'no-plat-custom-pilihan'],
  ] as const

  const servicesJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${SITE_URL}${PATH}#collection`,
    url: `${SITE_URL}${PATH}`,
    name: 'Layanan Pengurusan STNK',
    description:
      'Daftar layanan pengurusan STNK beserta persyaratan di Birojasa Sahabat.',
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Birojasa Sahabat',
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListOrder: 'https://schema.org/ItemListUnordered',
      itemListElement: items.map(([name, id], idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name,
        url: `${SITE_URL}${PATH}#${id}`,
      })),
    },
  }

  return (
    <main className="container">
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={servicesJsonLd} />

      {/* 1 H1 untuk seluruh halaman */}
      <header style={{ padding: '24px 0' }}>
        <h1 className='headingLayanan'>Layanan Pengurusan STNK</h1>
        <p className='descLayanan'>
          Pilih layanan yang Anda butuhkan dan cek persyaratan dokumen di setiap
          layanan di bawah ini.
        </p>
      </header>

      <ServicesBox />
    </main>
  )
}
