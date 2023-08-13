'use client'
import './reviewComponent.scss';

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { motion } from "framer-motion";

const ReviewComponent: React.FC = () => {
  return (
    <section className="review">
      <div className="container">
        <div className="box-container">
          <motion.div
            initial={{ opacity: 1, scale: 1, y: 100 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="header">
            <p>Apa kata orang tentang biro jasa sahabat</p>
            <h1>Rated 5/5 on <FontAwesomeIcon icon={faStar} className="icon" /> <span>Google</span></h1>
          </motion.div>
          <div className="content">
            <div className="col-left">
              <motion.div
                initial={{ opacity: 1, scale: 1, x: -300 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="box heading">
                <h1>Stories from our customers</h1>
                <p className="desc">Get inspired by these stories</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="box">
                <p className="review-content">Mantap si Bapak , reccommended pelayanannya..bisa dibilang paling cepat dan harga terjangkau ..terima kasih Pak 👍👍👍.</p>
                <p className="name">Cani #05</p>
              </motion.div>
            </div>
            <div className="col-right">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="box">
                <p className="review-content">Proses cepat selesai.. aman... kurang lebih 6 jam sdh beres... terimakasih... semoga berkah.</p>
                <p className="name">Semoga Berkah</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="box">
                <p className="review-content">Terima kasih pak tatan yang telah membantu mutasi balik nama BPKB-STNK kendaraan saya, semoga berkah dan sukses terus untuk pak tatan usahanya.. Aamiin. Biro jasa yang recommended untuk yang mau mengurus perpanjangan, mutasi, balik nama BPKB-STNK.. Duduk manis dirumah, berkas dijemput dan beberapa hari/minggu selesai.</p>
                <p className="name">Sunar Conar</p>
              </motion.div>
            </div>
          </div>
          <div className="footer-review">
            <p>See our 22 reviews on <FontAwesomeIcon icon={faStar} className="icon" /> <Link href="https://g.page/r/CQxApMZQ-s27EB0/review" target="_blank">Google</Link></p>
          </div>
        </div>
      </div >
    </section >
  );
}

export default ReviewComponent;