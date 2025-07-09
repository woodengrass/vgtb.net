// js/system-Language.js

// 自动语言检测（中文优先）
function detectLanguage() {
    const lang = navigator.language || 'zh-Hant';
    if (lang.startsWith('zh-CN') || lang.startsWith('zh-SG')) return 'zh-Hans';
    if (lang.startsWith('zh')) return 'zh-Hant';
    return 'zh-Hant'; // 默认繁体
}

// 应用翻译到页面元素
function applyTranslations(lang) {
    const strings = translations[lang] || translations['zh-Hant'];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const value = strings[key];
        if (!value) return;

        // 如果包含 HTML 标记，则用 innerHTML
        if (/<\/?[a-z][\s\S]*>/i.test(value)) {
            el.innerHTML = value;
        } else {
            el.textContent = value;
        }
    });
}

// 初始化语言切换功能
function initLanguage() {
    const select = document.getElementById('lang-select');
    if (!select) return;

    // 初次加载使用系统语言
    const defaultLang = detectLanguage();
    select.value = defaultLang;
    applyTranslations(defaultLang);

    // 用户手动切换
    select.addEventListener('change', () => {
        const chosenLang = select.value;
        applyTranslations(chosenLang);
    });
}

// DOM 加载完毕后初始化
document.addEventListener('DOMContentLoaded', initLanguage);
