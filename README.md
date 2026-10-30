# Genz-Admin

Platform dashboard operasional B2B dan analitik e-commerce modern yang dirancang untuk visibilitas data bisnis secara real-time. Dibangun menggunakan Next.js App Router, TypeScript dengan type safety ketat, dan Tailwind CSS tanpa dependensi library visualisasi yang berlebih.

🔗 **Live Demo:** [genz-admin-one.vercel.app](https://genz-admin-one.vercel.app)  
📂 **Repository:** [github.com/glh304/genz-admin](https://github.com/glh304/genz-admin)

---

## Ringkasan Proyek

Dashboard ini memecahkan kebutuhan pemantauan performa bisnis retail dengan fokus pada tiga pilar utama:

1. **Performa & Bundle Size Ringan:** Mengganti charting library eksternal yang berat dengan kalkulasi visualisasi CSS Flexbox murni.
2. **Type Safety Penuh:** Memastikan integritas data transaksi dan inventaris produk melalui kontrak data TypeScript (`interface` & `Union Literal Types`) dari fase kompilasi.
3. **Pengalaman Pengguna Instan:** Memanfaatkan arsitektur App Shell bersarang (_Nested Layouts_) untuk navigasi tanpa refresh (_zero-reload Client-Side Navigation_).

---

## Keputusan Arsitektur & Rekayasa

### 1. Persistent App Shell (`src/app/dashboard/layout.tsx`)

- Mengisolasi navigasi admin (Sidebar dan Top Header) pada level sub-tree rute `/dashboard/*`.
- Memanfaatkan hook `usePathname()` untuk active link state dinamis dan judul halaman kontekstual.
- Menjaga state sidebar dan header tetap diam (persisten) saat berpindah antar modul tanpa re-rendering layout global.

### 2. Visualisasi Metrik & Grafik 7-Hari (`src/app/dashboard/page.tsx`)

- Visualisasi grafik batang aktivitas penjualan dibangun menggunakan flexbox murni dengan kalkulasi proporsi tinggi dinamis (`style={{ height: '${item.persenTinggi}%' }}`).
- Memangkas ukuran bundle JavaScript client hingga 0 KB untuk modul charting dibanding menggunakan library seperti Chart.js atau Recharts.
- Tabel mutasi pesanan responsif dengan penguncian tipe status (`"Sukses" | "Pending" | "Batal"`).

### 3. Server-Side Data Fetching & Streaming (`src/app/dashboard/produk/`)

- Katalog produk mengonsumsi REST API DummyJSON menggunakan Next.js Server Components secara asinkron (`async/await`).
- Data diproses dan diformat di server (konversi mata uang IDR via `toLocaleString('id-ID')`) sebelum dikirim ke browser client.
- Mengimplementasikan `loading.tsx` berbasis React Suspense dengan UI Skeleton berdenyut (`animate-pulse`) untuk mengeliminasi pergeseran tata letak (_Cumulative Layout Shift_ = 0).

---

## Tech Stack

- **Framework:** Next.js (App Router Architecture)
- **Bahasa:** TypeScript (Strict Type Checking)
- **Styling:** Tailwind CSS (Utility-First, Editorial Minimalist)
- **Sumber Data:** RESTful API (DummyJSON)
- **Font:** Geist Sans & Geist Mono

---

## Struktur Direktori Utama

```text
src/
├── app/
│   ├── dashboard/
│   │   ├── layout.tsx         # Persistent App Shell (Sidebar & Header)
│   │   ├── page.tsx           # Dashboard Utama (KPI, Grafik CSS, Tabel)
│   │   └── produk/
│   │       ├── loading.tsx    # Skeleton Loading State (Suspense)
│   │       └── page.tsx       # Katalog Produk Dinamis (REST API)
│   ├── layout.tsx             # Root Layout (Metadata & Global Fonts)
│   └── page.tsx               # Root Entry Point (Auto-redirect ke /dashboard)
```

---

## Menjalankan Proyek Secara Lokal

1. Klon repositori ini:

   ```bash
   git clone https://github.com/glh304/genz-admin.git
   cd genz-admin
   ```

2. Instal dependensi:

   ```bash
   npm install
   ```

3. Jalankan server pengembangan:

   ```bash
   npm run dev
   ```

4. Buka peramban pada alamat `http://localhost:3000`.

---

## Pengembang

**Galuh Wibowo**  
Program Studi Sistem Informasi
