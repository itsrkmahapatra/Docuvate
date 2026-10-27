# ✍️ Docuvate

> **The 100% Private, Client-Side Document & Visual Workstation Suite**  
> *Zero Server Uploads • Zero Third-Party CDN Dependencies • WebAssembly & Web Worker Powered • Installable Offline PWA*

[![Live Demo](https://img.shields.io/badge/Live-GitHub%20Pages-brightgreen.svg)](https://itsrkmahapatra.github.io/Docuvate/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PWA](https://img.shields.io/badge/PWA-Offline%20Ready-blue.svg)](https://itsrkmahapatra.github.io/Docuvate/)
[![Privacy](https://img.shields.io/badge/Privacy-Zero%20Cloud%20Leaks-emerald.svg)](https://itsrkmahapatra.github.io/Docuvate/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/itsrkmahapatra/Docuvate/pulls)

---

## 🌟 What is Docuvate?

**Docuvate** is a modern, high-performance, and privacy-first web application providing dedicated document and visual engineering studios directly inside your web browser. 

Unlike traditional document tools that upload your sensitive documents to remote cloud servers, **Docuvate processes 100% of your PDFs, images, and assignments locally in browser memory (RAM)** using WebAssembly, Web Workers, WebCrypto, and HTML5 Canvas.

**Zero Third-Party Dependencies:** All required engines and parsers (`pdf-lib`, `pdf.js`, `tesseract.js`, `lucide`, `jszip`, `heic2any`) are downloaded and bundled directly inside the local `vendor/` directory. No CDNs, no tracking, and no external points of failure.

---

## 🚀 Dedicated Tool Studios & Workstations

Every tool in Docuvate operates in its own dedicated, standalone studio page:

### 📑 PDF Workstations
* **[Merge PDF Studio](merge-pdf.html):** Multi-file drag-and-drop workbench with visual reordering.
* **[Split & Extract PDF Studio](split-pdf.html):** Visual thumbnail grid with custom page range slicing (`1-3, 5`) and All/Odd/Even quick selectors.
* **[Compress PDF Studio](compress-pdf.html):** Iterative target KB ceiling compression (50KB, 100KB, 200KB, 500KB).
* **[Compress PDF to 100KB](compress-pdf-to-100kb.html):** Dedicated high-speed portal for government job applications.
* **[Sign & Stamp PDF Studio](sign-pdf.html):** Official vector status stamps (`APPROVED`, `CONFIDENTIAL`, `DRAFT`, `VERIFIED`, `ATTESTED`), drawn signature pad, ink color selection, and all-page support.
* **[PDF to Image Converter](pdf-to-image.html):** Render PDF pages into 150/300 DPI high-definition JPG/PNG images with 1-click batch ZIP download.
* **[Image to PDF Converter](image-to-pdf.html):** Combine photos, receipts, and scans into a clean formatted A4 PDF.
* **[Organize & Rotate PDF](organize-pdf.html):** Visual page cards to rotate 90° clockwise/counter-clockwise, delete pages, and reorganize document structure.
* **[Protect & Unlock PDF](protect-pdf.html):** Password encryption and decryption directly in your browser.
* **[OCR Text Extractor](ocr-pdf.html):** Extract text from scanned PDFs and photos using client-side Tesseract.js neural models with live progress and `.txt` export.

### 🖼️ Visual & Image Workstations
* **[Image Resizer in KB](image-resizer-kb.html):** Binary-search compression strictly under 20KB, 50KB, or 100KB for UPSC, SSC, IBPS, and state PSC application portals.
* **[Crop, Rotate & Filter Studio](crop-image.html):** Aspect ratio locks (1:1, 4:5, 16:9, 3.5×4.5cm), 90° rotation, and image adjustments.
* **[Biometric Passport Photo Studio](passport-photo.html):** Official ICAO biometric facial guide overlay (Crown boundary, Eye Line 50%–69%, Chin baseline) and printable 6×4 photo sheets.
* **[Convert Image Formats](convert-image.html):** Batch convert between JPG, PNG, WEBP, and Apple iPhone HEIC/HEIF camera photos.

### ✒️ Digital Handwriting & Govt Utilities
* **[InkScribe Handwriting Studio](inkscribe.html):** Convert digital text, notes, and DOCX/PDF assignments into natural human handwriting with organic tilt drift, paper textures (ruled, graph, vintage parchment, legal yellow pad), custom font uploader (`.ttf`/`.otf`), and Puter AI writer.
* **[Odisha e-District Downloader](certificate-downloader.html):** Independent public gateway for citizens to download issued government certificates (Caste, Residence, Income, Legal Heir) with 8-character token routing.

---

## 🔒 Military-Grade Privacy & Live Network Auditor

Docuvate includes an active **Live Network Auditor** with an interactive security badge:
* **Zero Cloud Uploads:** Intercepts external requests to guarantee zero user file bytes leave your computer.
* **WebCrypto SHA-256 Checksums:** Calculates native cryptographic hashes in real time to verify document integrity.
* **Live Audit Modal:** Click the **Live Audit** badge in the header anytime to view real-time transmission metrics (0.00 KB leaked).
* **Session Purge & RAM Wiper:** Instantly wipe in-memory buffers and revoke blob URLs with 1 click.

---

## 📱 Progressive Web App (PWA) & True Offline Support

Docuvate is a certified **Progressive Web App**:
* Installable on **Windows, macOS, Linux, ChromeOS, iOS, and Android**.
* Backed by **Service Worker (`sw.js`)** pre-caching all app shells, local styles, and local `vendor/` libraries.
* Operates 100% offline with zero internet connectivity.

---

## 🛠️ Technology Stack

| Component | Technology |
| :--- | :--- |
| **Core Architecture** | Pure Vanilla HTML5, CSS3, Modern JavaScript (ES6+) |
| **Single Stylesheet** | `css/style.css` (Obsidian Dark & Apple Light theme system) |
| **Single Application Engine** | `js/app.js` (Unified client-side router, crypto, privacy, and tool engines) |
| **PDF Engineering** | `vendor/pdf-lib.min.js`, `vendor/pdf.min.js`, `vendor/pdf.worker.min.js` |
| **Vision & OCR** | `vendor/tesseract.min.js` (Local WASM neural OCR engine) |
| **Image & Format Engine** | `vendor/heic2any.min.js` (Apple HEIC decoder), HTML5 Canvas 2D |
| **Packaging & Export** | `vendor/jszip.min.js`, `vendor/jspdf.umd.min.js`, `vendor/html2canvas.min.js` |

---

## 👨‍💻 Author & Engineer

**Docuvate** is designed and engineered by **[Raj Kishor Mahapatra](https://itsrkmahapatra.qzz.io/)**.  
Licensed under the [MIT License](LICENSE).
