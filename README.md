# Portofolio Pribadi — Muhamad Ridho Albukhori

Website profil pribadi bertema **Gothic Dark** yang dibuat menggunakan HTML, CSS, dan JavaScript murni. Website ini dipublikasikan melalui GitHub Pages pada repository `Crypss96/WEB_PORTOFOLIO`.

## Identitas

- **Nama:** Muhamad Ridho Albukhori
- **NPM:** 2559201032
- **Program Studi:** Sistem dan Teknologi Informasi
- **Kampus:** Universitas Pertiba
- **Angkatan:** 2025

## Halaman website

- `index.html` — Beranda sekaligus landing page utama.
- `tentang.html` — Profil, deskripsi diri, pendidikan, dan foto pribadi.
- `katalog.html` — Kumpulan karya dan proyek.
- `kontak.html` — Informasi kontak dan peta wilayah Pangkalpinang.

## Struktur folder

```text
WEB_PORTOFOLIO/
├── .github/
│   └── workflows/
│       └── pages.yml       # Deploy otomatis ke GitHub Pages
├── img/                    # Foto profil dan ilustrasi SVG
├── css/
│   └── style.css           # Tampilan dan responsivitas website
├── js/
│   └── script.js           # Interaksi navigasi
├── index.html              # Landing page
├── tentang.html
├── katalog.html
├── kontak.html
├── .nojekyll
└── README.md
```

Foto profil ditampilkan di Beranda dan halaman Tentang. Frame foto mempertahankan ukuran desain awal; foto menyesuaikan area frame menggunakan `object-fit: cover`.

## Menjalankan secara lokal

1. Clone atau unduh repository ini.
2. Buka folder `WEB_PORTOFOLIO` di Visual Studio Code.
3. Buka `index.html` menggunakan browser atau ekstensi Live Server.
4. Website tidak membutuhkan framework, database, maupun instalasi package tambahan.

## Publikasi GitHub Pages

Repository ini menggunakan **GitHub Actions** untuk mengunggah website statis ke GitHub Pages secara otomatis.

1. Pastikan repository bernama `WEB_PORTOFOLIO` dan branch utama bernama `main`.
2. Buka **Settings → Pages** pada repository.
3. Pada bagian **Build and deployment → Source**, pilih **GitHub Actions**.
4. File workflow tersedia di `.github/workflows/pages.yml`.
5. Setelah workflow `Deploy website to GitHub Pages` selesai dengan status sukses, website dapat dibuka melalui:

   **https://crypss96.github.io/WEB_PORTOFOLIO/**

Setiap perubahan yang di-push ke branch `main` akan menjalankan deployment ulang secara otomatis. Workflow juga dapat dijalankan manual dari tab **Actions**.

## Catatan

- Halaman Kontak memuat peta Google Maps sehingga membutuhkan koneksi internet.
- Website ini bersifat statis dan tidak menggunakan backend atau database.
- Semua alamat CSS, JavaScript, gambar, dan tautan halaman menggunakan path relatif agar berfungsi pada GitHub Pages project site.
