'use client'
import './commitment.scss';
import Image from "next/image";
import { motion } from "framer-motion";

const Commitment: React.FC = () => {
  return (
    <section className="commitment">
      <div className="container">
        <div className="box-container">
          <motion.div
            initial={{ opacity: 1, scale: 1, x: -200 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="col-left">
            <p className="title">Komitmen Kami</p>
            <h1>Biro Jasa Sahabat dimulai dari sebuah rasa kepedulian terhadap masalah yang dihadapi oleh orang sekitar</h1>
            <p className="desc">Dalam menjaga kredibilitas, kami sangat menjunjung tinggi kepuasaan layanan kami kepada pala klien-klien kami. Sudah terbukti lebih dari sepuluh tahun para klien kami tetap setia menggunakan jasa kami sebagai mitra dalam mengurus kelengkapan surat-surat kendaraannya.</p>
            <p className="desc">Pada Februari 2017 Biro Jasa Sahabat mulai menembangkan sayapnya dengan bantuan teknologi dan menejemen tim yang solid. Rasa kepedulian kami terhadap permasalahan warga sangat tinggi dibidang surat-surat kendaraan. Semua data klien-klien kami selalu kami jaga kerahasiaanya sehingga tidak ada kebocoran data untuk disalah gunakan baik untuk promosi atau sebagainya</p>
          </motion.div>
          <div className="col-right">
            <motion.div
              initial={{ opacity: 0, scale: 1, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="images one">
              <Image src={'/images/commitment-1.jpg'} width={300} height={300} alt="biro jasa sahabat" className="img" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 1, x: -50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="images two">
              <Image src={'/images/commitment-2.jpg'} width={300} height={300} alt="biro jasa sahabat" className="img" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 1, y: -50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="images three">
              <Image src={'/images/team-3.jpg'} width={300} height={300} alt="biro jasa sahabat" className="img" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Commitment;