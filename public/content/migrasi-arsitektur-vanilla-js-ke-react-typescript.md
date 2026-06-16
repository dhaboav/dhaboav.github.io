Memigrasi kode portofolio dari Vanilla JavaScript ke **React TypeScript** bukan sekadar tren, melainkan sebuah kebutuhan investasi jangka panjang untuk arsitektur kode yang lebih bersih.

## Kenapa Harus TypeScript?
Dengan menggunakan TypeScript, kita mendapatkan keuntungan berupa *strict typing*. Tidak ada lagi eror tidak sengaja akibat salah memanggil properti objek data blog yang tidak eksis.

### Poin Utama Perubahan:
* **Custom Hooks:** Seluruh logika bisnis dipisah penuh dari file tampilan UI.
* **Client-side Routing:** Menggunakan `HashRouter` agar web statis aman dari eror 404 saat di-host di GitHub Pages.
* **Markdown Parsing:** Artikel ditulis terpisah agar manajemen konten menjadi lebih modular.

```typescript
// Contoh kode bersih pemisahan logic
export function useBlogDetail() {
  const { slug } = useParams();
  // ... logika pengambilan data
}
```