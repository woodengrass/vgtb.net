document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.createElement('button');
  toggle.textContent = document.documentElement.lang === 'zh-Hans' ? '繁體中文' : '简体中文';
  toggle.className = 'lang-button';
  toggle.style.marginLeft = '10px';
  toggle.onclick = () => {
    const current = document.documentElement.lang;
    const newLang = current === 'zh-Hans' ? 'zh-Hant' : 'zh-Hans';
    const targetFile = newLang === 'zh-Hant' ? 'index-zh-Hant.html' : 'index.html';
    localStorage.setItem("preferredLang", newLang);
    window.location.href = targetFile;
  };
  const navRight = document.querySelector('nav > div:last-child');
  if (navRight) navRight.appendChild(toggle);

  const savedLang = localStorage.getItem("preferredLang");
  const currentLang = document.documentElement.lang;
  if (savedLang && savedLang !== currentLang) {
    const targetFile = savedLang === 'zh-Hant' ? 'index-zh-Hant.html' : 'index.html';
    window.location.replace(targetFile);
  }
});
