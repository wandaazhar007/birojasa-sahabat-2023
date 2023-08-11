'use client'
import './coverageArea.scss';
import Image from "next/image";
import { motion } from "framer-motion";

const CoverageArea = () => {
  return (
    <section className="coverage-area">
      <div className="container">
        <h1>Area Jangkauan</h1>
        <motion.div
          initial={{ opacity: 1, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="box-container">
          <div className="box">
            <Image src={'/images/jakarta.png'} alt="birojasa stnk bpkb jakarta" width={100} height={100} />
          </div>
          <div className="box">
            <Image src={'/images/bogor.png'} alt="birojasa stnk bpkb bogor" width={100} height={100} />
          </div>
          <div className="box">
            <Image src={'/images/depok.png'} alt="birojasa stnk bpkb depok" width={100} height={100} />
          </div>
          <div className="box">
            <Image src={'/images/tangerang.png'} alt="birojasa stnk bpkb tangerang" width={100} height={100} />
          </div>
          <div className="box">
            <Image src={'/images/tangerang-selatan.png'} alt="birojasa stnk bpkb tangerang selatan" width={100} height={100} />
          </div>
          <div className="box">
            <Image src={'/images/bekasi.png'} alt="birojasa stnk bpkb bekasi" width={100} height={100} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CoverageArea;