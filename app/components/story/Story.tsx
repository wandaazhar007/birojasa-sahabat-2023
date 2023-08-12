'use client'
import './story.scss';
import Image from "next/image";
import { motion } from "framer-motion";

const Story: React.FC = () => {
  return (
    <section className="story">
      <div className="container">
        <div className="box-container">
          <motion.div
            initial={{ opacity: 0, scale: 1, x: -50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="col-left">
            <Image src={'/images/story.png'} width={300} height={300} alt="biro jasa sahabat" />
          </motion.div>
          <motion.div
            initial={{ opacity: 1, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="col-right">
            <p className="title">Sedikit Cerita</p>
            <h1>Tetangga ingin mengganti STNK yang rusak.</h1>
            <p className="desc">Berawal dari membantu tetangga yang STNK nya sudah rusak, dengan senang hati bapak Tatan membantu tetangganya mondar-mandir tanya sana-sini sampai akhirnya STNK nya selesai  </p>
            <p className="desc two">Pada tahun 2010, zaman dimana Internet belum secanggih sekarang, dengan bermodalkan komunikasi yang baik, bapak Tatan berhasil memiliki relasi yang baik dengan para petugas. sehingga lebih memudahkan lagi proses pengurusan STNK  </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Story;