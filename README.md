# ✍️ Docuvate

> **The 100% Private, Client-Side Document & Visual Workstation Suite**  
> *Zero Server Uploads • WebAssembly & Web Worker Powered • Installable Offline PWA*

[![Live Demo](https://img.shields.io/badge/Live-GitHub%20Pages-brightgreen.svg)](https://itsrkmahapatra.github.io/Docuvate/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PWA](https://img.shields.io/badge/PWA-Offline%20Ready-blue.svg)](https://itsrkmahapatra.github.io/Docuvate/)
[![Privacy](https://img.shields.io/badge/Privacy-Zero%20Cloud%20Leaks-emerald.svg)](https://itsrkmahapatra.github.io/Docuvate/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/itsrkmahapatra/Docuvate/pulls)

---

## 🌟 What is Docuvate?

**Docuvate** is a modern, high-performance, and privacy-first web application providing unified document and visual engineering studios directly inside your web browser. 

Unlike traditional document tools that upload your sensitive documents to remote cloud servers, **Docuvate processes 100% of your PDFs, images, and assignments locally in browser memory (RAM)** using WebAssembly, Web Workers, and HTML5 Canvas.

---

## 🚀 Key Flagship Studios & Tools

### 1. 📑 Master PDF Studio
- **100% Target KB Compressor**: Binary-search compression in a dedicated Web Worker guaranteeing files stay strictly under your desired ceiling (50 KB, 100 KB, 200 KB, 500 KB, 1 MB).
- **Interactive Visual Page Reordering**: Drag-and-drop page cards with smooth hover drop targets and real-time re-indexing.
- **Merge & Split**: Combine multiple PDFs/images into one or extract individual pages into a clean ZIP archive.
- **Visual Crop Box**: Drag-to-resize interactive crop box with header/footer and margin presets.
- **Draw Signature Stamp**: Canvas-based signing pad to embed digital signatures onto any PDF page.
- **Watermark & Page Numbering**: Custom diagonal/horizontal text watermarks and automated page numbering.
- **AI OCR & Format Conversion**: Convert PDF to high-res JPG/PNG or extract text using client-side Tesseract.js.

### 2. 🖼️ Master Image Studio
- **Official Exam & Govt Portal Presets**: 1-click resizing for UPSC, SSC, IBPS, Indian Passport (35×45 mm), US Visa (2×2 in), and Signature stamps (300×120 px, ≤20 KB).
- **Target KB Binary Resizer**: Smoothly downscales resolution and compresses images to meet strict portal upload ceilings.
- **Apple iPhone HEIC/HEIF Decoding**: Client-side conversion of `.heic` and `.heif` camera photos to standard JPEG without third-party converters.
- **Photo Editor**: Client-side brightness, contrast, grayscale, rotation, and watermarking.

### 3. ✒️ InkScribe Handwriting Studio
- **Text-to-Realistic Handwriting**: Converts digital text, notes, DOCX, and PDF assignments into human handwriting.
- **Paper & Ruling Engine**: Ruled, plain, and graph paper with customizable line gaps, margins, and ink colors.
- **Custom Font Upload**: Drag-and-drop your own `.ttf`, `.otf`, or `.woff` handwriting font files via the FontFace API.
- **Multi-Page PDF Export**: Automatic word-wrap pagination and print-ready high-resolution PDF generation.

### 4. 🏛️ Odisha e-District Certificate Downloader
- Instant 1-click gateway for citizens to download issued government certificates (Caste, Residence, Income, Legal Heir) with 8-character token routing.

### 5. 🎯 Dedicated High-Performance Landing Pages
- **[Compress PDF to 100KB](compress-pdf-to-100kb.html)**: Fast 1-click compressor tailored for government and job portal limits.
- **[Resize Image in KB](image-resizer-kb.html)**: Instant photo and signature formatter matching official exam specifications.

---

## 🔒 Military-Grade Privacy & Live Network Auditor

Docuvate includes an active **Live Network Auditor** (`js/privacy-monitor.js`) with an interactive security badge:
- **Zero Cloud Uploads**: Intercepts external requests to guarantee zero user file bytes leave your computer.
- **Live Audit Modal**: Click the **Live Audit** badge in the header anytime to view real-time transmission metrics (0.00 KB leaked).
- **Session Purge & RAM Wiper**: Instantly wipe in-memory buffers and revoke blob URLs with 1 click.

---

## 📱 Progressive Web App (PWA) & True Offline Support

Docuvate is a certified **Progressive Web App**:
- Installable on **Windows, macOS, Linux, ChromeOS, iOS, and Android**.
- Backed by **Service Worker (`sw.js`)** with an aggressive cache-first strategy for app shells, WASM binaries, and fonts.
- Operates seamlessly on an airplane or in restricted intranet environments without an internet connection.

---

## 🛠️ Technology Stack

| Component | Technology |
| :--- | :--- |
| **Core Architecture** | Pure Vanilla HTML5, CSS3, Modern JavaScript (ES6+) |
| **PDF Engineering** | `pdf-lib` (WASM/JS manipulation), `pdf.js` (Canvas rendering) |
| **Worker Engine** | `compressor.worker.js` (Multi-threaded binary search optimization) |
| **OCR & Vision** | `tesseract.js` (Client-side Optical Character Recognition) |
| **Mobile Formats** | `heic2any` (Client-side Apple HEIC/HEIF decoder) |
| **Archives** | `jszip` (Client-side multi-file archiving) |
| **PWA & Offline** | Web App Manifest (`manifest.json`), Service Worker Cache API (`sw.js`) |
| **Design System** | Custom CSS variables, Glassmorphism, Lucide Icons, Google Fonts |

---

## 💻 Local Development & Quick Start

Because Docuvate is built with **zero build dependencies**, you don't need `npm install` or complex bundlers to run it locally:

```bash
# 1. Clone the repository
git clone https://github.com/itsrkmahapatra/Docuvate.git

# 2. Navigate to directory
cd Docuvate

# 3. Start any local static server (e.g. Python, Node, or VS Code Live Server)
python -m http.server 8000
# or
npx serve .
```

Open `http://localhost:8000` in your browser.

---

## 🤝 Contributing

Contributions, feedback, and feature requests are welcome!
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: Add AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

---

**Engineered with ❤️ for privacy and efficiency by [Raj Kishor Mahapatra](https://itsrkmahapatra.qzz.io/).**
