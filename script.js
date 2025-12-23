/* =========================
   Settings + Storage
   ========================= */
const STORAGE_KEY = "ebook_settings_v2";

const DEFAULT_SETTINGS = {
  fontSize: 16,                 // px
  fontFamilyKey: "times",       // 'times' | 'roboto' | 'lora' | 'custom'
  fontWeight: 400,              // 400 for normal, 700 for bold (Lora bold)
  bgColor: "#ffffff",
  textColor: "#111111"
};

const FONT_MAP = {
  times: { css: `"Times New Roman", Times, serif`, weight: 400 },
  roboto: { css: `Roboto, "Helvetica Neue", Arial, sans-serif`, weight: 400 },
  lora: { css: `Lora, serif`, weight: 700 }
};

function loadSettings() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_SETTINGS };
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_SETTINGS, ...parsed };
  } catch (e) {
    console.warn("loadSettings error", e);
    return { ...DEFAULT_SETTINGS };
  }
}
function saveSettings(settings) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  } catch (e) {
    console.warn("saveSettings error", e);
  }
}

function applySettings(settings) {
  const root = document.documentElement;
  root.style.setProperty("--reader-font-size", `${settings.fontSize}px`);
  const fentry = FONT_MAP[settings.fontFamilyKey] || FONT_MAP.times;
  root.style.setProperty("--reader-font-family", (settings.fontFamilyKey === "custom" && settings.customFont) ? settings.customFont : fentry.css);
  const weight = settings.fontWeight || fentry.weight || 400;
  root.style.setProperty("--reader-font-weight", weight);
  root.style.setProperty("--reader-bg-color", settings.bgColor || DEFAULT_SETTINGS.bgColor);
  root.style.setProperty("--reader-text-color", settings.textColor || DEFAULT_SETTINGS.textColor);
  saveSettings(settings);
}

/* font size helpers */
function setFontSize(px) {
  const settings = loadSettings();
  const min = 10, max = 48;
  const size = Math.round(Math.min(max, Math.max(min, px)));
  settings.fontSize = size;
  applySettings(settings);
}
function increaseFontSize(step = 2) {
  const settings = loadSettings();
  setFontSize(settings.fontSize + step);
}
function decreaseFontSize(step = 2) {
  const settings = loadSettings();
  setFontSize(settings.fontSize - step);
}
function setFontByKey(key) {
  const root = document.documentElement;

  switch (key) {
    case "times":
      root.style.setProperty("--reader-font-family", "Times New Roman, Times, serif");
      root.style.setProperty("--reader-font-weight", "400");
      break;

    case "roboto":
      root.style.setProperty("--reader-font-family", "Roboto, Arial, sans-serif");
      root.style.setProperty("--reader-font-weight", "300");
      break;

    case "lora":
      root.style.setProperty("--reader-font-family", "'Lora', serif");
      root.style.setProperty("--reader-font-weight", "600");
      break;
  }

  try {
    localStorage.setItem("reader_font", key);
  } catch (e) { }
}

function setFontFamilyString(fontFamilyString, fontWeight = 400) {
  const settings = loadSettings();
  settings.fontFamilyKey = "custom";
  settings.customFont = fontFamilyString;
  settings.fontWeight = fontWeight;
  document.documentElement.style.setProperty("--reader-font-family", fontFamilyString);
  document.documentElement.style.setProperty("--reader-font-weight", fontWeight);
  saveSettings(settings);
}

/* Color palette */
const BG_PALETTE = [
  "#ffffff", "#f4ecd8", "#fff7e6", "#f0f8ff", "#faf6f0",
  "#f5f5f5", "#111111", "#0f1724",
];
const TEXT_PALETTE = [
  "#111111", "#222222", "#333333", "#4b2e2e", "#5b4636",
  "#ffffff", "#e6e6e6", "#6b7280",
];

function setBackgroundColor(hex) {
  const settings = loadSettings();
  settings.bgColor = hex;
  applySettings(settings);
}
function setTextColor(hex) {
  const settings = loadSettings();
  settings.textColor = hex;
  applySettings(settings);
}
function setColors(bgHex, textHex) {
  const settings = loadSettings();
  settings.bgColor = bgHex;
  settings.textColor = textHex;
  applySettings(settings);
}

function buildPalette(containerId, palette, onClickFn) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";
  palette.forEach(hex => {
    const btn = document.createElement("button");
    btn.className = "color-swatch";
    btn.style.background = hex;
    btn.title = hex;
    btn.onclick = () => onClickFn(hex);
    container.appendChild(btn);
  });
}
function buildPaletteUIIfNeeded() {
  buildPalette("bg-palette", BG_PALETTE, (hex) => setBackgroundColor(hex));
  buildPalette("text-palette", TEXT_PALETTE, (hex) => setTextColor(hex));
}

/* Fullscreen */
function enterFullscreen(elem = document.documentElement) {
  if (elem.requestFullscreen) return elem.requestFullscreen();
  if (elem.webkitRequestFullscreen) return elem.webkitRequestFullscreen();
  if (elem.mozRequestFullScreen) return elem.mozRequestFullScreen();
  if (elem.msRequestFullscreen) return elem.msRequestFullscreen();
  return Promise.reject(new Error("Fullscreen API is not supported"));
}
function exitFullscreen() {
  if (document.exitFullscreen) return document.exitFullscreen();
  if (document.webkitExitFullscreen) return document.webkitExitFullscreen();
  if (document.mozCancelFullScreen) return document.mozCancelFullScreen();
  if (document.msExitFullscreen) return document.msExitFullscreen();
  return Promise.reject(new Error("Fullscreen API is not supported"));
}
function isFullscreen() {
  return !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement);
}
function toggleFullscreen(elem = document.documentElement) {
  if (isFullscreen()) return exitFullscreen();
  return enterFullscreen(elem);
}

/* =========================
   Chapters / TOC / Navigation
   ========================= */
const LS_CHAPTER_INDEX = "ebook_current_chapter_index";
const LS_SCROLL_POS = "ebook_scroll_positions_v1";

let currentChapterIndex = 0;
let chapterCount = (typeof chapters !== "undefined") ? chapters.length : 0;

/* DOM refs - declare once, assign on DOMContentLoaded */
let tocContainer = null;
let readerContent = null;
let readerWrapper = null;

/* scroll storage helpers */
function loadScrollPositions() {
  try {
    const raw = localStorage.getItem(LS_SCROLL_POS);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}
function saveScrollPositions(obj) {
  try {
    localStorage.setItem(LS_SCROLL_POS, JSON.stringify(obj));
  } catch (e) { }
}
function saveCurrentScrollPosition() {
  if (!readerContent || !Array.isArray(chapters) || chapters.length === 0) return;
  const posObj = loadScrollPositions();
  const ch = chapters[currentChapterIndex];
  if (!ch) return;
  posObj[ch.id] = readerContent.scrollTop || 0;
  saveScrollPositions(posObj);
}

/* Render TOC */
function renderTOC() {
  const tocEl = document.getElementById("toc");
  if (!tocEl || typeof chapters === "undefined") return;

  tocEl.innerHTML = "";

  chapters.forEach((chapter, chIndex) => {
    // CHƯƠNG (button)
    const chBtn = document.createElement("button");
    chBtn.className = "toc-item toc-chapter";
    chBtn.innerHTML = `<span>${chapter.title}</span><span style="float:right; font-weight:normal; opacity:0.8; font-size:0.9em;">${chapter.page}</span>`;
    chBtn.dataset.index = chIndex; // dùng cho highlight
    chBtn.addEventListener("click", () => {
      goToChapter(chIndex, { focus: true, resetScroll: true });
    });
    tocEl.appendChild(chBtn);

    // MỤC (h2) - lấy từ nội dung tạm
    const temp = document.createElement("div");
    temp.innerHTML = chapter.content || "";
    const h2List = temp.querySelectorAll("h2");

    if (h2List.length > 0) {
      h2List.forEach((h2, h2Index) => {
        const h2Btn = document.createElement("button");
        h2Btn.className = "toc-item toc-section";
        h2Btn.textContent = h2.textContent;
        // lưu chapter + section để có thể highlight/kiểm tra
        h2Btn.dataset.chapterIndex = chIndex;
        h2Btn.dataset.sectionIndex = h2Index;

        // **GỌI ĐÚNG**: truyền options.sectionIndex
        h2Btn.addEventListener("click", (e) => {
          e.stopPropagation();
          goToChapter(chIndex, { sectionIndex: h2Index, focus: true });
        });

        tocEl.appendChild(h2Btn);
      });
    }
  });
}


/* highlight TOC */
function highlightTOCItem(activeIndex) {
  if (!tocContainer) return;
  const items = tocContainer.querySelectorAll(".toc-item");
  items.forEach(btn => {
    btn.classList.toggle("active", Number(btn.dataset.index) === activeIndex);
  });
}

/* goToChapter */
function goToChapter(index, options = {}) {
  if (!Array.isArray(chapters) || chapters.length === 0) return;
  if (index < 0) index = 0;
  if (index >= chapters.length) index = chapters.length - 1;

  // save current scroll before switching
  try { saveCurrentScrollPosition(); } catch (e) { }

  currentChapterIndex = index;
  const ch = chapters[index];
  if (!readerContent) return;

  readerContent.innerHTML = ch.content || `<h1>${ch.title}</h1><p>(Không có nội dung)</p>`;

  // Update page badge
  const badge = document.getElementById("page-badge");
  if (badge) {
    badge.textContent = ch.page ? `Trang ${ch.page} / ${chapterCount}` : "";
    badge.style.display = ch.page ? "block" : "none";
  }

  highlightTOCItem(index);

  try { localStorage.setItem(LS_CHAPTER_INDEX, String(index)); } catch (e) { }

  /* =========================
     XỬ LÝ CUỘN (ưu tiên h2)
     ========================= */

  const positions = loadScrollPositions();

  // 1️⃣ Nếu có yêu cầu nhảy tới mục (h2)
  if (typeof options.sectionIndex === "number") {
    setTimeout(() => {
      const h2s = readerContent.querySelectorAll("h2");
      if (h2s[options.sectionIndex]) {
        h2s[options.sectionIndex].scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      } else {
        readerContent.scrollTop = 0;
      }
    }, 0);

    // 2️⃣ Nếu reset scroll
  } else if (options.resetScroll === true || typeof positions[ch.id] === "undefined") {
    readerContent.scrollTop = 0;

    // 3️⃣ Restore scroll cũ
  } else if (options.scrollToBottom === true) {
    setTimeout(() => {
      readerContent.scrollTop = readerContent.scrollHeight;
    }, 0);
  } else {
    const pos = positions[ch.id];
    setTimeout(() => {
      readerContent.scrollTop = Math.min(
        pos,
        readerContent.scrollHeight - readerContent.clientHeight
      );
    }, 0);
  }

  if (options.focus && readerContent) readerContent.focus();

  // restore highlights/notes UI for this chapter
  restoreHighlightsForCurrentChapter();
  renderHighlightsUI();
  renderNotesUI();
}

/* next / prev */
function goToNextChapter() {
  if (currentChapterIndex < chapters.length - 1) goToChapter(currentChapterIndex + 1, { focus: true, resetScroll: true });
}
function goToPreviousChapter() {
  if (currentChapterIndex > 0) goToChapter(currentChapterIndex - 1, { focus: true, resetScroll: true });
}

/* scroll within chapter */
function scrollToTop() {
  if (!readerContent) return;
  readerContent.scrollTo({ top: 0, behavior: "smooth" });
}
function scrollToBottom() {
  if (!readerContent) return;
  readerContent.scrollTo({ top: readerContent.scrollHeight, behavior: "smooth" });
}

/* debounced save */
function debounce(fn, wait = 200) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), wait);
  };
}
const debouncedSaveScroll = debounce(saveCurrentScrollPosition, 300);

/* initReader */
function initReader() {
  renderTOC();

  let idx = 0;
  try {
    const raw = localStorage.getItem(LS_CHAPTER_INDEX);
    if (raw !== null) idx = Math.min(Math.max(0, Number(raw)), chapters.length - 1);
  } catch (e) { idx = 0; }

  if (readerContent) {
    readerContent.addEventListener("scroll", debouncedSaveScroll);

    // Scroll-based navigation
    let isNavigating = false;
    // Debounce nav to prevent skipping multiple chapters at once
    const resetNav = debounce(() => { isNavigating = false; }, 800);

    readerContent.addEventListener("wheel", (e) => {
      if (isNavigating) return;

      const scrollTop = readerContent.scrollTop;
      const scrollHeight = readerContent.scrollHeight;
      const clientHeight = readerContent.clientHeight;
      const t = 1; // Tolerance

      // Check scroll UP at top
      if (e.deltaY < 0 && scrollTop <= t) {
        if (currentChapterIndex > 0) {
          isNavigating = true;
          goToChapter(currentChapterIndex - 1, { focus: true, scrollToBottom: true });
          resetNav();
          e.preventDefault();
        }
      }
      // Check scroll DOWN at bottom
      else if (e.deltaY > 0 && Math.abs(scrollHeight - clientHeight - scrollTop) <= t) {
        if (currentChapterIndex < chapters.length - 1) {
          isNavigating = true;
          goToChapter(currentChapterIndex + 1, { focus: true, resetScroll: true });
          resetNav();
          e.preventDefault();
        }
      }
    }, { passive: false });
  }

  document.addEventListener("keydown", (ev) => {
    if (ev.key === "ArrowRight") { goToNextChapter(); ev.preventDefault(); }
    else if (ev.key === "ArrowLeft") { goToPreviousChapter(); ev.preventDefault(); }
    else if (ev.key === "Home") { scrollToTop(); ev.preventDefault(); }
    else if (ev.key === "End") { scrollToBottom(); ev.preventDefault(); }
  });

  goToChapter(idx, { focus: false });
}

/* expose nav functions */
window.goToChapter = goToChapter;
window.goToNextChapter = goToNextChapter;
window.goToPreviousChapter = goToPreviousChapter;
window.scrollToTop = scrollToTop;
window.scrollToBottom = scrollToBottom;

/* =========================
   Highlights / Notes / Anti-copy / Watermark
   ========================= */
const LS_HIGHLIGHTS = "ebook_highlights_v1";
const LS_NOTES = "ebook_notes_v1";

let highlights = [];
let notes = [];

function uid(prefix = "") {
  return prefix + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}
function saveHighlightsToStorage() {
  try { localStorage.setItem(LS_HIGHLIGHTS, JSON.stringify(highlights)); } catch (e) { }
}
function saveNotesToStorage() {
  try { localStorage.setItem(LS_NOTES, JSON.stringify(notes)); } catch (e) { }
}
function loadHighlightsFromStorage() {
  try { const r = localStorage.getItem(LS_HIGHLIGHTS); return r ? JSON.parse(r) : []; } catch (e) { return []; }
}
function loadNotesFromStorage() {
  try { const r = localStorage.getItem(LS_NOTES); return r ? JSON.parse(r) : []; } catch (e) { return []; }
}
function getCurrentChapterId() {
  if (typeof currentChapterIndex !== "undefined" && Array.isArray(chapters) && chapters[currentChapterIndex]) {
    return chapters[currentChapterIndex].id;
  }
  return null;
}

/* initialize in-memory lists from storage */
highlights = loadHighlightsFromStorage();
notes = loadNotesFromStorage();

/* helper: check selection */
function selectionIsInsideReader() {
  const sel = window.getSelection();
  if (!sel || sel.isCollapsed) return false;
  const node = sel.anchorNode;
  return readerContent && (readerContent === node || readerContent.contains(node));
}

/* wrap by searching first occurrence in text nodes */
function wrapFirstOccurrenceInTextNodes(container, searchText, wrapId, colorStyle) {
  if (!container || !searchText) return false;
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, null, false);
  let node;
  while ((node = walker.nextNode())) {
    const idx = node.data.indexOf(searchText);
    if (idx >= 0) {
      const before = node.data.slice(0, idx);
      const match = node.data.slice(idx, idx + searchText.length);
      const after = node.data.slice(idx + searchText.length);
      const parent = node.parentNode;

      if (before) parent.insertBefore(document.createTextNode(before), node);
      const span = document.createElement("span");
      span.className = "ebook-highlight";
      span.dataset.highlightId = wrapId;
      if (colorStyle) span.style.background = colorStyle;
      span.textContent = match;
      parent.insertBefore(span, node);
      if (after) parent.insertBefore(document.createTextNode(after), node);
      parent.removeChild(node);
      return true;
    }
  }
  return false;
}

/* create highlight */
function createHighlight(color = "yellow") {
  if (!selectionIsInsideReader()) { showAlert("Vui lòng chọn văn bản trong vùng đọc trước khi tô"); return null; }
  const sel = window.getSelection();
  const text = sel.toString().trim();
  if (!text) { showAlert("Không có văn bản được chọn"); return null; }

  const chapterId = getCurrentChapterId();
  if (!chapterId) { showAlert("Không xác định được chương hiện hành"); return null; }

  try {
    const range = sel.getRangeAt(0);
    const id = uid("hl_");
    const span = document.createElement("span");
    span.className = "ebook-highlight";
    span.dataset.highlightId = id;
    span.style.background = color || "yellow";

    try {
      range.surroundContents(span);
      highlights.push({ id, chapterId, text, color, createdAt: new Date().toISOString() });
      saveHighlightsToStorage();
      sel.removeAllRanges();
      renderHighlightsUI();
      return id;
    } catch (e) {
      sel.removeAllRanges();
      const wrapped = wrapFirstOccurrenceInTextNodes(readerContent, text, id, color);
      if (wrapped) {
        highlights.push({ id, chapterId, text, color, createdAt: new Date().toISOString() });
        saveHighlightsToStorage();
        renderHighlightsUI();
        return id;
      } else {
        showAlert("Không thể tạo highlight cho đoạn chọn (cấu trúc DOM phức tạp).");
        return null;
      }
    }
  } catch (err) {
    console.warn("createHighlight error", err);
    showAlert("Lỗi khi tạo highlight");
    return null;
  }
}

/* remove highlight */
function removeHighlight(id) {
  if (!id) return;
  if (!readerContent) return;
  const spans = readerContent.querySelectorAll(`span.ebook-highlight[data-highlight-id="${id}"]`);
  spans.forEach(sp => {
    const parent = sp.parentNode;
    parent.replaceChild(document.createTextNode(sp.textContent), sp);
    parent.normalize();
  });
  highlights = highlights.filter(h => h.id !== id);
  saveHighlightsToStorage();
  renderHighlightsUI();
}

/* restore highlights for current chapter */
function restoreHighlightsForCurrentChapter() {
  if (!readerContent) return;
  const existing = readerContent.querySelectorAll("span.ebook-highlight");
  existing.forEach(sp => {
    sp.replaceWith(document.createTextNode(sp.textContent));
  });

  const chapterId = getCurrentChapterId();
  if (!chapterId) return;
  const hs = highlights.filter(h => h.chapterId === chapterId);
  hs.forEach(h => {
    wrapFirstOccurrenceInTextNodes(readerContent, h.text, h.id, h.color);
  });

  setTimeout(() => {
    const spansNow = readerContent.querySelectorAll("span.ebook-highlight");
    spansNow.forEach(sp => {
      sp.style.cursor = "pointer";
      sp.onclick = (ev) => {
        ev.stopPropagation();
        const hid = sp.dataset.highlightId;
        sp.scrollIntoView({ behavior: "smooth", block: "center" });
        sp.animate([{ boxShadow: "0 0 0px rgba(255,255,0,0.0)" }, { boxShadow: "0 0 12px rgba(255,255,0,0.9)" }, { boxShadow: "0 0 0px rgba(255,255,0,0.0)" }], { duration: 700 });
      };
    });
  }, 50);
}

/* render highlights UI */
function renderHighlightsUI() {
  const cont = document.getElementById("highlights-list");
  if (!cont) return;
  cont.innerHTML = "";
  const chapterId = getCurrentChapterId();
  const list = highlights.filter(h => h.chapterId === chapterId);
  if (list.length === 0) {
    cont.innerHTML = "<div class='muted'>Không có highlight trong chương này.</div>";
    return;
  }
  list.forEach(h => {
    const row = document.createElement("div");
    row.className = "hl-row";
    row.innerHTML = `
      <button class="hl-jump" data-id="${h.id}">→</button>
      <span class="hl-snippet" title="${escapeHtml(h.text)}">${truncate(h.text, 120)}</span>
      <button class="hl-remove" data-id="${h.id}">✖</button>
    `;
    cont.appendChild(row);
    row.querySelector(".hl-jump").onclick = () => {
      const el = readerContent.querySelector(`span.ebook-highlight[data-highlight-id="${h.id}"]`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    };
    row.querySelector(".hl-remove").onclick = () => {
      showConfirm("Xoá highlight này?").then(ok => {
        if (ok) removeHighlight(h.id);
      });
    };
  });
}

/* Notes */
function addNoteToHighlight(highlightId, text) {
  if (!highlightId || !text) return null;
  const hi = highlights.find(h => h.id === highlightId);
  if (!hi) { showAlert("Highlight không tồn tại"); return null; }
  const nid = uid("n_");
  const n = { id: nid, highlightId, chapterId: hi.chapterId, content: text, createdAt: new Date().toISOString() };
  notes.push(n);
  saveNotesToStorage();
  renderNotesUI();
  return nid;
}
function removeNote(noteId) {
  notes = notes.filter(n => n.id !== noteId);
  saveNotesToStorage();
  renderNotesUI();
}
function renderNotesUI() {
  const cont = document.getElementById("notes-list");
  if (!cont) return;
  cont.innerHTML = "";
  const chapterId = getCurrentChapterId();
  const list = notes.filter(n => n.chapterId === chapterId);
  if (list.length === 0) { cont.innerHTML = "<div class='muted'>Không có ghi chú trong chương này.</div>"; return; }
  list.forEach(n => {
    const row = document.createElement("div");
    row.className = "note-row";
    row.innerHTML = `
      <button class="note-jump" data-id="${n.id}">→</button>
      <span class="note-text">${escapeHtml(n.content)}</span>
      <button class="note-remove" data-id="${n.id}">✖</button>
    `;
    cont.appendChild(row);
    row.querySelector(".note-jump").onclick = () => {
      const hi = highlights.find(h => h.id === n.highlightId);
      if (!hi) { showAlert("Highlight liên quan không tìm thấy"); return; }
      const el = readerContent.querySelector(`span.ebook-highlight[data-highlight-id="${hi.id}"]`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    };
    row.querySelector(".note-remove").onclick = () => {
      showConfirm("Xoá ghi chú này?").then(ok => {
        if (ok) removeNote(n.id);
      });
    };
  });
}
function createNoteFromSelection(promptText = "Nhập ghi chú:") {
  if (!selectionIsInsideReader()) { showAlert("Vui lòng chọn văn bản trong vùng đọc trước khi thêm ghi chú"); return; }
  const sel = window.getSelection();
  const text = sel.toString().trim();
  if (!text) { showAlert("Không có văn bản được chọn"); return; }

  const range = sel.getRangeAt(0);
  let existingSpan = null;
  const container = range.commonAncestorContainer;
  let node = container.nodeType === 3 ? container.parentNode : container;
  while (node && node !== readerContent) {
    if (node.nodeType === 1 && node.classList && node.classList.contains("ebook-highlight")) {
      existingSpan = node;
      break;
    }
    node = node.parentNode;
  }

  let highlightId = null;
  if (existingSpan && existingSpan.dataset.highlightId) {
    highlightId = existingSpan.dataset.highlightId;
  } else {
    highlightId = createHighlight("yellow");
  }
  if (!highlightId) { showAlert("Không tạo được highlight để gắn ghi chú"); return; }

  showPrompt(promptText, "").then(noteText => {
    if (noteText && noteText.trim()) {
      addNoteToHighlight(highlightId, noteText.trim());
      showAlert("Đã thêm ghi chú");
    } else {
      showAlert("Ghi chú rỗng, hủy");
    }
  });
}

/* Utilities */
function truncate(s, n) { return s.length > n ? s.slice(0, n) + "…" : s; }
function escapeHtml(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }

/* Anti-copy basic */
let antiCopyEnabled = false;
function enableAntiCopy(enable = true) {
  antiCopyEnabled = !!enable;
  if (antiCopyEnabled) {
    document.addEventListener("contextmenu", preventCtx);
    document.addEventListener("keydown", preventKeys, true);
    document.addEventListener("copy", preventCopy, true);
  } else {
    document.removeEventListener("contextmenu", preventCtx);
    document.removeEventListener("keydown", preventKeys, true);
    document.removeEventListener("copy", preventCopy, true);
  }
}
function preventCtx(e) { e.preventDefault(); }
function preventCopy(e) { e.preventDefault(); }
function preventKeys(e) {
  const ctrl = e.ctrlKey || e.metaKey;
  if (ctrl && ["c", "u", "s", "a"].includes(String(e.key).toLowerCase())) {
    e.preventDefault();
    return false;
  }
}

/* Watermark */
let watermarkEl = null;
function showWatermark(text = "© BẢN QUYỀN - KHÔNG PHÉP SAO CHÉP", options = {}) {
  hideWatermark();
  const w = document.createElement("div");
  w.id = "ebook-watermark-overlay";
  const style = w.style;
  style.position = "fixed";
  style.left = "0";
  style.top = "0";
  style.width = "100%";
  style.height = "100%";
  style.pointerEvents = "none";
  style.zIndex = "9999";
  style.display = "flex";
  style.alignItems = "center";
  style.justifyContent = "center";
  const frag = document.createDocumentFragment();
  for (let r = 0; r < 5; r++) {
    const span = document.createElement("div");
    span.textContent = text;
    span.style.opacity = (options.opacity || 0.06).toString();
    span.style.color = options.color || "#000";
    span.style.fontSize = options.fontSize || "48px";
    span.style.transform = `rotate(-25deg) translateY(${r * 120}px)`;
    span.style.whiteSpace = "nowrap";
    span.style.fontWeight = "600";
    span.style.letterSpacing = "2px";
    frag.appendChild(span);
  }
  w.appendChild(frag);
  document.body.appendChild(w);
  watermarkEl = w;
}
function hideWatermark() {
  if (watermarkEl) {
    watermarkEl.remove();
    watermarkEl = null;
  }
}

/* Expose highlight/note and misc APIs to window for onclick usage */
window.createHighlight = createHighlight;
window.removeHighlight = removeHighlight;
window.addNoteToHighlight = addNoteToHighlight;
window.removeNote = removeNote;
window.createNoteFromSelection = createNoteFromSelection;
window.enableAntiCopy = enableAntiCopy;
window.showWatermark = showWatermark;
window.hideWatermark = hideWatermark;
window.renderHighlightsUI = renderHighlightsUI;
window.renderNotesUI = renderNotesUI;
window.restoreHighlightsForCurrentChapter = restoreHighlightsForCurrentChapter;

/* =========================
   DOMContentLoaded: assign refs, apply settings, init reader
   ========================= */
document.addEventListener("DOMContentLoaded", () => {
  // assign DOM refs once
  tocContainer = document.getElementById("toc");
  readerContent = document.getElementById("reader-content");
  readerWrapper = document.getElementById("reader");

  // apply settings
  const settings = loadSettings();
  if (settings.fontFamilyKey === "custom" && settings.customFont) {
    document.documentElement.style.setProperty("--reader-font-family", settings.customFont);
  }
  applySettings(settings);

  // build palettes if containers exist
  buildPaletteUIIfNeeded();

  if (!tocContainer) console.warn("Warning: element #toc not found in DOM");
  if (!readerContent) console.warn("Warning: element #reader-content not found in DOM");

  // Zoom buttons
  document.getElementById("btn-zoomout")?.addEventListener("click", () => decreaseFontSize());
  document.getElementById("btn-zoomin")?.addEventListener("click", () => increaseFontSize());

  initReader();
});