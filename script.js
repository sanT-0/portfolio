// Scroll reveal
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealItems = document.querySelectorAll('.reveal');
const canObserve = 'IntersectionObserver' in window;

if (!reduceMotion && canObserve) {
  revealItems.forEach(item => item.classList.add('motion-ready'));
}

const showItem = item => {
  item.classList.add('visible');
};

if (canObserve) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        showItem(entry.target);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach(item => revealObserver.observe(item));
} else {
  revealItems.forEach(showItem);
}

// Keep the paper navigation surface legible while scrolling.
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  navbar.style.background = window.scrollY > 50
    ? 'rgba(244,241,233,0.98)'
    : 'rgba(244,241,233,0.94)';
});

// Mobile navigation
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Project category filters
document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(filter => {
      filter.classList.remove('active');
      filter.setAttribute('aria-pressed', 'false');
    });
    button.classList.add('active');
    button.setAttribute('aria-pressed', 'true');

    const category = button.dataset.filter;
    document.querySelectorAll('.proj-card').forEach(card => {
      const matches = category === 'all' || card.dataset.cat === category;
      card.style.display = matches ? 'flex' : 'none';
    });
  });
});
