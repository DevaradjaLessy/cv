/* =====================================================================
   CV — comportements de la page : thème, menu, navigation active,
   apparition au défilement, impression.
   ===================================================================== */
(() => {
    'use strict';

    const root = document.documentElement;
    const header = document.getElementById('siteHeader');
    const themeBtn = document.getElementById('themeBtn');
    const menuBtn = document.getElementById('menuBtn');
    const nav = document.getElementById('siteNav');
    const progress = document.querySelector('.progress');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasObserver = 'IntersectionObserver' in window;

    /* ---------- Thème (mémorisé dans le navigateur) ---------- */
    const applyTheme = (theme) => {
        const dark = theme === 'dark';
        root.setAttribute('data-theme', theme);
        /* Le bouton propose le thème inverse : soleil « Clair » en sombre, lune « Sombre » en clair */
        themeBtn.querySelector('use').setAttribute('href', dark ? '#i-sun' : '#i-moon');
        themeBtn.querySelector('.theme-label').textContent = dark ? 'Clair' : 'Sombre';
        themeBtn.setAttribute('aria-label', dark ? 'Passer au thème clair' : 'Passer au thème sombre');
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.setAttribute('content', dark ? '#0a0a0c' : '#fafaf9');
    };
    applyTheme(root.getAttribute('data-theme') === 'light' ? 'light' : 'dark');

    themeBtn.addEventListener('click', () => {
        const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        applyTheme(next);
        try { localStorage.setItem('cv-theme', next); } catch (e) { /* stockage indisponible : thème non mémorisé */ }
    });

    /* ---------- Menu mobile ---------- */
    const setMenu = (open) => {
        header.classList.toggle('is-open', open);
        menuBtn.setAttribute('aria-expanded', String(open));
        menuBtn.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    };
    menuBtn.addEventListener('click', () => setMenu(!header.classList.contains('is-open')));
    nav.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

    /* ---------- En-tête et barre de progression ---------- */
    let ticking = false;
    const onScroll = () => {
        header.classList.toggle('is-scrolled', window.scrollY > 8);
        const max = document.documentElement.scrollHeight - window.innerHeight;
        progress.style.transform = `scaleX(${max > 0 ? Math.min(window.scrollY / max, 1) : 0})`;
        ticking = false;
    };
    window.addEventListener('scroll', () => {
        if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
    }, { passive: true });
    onScroll();

    /* ---------- Lien de navigation actif ---------- */
    const links = [...nav.querySelectorAll('a')];
    const targets = links.map((a) => document.querySelector(a.getAttribute('href'))).filter(Boolean);
    if (hasObserver) {
        const spy = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                links.forEach((a) => {
                    if (a.getAttribute('href') === '#' + entry.target.id) a.setAttribute('aria-current', 'true');
                    else a.removeAttribute('aria-current');
                });
            });
        }, { rootMargin: '-35% 0px -60% 0px' });
        targets.forEach((t) => spy.observe(t));
    }

    /* ---------- Apparition au défilement (contenu visible sans JS) ---------- */
    const reveals = document.querySelectorAll('.reveal');
    const showAll = () => reveals.forEach((el) => el.classList.add('is-visible'));
    if (reduceMotion || !hasObserver) {
        showAll();
    } else {
        root.classList.add('reveal-ready');
        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    io.unobserve(entry.target);
                }
            });
        }, { rootMargin: '0px 0px -6% 0px', threshold: 0.06 });
        reveals.forEach((el) => io.observe(el));
    }

    /* ---------- Impression : CV A4 complet (stages dépliés) ---------- */
    document.querySelectorAll('[data-print]').forEach((btn) => btn.addEventListener('click', () => window.print()));
    let reopened = [];
    window.addEventListener('beforeprint', () => {
        reopened = [...document.querySelectorAll('details:not([open])')];
        reopened.forEach((d) => { d.open = true; });
        showAll();
    });
    window.addEventListener('afterprint', () => {
        reopened.forEach((d) => { d.open = false; });
        reopened = [];
    });
})();
