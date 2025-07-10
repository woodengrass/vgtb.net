function startTypingBanner() {
  const tagline = document.querySelector(".typed-tagline");

  let lang = localStorage.getItem("preferredLang") || "zh-Hans";
  let messages = (translations[lang] && translations[lang]["tagline-messages"])
      ? translations[lang]["tagline-messages"]
      : ["Default message"];
  let index = 0;
  let charIndex = 0;
  let isDeleting = false;

  if (window.typingBannerTimer) clearTimeout(window.typingBannerTimer);
  function type() {
    const current = messages[index];
    if (isDeleting) {
      charIndex--;
      tagline.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % messages.length;
        window.typingBannerTimer = setTimeout(type, 1000);
      } else {
        window.typingBannerTimer = setTimeout(type, 30);
      }
    } else {
      charIndex++;
      tagline.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        isDeleting = true;
        window.typingBannerTimer = setTimeout(type, 1800);
      } else {
        window.typingBannerTimer = setTimeout(type, 80);
      }
    }
  }
  type();
}
document.addEventListener("DOMContentLoaded", startTypingBanner);