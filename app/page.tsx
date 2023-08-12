import Image from 'next/image'
import styles from './page.module.css'
import Hero from './components/hero/Hero'
import CoverageArea from './components/coverageArea/CoverageArea'
import Services from './components/services/Services'
import AdsOne from './components/adsOne/AdsOne'
import Flow from './components/flow/Flow'
import Choose from './components/choose/Choose'

export default function Home() {
  return (
    <>
      <Hero />
      <CoverageArea />
      <Services />
      <AdsOne />
      <Flow />
      <Choose />
    </>
  )
}
