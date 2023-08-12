'use client'
import './team.scss';
import Image from "next/image";
import { motion } from "framer-motion";

const Team: React.FC = () => {
  return (
    <section className="team">
      <div className="container">
        <div className="box-container">
          <motion.div
            initial={{ opacity: 1, scale: 1, x: -200 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1>Our Team</h1>
            <p>
              Biro jasa stnk menjadi salah satu kebutuhan bagi masyarakat perkotaan yang serba sibuk dan memiliki ribuan kegiatan sehari hari. Apalagi dengan adanya pandemi, kapasitas di kantor pengurusan STNK menjadi semakin sedikit dan juga adanya risiko terpapar penyakit. Hal ini yang mendorong semakin tingginya permintaan layanan jasa tersebut.
              Salah satu biro jasa STNK adalah Birojasa-Sahabat. Birojasa-Sahabat adalah perusahaan profesional yang sudah membantu pengurusan surat untuk 1.000 lebih kendaraan sejak tahun 2017.
            </p>
          </motion.div>
          <div className="grid-image">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="image one"
            >
              <Image src={'/images/team.jpg'} width={700} height={700} alt="team-biro jasa sahabat" />
            </motion.div>
            <motion.div
              initial={{ opacity: 1, scale: 1, y: -200 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="image two"
            >
              <Image src={'/images/team-2.jpg'} width={700} height={700} alt="team-biro jasa sahabat" />
            </motion.div>
            <motion.div
              initial={{ opacity: 1, scale: 1, x: -200 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="image three">
              <Image src={'/images/team-4.jpg'} width={700} height={700} alt="team-biro jasa sahabat" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;