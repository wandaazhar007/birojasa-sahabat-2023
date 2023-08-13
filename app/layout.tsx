import './styles/global.scss';
import { Inter } from 'next/font/google'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
