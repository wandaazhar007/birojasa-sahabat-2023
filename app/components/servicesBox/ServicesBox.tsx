'use client'
import './servicesBox.scss'
import { motion } from 'framer-motion'

type Service = {
  title: string
  id: string
  requirements: string[]
}

const SERVICES: Service[] = [
  {
    title: 'Perpanjang STNK Tahunan',
    id: 'perpanjang-stnk-tahunan',
    requirements: ['STNK Asli', 'KTP Asli', 'Surat Kuasa'],
  },
  {
    title: 'Perpanjang STNK 5 Tahunan',
    id: 'perpanjang-stnk-5-tahunan',
    requirements: [
      'STNK Asli',
      'KTP Asli',
      'Surat Kuasa',
      'Cek Fisik (No Rangka, No Kendaraan)',
    ],
  },
  {
    title: 'Balik Nama',
    id: 'balik-nama',
    requirements: [
      'BPKB Asli',
      'STNK Asli',
      'Fotocopy KTP Pemilik Baru',
      'Surat Kuasa',
      'Cek Fisik (No Rangka, No Kendaraan)',
    ],
  },
  {
    title: 'Ubah Bentuk/Warna',
    id: 'ubah-bentuk-warna',
    requirements: [
      'BPKB Asli',
      'STNK Asli',
      'KTP Asli',
      'Surat Kuasa',
      'Cek Fisik (No Rangka, No Kendaraan)',
      'Rekomendasi Bengkel Resmi',
    ],
  },
  {
    title: 'Mutasi Masuk',
    id: 'mutasi-masuk',
    requirements: [
      'BPKB Asli',
      'Arsip BPKB (dari luar daerah)',
      'STNK Asli',
      'Arsip STNK',
      'KTP Asli',
      'Surat Kuasa',
      'Cek Fisik (No Rangka, No Kendaraan)',
    ],
  },
  {
    title: 'Ganti Nomor Plat',
    id: 'ganti-nomor-plat',
    requirements: [
      'BPKB Asli',
      'STNK Asli',
      'KTP Asli',
      'Surat Kuasa',
      'Cek Fisik (No Rangka, No Kendaraan)',
    ],
  },
  {
    title: 'STNK Hilang/Rusak',
    id: 'stnk-hilang-rusak',
    requirements: [
      'BPKB Asli',
      'STNK Fotocopy (Jika ada)',
      'KTP Asli',
      'Surat Kuasa',
      'Laporan Kehilangan Dari Polsek',
      'Cek Fisik (No Rangka, No Kendaraan)',
    ],
  },
  {
    title: 'No Plat Custom (Pilihan)',
    id: 'no-plat-custom-pilihan',
    requirements: [
      'BPKB Asli',
      'STNK Asli',
      'KTP Asli',
      'Surat Kuasa',
      'Nomor yang dipilih',
      'Cek Fisik (No Rangka, No Kendaraan)',
    ],
  },
]

const ServicesBox: React.FC = () => {
  return (
    <div className="services-page">
      <div className="container">
        <div className="box-container">
          {SERVICES.map((s) => (
            <motion.section
              key={s.id}
              id={s.id}
              aria-labelledby={`${s.id}-title`}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="box"
            >
              {/* H2 (bukan H1) */}
              <h2 className="title" id={`${s.id}-title`}>
                {s.title}
              </h2>

              <h3 className="sub-title">Persyaratan:</h3>
              <ul>
                {s.requirements.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServicesBox
