(() => {
  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileLinks = [...mobileMenu.querySelectorAll('a')];
  const galleryGrid = document.getElementById('gallery-grid');
  const galleryToggle = document.getElementById('gallery-toggle');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const galleryNote = document.getElementById('gallery-note');

  const setMenu = (open, returnFocus = false) => {
    mobileMenu.classList.toggle('open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Zamknij menu' : 'Otwórz menu');
    document.body.classList.toggle('menu-open', open);

    if (open) requestAnimationFrame(() => mobileLinks[0].focus());
    else if (returnFocus) menuToggle.focus();
  };

  menuToggle.addEventListener('click', () => {
    const shouldOpen = !mobileMenu.classList.contains('open');
    setMenu(shouldOpen, !shouldOpen);
  });

  mobileLinks.forEach((link) => link.addEventListener('click', () => setMenu(false, true)));

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 940) setMenu(false);
  });

  window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 8), { passive: true });

  let loadedImages = 0;

  galleryItems.forEach((item) => {
    const image = item.querySelector('img');

    const markLoaded = () => {
      if (item.classList.contains('loaded')) return;
      item.classList.add('loaded');
      loadedImages += 1;
      galleryNote.hidden = loadedImages === galleryItems.length;
    };

    if (image.complete && image.naturalWidth > 0) markLoaded();
    image.addEventListener('load', markLoaded);
    image.addEventListener('error', () => {
      item.hidden = true;
    });
  });

  galleryToggle.addEventListener('click', () => {
    const expanded = galleryGrid.classList.toggle('show-all');
    galleryToggle.setAttribute('aria-expanded', String(expanded));
    galleryToggle.textContent = expanded ? 'Pokaż mniej' : 'Pokaż wszystkie zdjęcia';
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobileMenu.classList.contains('open')) setMenu(false, true);

    if (event.key === 'Tab' && mobileMenu.classList.contains('open')) {
      const focusable = [menuToggle, ...mobileLinks];
      const currentIndex = focusable.indexOf(document.activeElement);
      const lastIndex = focusable.length - 1;

      if (currentIndex === -1) {
        event.preventDefault();
        focusable[event.shiftKey ? lastIndex : 0].focus();
      } else if (event.shiftKey && currentIndex === 0) {
        event.preventDefault();
        focusable[lastIndex].focus();
      } else if (!event.shiftKey && currentIndex === lastIndex) {
        event.preventDefault();
        focusable[0].focus();
      }
    }
  });

  document.getElementById('year').textContent = new Date().getFullYear();
})();
