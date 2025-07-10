document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("lang-select");
    let lang = localStorage.getItem("preferredLang");
    if (!lang) {
        const browserLang = (navigator.language || navigator.userLanguage || "").toLowerCase();
        lang = Object.keys(translations).find(tLang => browserLang.startsWith(tLang.toLowerCase()));
        if (!lang) {
            lang = "zh-Hans";
        }
    }
    localStorage.setItem("preferredLang", lang);
    select.value = lang;
    applyTranslations(lang);
    if (typeof startTypingBanner === "function") {
        startTypingBanner();
    }
    select.addEventListener("change", () => {
        const chosenLang = select.value;
        localStorage.setItem("preferredLang", chosenLang);
        applyTranslations(chosenLang);
        if (typeof startTypingBanner === "function") {
            startTypingBanner();
        }
    });
});

function applyTranslations(lang) {
    if (!translations[lang]) return;
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.dataset.i18n;
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
    document.documentElement.lang = lang;
}