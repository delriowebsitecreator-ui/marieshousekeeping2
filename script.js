  // Nav scroll
  window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
  });

  // Mobile menu
  function toggleMenu() {
    document.getElementById('mobileMenu').classList.toggle('open');
  }

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 60);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(r => observer.observe(r));

  // Form submit
  function handleSubmit() {
    const btn = document.querySelector('.form-submit');
    btn.textContent = '✅ Request Sent! We\'ll be in touch soon.';
    btn.style.background = 'linear-gradient(135deg,#3d9e6d,#52c787)';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = '💜 Send My Free Estimate Request';
      btn.style.background = '';
      btn.disabled = false;
    }, 4000);
  }
