
document.addEventListener('DOMContentLoaded', () => {
  const intro = document.querySelector('.intro-text');
  const introObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        intro.style.opacity = '1';
        intro.style.transform = 'translateY(0)';
        introObserver.disconnect();
      }
    });
  }, { threshold: 0.25 });
  introObserver.observe(intro);
});
