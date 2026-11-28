Portfolio ini awalnya dibangun menggunakan struktur React yang sederhana. Namun seiring bertambahnya
fitur seperti daftar project, contact form, hingga blog, saya mulai sering berpindah-pindah folder
hanya untuk mengerjakan satu perubahan.

Karena project ini bukan aplikasi produksi, saya melihatnya sebagai tempat yang aman untuk
bereksperimen. Salah satunya dengan mencoba **Feature-Sliced Design (FSD)**.

Artikel ini bukan tutorial FSD, melainkan cerita pengalaman saya memigrasikan project portfolio
pribadi. Mulai dari alasan mencobanya, proses migrasi, tantangan yang ditemui, hingga hasil yang
saya rasakan setelah menggunakannya.

## Kenapa Mencoba FSD?

Alasan saya sebenarnya cukup sederhana.

- Belajar arsitektur React yang lebih terstruktur.
- Mengurangi folder yang mulai bercampur isinya.
- Membuat project lebih mudah dikembangkan di masa depan.
- Dan yang paling penting, ingin merasakan pengalaman menggunakan FSD.

Awalnya struktur project saya terlihat seperti ini.

```text
src/
├── components/
├── hooks/
├── pages/
└── utils/
```

Untuk project kecil, struktur tersebut sebenarnya sudah cukup baik. Namun semakin banyak komponen
dan fitur yang ditambahkan, saya jadi harus membuka banyak folder hanya untuk mengerjakan satu
perubahan. Misalnya saat memperbarui halaman **Project**, saya perlu berpindah dari `pages`, ke
`components`, lalu ke `hooks`, dan terkadang juga ke `utils`. Lama-kelamaan alur kerja seperti ini
terasa kurang nyaman.

## Apa yang Menarik dari FSD?

Hal yang membuat saya tertarik dengan FSD bukan jumlah foldernya, melainkan cara berpikirnya.

Sebelumnya saya mengelompokkan kode berdasarkan **jenis file**.

- Semua komponen masuk ke `components`.
- Semua hook masuk ke `hooks`.
- Semua utility masuk ke `utils`.

Sedangkan FSD mengelompokkan kode berdasarkan **fitur**.

Artinya, semua hal yang berkaitan dengan satu fitur. Komponen, hook, state, hingga helper. Semuanya
berada dalam satu tempat. Menurut saya, pendekatan ini jauh lebih masuk akal ketika project mulai
berkembang.

## Proses Migrasi

Saya sengaja tidak memindahkan seluruh project sekaligus. Pengalaman melakukan refactor pada project
sebelumnya mengajarkan bahwa semakin besar perubahan dalam satu waktu, semakin sulit mencari sumber
bug. Karena itu saya memilih memigrasikan satu fitur demi satu fitur.

Saya memulai dari **blog**, kemudian memisahkan mana yang termasuk **feature**, mana yang sebaiknya
berada di **shared**, dan mana yang merupakan utility yang dapat digunakan kembali.

Setiap selesai memigrasikan satu bagian, saya langsung menguji apakah fungsi dan tampilannya masih
berjalan seperti sebelumnya. Perlahan tetapi pasti, struktur project saya berubah menjadi seperti
ini.

```text
src/
├── app/
├── entities/
├── pages/
├── widgets/
├── features/
└── shared/
```

Migrasi memang terasa lebih lambat, tetapi jauh lebih mudah dikendalikan ketika muncul masalah.

## Tantangan yang Saya Temui

### Bug di Sana-sini

Mengubah struktur project ternyata memunculkan cukup banyak bug. Ada yang sederhana, tetapi ada juga
yang berdampak ke bagian lain dari aplikasi.

Untuk mencarinya saya menggunakan cara yang saya sebut **mode detektif**.

Sederhana saja.

1. Observasi.
2. Analisis.
3. Membuat hipotesis.
4. Mencoba solusi.

Kalau berhasil, lanjut ke masalah berikutnya. Kalau belum berhasil, kembali lagi ke langkah pertama.

Untungnya semua bug berhasil diselesaikan tanpa menghilangkan fitur yang sudah ada. Bahkan beberapa
bagian ikut menjadi lebih rapi selama proses migrasi.

Satu hal yang masih menjadi PR adalah **automated testing**. Selama migrasi ini saya masih
mengandalkan pengujian manual, dan kemungkinan besar itu akan menjadi hal berikutnya yang ingin saya
pelajari.

### Menentukan Komponen Masuk ke Mana

Saya juga sempat bingung menentukan apakah sebuah komponen sebaiknya masuk ke `shared` atau tetap
berada di dalam `features`. Akhirnya saya menggunakan aturan sederhana.

- Jika komponen dapat digunakan di banyak tempat, maka masuk ke `shared`.
- Jika hanya digunakan oleh satu fitur, maka tetap berada di dalam folder fitur tersebut.

Aturan sederhana ini ternyata cukup membantu menjaga struktur project tetap konsisten.

## Sebelum dan Sesudah

### Sebelum

```text
src/
├── components/
├── hooks/
├── pages/
└── utils/
```

Semua file dipisahkan berdasarkan jenisnya.

### Sesudah

```text
src/
├── app/
├── entities/
├── pages/
├── widgets/
├── features/
└── shared/
```

Sekarang saya jauh lebih mudah menemukan file karena semua yang berkaitan dengan satu fitur berada
dalam satu tempat.

## Hasil yang Saya Rasakan

Walaupun project ini hanyalah portfolio pribadi, saya tetap merasakan beberapa manfaat.

- Struktur project menjadi lebih rapi.
- Menambahkan fitur baru terasa lebih terarah.
- Tidak perlu lagi berpindah-pindah banyak folder saat mengembangkan satu fitur.
- Lebih mudah memahami kembali project setelah beberapa waktu tidak dibuka.

Namun manfaat terbesar yang saya rasakan justru bukan pada struktur foldernya.

Dulu saya sering bertanya,

> Komponen ini sebaiknya disimpan di folder mana?

Sekarang pertanyaannya berubah menjadi,

> Komponen ini bagian dari fitur apa?

Perubahan cara berpikir tersebut, menurut saya, adalah hal paling berharga dari mencoba FSD.

## Apakah FSD Cocok untuk Portfolio?

Menurut saya, **tidak**. Kalau portfolio hanya berisi beberapa halaman statis, struktur React biasa
sudah lebih dari cukup.

Namun jika project mulai berkembang, memiliki banyak section, fitur interaktif, atau memang
dijadikan sebagai media belajar arsitektur frontend, FSD menjadi pilihan yang menarik untuk dicoba.

Bagi saya sendiri, migrasi ini bukan karena project sudah terlalu besar, melainkan karena saya ingin
belajar membangun struktur aplikasi yang lebih mudah dipelihara sejak awal

## Penutup

Awalnya saya mengira FSD hanya soal menata ulang folder.

Ternyata yang benar-benar berubah adalah cara saya memandang sebuah project.

Saya tidak lagi bertanya, _"File ini sebaiknya disimpan di mana?"_, melainkan, _"File ini merupakan
bagian dari fitur apa?"_

Apakah saya akan menggunakan FSD di setiap project? Belum tentu.

Namun melalui project portfolio ini, saya jadi lebih memahami kapan FSD benar-benar memberikan
manfaat dan kapan struktur yang lebih sederhana justru sudah cukup. Dan menurut saya, pengalaman
belajar seperti itu sudah menjadi hasil yang sangat berharga.
