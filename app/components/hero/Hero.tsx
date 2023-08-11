'use client'
import './hero.scss';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="box-container">
          <div className="col-left">
            <motion.div
              initial={{ opacity: 1, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1>Ribet <span>bolak balik </span> dan masih harus <span>antri?</span> </h1>
            </motion.div>
            <motion.div
            // initial={{ opacity: 1, x: -300 }}
            // whileInView={{ opacity: 1, x: 0 }}
            // transition={{ duration: 1 }}
            >
              <p>Sekarang tidak perlu izin dari kantor untuk mengurus kelengkapan berkas kendaraan Anda. Cukup <span>#dikantorAja</span> dan tunggu kami ke datang menemui Anda</p>
            </motion.div>
            <div className="social-proof">
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />

              <span>
                Rated 5 stars on <Link href="https://g.page/r/CQxApMZQ-s27EB0/review" target="_blank">Google Review</Link>
              </span>
            </div>
            <Link href="https://api.whatsapp.com/send?phone=6281318927898&amp;text=Assalamualaikum pak, Saya mau konsultasi perihal surat-surat kendaraan Saya" target="_blank">
              <motion.button
                initial={{ opacity: 1, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              > <FontAwesomeIcon icon={faWhatsapp} className="icon" /> Konsultasi Gratis
              </motion.button>
            </Link>
          </div>
          <motion.div
            // animate={{
            //   scale: [1, 1.1, 1.1, 1, 1]
            // }}
            initial={{ opacity: 1, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="col-right">
            <Image src={'/images/hero-birojasa-stnk-bpkb-sahabat.png'} alt="birojasa stnk bpkb birojasa sahabat" width={700} height={700} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;