/**
 * Docuvate Universal Command Palette (Raycast / Spotlight Architecture)
 * Instant keyboard-driven navigation across all studios, tools, and actions
 */

(function () {
  'use strict';

  const COMMANDS = [
    {
      id: 'cmd-pdf-studio',
      title: 'Launch Master PDF Studio',
      subtitle: 'Merge, split, organize, crop, and compress PDFs',
      category: 'Workstations',
      icon: 'layers',
      badge: 'PDF',
      shortcut: 'P',
      action: () => {
        if (window.docuvateApp) window.docuvateApp.openPdfStudio();
        else window.location.href = 'index.html#pdf-studio';
      }
    },
    {
      id: 'cmd-image-studio',
      title: 'Launch Master Image Studio',
      subtitle: 'Resize to KB, crop, convert, and edit photos',
      category: 'Workstations',
      icon: 'image',
      badge: 'IMG',
      shortcut: 'I',
      action: () => {
        if (window.docuvateApp) window.docuvateApp.openImageStudio();
        else window.location.href = 'index.html#image-studio';
      }
    },
    {
      id: 'cmd-inkscribe',
      title: 'Open InkScribe Handwriting Studio',
      subtitle: 'Convert text, notes, and DOCX into realistic human handwriting',
      category: 'Workstations',
      icon: 'pen-tool',
      badge: 'INK',
      shortcut: 'H',
      action: () => {
        window.location.href = 'inkscribe.html';
      }
    },
    {
      id: 'cmd-cert-downloader',
      title: 'Odisha e-District Certificate Downloader',
      subtitle: 'Download issued Caste, Income, Residence certificates via token',
      category: 'Public Services',
      icon: 'award',
      badge: 'GOV',
      shortcut: 'C',
      action: () => {
        window.location.href = 'certificate-downloader.html';
      }
    },
    {
      id: 'cmd-compress-100kb',
      title: 'Compress PDF to 100 KB',
      subtitle: 'Strict ceiling binary compression for application portals',
      category: 'Quick Tools',
      icon: 'file-check-2',
      badge: '100KB',
      shortcut: 'K',
      action: () => {
        window.location.href = 'compress-pdf-to-100kb.html';
      }
    },
    {
      id: 'cmd-exam-resizer',
      title: 'Exam & Passport Photo Resizer',
      subtitle: 'UPSC, SSC, IBPS, Passport, and Visa specifications',
      category: 'Quick Tools',
      icon: 'user-check',
      badge: 'EXAM',
      shortcut: 'E',
      action: () => {
        window.location.href = 'image-resizer-kb.html';
      }
    },
    {
      id: 'cmd-privacy-audit',
      title: 'Run Live Privacy Sandbox Audit',
      subtitle: 'Verify 0.00 KB network leakage and inspect local sandbox',
      category: 'Security',
      icon: 'shield-check',
      badge: 'AUDIT',
      shortcut: 'A',
      action: () => {
        if (window.DocuvatePrivacy) window.DocuvatePrivacy.showAuditModal();
      }
    },
    {
      id: 'cmd-theme-toggle',
      title: 'Toggle Dark / Light Theme',
      subtitle: 'Switch between Obsidian Dark and Clean Light modes',
      category: 'Preferences',
      icon: 'moon',
      badge: 'THEME',
      shortcut: 'T',
      action: () => {
        if (window.DocuvateTheme) window.DocuvateTheme.toggle();
      }
    },
    {
      id: 'cmd-purge-ram',
      title: 'Purge Session & Wipe RAM Memory',
      subtitle: 'Zero out cached file buffers and revoke in-memory blob URLs',
      category: 'Security',
      icon: 'trash-2',
      badge: 'WIPE',
      shortcut: 'W',
      action: () => {
        if (window.DocuvatePrivacy) window.DocuvatePrivacy.purgeSession();
      }
    }
  ];

  class CommandPalette {
    constructor() {
      this.isOpen = false;
      this.selectedIndex = 0;
      this.filteredCommands = [...COMMANDS];
      this.initModal();
      this.bindShortcuts();
    }

    initModal() {
      const container = document.createElement('div');
      container.id = 'docuvateCommandPalette';
      container.className = 'cmd-palette-backdrop';
      container.innerHTML = `
        <div class="cmd-palette-dialog" role="dialog" aria-modal="true">
          <div class="cmd-palette-search-row">
            <i data-lucide="search" class="cmd-search-icon"></i>
            <input 
              type="text" 
              class="cmd-palette-input" 
              id="cmdPaletteInput" 
              placeholder="Type a command or search tools... (Esc to close)" 
              autocomplete="off" 
              spellcheck="false"
            />
            <span class="cmd-kbd-badge">ESC</span>
          </div>
          <div class="cmd-palette-results" id="cmdPaletteResults"></div>
          <div class="cmd-palette-footer">
            <div class="cmd-footer-hint">
              <span class="cmd-kbd-mini">↑</span><span class="cmd-kbd-mini">↓</span> Navigate
            </div>
            <div class="cmd-footer-hint">
              <span class="cmd-kbd-mini">↵</span> Select
            </div>
            <div class="cmd-footer-hint">
              <span class="cmd-kbd-mini">ESC</span> Close
            </div>
          </div>
        </div>
      `;

      document.body.appendChild(container);

      this.backdrop = container;
      this.dialog = container.querySelector('.cmd-palette-dialog');
      this.input = container.querySelector('#cmdPaletteInput');
      this.resultsContainer = container.querySelector('#cmdPaletteResults');

      // Click outside to dismiss
      this.backdrop.addEventListener('click', (e) => {
        if (e.target === this.backdrop) this.close();
      });

      // Filter on input
      this.input.addEventListener('input', () => {
        const query = this.input.value.toLowerCase().trim();
        this.filteredCommands = COMMANDS.filter(cmd => 
          cmd.title.toLowerCase().includes(query) ||
          cmd.subtitle.toLowerCase().includes(query) ||
          cmd.category.toLowerCase().includes(query) ||
          cmd.badge.toLowerCase().includes(query)
        );
        this.selectedIndex = 0;
        this.renderResults();
      });

      // Keyboard navigation inside input
      this.input.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          this.selectedIndex = (this.selectedIndex + 1) % Math.max(1, this.filteredCommands.length);
          this.renderResults();
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          this.selectedIndex = (this.selectedIndex - 1 + this.filteredCommands.length) % Math.max(1, this.filteredCommands.length);
          this.renderResults();
        } else if (e.key === 'Enter') {
          e.preventDefault();
          this.executeSelected();
        } else if (e.key === 'Escape') {
          e.preventDefault();
          this.close();
        }
      });
    }

    bindShortcuts() {
      // Global shortcut: Ctrl+K or Cmd+K
      document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
          e.preventDefault();
          this.toggle();
        } else if (e.key === 'Escape' && this.isOpen) {
          this.close();
        }
      });

      // Spotlight search trigger buttons
      document.querySelectorAll('.btn-command-palette').forEach(btn => {
        btn.addEventListener('click', () => this.open());
      });
    }

    renderResults() {
      if (this.filteredCommands.length === 0) {
        this.resultsContainer.innerHTML = `
          <div class="cmd-no-results">
            <p>No tools matching "<strong>${this.escapeHtml(this.input.value)}</strong>"</p>
          </div>
        `;
        return;
      }

      let currentCategory = '';
      let html = '';

      this.filteredCommands.forEach((cmd, idx) => {
        if (cmd.category !== currentCategory) {
          currentCategory = cmd.category;
          html += `<div class="cmd-group-label">${currentCategory}</div>`;
        }

        const isSelected = idx === this.selectedIndex;
        html += `
          <div class="cmd-item ${isSelected ? 'selected' : ''}" data-index="${idx}">
            <div class="cmd-item-left">
              <div class="cmd-item-icon-box">
                <i data-lucide="${cmd.icon}" style="width:16px; height:16px;"></i>
              </div>
              <div>
                <div class="cmd-item-title">${cmd.title}</div>
                <div class="cmd-item-sub">${cmd.subtitle}</div>
              </div>
            </div>
            <div class="cmd-item-right">
              <span class="cmd-item-badge">${cmd.badge}</span>
              ${cmd.shortcut ? `<span class="cmd-kbd-mini">${cmd.shortcut}</span>` : ''}
            </div>
          </div>
        `;
      });

      this.resultsContainer.innerHTML = html;

      // Mouse hover and click
      this.resultsContainer.querySelectorAll('.cmd-item').forEach(el => {
        el.addEventListener('mouseenter', () => {
          this.selectedIndex = parseInt(el.dataset.index);
          this.renderResults();
        });
        el.addEventListener('click', () => {
          this.selectedIndex = parseInt(el.dataset.index);
          this.executeSelected();
        });
      });

      // Lucide icons
      if (window.lucide) window.lucide.createIcons();

      // Ensure active item is scrolled into view
      const activeEl = this.resultsContainer.querySelector('.cmd-item.selected');
      if (activeEl) {
        activeEl.scrollIntoView({ block: 'nearest' });
      }
    }

    executeSelected() {
      const selected = this.filteredCommands[this.selectedIndex];
      if (selected && selected.action) {
        this.close();
        selected.action();
      }
    }

    open() {
      this.isOpen = true;
      this.backdrop.classList.add('active');
      this.input.value = '';
      this.filteredCommands = [...COMMANDS];
      this.selectedIndex = 0;
      this.renderResults();
      setTimeout(() => this.input.focus(), 50);
    }

    close() {
      this.isOpen = false;
      this.backdrop.classList.remove('active');
    }

    toggle() {
      if (this.isOpen) this.close();
      else this.open();
    }

    escapeHtml(str) {
      return str.replace(/[&<>'"]/g, 
        tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
      );
    }
  }

  // Auto-instantiate
  window.addEventListener('DOMContentLoaded', () => {
    window.DocuvateCommandPalette = new CommandPalette();
  });
})();
