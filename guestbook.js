const STORAGE_KEY = "zombi3girrl_guestbook_entries_v1";

const nameEl = document.getElementById("gb-name");
const msgEl = document.getElementById("gb-message");
const signBtn = document.getElementById("gb-sign");
const clearBtn = document.getElementById("gb-clear");
const entriesEl = document.getElementById("gb-entries");

function loadEntries() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function saveEntries(entries) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

function escapeHTML(str) {
  return str.replace(/[&<>"']/g, (c) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[c]));
}

function render() {
  const entries = loadEntries();

  if (entries.length === 0) {
    entriesEl.innerHTML = `
      <div style="font-family: VT323, monospace; font-size: 20px; color: #ffffff; text-align:center;">
        no messages yet... be the first 😭
      </div>
    `;
    return;
  }

  entriesEl.innerHTML = entries.map(e => `
    <div style="
      background:#000;
      border:2px solid #fff;
      box-shadow: inset 0 0 0 2px #202020;
      padding:12px;
      font-family: VT323, monospace;
      color:#fff;">
      <div style="color:#00ff00; font-size:20px;">${escapeHTML(e.name)}</div>
      <div style="font-size:18px; white-space:pre-wrap;">${escapeHTML(e.message)}</div>
      <div style="color:#aaaaaa; font-size:16px; margin-top:6px;">${escapeHTML(e.date)}</div>
    </div>
  `).join("");
}

signBtn.addEventListener("click", () => {
  const name = (nameEl.value || "").trim();
  const message = (msgEl.value || "").trim();

  if (!name || !message) {
    alert("PLEASE ENTER A NAME + MESSAGE 👾");
    return;
  }

  const entries = loadEntries();
  entries.unshift({
    name,
    message,
    date: new Date().toLocaleString()
  });

  saveEntries(entries);
  msgEl.value = "";
  render();
});

clearBtn.addEventListener("click", () => {
  const ok = confirm("CLEAR YOUR GUESTBOOK ENTRIES ON THIS DEVICE?");
  if (!ok) return;
  localStorage.removeItem(STORAGE_KEY);
  render();
});

render();
const backHomeBtn = document.getElementById("back-home");

if (backHomeBtn) {
  backHomeBtn.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}