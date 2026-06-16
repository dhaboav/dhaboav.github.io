import type { BlogItem } from '@/types/blog';

export const blogData: BlogItem[] = [
  {
    slug: 'migrasi-arsitektur-vanilla-js-ke-react-typescript',
    date: '16 Juni 2026',
    dateISO: '2026-06-16',
    tag: 'Web Dev',
    title: 'Eksplorasi Migrasi Portofolio: Dari Vanilla JS ke React TypeScript',
    excerpt:
      'Berbagi cerita di balik keputusan merombak total arsitektur kode web portofolio statis agar lebih scalable, menggunakan konsep custom hooks, dan menerapkan routing berbasis file Markdown.',
  },
  {
    slug: 'optimasi-pipeline-opencv-deteksi-pas-foto',
    date: '12 Mei 2026',
    dateISO: '2026-05-12',
    tag: 'Computer Vision',
    title: 'Membangun Core Pipeline OpenCV untuk Otomatisasi Verifikasi Pas Foto Resmi',
    excerpt:
      'Ulasan teknis mengenai pemanfaatan Haar Cascade untuk deteksi wajah, ekstraksi warna latar belakang dengan HSV space, dan analisis pakaian formal berbasis cosine similarity dengan waktu proses di bawah 5 detik.',
  },
  {
    slug: 'komunikasi-basestation-robotika-krsbi',
    date: '04 April 2026',
    dateISO: '2026-04-04',
    tag: 'Robotics',
    title: 'Merancang Aplikasi Basestation Desktop untuk Transmisi Instruksi Robot Beroda',
    excerpt:
      'Bagaimana cara membangun sistem koordinasi berbasis Wi-Fi lokal untuk mengirimkan instruksi kontrol real-time secara stabil ke dua robot beroda pada kompetisi nasional KRSBI-B.',
  },
  {
    slug: 'kalibrasi-sensor-lingkungan-esp32',
    date: '18 Maret 2026',
    dateISO: '2026-03-18',
    tag: 'IoT',
    title: 'Kalibrasi Sensor Kualitas Udara Real-Time Menggunakan Mikrokontroler ESP32',
    excerpt:
      'Panduan praktis konfigurasi hardware dan pengolahan data mentah sensor udara pada proyek Envirowatchers sebelum ditransmisikan secara nirkabel ke backend web.',
  },
];
