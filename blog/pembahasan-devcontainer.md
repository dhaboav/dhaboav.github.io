Pernahkah kode berjalan mulus di laptop rekan tim, tapi gagal total di komputer Anda gara-gara beda
versi Node.js? Masalah klasik "_di laptop saya lancar-lancar saja_" ini sudah jadi mimpi buruk lama
developer. Untungnya, ada solusi yang jauh lebih elegan: **Dev Container**.

## Apa Itu Dev Container?

Secara sederhana, Dev Container adalah tempat ngoding terisolasi yang dibungkus di dalam **Docker
container**.

Teknologi ini dibangun di atas fondasi Docker, yang memungkinkan isolasi environment secara
sempurna, bisa dibilang seperti "_laptop virtual_" mini di dalam komputer Anda. Karena dikhususkan
spesifik untuk kebutuhan development, Dev Container memiliki sistem operasi, versi bahasa
pemrograman, dependency, hingga ekstensi editor menjadi satu paket praktis dengan keuntungan utama:

- **Ekosistem Seragam:** Siapa pun di tim yang membuka proyek, baik di Windows, macOS, maupun Linux,
  akan mendapat konfigurasi yang 100% identik. ehingga hal ini mengurangi waktu yang digunakan untuk
  mengkonfigurasi karena perbedaan sistem operasi.

- **Bebas Melakukan Eksperimen:** Bebas mengerjakan Proyek A (Node.js v20) dan Proyek B (Node.js
  v18) bersamaan tanpa pusing gonta-ganti versi di komputer lokal ataupun takut merusak konfigurasi
  karena telah terisolasi.

## Bagaimana cara memakainya?

Anda bisa menggunakannya di code editor yang mendukung fitur ini, seperti VS Code dengan ekstensi
**Dev Containers**, atau langsung di-host lewat cloud menggunakan **GitHub Codespaces** tanpa
konfigurasi rumit di laptop. Cukup buka proyek yang memiliki folder `.devcontainer,` lalu sistem
akan otomatis:

1. Membaca file konfigurasi (`devcontainer.json`).
2. Menyalakan kontainer Docker di latar belakang.
3. Memindahkan seluruh file ke dalam kontainer tersebut.

Agar sistem bisa melakukan itu semua, Anda hanya perlu membuat sebuah file bernama
`devcontainer.json` di dalam folder `.devcontainer` pada direktori utama proyek Anda. Berikut adalah
contoh konfigurasi nyata yang saya gunakan dan aplikasikan untuk web app ini:

```code
{
  "name": "Personal Web",
  "image": "mcr.microsoft.com/devcontainers/typescript-node:5-24-trixie",
  "forwardPorts": [5173],
  "portsAttributes": {"5173": {"label": "App"}},
  "otherPortsAttributes": {"onAutoForward": "ignore"},
  "features": {
    "ghcr.io/devcontainers-extra/features/pnpm:2": {}
  },
	"customizations": {
    "vscode": {
      "extensions": [
        "esbenp.prettier-vscode",
        "bradlc.vscode-tailwindcss",
        "oderwat.indent-rainbow"
      ]
    }
  },
  "postCreateCommand": "pnpm install",
  "postStartCommand": "pnpm dev --host"
}
```

Hasilnya? Terminal, linter, dan server lokal Anda berjalan bersih di dalam kontainer, namun tetap
menyatu mulus dengan komputer lokal Anda.

## Fitur Kunci untuk Diperhatikan

Jika Anda mulai menggunakan Dev Container, ada beberapa pengaturan penting yang sering kali menjadi
penentu kelancaran proyek:

- **`forwardPorts`:** Karena terisolasi, Anda perlu mendaftarkan port aplikasi (seperti `5173` untuk
  Vite) di file konfigurasi agar bisa diakses lewat _browser_ lokal.

- **Ekstensi Otomatis:** Mengatur agar ekstensi editor pilihan (seperti Prettier atau ESLint)
  langsung terpasang otomatis begitu kontainer menyala.

- **Lifecycle Commands (`postCreateCommand`, dll):** Berbagai perintah yang dieksekusi secara
  otomatis sesuai tahapan siklus hidup kontainer. Hal ini memungkinkan otomatisasi penuh untuk
  mengurangi langkah manual—seperti menjalankan `npm install` atau langsung menyalakan server
  aplikasi—segera setelah kontainer siap digunakan.

Untuk informasi lebih mendalam dan spesifikasi lengkapnya, Anda bisa membaca dokumentasi resmi di
[https://containers.dev](https://containers.dev).

## Kesimpulan

Dev Container benar-benar mengubah cara kita menyiapkan proyek. Alih-alih menghabiskan waktu
berjam-jam membaca panduan instalasi yang rentan _error_, Anda cukup menekan satu tombol
(_Rebuild_), dan seluruh ekosistem ngoding langsung siap pakai dalam hitungan menit.

Bagaimana pengalaman Anda sejauh ini menggunakan kontainer Docker untuk pengembangan sehari-hari?
