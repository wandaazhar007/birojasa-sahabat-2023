import type { Metadata } from 'next';
import ReviewForPage from "../components/reviewForPage/ReviewForPage";

export const metadata: Metadata = {
  title: 'Ulasan Pelanggan - Birojasa Sahabat | Pengalaman Layanan Pengurusan STNK',
  description: 'Baca ulasan langsung dari pelanggan Birojasa Sahabat tentang pengalaman mereka dalam menggunakan layanan pengurusan STNK kami. Kami bangga memberikan layanan cepat, akurat, dan terpercaya. Temukan pandangan dan pengalaman pelanggan kami di halaman ulasan.',
}

const ReviewsPage: React.FC = () => {
  return (
    <ReviewForPage />
  );
}

export default ReviewsPage;