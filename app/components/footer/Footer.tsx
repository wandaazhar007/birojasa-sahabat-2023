'use client'
import './footer.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { faGoogle, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="box-container">
            <div className="footer-one">
              <div className="col-left">
                <h1>Birojasa Sahabat</h1>
                <p>Urus Surat Kendaraan Jadi Lebih Mudah.</p>
              </div>
              <div className="col-right">
                <div className="ul-one">
                  <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/services">Layanan</Link></li>
                    <li><Link href="/about">Tentang</Link></li>
                  </ul>
                </div>
                <div className="ul-two">
                  <ul>
                    <li><Link href="/faq">Faq's</Link></li>
                    <li><Link href="/reviews">Ulasan</Link></li>
                    <li><Link href="/privacy-policy">Ketentuan</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-two">
              <div className="header">
                <p>Copyright BIRO JASA SAHABAT B.V. 2023 ©</p>
                <ul>
                  <li>
                    <Link href="https://api.whatsapp.com/send?phone=6281318927898&amp;text=Assalamualaikum pak, Saya mau konsultasi perihal surat-surat kendaraan Saya"><FontAwesomeIcon icon={faWhatsapp} className="icons-social-media" /></Link>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPhoneFlip} className="icons-social-media" />
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faGoogle} className="icons-social-media" />
                  </li>
                </ul>
              </div>
              <div className="content">
                <p>Kebijakan Privasi ini disertakan sebagai bagian dari ketentuan penggunaan Platform kami. Kebijakan Privasi berikut menjelaskan bagaimana kami mengumpulkan, menggunakan, mengalihkan, mengungkapkan dan melindungi Informasi Pribadi Anda yang didapatkan melalui Platform.
                  Dengan mengunjungi, menggunakan dan/atau mendaftar di Platform, Anda setuju dan mengakui bahwa Anda telah membaca, memberikan persetujuan kepada kami dan menerima Kebijakan Privasi dan praktik-praktik yang dijelaskan dalam Kebijakan Privasi ini.
                  Mohon agar dibaca secara teliti untuk memastikan Anda memahami praktik-praktik kebijakan privasi kami.
                </p>
                <h1>Notes</h1>
                <p>Informasi Pribadi dapat dikumpulkan secara otomatis dari Anda dengan beberapa cara ketika Anda mengunjungi, mendaftar di Platform, atau menggunakan Layanan dan kegiatan yang tersedia di Platform.Informasi Pribadi diperlukan untuk kinerja yang memadai atas kesepakatan antara Anda dengan kami dan untuk memungkinkan kami mematuhi kewajiban hukum kami. </p>
              </div>
            </div>
            <p className="credit">Made with <FontAwesomeIcon icon={faHeart} className="icons" /> by <Link href="https://www.instagram.com/wanda_azharr/" target="_blank">wanda azhar</Link> in Michigan</p>
          </div>
        </div>
      </footer>
      <div className="margin-footer"></div>
    </>
  );
}

export default Footer;