document.addEventListener("DOMContentLoaded", () => {
  const tagline = document.querySelector(".typed-tagline");
  const messages = [
    "四年匠心沉澱，尋找共創未來的你",
    "歡迎立即加入"
  ];
  let index = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const current = messages[index];
    if (isDeleting) {
      charIndex--;
      tagline.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % messages.length;
        setTimeout(type, 1000);
      } else {
        setTimeout(type, 30);
      }
    } else {
      charIndex++;
      tagline.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        isDeleting = true;
        setTimeout(type, 1800);
      } else {
        setTimeout(type, 80);
      }
    }
  }

  type();
});