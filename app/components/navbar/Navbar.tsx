'use client'
import './navbar.scss';
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faCommentAlt, faContactCard, faHome } from "@fortawesome/free-solid-svg-icons";
// import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  // console.log(router.pathname);
  return (
    <>
      <header className="navbar">
        <div className="warning">
          Attention! This website store cookies on your device and disclose information in accordance!
        </div>
        <div className="header">
          <div className="container">
            <div className="navigation">
              <div className="logo">
                <Link href="/">
                  <Image width={50} height={50} src='/images/logo.jpg' alt="logo biro jasa sahabat" />
                  <h1>Biro Jasa Sahabat</h1>
                </Link>
              </div>
              <div className="nav">
                <ul>
                  <li>
                    <Link href="/" className={pathName === '/' ? 'active' : ''}><FontAwesomeIcon icon={faHome} className="link-icons" /> Home</Link>
                  </li>
                  <li>
                    <Link href="/services" className={pathName === '/services' ? 'active' : ''}><FontAwesomeIcon icon={faContactCard} className="link-icons" /> Layanan</Link>
                  </li>
                  <li>
                    <Link href="/reviews" className={pathName === '/reviews' ? 'active' : ''}><FontAwesomeIcon icon={faCommentAlt} className="link-icons" /> Reviews</Link>
                  </li>
                  <li>
                    <Link href="/about" className={pathName === '/about' ? 'active' : ''}><FontAwesomeIcon icon={faBook} className="link-icons" /> Tentang</Link>
                  </li>
                  <li>
                    <Link href="/faq" className={pathName === '/faq' ? 'active' : ''}><FontAwesomeIcon icon={faBook} className="link-icons" /> Faq</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="margin-navbar"></div>
    </>
  );
}

export default Navbar;