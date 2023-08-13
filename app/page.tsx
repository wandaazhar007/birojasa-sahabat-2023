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

export const metadata: Metadata = {
  title: 'Birojasa Sahabat - Layanan Pengurusan STNK Terpercaya di Indonesia',
  description: 'Selamat datang di Birojasa Sahabat! Kami siap membantu Anda dengan pengurusan STNK secara efisien dan terpercaya. Dapatkan kemudahan dalam mengurus berkas kendaraan Anda. Layanan cepat dan akurat #dikantorAja. Temukan solusi terbaik bersama kami.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <CoverageArea />
      <Services />
      <AdsOne />
      <Flow />
      <Choose />
      <AdsTwo />
      <FaqComponent />
      <ReviewComponent />
    </>
  )
}
