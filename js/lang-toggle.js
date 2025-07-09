document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("lang-select");
    const savedLang = localStorage.getItem("preferredLang") || "zh-Hant";
    select.value = savedLang;
    applyTranslations(savedLang);

    select.addEventListener("change", (e) => {
        const lang = e.target.value;
        localStorage.setItem("preferredLang", lang);
        applyTranslations(lang);
    });
});

function applyTranslations(lang) {
    if (!translations[lang]) return;
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.dataset.i18n;
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}
