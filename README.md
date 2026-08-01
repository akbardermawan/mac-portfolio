# Website Portfolio — Installation & Development Guide

## 1. Introduction

Website portfolio ini dibuat menggunakan **React** sebagai library utama untuk membangun antarmuka pengguna (user interface), dengan **Vite** sebagai development tool dan build tool.

Website ini juga menggunakan beberapa library tambahan untuk mendukung berbagai fitur, seperti animasi, routing halaman, state management, 3D graphics, PDF viewer, carousel, tooltip, dan styling menggunakan Tailwind CSS.

Sebelum menjalankan website ini, pastikan semua dependency yang dibutuhkan sudah terinstall dengan benar.

---

## 2. Requirements

Sebelum memulai proses instalasi, pastikan komputer sudah memiliki:

- **Node.js**
- **npm** atau package manager lainnya
- **Git** (opsional, jika project diambil dari repository Git)

Untuk memeriksa apakah Node.js sudah terinstall, jalankan perintah berikut di terminal:

```bash
node -v
```

Untuk memeriksa versi npm:

```bash
npm -v
```

Jika kedua perintah tersebut menampilkan nomor versi, berarti Node.js dan npm sudah tersedia dan siap digunakan.

---

## 3. Create a React Project with Vite

Jika ingin membuat project baru dari awal, gunakan perintah berikut:

```bash
npm create vite@latest mac_os-portfolio
```

Kemudian masuk ke folder project:

```bash
cd mac_os-portfolio
```

Pilih konfigurasi berikut ketika diminta oleh Vite:

- Framework: `React`
- Variant: `JavaScript`

Setelah project berhasil dibuat, install dependency dasar:

```bash
npm install
```

---

## 4. Install Project Dependencies

Project ini menggunakan beberapa dependency tambahan. Semua dependency dapat diinstall secara otomatis menggunakan perintah:

```bash
npm install
```

Perintah tersebut akan membaca file `package.json` dan menginstall seluruh dependency yang terdapat pada bagian `dependencies` dan `devDependencies`.

Jika ingin menginstall dependency secara manual, gunakan perintah berikut.

### React

```bash
npm install react react-dom
```

React digunakan sebagai library utama untuk membangun komponen dan user interface website.

---

### React Router

```bash
npm install react-router react-router-dom
```

Digunakan untuk mengatur navigasi dan perpindahan halaman pada website React.

---

### Tailwind CSS

```bash
npm install tailwindcss @tailwindcss/vite
```

Tailwind CSS digunakan untuk membuat tampilan website dengan utility classes secara cepat dan konsisten.

---

### React Icons

```bash
npm install react-icons
```

Digunakan untuk menambahkan berbagai macam icon ke dalam website.

---

### Framer Motion

```bash
npm install framer-motion
```

Digunakan untuk membuat animasi dan transition pada komponen React.

---

### GSAP dan GSAP React

```bash
npm install gsap @gsap/react
```

GSAP digunakan untuk membuat animasi yang lebih kompleks dan interaktif.

---

### Three.js dan React Three Fiber

```bash
npm install three @react-three/fiber @react-three/drei
```

Dependency ini digunakan untuk membuat dan menampilkan elemen 3D pada website.

- `three` — library utama untuk 3D graphics.
- `@react-three/fiber` — integrasi Three.js dengan React.
- `@react-three/drei` — kumpulan helper dan komponen tambahan untuk React Three Fiber.

---

### React Three Rapier

```bash
npm install @react-three/rapier
```

Digunakan untuk menambahkan physics simulation pada objek 3D.

---

### Redux Toolkit dan React Redux

```bash
npm install @reduxjs/toolkit react-redux
```

Digunakan untuk mengelola global state pada aplikasi React.

Redux Toolkit membantu menyederhanakan konfigurasi dan pengelolaan Redux, sedangkan React Redux digunakan untuk menghubungkan Redux dengan komponen React.

---

### Emotion

```bash
npm install @emotion/react @emotion/styled
```

Emotion digunakan sebagai CSS-in-JS library untuk membuat styling pada komponen React.

---

### React PDF

```bash
npm install react-pdf
```

Digunakan untuk menampilkan file PDF secara langsung di dalam website.

---

### React Slick dan Slick Carousel

```bash
npm install react-slick slick-carousel
```

Digunakan untuk membuat komponen carousel atau slider.

---

### React Tooltip

```bash
npm install react-tooltip
```

Digunakan untuk menampilkan tooltip atau informasi tambahan ketika pengguna berinteraksi dengan elemen tertentu.

---

### Day.js

```bash
npm install dayjs
```

Day.js digunakan untuk melakukan manipulasi dan formatting tanggal dan waktu.

---

### OGL

```bash
npm install ogl
```

OGL merupakan library WebGL yang dapat digunakan untuk membuat visual atau efek grafis berbasis WebGL.

---

### CLSX

```bash
npm install clsx
```

CLSX digunakan untuk menggabungkan class name secara dinamis berdasarkan kondisi tertentu.

---

## 5. Install All Runtime Dependencies at Once

Daripada menginstall satu per satu, seluruh dependency utama dapat diinstall sekaligus menggunakan perintah berikut:

```bash
npm install @emotion/react @emotion/styled @gsap/react @react-three/drei @react-three/fiber @react-three/rapier @reduxjs/toolkit @tailwindcss/vite clsx dayjs framer-motion gsap ogl react react-dom react-icons react-pdf react-redux react-router react-router-dom react-slick react-tooltip slick-carousel tailwindcss three
```

Kemudian install dependency untuk development:

```bash
npm install -D @eslint/js @types/react @types/react-dom @vitejs/plugin-react eslint eslint-plugin-react-hooks eslint-plugin-react-refresh globals vite
```

Namun, jika file `package.json` sudah tersedia di dalam project, cara yang paling direkomendasikan adalah cukup menjalankan:

```bash
npm install
```

Dengan cara ini, npm akan menginstall dependency berdasarkan versi yang sudah didefinisikan dalam `package.json`.

---

## 6. Development Dependencies

Project ini juga menggunakan beberapa development dependencies.

Development dependencies digunakan untuk membantu proses pengembangan, pengecekan kode, dan menjalankan development server.

Beberapa dependency yang digunakan antara lain:

### Vite

```bash
npm install -D vite
```

Vite digunakan sebagai development server dan build tool untuk project React.

### Vite React Plugin

```bash
npm install -D @vitejs/plugin-react
```

Digunakan untuk mendukung React dalam environment Vite.

### ESLint

```bash
npm install -D eslint
```

ESLint digunakan untuk membantu menemukan kesalahan dan masalah pada kode JavaScript atau React.

### ESLint React Plugins

```bash
npm install -D eslint-plugin-react-hooks eslint-plugin-react-refresh
```

Digunakan untuk membantu memastikan penggunaan React Hooks dan React Refresh sesuai dengan aturan yang benar.

---

## 7. Project Scripts

Project ini memiliki beberapa command yang dapat digunakan melalui npm.

### Menjalankan Development Server

```bash
npm run dev
```

Perintah ini digunakan untuk menjalankan website dalam mode development.

Setelah server berjalan, Vite akan memberikan alamat lokal yang dapat dibuka melalui browser.

Biasanya alamatnya adalah:

```text
http://localhost:5173
```

---

### Build Project

```bash
npm run build
```

Perintah ini digunakan untuk membuat versi production dari website.

Hasil build biasanya akan disimpan di dalam folder:

```text
dist
```

Folder tersebut berisi file website yang sudah dioptimalkan untuk deployment.

---

### Menjalankan ESLint

```bash
npm run lint
```

Digunakan untuk memeriksa kode dan mencari potensi masalah atau kesalahan berdasarkan aturan ESLint.

---

### Preview Production Build

Setelah menjalankan:

```bash
npm run build
```

Website dapat dijalankan dalam mode preview menggunakan:

```bash
npm run preview
```

Perintah ini berguna untuk memeriksa hasil production build secara lokal sebelum website di-deploy.

---

## 8. Recommended Installation Process

Jika project ini sudah memiliki file `package.json`, langkah instalasi yang direkomendasikan adalah sebagai berikut:

### Step 1 — Clone Project

Jika project berada di repository Git, clone repository terlebih dahulu:

```bash
git clone <repository-url>
```

Kemudian masuk ke folder project:

```bash
cd mac_os-portfolio
```

### Step 2 — Install Dependencies

Jalankan:

```bash
npm install
```

### Step 3 — Run Development Server

Jalankan:

```bash
npm run dev
```

### Step 4 — Open the Website

Buka alamat yang diberikan oleh Vite pada browser.

Contoh:

```text
http://localhost:5173
```

---

## 9. Complete Workflow

Secara keseluruhan, proses untuk menjalankan project adalah:

```bash
# Clone repository
git clone <repository-url>

# Masuk ke folder project
cd mac_os-portfolio

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Untuk membuat production build:

```bash
npm run build
```

Untuk melakukan preview terhadap production build:

```bash
npm run preview
```

Untuk melakukan pengecekan kode:

```bash
npm run lint
```

---

## 10. Package.json

Berikut adalah konfigurasi dependency yang digunakan dalam project:

```json
{
  "name": "mac_os-portfolio",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@emotion/react": "^11.14.0",
    "@emotion/styled": "^11.14.1",
    "@gsap/react": "^2.1.2",
    "@react-three/drei": "^10.7.7",
    "@react-three/fiber": "^9.5.0",
    "@react-three/rapier": "^2.2.0",
    "@reduxjs/toolkit": "^2.11.2",
    "@tailwindcss/vite": "^4.2.2",
    "clsx": "^2.1.1",
    "dayjs": "^1.11.20",
    "framer-motion": "^12.38.0",
    "gsap": "^3.14.2",
    "ogl": "^1.0.11",
    "react": "^19.2.4",
    "react-dom": "^19.2.4",
    "react-icons": "^5.6.0",
    "react-pdf": "^10.4.1",
    "react-redux": "^9.2.0",
    "react-router": "^7.14.0",
    "react-router-dom": "^7.14.0",
    "react-slick": "^0.31.0",
    "react-tooltip": "^5.30.0",
    "slick-carousel": "^1.8.1",
    "tailwindcss": "^4.2.2",
    "three": "^0.183.2"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.4",
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.1",
    "eslint": "^9.39.4",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.5.2",
    "globals": "^17.4.0",
    "vite": "^8.0.1"
  }
}
```

## 11. Conclusion

Website portfolio ini menggunakan ekosistem React modern yang dikombinasikan dengan berbagai teknologi pendukung.

React dan Vite digunakan sebagai fondasi utama aplikasi, sedangkan Tailwind CSS digunakan untuk styling. Framer Motion dan GSAP digunakan untuk animasi, sementara Three.js dan React Three Fiber digunakan untuk membuat elemen 3D yang interaktif.

Redux Toolkit digunakan untuk pengelolaan state, React Router digunakan untuk navigasi, dan berbagai library lainnya digunakan untuk mendukung kebutuhan seperti PDF viewer, carousel, tooltip, icon, serta manipulasi tanggal dan waktu.

Dengan seluruh dependency tersebut, website dapat dikembangkan menjadi portfolio yang interaktif, modern, dan memiliki pengalaman pengguna yang lebih menarik.
