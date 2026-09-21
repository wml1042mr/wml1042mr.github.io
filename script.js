(() => {
  'use strict';
  document.documentElement.classList.add('js');
  const data = window.siteData || {};
  const button = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');
  const setMenu = (open) => {
    button.setAttribute('aria-expanded', String(open));
    button.innerHTML = open ? 'Close <span aria-hidden="true">−</span>' : 'Menu <span aria-hidden="true">＋</span>';
    nav.classList.toggle('is-open', open);
  };
  button.hidden = false;
  button.addEventListener('click', () => setMenu(button.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      button.focus();
    }
  });
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.site-header')) setMenu(false);
  });
  window.matchMedia('(min-width: 761px)').addEventListener('change', () => setMenu(false));
  document.querySelectorAll('[data-year]').forEach(el => { el.textContent = data.year || new Date().getFullYear(); });
  const validURL = value => {
    try { return ['https:', 'http:'].includes(new URL(value).protocol); } catch { return false; }
  };
  const social = data.social || {};
  const links = [
    ['GitHub', validURL(social.github) ? social.github : ''],
    ['LinkedIn', validURL(social.linkedin) ? social.linkedin : ''],
    ['Email', /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(social.email || '') ? `mailto:${social.email}` : '']
  ].filter(([, href]) => href);
  document.querySelectorAll('[data-social-links], [data-contact-links]').forEach(container => {
    links.forEach(([label, href]) => {
      const link = document.createElement('a');
      link.href = href;
      link.textContent = label;
      if (container.hasAttribute('data-contact-links')) {
        link.className = 'contact-row';
        const arrow = document.createElement('span');
        arrow.textContent = '↗';
        arrow.setAttribute('aria-hidden', 'true');
        link.append(arrow);
      }
      container.append(link);
    });
  });
  // Home keeps quiet text labels until actual contact destinations are supplied.
  const homeSocial = document.querySelector('[data-home-social-links]');
  if (homeSocial) {
    homeSocial.querySelectorAll('span').forEach(label => {
      const match = links.find(([name]) => name === label.textContent);
      if (!match) return;
      const link = document.createElement('a');
      link.textContent = match[0];
      link.href = match[1];
      label.replaceWith(link);
    });
  }
  // Contact icons become links only when a real public destination is supplied.
  document.querySelectorAll('[data-contact-social]').forEach(item => {
    const key = item.dataset.contactSocial;
    const href = key === 'email'
      ? (links.find(([name]) => name === 'Email') || [])[1]
      : (validURL(social[key]) ? social[key] : '');
    if (!href) return;
    const link = document.createElement('a');
    link.className = item.className;
    link.href = href;
    link.append(...item.childNodes);
    item.replaceWith(link);
  });
  if (links.length && document.querySelector('[data-contact-empty]')) document.querySelector('[data-contact-empty]').hidden = true;
  [['songs', 'artist'], ['favorites', 'detail']].forEach(([key, secondary]) => {
    const list = document.querySelector(`[data-${key}]`);
    const items = (data[key] || []).filter(item => item.title);
    if (!list || !items.length) return;
    items.forEach(item => {
      const li = document.createElement('li');
      const text = document.createElement('span');
      text.textContent = item.title;
      if (item[secondary]) {
        const detail = document.createElement('small');
        detail.textContent = ` — ${item[secondary]}`;
        text.append(detail);
      }
      li.append(text);
      list.append(li);
    });
    list.hidden = false;
    document.querySelector(`[data-${key}-empty]`).hidden = true;
  });
  const travel = document.querySelector('[data-travel]');
  const photos = (data.travel || []).filter(item => item.src && item.alt);
  if (travel && photos.length) {
    travel.replaceChildren();
    photos.forEach(item => {
      const figure = document.createElement('figure');
      const img = document.createElement('img');
      img.src = item.src;
      img.alt = item.alt;
      img.loading = 'lazy';
      img.width = 800;
      img.height = 600;
      figure.append(img);
      if (item.caption) {
        const caption = document.createElement('figcaption');
        caption.textContent = item.caption;
        figure.append(caption);
      }
      travel.append(figure);
    });
  }
  const resume = document.querySelector('[data-resume]');
  if (resume && data.resumePath) {
    const emptyResume = document.querySelector('[data-resume-empty]');
    if (emptyResume) emptyResume.hidden = true;
    resume.hidden = false;
    document.querySelector('[data-resume-view]').href = data.resumePath;
    document.querySelector('[data-resume-download]').href = data.resumePath;
    document.querySelector('[data-resume-download]').download = data.resumePath.split('/').pop();
    const pdf = document.querySelector('[data-pdf-preview] object') || document.createElement('object');
    pdf.data = data.resumePath;
    pdf.type = 'application/pdf';
    pdf.setAttribute('aria-label', 'Meiling Wu résumé PDF');
    const fallback = document.createElement('a');
    fallback.href = data.resumePath;
    fallback.textContent = 'Open the résumé PDF';
    pdf.replaceChildren(fallback);
    document.querySelector('[data-pdf-preview]').append(pdf);
  }
})();
