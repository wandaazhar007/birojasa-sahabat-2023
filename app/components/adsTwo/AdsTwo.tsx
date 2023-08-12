'use client'
import './adsTwo.scss';
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { motion } from "framer-motion";

const AdsTwo = () => {
  return (
    <section className="adsTwo">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="box-container">
          <h1>Berawal dari <span> membantu tetangga</span>, sekarang kami berkembang dan <span>terpercaya</span></h1>
          <p>
            <Link href="/reviews">
              <FontAwesomeIcon icon={faSquareArrowUpRight} className="icon" />
              <span className="read-more">Lihat ulasan </span>
            </Link>
            dari orang-orang yang sudah kami bantu. menolong itu menyenangkan loh!
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default AdsTwo;