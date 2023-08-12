'use client'
import './choose.scss';
import Image from "next/image";
import { motion } from "framer-motion";

const Choose = () => {
  return (
    <section className="choose">
      <div className="container">
        <div className="box-container">
          <motion.div
            initial={{ opacity: 1, scale: 1, y: 100 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="header">
            <h1>Kenapa Pilih Biro Jasa Sahabat?</h1>
            <p>Lebih dari 1000 orang sudah kami bantu. Dengan berbekal pengalaman dan koneksi kami, membuat kami lebih mudah dan cepat dalam mengurus surat-surat kelengkapan kendaraan.</p>
            <p></p>
          </motion.div>
          <div className="content">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="box">
              <Image src={'/images/choose-1.png'} width={150} height={150} alt="onyz" />
              <h1>Secepat Kilat</h1>
              <p>Pagi jemput berkas sore Antar Surat Kendaraan Anda yang sudah selesai. Anda tidak perlu bolak-balik sana-sini</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="box">
              <Image src={'/images/choose-2.png'} width={150} height={150} alt="onyz" />
              <h1>Berpengalaman</h1>
              <p>Lebih dari 10 tahun tim kami mengurus surat-surat kendaraan bermotor se Jabodetabek. Sehingga sudah memiliki relasi yang kuat</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="box">
              <Image src={'/images/choose-3.png'} width={150} height={150} alt="onyz" />
              <h1>Transparan</h1>
              <p>Kami selalu transparan mengenai biaya. Semua kwitansi akan kami serahkan ke Anda. Semua biaya mengacu pada aturan yang sedang berlaku.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="box">
              <Image src={'/images/choose-4.png'} width={150} height={150} alt="onyz" />
              <h1>Hemat</h1>
              <p>Dengan hadirnya kami. pengurusan surat-surat kendaraan Anda bisa jadi lebih hemat. Anda tidak perlu izin dari kantor untuk mengurusnya</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Choose;
