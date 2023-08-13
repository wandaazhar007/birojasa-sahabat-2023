import type { Metadata } from 'next';
import PrivacyPolicyForPage from "../components/privacyPolicyForPage/PrivacyPolicyForPage";

export const metadata: Metadata = {
  title: 'Kebijakan Privasi - Birojasa Sahabat | Perlindungan Data Pribadi',
  description: 'Kami menghargai privasi Anda. Baca kebijakan privasi Birojasa Sahabat untuk memahami bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda dalam penggunaan layanan pengurusan STNK. Keamanan informasi Anda adalah prioritas kami.',
}
const PrivacyPage: React.FC = () => {
  return (
    <PrivacyPolicyForPage />
  );
}

export default PrivacyPage;