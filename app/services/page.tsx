import type { Metadata } from 'next';
import ServicesBox from "../components/servicesBox/ServicesBox";

export const metadata: Metadata = {
  title: 'Layanan Pengurusan STNK Terpercaya di Indonesia | Birojasa Sahabat',
  description: 'Birojasa Sahabat adalah mitra terpercaya Anda dalam pengurusan STNK. Kami menawarkan beragam layanan termasuk perpanjangan STNK, balik nama, ubah bentuk/warna, mutasi masuk, ganti nomor plat, dan lainnya. Nikmati kemudahan dan kecepatan dalam mengurus berkas kendaraan Anda bersama kami. #dikantorAja untuk solusi terbaik.',
}

const ServicesPage: React.FC = () => {
  return (
    <ServicesBox />
  );
}

export default ServicesPage;