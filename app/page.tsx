import Image from 'next/image'
import styles from './page.module.css'
import Hero from './components/hero/Hero'
import CoverageArea from './components/coverageArea/CoverageArea'

export default function Home() {
  return (
    <>
      <Hero />
      <CoverageArea />
    </>
  )
}
