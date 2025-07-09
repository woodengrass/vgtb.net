document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("lang-select");
    let lang = localStorage.getItem("preferredLang");
    if (!lang) {
        const browserLang = navigator.language || navigator.userLanguage;
        lang = browserLang.startsWith("zh-TW") || browserLang.startsWith("zh-HK") || browserLang.startsWith("zh-MO")
            ? "zh-Hant"
            : "zh-Hans";
    }
    localStorage.setItem("preferredLang", lang);
    select.value = lang;
    applyTranslations(lang);
    select.addEventListener("change", () => {
        const newLang = select.value;
        localStorage.setItem("preferredLang", newLang);
        applyTranslations(newLang);
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
