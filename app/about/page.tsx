import type { Metadata } from 'next';
import Commitment from "../components/commitment/Commitment";
import Founder from "../components/founder/Founder";
import Mission from "../components/mission/Mission";
import Story from "../components/story/Story";
import Team from "../components/team/Team";

export const metadata: Metadata = {
  title: 'Tentang Kami - Birojasa Sahabat | Layanan Pengurusan STNK Terpercaya di Indonesia',
  description: 'Selamat datang di halaman Tentang Kami Birojasa Sahabat. Kami adalah mitra tepercaya untuk pengurusan STNK di Indonesia. Dengan komitmen kami yang berfokus pada kemudahan dan kenyamanan pelanggan, Anda dapat mengandalkan layanan terbaik dari kami. Temukan solusi lengkap dan cepat #dikantorAja bersama kami',
}

const AboutPage: React.FC = () => {
  return (
    <>
      <Mission />
      <Story />
      <Commitment />
      <Founder />
      <Team />
    </>

  );
}

export default AboutPage;