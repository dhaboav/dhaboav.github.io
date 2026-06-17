Sebuah portfolio bukan hanya sekadar halaman untuk menampilkan hasil pekerjaan. Seiring
berkembangnya proyek dan pengalaman, portfolio juga menjadi representasi bagaimana seseorang
membangun, mengelola, dan memikirkan sebuah sistem.

Pada awalnya, portfolio ini dibangun menggunakan pendekatan sederhana berbasis **Vanilla
JavaScript**. Pendekatan tersebut cukup untuk memenuhi kebutuhan awal: menampilkan informasi profil,
daftar proyek, dan beberapa halaman statis.

Namun, seiring bertambahnya fitur dan kebutuhan pengembangan, muncul tantangan baru. Struktur kode
mulai sulit dipelihara, pengelolaan data menjadi kurang fleksibel, dan penambahan fitur baru
membutuhkan perubahan di banyak tempat.

Dari permasalahan tersebut, muncul keputusan untuk melakukan migrasi arsitektur dari **Vanilla JS**
menuju **React TypeScript** dengan struktur yang lebih modular dan scalable.

## Alasan Melakukan Migrasi

Keputusan migrasi bukan hanya karena ingin menggunakan teknologi yang lebih baru. Tujuan utamanya
adalah menciptakan fondasi yang lebih baik untuk pengembangan jangka panjang.

Beberapa masalah yang mulai muncul pada versi sebelumnya:

- Struktur kode semakin sulit dikelola ketika jumlah halaman bertambah.
- Komponen yang memiliki fungsi serupa mulai mengalami duplikasi.
- Perubahan kecil membutuhkan penyesuaian di banyak tempat.
- Data dan tampilan masih terlalu erat terhubung.

Dengan React, setiap bagian dapat dipecah menjadi komponen yang lebih kecil dan memiliki tanggung
jawab masing-masing.

Sementara itu, TypeScript memberikan lapisan keamanan tambahan melalui sistem typing yang membantu
mengurangi kesalahan saat proses pengembangan.

## Dari Halaman Statis Menjadi Sistem Modular

Pada versi Vanilla JS, sebagian besar logika masih berada dalam file yang saling terhubung secara
langsung.

Pendekatan tersebut cocok untuk proyek sederhana, tetapi mulai menjadi hambatan ketika fitur semakin
berkembang.

Setelah migrasi, struktur aplikasi diubah menjadi lebih modular:

```text
src/
├── components/
│   ├── Header
│   ├── Projects
│   ├── Experience
│   └── Contact
│
├── data/
│   ├── projects.ts
│   ├── experience.ts
│   └── blog.ts
│
├── pages/
│   ├── Home
│   └── Blog
│
└── hooks/
```

Dengan struktur ini, setiap bagian dapat dikembangkan secara independen tanpa mengganggu bagian
lainnya.

Sebagai contoh, penambahan proyek baru tidak lagi membutuhkan perubahan pada komponen tampilan.
Cukup memperbarui data pada file konfigurasi, maka informasi akan otomatis ditampilkan.

## Menerapkan TypeScript untuk Kode yang Lebih Terstruktur

Salah satu perubahan terbesar dalam migrasi ini adalah penggunaan TypeScript.

Pada JavaScript biasa, sebuah objek dapat memiliki struktur yang berubah-ubah tanpa adanya
peringatan.

Contohnya:

```js
const project = {
  title: 'Robot Controller',
  description: 'Robot system using Python',
};
```

Masalah dapat muncul ketika properti yang digunakan tidak konsisten.

Dengan TypeScript, struktur data dapat didefinisikan secara eksplisit:

```ts
interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}
```

Pendekatan ini membuat kode lebih mudah dipahami dan mengurangi kemungkinan error saat proyek
semakin besar.

## Menggunakan Custom Hooks

Selain melakukan pemisahan komponen, migrasi ini juga memperkenalkan penggunaan **custom hooks**.

Custom hooks digunakan untuk memisahkan logika aplikasi dari tampilan.

Sebagai contoh, proses membaca data blog, mengatur state, atau melakukan proses tertentu tidak perlu
ditulis langsung di dalam komponen.

Contoh sederhana:

```ts
function useProjects() {
  return projects;
}
```

Kemudian komponen hanya bertugas menampilkan data:

```tsx
const projects = useProjects();
```

Pemisahan ini membuat kode menjadi lebih bersih dan mudah dikembangkan.

## Sistem Blog Berbasis Markdown

Salah satu fitur yang menjadi alasan utama migrasi adalah kebutuhan untuk memiliki sistem blog yang
lebih fleksibel.

Daripada menulis setiap artikel langsung sebagai komponen React, sistem baru menggunakan file
Markdown sebagai sumber konten.

Alurnya menjadi:

```text
Markdown File
      |
      v
Blog Metadata
      |
      v
React Markdown Renderer
      |
      v
Blog Page
```

Setiap artikel cukup memiliki:

- Metadata pada `blog.ts`
- File konten `.md`
- Slug unik sebagai identitas artikel

Dengan pendekatan ini, menulis artikel baru menjadi lebih sederhana tanpa perlu membuat halaman baru
secara manual.

## Routing Berbasis Struktur File

Pada versi sebelumnya, navigasi masih menggunakan pendekatan manual.

Setelah migrasi, struktur halaman dibuat lebih terorganisir sehingga setiap halaman memiliki tujuan
yang jelas.

Contohnya:

```text
pages/
├── Home.tsx
├── Blog.tsx
└── BlogDetail.tsx
```

Pendekatan ini membuat pengembangan fitur baru seperti halaman artikel, kategori, atau halaman
tambahan menjadi lebih mudah.

## Tantangan Selama Proses Migrasi

Migrasi bukan sekadar memindahkan kode dari satu framework ke framework lain.

Beberapa tantangan yang muncul selama proses ini:

### Menjaga Tampilan Lama

Salah satu tujuan utama adalah mempertahankan identitas visual portfolio agar tidak kehilangan
karakter awalnya.

### Mendesain Struktur Baru

Menentukan pembagian komponen dan folder membutuhkan perencanaan agar tidak menciptakan kompleksitas
baru.

### Memindahkan Data Lama

Konten lama harus diubah dari format statis menjadi data yang lebih terstruktur agar dapat digunakan
kembali.

## Hasil Akhir

Setelah proses migrasi selesai, portfolio memiliki beberapa peningkatan:

- Struktur kode lebih mudah dipelihara.
- Penambahan fitur dapat dilakukan lebih cepat.
- Data terpisah dari tampilan.
- Sistem blog lebih fleksibel.
- Pengembangan jangka panjang menjadi lebih terarah.

Migrasi ini bukan hanya perubahan teknologi, tetapi perubahan cara berpikir dalam membangun sebuah
sistem.

## Kesimpulan

Migrasi dari Vanilla JavaScript ke React TypeScript memberikan fondasi yang lebih kuat untuk
perkembangan portfolio di masa depan.

Teknologi hanyalah alat. Hal yang lebih penting adalah bagaimana teknologi tersebut membantu kita
membangun sistem yang lebih terstruktur, mudah dikembangkan, dan memiliki tujuan yang jelas.

Melalui proses ini, portfolio berkembang dari sekadar halaman statis menjadi sebuah platform
personal yang dapat terus bertumbuh mengikuti perjalanan dan pengalaman yang dibangun.
