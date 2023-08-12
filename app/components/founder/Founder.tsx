'use client'
import './founder.scss';
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Founder: React.FC = () => {
  return (
    <section className="founder">
      <div className="container">
        <motion.div
          initial={{ opacity: 1, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="title">Our founders</h1>
        </motion.div>
        <div className="box-container">
          <motion.div
            initial={{ opacity: 1, scale: 1, x: -200 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="box">
            <motion.div
              initial={{ opacity: 1, scale: 1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 7 }}
              className="image-circle">
              <Image src={'/images/wanda-azhar.jpg'} width={100} height={100} alt="founder biro jasa sahabat wanda azhar" />
            </motion.div>
            <Link href="https://instagram.com/wanda_azharr/" target="_blank">
              <FontAwesomeIcon icon={faSquareArrowUpRight} className="icon" /><span className="name">Wanda Azhar</span>
            </Link>
            <p className="title">Co-founder</p>
            <p className="desc">Dengan berbekal keahliannya di bidang IT. Wanda melihat peluang bahwa biro jasa ini akan memberikan dampak yang positif kepada masyarakat dengan memberikan moto <span>"Kejujuran, Komitmen, dan Tanggung jawab diatas segalanya" </span>. Maka dibentuklah Biro Jasa Sahabat ini sebelum akhirnya bergabung dengan perusahaan Advertising di Amerika</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 1, scale: 1, y: 200 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="box">
            <div className="image-circle">
              <Image src={'/images/tatan-mulyana.jpg'} width={100} height={100} alt="founder biro jasa sahabat tatan mulyana" />
            </div>
            <Link href="https://www.facebook.com/profile.php?id=100007598418954" target="_blank">
              <FontAwesomeIcon icon={faSquareArrowUpRight} className="icon" /><span className="name">Tatan Mulyana</span>
            </Link>
            <p className="title">Co-founder & CEO</p>
            <p className="desc">Dibekali dengan pengalaman dan relasi yang dimiliki pada bidang biro jasa STNK dan BPKB, Tatan Mulyana mampu menjalani dengan baik, cepat, dan akurat. Sebelum akhirnya membentuk kantor biro jasa sahabat bersama dengan keponakannya yaitu Wanda Azhar pada bulan Februari 2017 dan berkembang sampai dengan saat ini </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Founder;