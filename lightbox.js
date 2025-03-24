document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".screenshot-gallery img");
  const overlay = document.createElement("div");
  const imgBox = document.createElement("img");
  overlay.style.position = "fixed";
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = "100vw";
  overlay.style.height = "100vh";
  overlay.style.background = "rgba(0,0,0,0.8)";
  overlay.style.display = "flex";
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";
  overlay.style.zIndex = "9999";
  overlay.style.display = "none";
  imgBox.style.maxWidth = "90%";
  imgBox.style.maxHeight = "90%";
  imgBox.style.borderRadius = "12px";
  overlay.appendChild(imgBox);
  document.body.appendChild(overlay);
  overlay.addEventListener("click", () => overlay.style.display = "none");
  images.forEach(img => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", () => {
      imgBox.src = img.src;
      overlay.style.display = "flex";
    });
  });
});
