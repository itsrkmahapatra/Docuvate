/**
 * Docuvate Theme Controller & Cryptographic Hash Engine
 * Apple/Linear Obsidian Dark Mode + Native WebCrypto SHA-256 Checksums
 */

(function () {
  'use strict';

  // 1. Theme Controller
  const THEME_KEY = 'docuvate-theme';

  window.DocuvateTheme = {
    getTheme() {
      const saved = localStorage.getItem(THEME_KEY);
      if (saved) return saved;
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    },

    setTheme(theme) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem(THEME_KEY, theme);
      this.updateToggles(theme);
    },

    toggle() {
      const current = document.documentElement.getAttribute('data-theme') || this.getTheme();
      const next = current === 'dark' ? 'light' : 'dark';
      this.setTheme(next);
    },

    updateToggles(theme) {
      document.querySelectorAll('.btn-theme-toggle').forEach(btn => {
        const icon = btn.querySelector('i');
        const label = btn.querySelector('.theme-label');
        if (theme === 'dark') {
          if (icon) icon.setAttribute('data-lucide', 'sun');
          if (label) label.textContent = 'Light Mode';
        } else {
          if (icon) icon.setAttribute('data-lucide', 'moon');
          if (label) label.textContent = 'Dark Mode';
        }
      });
      if (window.lucide) window.lucide.createIcons();
    },

    init() {
      const theme = this.getTheme();
      this.setTheme(theme);
      
      // Listen to OS theme changes if user has no explicit override
      if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
          if (!localStorage.getItem(THEME_KEY)) {
            this.setTheme(e.matches ? 'dark' : 'light');
          }
        });
      }

      window.addEventListener('DOMContentLoaded', () => {
        this.updateToggles(theme);
        document.querySelectorAll('.btn-theme-toggle').forEach(btn => {
          btn.addEventListener('click', () => this.toggle());
        });
      });
    }
  };

  // Immediate init to prevent theme flash
  window.DocuvateTheme.init();

  // 2. Cryptographic Integrity Engine
  window.DocuvateCrypto = {
    async calculateSha256(fileOrBuffer) {
      try {
        let buffer;
        if (fileOrBuffer instanceof Blob || fileOrBuffer instanceof File) {
          buffer = await fileOrBuffer.arrayBuffer();
        } else if (fileOrBuffer instanceof ArrayBuffer) {
          buffer = fileOrBuffer;
        } else if (fileOrBuffer.buffer instanceof ArrayBuffer) {
          buffer = fileOrBuffer.buffer;
        } else {
          throw new Error('Unsupported data type for hashing');
        }

        const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        return {
          sha256: hashHex,
          shortHash: `${hashHex.substring(0, 8)}...${hashHex.substring(hashHex.length - 8)}`,
          bytes: buffer.byteLength
        };
      } catch (err) {
        console.warn('[Docuvate Crypto] Checksum calculation failed:', err);
        return null;
      }
    }
  };
})();
