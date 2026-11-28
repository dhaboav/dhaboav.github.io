Halo! Pada artikel ini saya akan membahas cara memasang, menjalankan, dan mengkustomisasi template
portfolio berbasis React dan Tailwind CSS ini. Jika Anda ingin menggunakannya sebagai portfolio
pribadi, panduan berikut akan membantu Anda memulai dengan cepat.

#### Mengenal Arsitektur Portfolio

Portfolio ini dibangun dengan prinsip **simplicity**, **robustness**, dan **purpose-driven
development** dengan menggunakan teknologi **React & Tailwind CSS** — Antarmuka modern yang modular
dan responsif. Struktur proyek dibuat modular sehingga setiap bagian memiliki tanggung jawab yang
jelas, mulai dari halaman **About**, **Projects**, **Experience**, **Contact**, hingga sistem
**Blog**.

Seluruh konten dikelola melalui berkas konfigurasi lokal sehingga mudah diperbarui tanpa perlu
mengubah banyak komponen atau menyiapkan database tambahan.

#### Memulai Instalasi

Pastikan **Node.js** dan **npm** sudah terpasang di komputer Anda.

##### 1. Kloning Repositori

Unduh kode sumber menggunakan perintah berikut:

```bash
git clone https://github.com/dhaboav/dhaboav.github.io.git
cd dhaboav.github.io
```

##### 2. Instalasi dan Deployment

Install dependensi, lakukan proses build, kemudian deploy aplikasi:

```bash
# Install dependencies
npm install

# Build production
npm run build

# Deploy ke GitHub Pages
npm run deploy
```

Setelah proses selesai, portfolio akan tersedia melalui deployment yang telah dikonfigurasi.

#### Mengkustomisasi Konten

Seluruh data portfolio dibagi dan tersimpan dengan struktur seperti berikut:

- `src/shared/config/authorName.ts` → Data nama developer (nama kamu)
- `src/entities/blog/model/data.ts` → Data terkait dengan metadata blog
- `src/entities/experience/model/data.ts` → Data bagian pengalaman
- `src/entities/project/model/data.ts` → Data bagian proyek
- `src/shared/lib/i18n/locales/` → Khusus untuk bagian translate UI untuk dua bahasa (Indonesia, dan
  Inggris)

#### Menambahkan Artikel Blog

Sistem blog menggunakan file Markdown sebagai sumber konten. Untuk menambahkan artikel baru,
terdapat dua langkah utama.

##### 1. Tambahkan Metadata Artikel

Buka file `src/entities/blog/model/data.ts`, lalu tambahkan data artikel baru. Gunakan format
**kebab-case** dan pastikan setiap `slug` bersifat unik, contoh:

```ts
{
  slug: "migrasi-arsitektur-vanilla-js-ke-react-typescript",
  title: "Migrasi Arsitektur: Dari Vanilla JS ke React TypeScript",
  dateISO: "2026-06-15",
  tag: "Engineering",
  excerpt: "Cerita di balik layar proses penataan ulang kode basis portfolio..."
}
```

##### 2. Buat File Markdown

Buat file baru dengan nama yang sama seperti nilai `slug`. Contoh:

```text
blog/
└── migrasi-arsitektur-vanilla-js-ke-react-typescript.md
```

Isi file tersebut menggunakan Markdown standar. Setelah file dibuat, artikel akan otomatis muncul
pada halaman blog:

```md
# Judul Artikel

Tulis isi artikel Anda di sini.

## Subjudul

Gunakan heading, list, gambar, kutipan, maupun blok kode sesuai kebutuhan.
```

#### Penutup

Portfolio bukan sekadar tempat memamerkan proyek, tetapi juga media untuk menunjukkan perjalanan
belajar, pengalaman, dan proses yang telah dibangun.

Jika menemukan bug atau memiliki ide pengembangan, jangan ragu untuk membuka **Issue** maupun
mengirimkan **Pull Request** melalui repositori GitHub.
