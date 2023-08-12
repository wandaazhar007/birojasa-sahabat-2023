'use client'
import './mission.scss';
import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";

const Mission: React.FC = () => {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.25 }}
      exit={{ opacity: 1 }}
    >
      <Head>
        <title>Tentang Birojasa Sahabat</title>
        <meta
          name="description"
          content="kami sangat menjunjung tinggi kepuasaan layanan kami kepada pala klien-klien kami. Sudah terbukti lebih dari sepuluh tahun para klien kami tetap setia menggunakan jasa kami sebagai mitra dalam mengurus kelengkapan surat-surat kendaraannya. "
          key="desc"
        />

        <meta
          name="keywords"
          content="Birojasa, Birojasa, Birojasa Tangerang Selatan, Birojasa Tangsel, Birojasa Tangerang, Biro Jasa STNK, Birojasa Murah, Biro Jasa KIR, Birojasa Bpkb Balik Nama, Birojasa Mutasi Kendaraan" />

        <meta
          property="og:image"
          content="/images/favicon.png"
        />

        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <div className="margin-hero-about"></div>
      <section className="about-hero">
        <div className="container">
          <div className="box-container">
            <div className="header">
              <p>Misi Kami</p>
              <h1>
                Membantu orang yang sibuk dan tidak sempat mengurus kelengkapan surat-surat kendaraannya
              </h1>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 1, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="image">
              <Image src={'/images/banner-about.png'} width={500} height={100} alt="biro jasa sahabat" />
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>

  );
}

export default Mission;