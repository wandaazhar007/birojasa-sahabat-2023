'use client'
import './services.scss';
import { faBicycle, faBook, faCar, faCompressAlt, faEdit, faMotorcycle, faTint, faTruck, faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const Services: React.FC = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="box-container">
          <motion.div
            initial={{ opacity: 1, scale: 1, x: -300 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="col-left">
            <h1 className="title">Layanan Kami</h1>
            <h1 className="sub-title">
              Jangan bingung dengan <span>persyaratan</span>. <br />Persyaratan dan berkas bisa <span>kami bantu</span>.
            </h1>
            <p className="description">Bagi Anda yang mengalami masalah dengan persyaratan, silahkan konsultasikan kepada kami. biar tim kami yang bantu sampai kelengkapan surat menyurat kendaraan Anda selesai</p>
            <p className="social-proof">
              Lebih dari <span>1000</span> berkas sudah kami bantu
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 1, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="col-right">
            <div className="box">
              <FontAwesomeIcon icon={faBook} className="icons" />
              Perpanjang STNK Tahunan
            </div>
            <div className="box">
              <FontAwesomeIcon icon={faMotorcycle} className="icons" />
              Perpanjang STNK 5 Tahunan
            </div>
            <div className="box">
              <FontAwesomeIcon icon={faCar} className="icons" />
              Balik Nama
            </div>
            <div className="box">
              <FontAwesomeIcon icon={faTint} className="icons" />
              Ubah Bentuk / Warna
            </div>
            <div className="box">
              <FontAwesomeIcon icon={faTruck} className="icons" />
              Mutasi / Cabut Berkas
            </div>
            <div className="box">
              <FontAwesomeIcon icon={faBicycle} className="icons" />
              Mutasi Masuk
            </div>
            <div className="box">
              <FontAwesomeIcon icon={faEdit} className="icons" />
              Ganti Nomor Plat
            </div>
            <div className="box">
              <FontAwesomeIcon icon={faWarning} className="icons" />
              STNK Hilang
            </div>
            <div className="box">
              <FontAwesomeIcon icon={faCompressAlt} className="icons" />
              Nomor Plat Costum
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Services;