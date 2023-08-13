import type { Metadata } from 'next';
import FaqForPage from "../components/faqForPage/faqForPage";

export const metadata: Metadata = {
  title: 'Pertanyaan yang Sering Diajukan (FAQ) - Birojasa Sahabat | Informasi Pengurusan STNK',
  description: 'Temukan jawaban untuk pertanyaan yang sering diajukan mengenai layanan pengurusan STNK di Birojasa Sahabat. Dapatkan informasi lengkap tentang proses perpanjangan STNK, balik nama, mutasi kendaraan, dan banyak lagi. Jika Anda memiliki pertanyaan, Anda akan menemukan jawabannya di halaman FAQ kami.',
}

const FaqPage: React.FC = () => {
  return (
    <FaqForPage />
  );
}

export default FaqPage;