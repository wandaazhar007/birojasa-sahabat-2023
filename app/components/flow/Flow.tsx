'use client'
import './flow.scss';
import { faComment, faGear, faHandshake, faMoneyBill, faPhoneSlash, faSmile, faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { motion } from "framer-motion";

const Flow = () => {
  return (
    <section className="flow">
      <div className="container">
        <div className="box-container">
          <div className="col-left">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="box">
              <FontAwesomeIcon icon={faPhoneSlash} className="icons" />
              <h1 className="title">Call/Chat</h1>
              <p>Anda cukup <Link href="tel:081318927898"><FontAwesomeIcon icon={faSquareArrowUpRight} className="arrow-icons" />  <span>telepon</span></Link> atau Anda juga bisa <Link href="https://api.whatsapp.com/send?phone=6281318927898&amp;text=Assalamualaikum pak, Saya mau konsultasi perihal surat-surat kendaraan Saya" target="_blank"><FontAwesomeIcon icon={faSquareArrowUpRight} className="arrow-icons" /> <span>chat</span></Link> kami.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="box">
              <FontAwesomeIcon icon={faHandshake} className="icons" />
              <h1 className="title">Konsultasi</h1>
              <p>kami akan setia mendengar dan memberi solusi yang tepat</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="box">
              <FontAwesomeIcon icon={faMoneyBill} className="icons" />
              <h1 className="title">Negosiasi</h1>
              <p>Kami selalu mengedepankan win-win solution dan tidak memberatkan satu pihak</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="box">
              <FontAwesomeIcon icon={faHandshake} className="icons" />
              <h1 className="title">Deal</h1>
              <p>Kami akan datang langsung ke tempat Anda untuk mengambil berkas Anda</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="box">
              <FontAwesomeIcon icon={faGear} className="icons" />
              <h1 className="title">Proses</h1>
              <p>Selama proses, Anda berhak bertanya tentang status berkas Anda</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="box">
              <FontAwesomeIcon icon={faSmile} className="icons" />
              <h1 className="title">Finish</h1>
              <p>Kami akan langsung mengantar surat-surat kendaraan ke rumah/kantor Anda</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="box">
              <FontAwesomeIcon icon={faComment} className="icons" />
              <h1 className="title">Tulis Review</h1>
              <p>Review Anda akan membantu banyak orang, sangat kami anjurkan</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="box">
              <FontAwesomeIcon icon={faHandshake} className="icons" />
              <h1 className="title">Silaturahmi</h1>
              <p>Setelah semua proses selesai, jangan ragu menghubungi kami kembali</p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 1, scale: 1, x: -300 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="col-right">
            <h1 className="title">Jaminan</h1>
            <h1 className="sub-title">
              Bayar jasa kami sesuai dengan <span>kepuasan</span> yang Anda <span>dapatkan</span>
            </h1>
            <p className="description">
              Anda boleh membayar sesuai dengan kepuasan layanan kami jika proses penyelesaian tidak sesuai dengan janji yang sudah disepakati
            </p>
            <p className="read-more">
              <FontAwesomeIcon icon={faSquareArrowUpRight} className="icon" /> <Link href="privacy-policy"><span>Baca Selengkapnya</span> </Link> tentang ketentuan biaya jasa
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Flow;