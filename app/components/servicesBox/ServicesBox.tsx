'use client'
import './servicesBox.scss';
import { motion } from 'framer-motion';

const ServicesBox: React.FC = () => {
  return (
    <div className="services-page">
      <div className="container">
        <div className="box-container">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="box">
            <h1 className="title">Perpanjang STNK Tahunan</h1>
            <h2 className="sub-title">Persyaratan:</h2>
            <ul>
              <li>STNK Asli</li>
              <li>KTP Asli</li>
              <li>Surat Kuasa</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="box">
            <h1 className="title">Perpanjang STNK 5 Tahunan</h1>
            <h2 className="sub-title">Persyaratan:</h2>
            <ul>
              <li>STNK Asli</li>
              <li>KTP Asli</li>
              <li>Surat Kuasa</li>
              <li>Cek Fisik (No Rangka, No Kendaraan)</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="box">
            <h1 className="title">Balik Nama</h1>
            <h2 className="sub-title">Persyaratan:</h2>
            <ul>
              <li>BPKB Asli</li>
              <li>STNK Asli</li>
              <li>Fotocopy KTP Pemilik Baru</li>
              <li>Surat Kuasa</li>
              <li>Cek Fisik (No Rangka, No Kendaraan)</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="box">
            <h1 className="title">Ubah Bentuk/Warna</h1>
            <h2 className="sub-title">Persyaratan:</h2>
            <ul>
              <li>BPKB Asli</li>
              <li>STNK Asli</li>
              <li>KTP Asli</li>
              <li>Surat Kuasa</li>
              <li>Cek Fisik (No Rangka, No Kendaraan)</li>
              <li>Rekomendasi Bengkel Resmi</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="box">
            <h1 className="title">Mutasi Masuk</h1>
            <h2 className="sub-title">Persyaratan:</h2>
            <ul>
              <li>BPKB Asli</li>
              <li> Arsip BPKB (dari luar daerah)</li>
              <li>STNK Asli</li>
              <li>Arsip STNK</li>
              <li>KTP Asli</li>
              <li>Surat Kuasa</li>
              <li>Cek Fisik (No Rangka, No Kendaraan)</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="box">
            <h1 className="title">Ganti Nomor Plat</h1>
            <h2 className="sub-title">Persyaratan:</h2>
            <ul>
              <li>BPKB Asli</li>
              <li>STNK Asli</li>
              <li>KTP Asli</li>
              <li>Surat Kuasa</li>
              <li>Cek Fisik (No Rangka, No Kendaraan)</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="box">
            <h1 className="title">STNK Hilang/Rusak</h1>
            <h2 className="sub-title">Persyaratan:</h2>
            <ul>
              <li>BPKB Asli</li>
              <li>STNK Fotocopy (Jika ada)</li>
              <li>KTP Asli</li>
              <li>Surat Kuasa</li>
              <li>Laporan Kehilangan Dari Polsek</li>
              <li>Cek Fisik (No Rangka, No Kendaraan)</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="box">
            <h1 className="title">No Plat Custom (Pilihan)</h1>
            <h2 className="sub-title">Persyaratan:</h2>
            <ul>
              <li>BPKB Asli</li>
              <li>STNK Asli</li>
              <li>KTP Asli</li>
              <li>Surat Kuasa</li>
              <li>Nomor yang dipilih</li>
              <li>Cek Fisik (No Rangka, No Kendaraan)</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ServicesBox;