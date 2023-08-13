'use client'
import './faqComponent.scss';
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { motion } from "framer-motion";

const FaqComponent: React.FC = () => {
  return (
    <section className="faq">
      <div className="container">
        <div className="box-container">
          <motion.div
            initial={{ opacity: 1, scale: 1, y: -100 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="header">
            <h1>Hal-hal yang sering ditanyakan</h1>
            <p>Let&apos;s answer some of your questions.</p>
          </motion.div>
          <ul className="accordion">
            <motion.li
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <input type="radio" name='accordion' id="first" />
              <label htmlFor="first">Apakah saya harus datang ke kantor Biro Jasa Sahabat?</label>
              <div className="content">
                <p>
                  Tidak, Anda tidak perlu datang ke kantor kami. Kami yang akan datang menemui Anda baik di kantor ataupun dirumah.
                </p>
              </div>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <input type="radio" name='accordion' id="second" />
              <label htmlFor="second">Apa yang harus saya persiapkan sebelum telepon/konsultasi?</label>
              <div className="content">
                <p>Biasanya kami memerlukan beberapa informasi seperti tahun kendaraan, jenis kendaraan, lokasi kendaraan, dll</p>
              </div>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <input type="radio" name='accordion' id="thrid" />
              <label htmlFor="thrid">Bagaimana jika BKPB saya masih berada di leasing?</label>
              <div className="content">
                <p>Anda bisa membuat surat pengajuan kepada leasing terkait. Kami bisa membantu jika memang Anda tidak sempat mengurusnya</p>
              </div>
            </motion.li>
          </ul>
          <p className="read-more">
            <Link href="/faq"><FontAwesomeIcon icon={faSquareArrowUpRight} className="icon" /> <span>Baca Selengkapnya</span></Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default FaqComponent;