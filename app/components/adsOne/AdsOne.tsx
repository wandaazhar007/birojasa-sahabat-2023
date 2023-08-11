'use client'
import './adsOne.scss';
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { motion } from "framer-motion";

const AdsOne = () => {
  return (
    <section className="adsOne">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="box-container">
          <h1>Dalam misi menyelesaikan surat-surat kendaraan lebih mudah untuk semua</h1>
          <p> <Link href="/about"><FontAwesomeIcon icon={faSquareArrowUpRight} className="icon" /><span>Baca Selengkapnya</span>  </Link>tentang misi dan visi kami</p>
        </motion.div>
      </div>
    </section>
  );
}

export default AdsOne;