import './styles/global.scss';
import { Inter } from 'next/font/google'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import GoogleAnalytics from './components/GoogleAnalytics';
import Script from 'next/script';
const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Script>
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-KN442N46');
        `}
      </Script>
      <GoogleAnalytics GA_MEASUREMENT_ID='G-DH3PG8W6PJ' />
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />

        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KN442N46"
            height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe>
        </noscript>
      </body>
    </html>
  )
}
