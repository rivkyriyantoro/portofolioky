# [AI EXECUTION PLAYBOOK: PORTOFOLIOKY — CHAT-BASED PORTFOLIO]

## Panduan Penggunaan
File ini adalah naskah (*script*) bertahap untuk memandu AI Coding Assistant (Trae / Cursor / Antigravity).
**JANGAN** memberikan semua instruksi sekaligus. Ikuti langkah-langkah di bawah ini secara berurutan. Tunggu AI selesai mengerjakan dan pastikan Anda sudah menguji kodenya sebelum lanjut ke tahap berikutnya.

---

## 📋 Arsitektur Project Saat Ini

```
portofolioky/
├── src/
│   ├── app/
│   │   ├── layout.tsx          ← Root layout (Geist font, metadata)
│   │   ├── page.tsx            ← Entry point → render <ChatInterface />
│   │   └── globals.css         ← Tailwind v4 + base styles (#08080f bg)
│   ├── components/
│   │   ├── chat-interface.tsx  ← 🧠 Komponen utama (chat + profile)
│   │   ├── chat-background.tsx ← Animated background (cursor glow, orbs, particles)
│   │   ├── chat-message.tsx    ← Bubble pesan + render content components
│   │   ├── profile-card.tsx    ← Kartu profil desktop (3D tilt effect)
│   │   ├── profile-card.css    ← Custom CSS untuk efek holografik kartu
│   │   ├── spline-avatar.tsx   ← Avatar 3D dengan tilt + floating (fallback SVG)
│   │   ├── animated-location.tsx ← Animasi "Jakarta / Jogja / Indonesia"
│   │   ├── splash-cursor.tsx   ← Fluid cursor effect (WebGL)
│   │   ├── suggestion-chips.tsx ← Chip saran topik chat
│   │   ├── typing-indicator.tsx ← Animasi titik tiga saat "mengetik"
│   │   ├── cv-download.tsx     ← Komponen download CV
│   │   ├── content-experience.tsx ← Kartu pengalaman kerja
│   │   ├── content-projects.tsx   ← Kartu proyek + filter kategori
│   │   ├── content-skills.tsx     ← Grid skill berdasarkan kategori
│   │   ├── content-certifications.tsx ← Daftar sertifikasi
│   │   ├── content-contact.tsx    ← Link kontak (Email, LinkedIn, GitHub)
│   │   └── content-cv.tsx         ← Download CV per role (QA/FE/UI-UX)
│   ├── data/
│   │   └── cms-content.ts     ← 📦 Seluruh data (experiences, projects) — ~42KB
│   ├── lib/
│   │   ├── chat-engine.ts     ← Intent detection + response generator
│   │   ├── cms-utils.ts       ← Utility functions untuk query CMS data
│   │   └── utils.ts           ← Utility umum (cn/clsx)
│   └── types/
│       └── cms.ts             ← TypeScript interfaces (WorkExperience, FeaturedProject)
├── public/
│   ├── cv/                    ← File PDF CV
│   └── avatar.png             ← Foto avatar (opsional, ada fallback SVG)
└── package.json               ← Next.js 16 + React 19 + Framer Motion + Tailwind v4
```

### Konsep Utama
- **Chat-based Portfolio**: Seluruh informasi (about, experience, skills, projects, contact, CV) ditampilkan melalui antarmuka chat.
- **Intent Detection**: User mengetik kata kunci → `chat-engine.ts` mendeteksi intent → menghasilkan response + menampilkan content component yang sesuai.
- **CMS-like Data Layer**: Semua data hardcoded di `cms-content.ts` dengan utility functions di `cms-utils.ts`.
- **Premium Visual**: Dark theme, glassmorphism, cursor glow, WebGL splash, 3D tilt card, floating particles.

### Tech Stack
| Kategori | Library |
|----------|---------|
| Framework | Next.js 16 (App Router) + React 19 |
| Styling | Tailwind CSS v4 + Custom CSS |
| Animasi | Framer Motion 12 |
| 3D | Spline (opsional), custom tilt engine |
| Icons | Lucide React + React Icons |
| UI Primitives | Radix UI |
| Font | Geist (via next/font) |

---

## 🚀 PLAYBOOK TAHAPAN

---

### Tahap 1: Inisiasi Konteks (Wajib Pertama Kali)
Copy-paste prompt di bawah ini ke dalam chat AI:

> Tolong baca dan pahami file `@file/workflow.md`. File ini berisi arsitektur, aturan, dan panduan vibes coding untuk project portfolio chat-based ini.
> Selain itu, pelajari juga file-file berikut untuk memahami fondasi project:
> - `@src/app/layout.tsx` (root layout)
> - `@src/app/page.tsx` (entry point)
> - `@src/app/globals.css` (design tokens)
> - `@src/lib/chat-engine.ts` (intent detection logic)
> - `@src/types/cms.ts` (TypeScript interfaces)
>
> Katakan 'Siap' jika sudah paham, jangan generate kode apa pun dulu.

---

### Tahap 2: Update / Tambah Data CMS Content
Gunakan tahap ini setiap kali ingin menambah atau mengubah data portfolio.

Copy-paste prompt di bawah ini ke dalam chat AI:

> Baca `@src/data/cms-content.ts` dan `@src/types/cms.ts`.
> Sekarang saya ingin [PILIH SALAH SATU]:
>
> **A) Tambah pengalaman kerja baru:**
> - Posisi: [judul posisi]
> - Perusahaan: [nama perusahaan]
> - Lokasi: [kota, negara]
> - Periode: [bulan tahun - bulan tahun / Present]
> - Deskripsi: [deskripsi singkat]
> - Teknologi: [list teknologi]
> - Achievements: [list pencapaian]
> - Apakah posisi saat ini? [ya/tidak]
>
> **B) Tambah project baru:**
> - Judul: [nama project]
> - Deskripsi: [deskripsi lengkap]
> - Deskripsi pendek: [1 kalimat]
> - Kategori: [QA Testing / UI/UX Design / Web Development / Project Management / dll]
> - Teknologi: [list teknologi]
> - Status: [completed / in-progress / planning]
> - Featured: [ya/tidak]
> - URL Live / GitHub: [jika ada]
>
> **C) Update data yang sudah ada:**
> - ID data yang ingin diubah: [exp-XXX / proj-XXX]
> - Perubahan: [jelaskan apa yang berubah]
>
> Pastikan mengikuti format TypeScript interface yang ada dan ID auto-increment.

*(Tugas Anda sebagai QA: Jalankan `npm run dev`, buka chat, ketik "experience" atau "projects" dan pastikan data baru muncul dengan benar).*

---

### Tahap 3: Tambah Intent / Topik Chat Baru
Gunakan tahap ini untuk memperluas kemampuan chatbot.

Copy-paste prompt di bawah ini ke dalam chat AI:

> Baca `@src/lib/chat-engine.ts` dan `@src/components/chat-message.tsx`.
> Saya ingin menambahkan topik chat baru: **[NAMA TOPIK]**
>
> Detail:
> - Kata kunci trigger (ID & EN): [contoh: "pendidikan", "education", "kuliah", "university"]
> - Response text: [teks balasan bot]
> - Apakah perlu content component khusus? [ya/tidak]
> - Jika ya, jelaskan UI-nya: [kartu, timeline, grid, dll]
> - Suggestion chips setelah response: [list saran topik lanjutan]
>
> Yang perlu dikerjakan:
> 1. Tambah intent baru di type `Intent`
> 2. Tambah keywords di `intentMap`
> 3. Tambah case di `generateResponse()`
> 4. Jika ada content component, buat file `content-[nama].tsx` dan register di `chat-message.tsx`
> 5. Tambahkan di `DEFAULT_SUGGESTIONS` jika relevan

*(Tugas Anda sebagai QA: Tes dengan mengetik beberapa variasi keyword yang didaftarkan, pastikan intent terdeteksi dan response yang benar muncul. Coba juga keyword yang tidak dikenal untuk memastikan fallback tetap berjalan).*

---

### Tahap 4: Modifikasi UI Chat & Visual Effects
Gunakan tahap ini untuk mengubah tampilan chat atau menambah efek visual baru.

Copy-paste prompt di bawah ini ke dalam chat AI:

> Baca file-file berikut:
> - `@src/components/chat-interface.tsx` (layout utama chat)
> - `@src/components/chat-background.tsx` (background animasi)
> - `@src/components/chat-message.tsx` (bubble pesan)
> - `@src/app/globals.css` (global styles)
>
> Saya ingin [PILIH / JELASKAN]:
> - [ ] Ubah warna tema utama (saat ini: indigo-purple gradient)
> - [ ] Tambah/ubah animasi background (cursor glow, orbs, particles)
> - [ ] Redesign bubble chat (shape, warna, spacing)
> - [ ] Ubah placeholder input yang berputar
> - [ ] Tambah efek baru: [jelaskan]
> - [ ] Lainnya: [jelaskan perubahan visual]
>
> **ATURAN VISUAL WAJIB:**
> 1. Pertahankan dark theme dengan base color `#08080f`
> 2. Semua animasi harus smooth — gunakan `framer-motion` dengan easing yang tepat
> 3. Jangan gunakan warna solid yang mentah (pure red/blue/green) — gunakan gradient atau opacity
> 4. Pertahankan efek glassmorphism (`backdrop-filter: blur + bg opacity`)
> 5. Responsive: layout split (profile card | chat) di desktop, stacked di mobile
> 6. Performance: hindari animasi yang menyebabkan layout shift atau jank

*(Tugas Anda sebagai QA: Buka browser di desktop DAN mobile view. Pastikan animasi smooth, tidak ada flickering, dan responsive layout berfungsi. Tes hover effects di desktop).*

---

### Tahap 5: Modifikasi Profile Card (Desktop)
Gunakan tahap ini untuk mengubah kartu profil di sisi kiri (desktop view).

Copy-paste prompt di bawah ini ke dalam chat AI:

> Baca file-file berikut:
> - `@src/components/profile-card.tsx` (komponen kartu profil)
> - `@src/components/profile-card.css` (CSS efek holografik + tilt)
>
> Saya ingin [PILIH / JELASKAN]:
> - [ ] Ubah informasi yang ditampilkan (nama, title, handle, status)
> - [ ] Ubah warna glow / gradient kartu
> - [ ] Tambah elemen baru di kartu (social links, stats, dll)
> - [ ] Ubah efek tilt / hover behavior
> - [ ] Lainnya: [jelaskan]
>
> **ATURAN PROFILE CARD:**
> 1. Kartu ini menggunakan CSS custom (`profile-card.css`) bukan Tailwind — ikuti naming convention `pc-*`
> 2. Tilt engine menggunakan pointer events + requestAnimationFrame — jangan diganti dengan library lain
> 3. Behind glow, shine, dan glare efek harus tetap ada
> 4. Komponen di-wrap `React.memo` — pastikan tetap di-memo setelah edit
> 5. Kartu hanya tampil di `lg:` breakpoint ke atas (hidden di mobile)

*(Tugas Anda sebagai QA: Tes di desktop — gerakkan mouse di atas kartu, pastikan tilt dan shine effect responsif. Pastikan kartu hidden di mobile view).*

---

### Tahap 6: Tambah Halaman / Route Baru
Gunakan tahap ini jika ingin menambah halaman di luar chat (blog, detail project, dll).

Copy-paste prompt di bawah ini ke dalam chat AI:

> Saat ini project hanya punya satu halaman (`src/app/page.tsx` → ChatInterface).
> Saya ingin menambah halaman baru: **[NAMA HALAMAN]**
>
> Detail:
> - Route path: `/[path]`
> - Tujuan halaman: [jelaskan apa yang ditampilkan]
> - Apakah perlu navigasi / link dari chat? [ya/tidak]
> - Layout: [sama dengan root / layout baru]
> - Data source: [dari cms-content.ts / API / static]
>
> **ATURAN HALAMAN BARU:**
> 1. Gunakan Next.js App Router convention (`src/app/[path]/page.tsx`)
> 2. Pertahankan visual consistency — gunakan design tokens dari `globals.css`
> 3. Background harus dark (`#08080f`) dengan efek yang konsisten
> 4. Pastikan `metadata` (title, description) diisi untuk SEO
> 5. Jika ada navigasi balik, tambahkan tombol kembali ke chat
> 6. Font tetap Geist (dari layout root)

*(Tugas Anda sebagai QA: Buka route baru di browser, pastikan tidak 404, styling konsisten dengan halaman utama, dan metadata SEO terisi).*

---

### Tahap 7: Optimasi Performa & SEO
Gunakan tahap ini sebelum deploy ke production.

Copy-paste prompt di bawah ini ke dalam chat AI:

> Tolong audit dan optimalkan project ini untuk production:
>
> **Performa:**
> - [ ] Pastikan semua image menggunakan `next/image` dengan lazy loading (kecuali avatar)
> - [ ] Audit bundle size — apakah ada import yang bisa di-lazy load? (Spline, SplashCursor)
> - [ ] Pastikan animasi menggunakan `will-change` atau `transform` (bukan animasi layout properties)
> - [ ] Review WebGL SplashCursor — apakah perlu dynamic import?
>
> **SEO & Accessibility:**
> - [ ] Pastikan `metadata` di `layout.tsx` lengkap (title, description, og:image, twitter:card)
> - [ ] Tambahkan `robots.txt` dan `sitemap.xml` di `/public`
> - [ ] Pastikan semua interactive elements punya aria-label
> - [ ] Review heading hierarchy (h1, h2, h3)
> - [ ] Pastikan color contrast ratio ≥ 4.5:1 untuk teks utama
>
> **Build Check:**
> - [ ] Jalankan `npm run build` dan pastikan tidak ada error
> - [ ] Cek output build size

*(Tugas Anda sebagai QA: Jalankan `npm run build`, pastikan zero errors. Buka Lighthouse di Chrome DevTools dan run audit — target: Performance > 90, Accessibility > 85, SEO > 90).*

---

### Tahap 8: Deploy ke Vercel
Gunakan tahap ini saat project siap dipublish.

Copy-paste prompt di bawah ini ke dalam chat AI:

> Project sudah siap deploy. Tolong bantu saya:
>
> 1. Pastikan `next.config.ts` sudah optimal untuk production
> 2. Buat file `.env.example` jika ada environment variables
> 3. Update `README.md` dengan:
>    - Deskripsi project yang proper
>    - Screenshot / preview
>    - Cara menjalankan lokal
>    - Tech stack
>    - Cara deploy
> 4. Pastikan semua file PDF CV ada di `/public/cv/`
> 5. Pastikan `/public/avatar.png` sudah ada (atau fallback SVG akan tampil)
>
> **Deploy command:**
> ```bash
> npx vercel --prod
> ```

*(Tugas Anda sebagai QA: Setelah deploy, buka URL production. Tes semua flow chat, download CV, responsive layout, dan pastikan avatar/gambar ter-load dengan benar).*

---

## ⚠️ ATURAN GLOBAL (Berlaku di Semua Tahap)

### 🎨 Design Rules
1. **Dark theme WAJIB** — base: `#08080f`, JANGAN ubah ke light theme tanpa instruksi
2. **Gradient palette**: indigo → purple → pink (bisa diatur ulang, tapi tetap harmonis)
3. **Glassmorphism**: `bg-opacity-low + backdrop-blur` — jangan solid background di chat area
4. **Typography**: Geist font via `next/font`, jangan tambah font lain tanpa instruksi
5. **Spacing**: Ikuti pattern Tailwind yang sudah ada (gap-2, gap-3, p-4, rounded-xl/2xl/3xl)

### 💻 Code Rules
1. **"use client"** — semua komponen yang pakai hooks/events HARUS punya directive ini
2. **Path alias** — gunakan `@/` untuk import dari `src/` (sudah dikonfigurasi di `tsconfig.json`)
3. **Data layer** — semua data portfolio ada di `src/data/cms-content.ts`, JANGAN hardcode di komponen
4. **TypeScript strict** — gunakan interfaces dari `src/types/cms.ts`, jangan `any`
5. **Framer Motion** — untuk animasi, jangan gunakan CSS animation kecuali untuk infinite loops sederhana
6. **Component pattern** — ikuti pattern yang ada: export function, props interface terpisah
7. **Naming**: file kebab-case, komponen PascalCase, CSS class prefix `pc-` untuk profile card

### 📱 Responsive Rules
1. **Desktop** (`lg:` ke atas): Profile Card (kiri) + Chat Window (kanan) — side by side
2. **Mobile** (`< lg`): SplineAvatar + AnimatedLocation (atas) + Chat Window (bawah) — stacked
3. Profile Card **hidden** di mobile, SplineAvatar **hidden** di desktop
4. Chat window `max-w-2xl` dan `flex-1`

### 🔒 Jangan Diubah Tanpa Instruksi Eksplisit
- `splash-cursor.tsx` (WebGL shader — sangat kompleks)
- `profile-card.css` (CSS tilt/holographic — sudah di-tune presisi)
- Root layout structure (`layout.tsx`)
- Intent detection architecture di `chat-engine.ts`

---

## 📝 Template Quick Prompts

Untuk perubahan kecil yang tidak perlu tahapan lengkap:

**Ubah bio/about response:**
> Ubah teks response intent "about" di `@src/lib/chat-engine.ts`. Teks baru: "[teks baru]"

**Tambah link sosmed baru:**
> Tambahkan link [platform] di `@src/components/content-contact.tsx` dengan value "[username]" dan URL "[url]".

**Ganti warna tema:**
> Ganti warna utama dari indigo ke [warna baru] di semua komponen. Cari semua class yang mengandung `indigo` dan ganti secara konsisten.

**Tambah skill baru:**
> Tambahkan skill "[nama skill]" di kategori "[kategori]" pada `@src/components/content-skills.tsx`.

**Tambah sertifikasi:**
> Tambahkan sertifikasi baru di `@src/components/content-certifications.tsx`: nama "[nama]", issuer "[issuer]", badge "[emoji]".

---

*Last updated: 2026-08-17*
*Project: portofolioky — Chat-Based Portfolio*
*Author: Rivky Riyantoro*
