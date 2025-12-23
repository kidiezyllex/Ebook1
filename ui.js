// ui.js - giao diện wiring (UPDATED)
document.addEventListener("DOMContentLoaded", () => {
  const btnHome = document.getElementById("btn-home");
  const btnToc = document.getElementById("btn-toc");
  const sidebarLeft = document.getElementById("sidebar-left");
  const sidebarRight = document.getElementById("sidebar-right");
  const closeLeft = document.getElementById("close-left");
  const closeRight = document.getElementById("close-right");
  const overlay = document.getElementById("overlay");

  const btnFullscreen = document.getElementById("btn-fullscreen");
  const btnNote = document.getElementById("btn-note");
  const btnHighlight = document.getElementById("btn-highlight");
  const btnSettings = document.getElementById("btn-settings");  

  const reader = document.getElementById("reader");
  const readerContent = document.getElementById("reader-content");
  const toolbar = document.getElementById("bottom-toolbar");
  const toolbarPlaceholder = document.createComment("toolbar-placeholder");
  const sidebarPlaceholder = document.createComment("sidebar-right-placeholder");

  const btnTop = document.getElementById("btn-top");
  const btnBottom = document.getElementById("btn-bottom");

  const tocPanel = document.getElementById("toc-panel");
  const introPanel = document.getElementById("intro-content");

  /* =========================
     Helpers: sidebar open/close
     ========================= */
  function openLeft(which = "intro") {
    if (which === "intro") {
      introPanel.style.display = "block";
      tocPanel.style.display = "none";
    } else {
      introPanel.style.display = "none";
      tocPanel.style.display = "block";
      if (typeof renderTOC === "function") renderTOC();
    }
    sidebarLeft.classList.add("open");
    overlay.style.display = "block";
  }

  function closeLeftPanel() {
    sidebarLeft.classList.remove("open");
    overlay.style.display = "none";
  }

  function openRight() {
    sidebarRight.classList.add("open");
    overlay.style.display = "block";
  }

  function closeRightPanel() {
    sidebarRight.classList.remove("open");
    overlay.style.display = "none";
  }

  /* =========================
     Wire basic buttons
     ========================= */
  btnHome?.addEventListener("click", () => openLeft("intro"));
  btnToc?.addEventListener("click", () => openLeft("toc"));
  closeLeft?.addEventListener("click", closeLeftPanel);
  closeRight?.addEventListener("click", closeRightPanel);

  overlay?.addEventListener("click", () => {
    closeLeftPanel();
    closeRightPanel();
  });

  /* =========================
     Toolbar actions
     ========================= */
  btnFullscreen?.addEventListener("click", () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      reader.requestFullscreen();
    }
  });
  function onFullscreenChange() {
    const isFs = document.fullscreenElement === reader;

    /* === TOOLBAR === */
    if (isFs) {
      toolbar.parentNode.insertBefore(toolbarPlaceholder, toolbar);
      reader.appendChild(toolbar);
    } else {
      if (toolbarPlaceholder.parentNode) {
        toolbarPlaceholder.parentNode.insertBefore(toolbar, toolbarPlaceholder);
        toolbarPlaceholder.remove();
      }
    }

    /* === SIDEBAR RIGHT === */
    if (isFs) {
      sidebarRight.parentNode.insertBefore(sidebarPlaceholder, sidebarRight);
      reader.appendChild(sidebarRight);
    } else {
      if (sidebarPlaceholder.parentNode) {
        sidebarPlaceholder.parentNode.insertBefore(sidebarRight, sidebarPlaceholder);
        sidebarPlaceholder.remove();
      }
    }
  }
  document.addEventListener("fullscreenchange", onFullscreenChange);


  btnHighlight?.addEventListener("click", () => {
    if (typeof createHighlight === "function") {
      const id = createHighlight("yellow");
      if (id && typeof renderHighlightsUI === "function") {
        openRight();
        showHighlightsTab();
      }
    }
  });

  btnNote?.addEventListener("click", () => {
    if (typeof createNoteFromSelection === "function") {
      createNoteFromSelection();
      openRight();
      showNotesTab();
    }
  });

  btnSettings.addEventListener("click", () => {
    const isOpen = sidebarRight.classList.contains("open");

    if (isOpen) {
      closeRightSidebar();
    } else {
      openRightSidebar();
    }
  });

  function openRightSidebar() {
    sidebarRight.classList.add("open");
    overlay.classList.add("show");
  }

  function closeRightSidebar() {
    sidebarRight.classList.remove("open");
    overlay.classList.remove("show");
  }

  btnTop?.addEventListener("click", () => {
    if (typeof scrollToTop === "function") scrollToTop();
  });

  btnBottom?.addEventListener("click", () => {
    if (typeof scrollToBottom === "function") scrollToBottom();
  });
  overlay.addEventListener("click", () => {
  closeRightSidebar();
});


  /* =========================
     RIGHT SIDEBAR TABS
     ========================= */
  const tabHighlights = document.getElementById("tab-highlights");
  const tabNotes = document.getElementById("tab-notes");
  const panelHighlights = document.getElementById("highlights-panel");
  const panelNotes = document.getElementById("notes-panel");

  function showHighlightsTab() {
    if (!tabHighlights || !panelHighlights) return;

    tabHighlights.classList.add("active");
    tabHighlights.setAttribute("aria-selected", "true");
    tabNotes?.classList.remove("active");
    tabNotes?.setAttribute("aria-selected", "false");

    panelHighlights.style.display = "";
    panelHighlights.setAttribute("aria-hidden", "false");
    panelNotes.style.display = "none";
    panelNotes.setAttribute("aria-hidden", "true");

    if (typeof renderHighlightsUI === "function") renderHighlightsUI();
  }

  function showNotesTab() {
    if (!tabNotes || !panelNotes) return;

    tabNotes.classList.add("active");
    tabNotes.setAttribute("aria-selected", "true");
    tabHighlights?.classList.remove("active");
    tabHighlights?.setAttribute("aria-selected", "false");

    panelNotes.style.display = "";
    panelNotes.setAttribute("aria-hidden", "false");
    panelHighlights.style.display = "none";
    panelHighlights.setAttribute("aria-hidden", "true");

    if (typeof renderNotesUI === "function") renderNotesUI();
  }

  tabHighlights?.addEventListener("click", showHighlightsTab);
  tabNotes?.addEventListener("click", showNotesTab);

  // default tab when mở settings
  if (tabHighlights) showHighlightsTab();

  /* =========================
     Build color palettes
     ========================= */
  if (typeof buildPaletteUIIfNeeded === "function") {
    buildPaletteUIIfNeeded();
  }

  /* =========================
     Refresh header titles
     ========================= */
function refreshHeader() {
  const titleEl = document.getElementById("chapter-title");
  const secEl = document.getElementById("section-title");
  if (!titleEl || !secEl) return;
  if (typeof chapters === "undefined" || typeof currentChapterIndex === "undefined") return;

  const ch = chapters[currentChapterIndex];
  if (!ch) {
    titleEl.textContent = "";
    secEl.textContent = "";
    return;
  }

  titleEl.textContent = ch.title || "";

  // lấy h2 hiện hành trong readerContent
  if (!readerContent) {
    secEl.textContent = "";
    return;
  }

  const h2s = Array.from(readerContent.querySelectorAll("h2"));
  if (h2s.length === 0) {
    secEl.textContent = "";
    return;
  }

  // chọn h2 "hiện hành" dựa trên scrollTop (h2 có offsetTop <= scrollTop + margin)
  const margin = 8; // bạn có thể tinh chỉnh
  const scrollTop = readerContent.scrollTop;

  let currentText = "";
  for (let i = 0; i < h2s.length; i++) {
    const h = h2s[i];
    const off = h.offsetTop;
    if (off <= scrollTop + margin) {
      currentText = h.textContent;
    } else {
      break;
    }
  }
  // nếu chưa có h2 nào thỏa (chưa cuộn xuống), lấy h2 đầu tiên
  if (!currentText) currentText = h2s[0].textContent;

  secEl.textContent = currentText || "";
}
  setInterval(refreshHeader, 700);

  /* =========================
     Initial TOC render
     ========================= */
  if (typeof renderTOC === "function") renderTOC();

/* === POPUP HELPERS (safe + global) === */
function _createOverlay() {
  const o = document.createElement("div");
  o.className = "popup-overlay";
  o.tabIndex = -1;
  return o;
}

function _createPopup(messageHtml) {
  const p = document.createElement("div");
  p.className = "popup";
  p.role = "dialog";
  p.ariaModal = "true";
  p.innerHTML = `<div class="popup-message">${messageHtml}</div>`;
  return p;
}
function getPopupRoot() {
  return document.fullscreenElement === reader ? reader : document.body;
}
/* showAlert */
function showAlert(message, options = {}) {
  return new Promise((resolve) => {
    const modalOverlay = _createOverlay();
    const popup = _createPopup(escapeHtml(message));
    const actions = document.createElement("div");
    actions.className = "popup-actions";
    const okBtn = document.createElement("button");
    okBtn.className = "btn btn-primary btn-ok";
    okBtn.textContent = options.okText || "OK";
    actions.appendChild(okBtn);
    popup.appendChild(actions);
    modalOverlay.appendChild(popup);
    getPopupRoot().appendChild(modalOverlay);

    function cleanup(result) {
      try { modalOverlay.remove(); } catch(e) {}
      document.removeEventListener("keydown", onKey);
      resolve(result);
    }
    function onKey(e) {
      if (e.key === "Escape") cleanup(false);
      if (e.key === "Enter") cleanup(true);
    }

    okBtn.addEventListener("click", () => cleanup(true));
    modalOverlay.addEventListener("click", (ev) => {
      if (ev.target === modalOverlay && options.backdropClose) cleanup(false);
    });
    document.addEventListener("keydown", onKey);
    okBtn.focus();
  });
}

/* showConfirm */
function showConfirm(message, options = {}) {
  return new Promise((resolve) => {
    const modalOverlay = _createOverlay();
    const popup = _createPopup(escapeHtml(message));
    const actions = document.createElement("div");
    actions.className = "popup-actions";

    const cancelBtn = document.createElement("button");
    cancelBtn.className = "btn btn-secondary btn-cancel";
    cancelBtn.textContent = options.cancelText || "Hủy";

    const confirmBtn = document.createElement("button");
    confirmBtn.className = "btn btn-primary btn-confirm";
    confirmBtn.textContent = options.confirmText || "Xác nhận";

    actions.appendChild(cancelBtn);
    actions.appendChild(confirmBtn);
    popup.appendChild(actions);
    modalOverlay.appendChild(popup);
    getPopupRoot().appendChild(modalOverlay);

    function cleanup(result) {
      try { modalOverlay.remove(); } catch(e) {}
      document.removeEventListener("keydown", onKey);
      resolve(result);
    }
    function onKey(e) {
      if (e.key === "Escape") cleanup(false);
      if (e.key === "Enter") cleanup(true);
    }

    confirmBtn.addEventListener("click", () => cleanup(true));
    cancelBtn.addEventListener("click", () => cleanup(false));
    modalOverlay.addEventListener("click", (ev) => {
      if (ev.target === modalOverlay && options.backdropClose) cleanup(false);
    });
    document.addEventListener("keydown", onKey);
    confirmBtn.focus();
  });
}

/* showPrompt (build input element safely) */
function showPrompt(message, defaultValue = "") {
  return new Promise((resolve) => {
    const modalOverlay = _createOverlay();
    const popup = _createPopup(escapeHtml(message));

    const input = document.createElement("input");
    input.type = "text";
    input.className = "popup-input";
    input.style.width = "100%";
    input.style.padding = "8px";
    input.style.borderRadius = "8px";
    input.style.border = "1px solid rgba(0,0,0,0.2)";
    input.style.marginBottom = "14px";
    input.value = defaultValue; // set as property (no double-escaping)

    const actions = document.createElement("div");
    actions.className = "popup-actions";

    const cancelBtn = document.createElement("button");
    cancelBtn.className = "btn btn-secondary btn-cancel";
    cancelBtn.textContent = "Hủy";

    const okBtn = document.createElement("button");
    okBtn.className = "btn btn-primary btn-ok";
    okBtn.textContent = "OK";

    actions.appendChild(cancelBtn);
    actions.appendChild(okBtn);

    popup.appendChild(input);
    popup.appendChild(actions);
    modalOverlay.appendChild(popup);
    getPopupRoot().appendChild(modalOverlay);

    function cleanup(result) {
      try { modalOverlay.remove(); } catch(e) {}
      document.removeEventListener("keydown", onKey);
      resolve(result);
    }
    function onKey(e) {
      if (e.key === "Escape") cleanup(null);
      if (e.key === "Enter") cleanup(input.value);
    }

    okBtn.onclick = () => cleanup(input.value);
    cancelBtn.onclick = () => cleanup(null);
    modalOverlay.addEventListener("click", (ev) => {
      if (ev.target === modalOverlay) cleanup(null);
    });

    document.addEventListener("keydown", onKey);
    input.focus();
    input.select();
  });
}

/* expose globally so script.js can call them */
window.showAlert = showAlert;
window.showConfirm = showConfirm;
window.showPrompt = showPrompt;

});
