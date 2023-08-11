import Image from 'next/image'
import styles from './page.module.css'
import Hero from './components/hero/Hero'
import CoverageArea from './components/coverageArea/CoverageArea'
import Services from './components/services/Services'

export default function Home() {
  return (
    <>
      <Hero />
      <CoverageArea />
      <Services />
    </>
  )
}
