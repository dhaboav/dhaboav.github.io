Bosan dengan tampilan desktop yang begitu-begitu saja? Ingin desktop yang lebih personal, bisa
dikustomisasi, serta berfokus pada penggunaan keyboard untuk mengurangi ketergantungan terhadap
mouse? Niri mungkin bisa menjadi jawabannya.

Niri menawarkan pendekatan berbeda dalam mengelola jendela aplikasi melalui konsep _scrollable
tiling_. Setelah menggunakannya selama kurang lebih tiga minggu, saya menemukan bahwa Niri bukan
sekadar compositor dengan tampilan unik, tetapi juga mampu mengubah cara saya berinteraksi dengan
desktop Linux sehari-hari.

## Mengenal Niri

Niri merupakan Wayland compositor yang mengusung konsep _scrollable tiling window_. Sederhananya,
setiap aplikasi yang dibuka akan ditambahkan ke workspace secara horizontal tanpa harus menumpuk
atau memperkecil jendela lainnya.

Konsep ini membuat multitasking terasa lebih natural. Kita cukup melakukan scrolling secara
horizontal untuk berpindah antar aplikasi tanpa perlu mengatur posisi dan ukuran window secara
manual.

Niri ditulis menggunakan Rust dan menawarkan pendekatan berbeda dibandingkan compositor populer
lainnya, seperti Hyprland.

Untuk instalasi, kamu bisa mengikuti dokumentasi resmi Niri yang menyediakan panduan untuk beberapa
distribusi Linux, termasuk Ubuntu, Fedora, dan Arch Linux.
[Dokumentasi resmi Niri](https://niri-wm.github.io/niri/).

Perlu diketahui bahwa Niri hanyalah sebuah compositor, bukan desktop environment lengkap. Karena
itu, kita membutuhkan desktop shell dan beberapa utilitas tambahan agar pengalaman desktop lebih
optimal.

Dalam artikel ini, saya akan membahas dua desktop shell yang sudah saya coba, yaitu **DMS (Dux
Modular Shell)** dan **Noctalia**.

Sebagai catatan, seluruh pengujian dilakukan menggunakan laptop Acer Nitro AN515-57 dengan Ubuntu
26.04.1 LTS dan kernel 7.0.0-43-generic.

## Konfigurasi Niri

Karena berorientasi pada penggunaan keyboard, konfigurasi menjadi salah satu bagian penting ketika
menggunakan Niri. Kita perlu menyesuaikan _keybindings_ dengan workflow masing-masing, termasuk
mengatur _window rules_. Beberapa aplikasi yang membutuhkan floating window, seperti
Picture-in-Picture browser, Discord, dan Zoom, juga perlu dikonfigurasi secara manual. Selain itu,
diperlukan utilitas tambahan seperti application launcher dan komponen pendukung lainnya.

Jika tidak ingin memulai dari nol, kamu bisa menggunakan konfigurasi yang saya pakai melalui
repository ini [GitHub - Dotfiles](https://github.com/dhaboav/dotfiles)

## 1. DMS (Dux Modular Shell)

DMS merupakan desktop shell yang dibangun menggunakan Go dan QuickShell. Keunggulan utamanya adalah
pendekatan _out-of-the-box_, sehingga pengguna bisa mendapatkan pengalaman desktop yang cukup
lengkap tanpa banyak konfigurasi tambahan.

DMS juga menyediakan repository khusus Ubuntu yang menawarkan instalasi Niri sekaligus DMS.

- [Dokumentasi DMS](https://duxlabs.dev/docs/)
- [Video Preview DMS](https://youtu.be/sJrQqSNB484?si=Tqnq0GAHvvVNieO2)

**Kelebihan:**

- Fitur lengkap dengan berbagai widget yang dapat dikustomisasi.
- System monitoring detail untuk memantau penggunaan CPU, memori, dan resource lainnya.
- Backup konfigurasi yang praktis melalui satu perintah pada terminal.
- Mendukung carousel wallpaper dan live wallpaper sejak versi 2.1.

**Kekurangan:**

- First load relatif lambat, sekitar 6–8 detik berdasarkan pengalaman saya.
- Beberapa fitur bawaan tidak bisa dihapus secara independen, seperti note.
- Dependensi dan penggunaan resource relatif lebih besar.
- Pengaturan GUI tersebar di beberapa bagian sehingga kurang praktis.

Secara keseluruhan, DMS cocok untuk pengguna yang menginginkan desktop shell kaya fitur tanpa harus
membangun semuanya dari awal.

## 2. Noctalia

Noctalia menjadi alternatif menarik bagi pengguna yang menginginkan desktop shell lebih ringan dan
minimalis.

Pada versi 5 yang saya gunakan, Noctalia mengadopsi pendekatan native menggunakan C++. Hasilnya,
penggunaan resource dan dependensi relatif minimal, tetapi tetap menawarkan fitur yang cukup lengkap
untuk kebutuhan sehari-hari.

Beberapa fitur menariknya meliputi widget, kustomisasi tema yang mengikuti warna wallpaper, dan
pengaturan desktop yang lebih terpusat.

- [Dokumentasi Noctalia](https://docs.noctalia.dev/noctalia/v5.5.0/)

**Kelebihan:**

- First load hampir instan.
- Penggunaan memori dan dependensi relatif minimal.
- Pengaturan GUI lebih terorganisasi dan mudah ditemukan.
- Tetap menawarkan berbagai fitur kustomisasi desktop.

**Kekurangan:**

- System monitoring masih sederhana dan hanya menampilkan informasi berupa angka.
- Pengelolaan wallpaper kurang praktis karena harus kembali ke gambar awal setiap memilih wallpaper.
- Belum mendukung live wallpaper secara bawaan.

Noctalia cocok bagi pengguna yang lebih mengutamakan kecepatan, efisiensi resource, dan konfigurasi
sederhana.

## DMS vs Noctalia: Mana Pilihan Saya?

Keduanya memiliki keunggulan masing-masing. DMS lebih cocok jika kamu membutuhkan fitur lengkap,
terutama system monitoring yang detail. Sementara itu, Noctalia lebih menarik untuk pengguna yang
mengutamakan kecepatan, efisiensi resource, dan kemudahan konfigurasi.

Saya sendiri akhirnya memutuskan beralih dari DMS ke Noctalia. Alasannya sederhana: saya mendapatkan
pengalaman penggunaan yang hampir sama dengan dependensi dan penggunaan resource yang lebih minimal.

Memang ada beberapa fitur yang harus dikorbankan, terutama system monitoring milik DMS. Namun, saya
menggunakan **dgop**, utilitas berbasis CLI dari ekosistem DMS, untuk memantau resource sistem.
Informasi yang disediakan sudah lebih dari cukup untuk kebutuhan saya.

## Kesimpulan

Setelah menggunakan Niri selama kurang lebih tiga minggu, saya merasa workflow sehari-hari menjadi
lebih lancar. Ketergantungan terhadap mouse berkurang karena sebagian besar aktivitas dapat
dilakukan melalui keyboard. Perpindahan antar aplikasi terasa lebih cepat dan membantu saya tetap
fokus ketika bekerja.

Untuk saat ini, kombinasi Niri dan Noctalia menjadi pilihan utama saya. Saya cukup puas dengan
performanya dan sepertinya belum berencana berpindah ke compositor lain dalam waktu dekat, kecuali
pengembangan Niri sudah tidak aktif lagi. Ke depannya, saya juga berencana membagikan video preview
penggunaan Niri + Noctalia serta pembahasan lebih mendalam dalam format video panjang.

**Jadi, bagaimana menurut kalian? Tertarik mencoba Niri atau justru sudah punya kombinasi compositor
dan desktop shell andalan sendiri?**
