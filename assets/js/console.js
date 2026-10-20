/* =====================================================================
   CV — console interactive.
   Les sorties des commandes (COMMANDS) sont reprises telles quelles du CV
   d'origine ; seule l'interface du terminal est refaite.
   ===================================================================== */
const COMMANDS = {
    help: () => `
<span style="color:var(--accent)">Commandes disponibles :</span>
  whoami          — identité du système
  ls skills       — liste les compétences
  ls formations   — parcours scolaire
  cat bulletin    — résultats du Bac+3 (mention TB)
  ls certifs      — certifications &amp; attestations
  cat ebios       — formation EBIOS Risk Manager
  cat contact     — coordonnées
  cat kreotech    — case study KreoTech
  cat kreolocation — projet KreoLocation
  cat 20min       — initiative "20 minutes SI"
  uptime          — temps de service
  clear           — effacer la console
  neofetch        — infos système complètes`,

    whoami: () => `<span style="color:#a1efbd">lessy-devaradja-jean-noah</span>
Étudiant Bac+5 Expert Réseaux Infrastructures &amp; Sécurité (alternance)
Administrateur Systèmes, Réseaux &amp; Cybersécurité (Bac+3, mention Très Bien)
Réunion 974
Coordinateur support informatique @ Automobiles Réunion (Renault)
Ex-alternant @ SEMAC
Fondateur KreoTech &amp; KreoLocation`,

    'ls skills': () => `<span style="color:#60a5fa">drwxr-xr-x</span>  systemes/
<span style="color:#60a5fa">drwxr-xr-x</span>  reseaux/
<span style="color:#60a5fa">drwxr-xr-x</span>  securite/
<span style="color:#60a5fa">drwxr-xr-x</span>  ebios-rm/
<span style="color:#60a5fa">drwxr-xr-x</span>  support-n1-n2/
<span style="color:#60a5fa">drwxr-xr-x</span>  windows-server/
<span style="color:#60a5fa">drwxr-xr-x</span>  active-directory/
<span style="color:#60a5fa">drwxr-xr-x</span>  linux/
<span style="color:#60a5fa">drwxr-xr-x</span>  fibre-optique/
<span style="color:#60a5fa">drwxr-xr-x</span>  pfsense/
<span style="color:#60a5fa">drwxr-xr-x</span>  vpn-ipsec/
<span style="color:#60a5fa">drwxr-xr-x</span>  zabbix/
<span style="color:#60a5fa">drwxr-xr-x</span>  grafana/
<span style="color:#60a5fa">drwxr-xr-x</span>  proxmox/
<span style="color:#60a5fa">drwxr-xr-x</span>  docker/
<span style="color:#60a5fa">drwxr-xr-x</span>  github-actions/
<span style="color:#60a5fa">drwxr-xr-x</span>  ansible/
<span style="color:#60a5fa">drwxr-xr-x</span>  veeam-backup/
<span style="color:#60a5fa">drwxr-xr-x</span>  freshservice/
<span style="color:#60a5fa">drwxr-xr-x</span>  glpi/
<span style="color:#60a5fa">-rw-r--r--</span>  cahiers-des-charges.md`,

    'ls formations': () => `<span style="color:#a1efbd">[2026-2028]</span> Expert Réseaux Infrastructures &amp; Sécurité (Bac+5)
    Niveau 7 — 3iL &amp; CCI EDN — Alternance — <span style="color:var(--accent)">en cours</span>
<span style="color:#a1efbd">[2025-2026]</span> Titre Admin. Systèmes, Réseaux &amp; Cybersécurité
    Niveau 6 (Bac+3) — 3iL &amp; CCI EDN — Mention TB (16,11/20)
<span style="color:#a1efbd">[2023-2025]</span> Technicien Supérieur Systèmes et Réseaux (Bac+2)
    Alternance SEMAC
<span style="color:#a1efbd">[2019-2023]</span> Bac Pro Systèmes Numériques — Mention TB
<span style="color:#a1efbd">[2019]</span>      DNB — Série générale

<span style="color:var(--text-tertiary)">Tape</span> <span style="color:var(--accent)">cat bulletin</span> <span style="color:var(--text-tertiary)">pour les notes du Bac+3.</span>`,

    'cat bulletin': () => `<span style="color:var(--accent)">╔══════════════════════════════════════╗
║   BACHELOR ASRC 2025-2026 — 3iL      ║
╚══════════════════════════════════════╝</span>
BC01 Systèmes &amp; virtualisation  <span style="color:#a1efbd">14,00</span>  ✔ validé
BC02 Réseau &amp; cloud             <span style="color:#a1efbd">17,20</span>  ✔ validé
BC03 Cybersécurité              <span style="color:#a1efbd">15,74</span>  ✔ validé
BC04 Gestion de projets         <span style="color:#a1efbd">16,59</span>  ✔ validé
PEP  Écrit 17 · Oral 17         <span style="color:#a1efbd">17,00</span>  ✔ validé

Moyenne générale : <span style="color:var(--accent)">16,11/20</span>
Décision du jury : <span style="color:#22c55e">Admis — mention Très Bien</span> (15/10/2026)

<a href="diplomes/bulletin-bachelor-asrc-2025-2026.pdf" target="_blank" rel="noopener" style="color:var(--accent)">↗ Ouvrir le bulletin (PDF)</a>`,

    'ls certifs': () => `<span style="color:#a1efbd">[2026]</span> Formation EBIOS Risk Manager — Club EBIOS <span style="color:var(--accent)">★</span>
<span style="color:#a1efbd">[----]</span> Certification Pix — compétences numériques
<span style="color:#a1efbd">[----]</span> Habilitation Électrique BR
<span style="color:#a1efbd">[----]</span> Premier Témoin Incendie
<span style="color:#a1efbd">[----]</span> Premiers Secours

<span style="color:var(--text-tertiary)">Tape</span> <span style="color:var(--accent)">cat ebios</span> <span style="color:var(--text-tertiary)">pour le détail.</span>`,

    'ls certifications': () => COMMANDS['ls certifs'](),

    'cat ebios': () => `<span style="color:var(--accent)">╔══════════════════════════════════════╗
║   EBIOS RISK MANAGER — Club EBIOS    ║
╚══════════════════════════════════════╝</span>
Type     : MOOC « Introduction à la méthode EBIOS RM »
Émetteur : <span style="color:#a1efbd">Club EBIOS</span> — méthode de l'<span style="color:#a1efbd">ANSSI</span>
Durée    : 3 h, à distance
Obtenu   : <span style="color:#22c55e">14/08/2026</span> — Paris

Ce que ça couvre :
  ▸ Valeurs métier &amp; événements redoutés
  ▸ Cartographie des sources de risque
  ▸ Scénarios stratégiques &amp; opérationnels
  ▸ Traitement du risque &amp; mesures de sécurité

<span style="color:var(--text-tertiary)">Le cadre méthodo qui complète la pratique terrain
(CyberCup 974 · sensibilisation "20 minutes SI").</span>`,

    'cat contact': () => `<span style="color:var(--accent)">╔═══════════════════════════════╗
║        CONTACT                ║
╚═══════════════════════════════╝</span>
📧  deva.lessy@gmail.com
📞  0692 20 00 23
📍  Saint-André, La Réunion (974)
🚗  Permis B`,

    'cat kreolocation': () => `<span style="color:#14b8a6">╔══════════════════════════════════════╗
║     KREOLOCATION — Réunion           ║
╚══════════════════════════════════════╝</span>
Status  : <span style="color:#22c55e">● ACTIF</span> — Lancé Juin 2026
URL     : <span style="color:#14b8a6">kreolocation.re</span>
Type    : Conciergerie &amp; Location Automobile

Stack web :
  ▸ HTML / CSS / JS vanilla
  ▸ GitHub Pages + domaine .re
  ▸ EmailJS + Cloudinary

Business :
  ▸ Modèle mandataire — 75% propriétaire / 25% agence
  ▸ Zéro risque pour les partenaires
  ▸ SEO — Search Console, sitemap, Google My Business`,

    'cat kreotech': () => `<span style="color:var(--accent)">╔═══════════════════════════════╗
║     KREOTECH RÉUNION          ║
╚═══════════════════════════════╝</span>
Status  : <span style="color:#71717a">● CLOS</span> — 6 mois d'activité
Type    : Micro-entreprise IT
Zone    : La Réunion (974)

Services :
  ▸ Montage PC sur mesure
  ▸ Config réseau (switch, routeur, Wi-Fi)
  ▸ Dépannage &amp; assistance à domicile

Objectif de départ : devenir une ESN locale.`,

    'cat 20min': () => `<span style="color:var(--accent)">╔═══════════════════════════════════╗
║   INITIATIVE "20 MINUTES SI"     ║
╚═══════════════════════════════════╝</span>
<span style="color:#a1efbd">Format</span>  : mini-formation IT hebdomadaire
<span style="color:#a1efbd">Public</span>  : utilisateurs non-techniques SEMAC
<span style="color:#a1efbd">Durée</span>   : 20 minutes chrono

Thèmes abordés :
  ▸ Cybersécurité &amp; mots de passe forts
  ▸ Hameçonnage — comment le détecter
  ▸ Bonnes pratiques bureau &amp; données
  ▸ Utilisation avancée des outils métier

Impact : réduction des tickets récurrents
 autonomie utilisateurs améliorée`,

    uptime: () => {
        const start = new Date('2023-09-01');
        const now   = new Date();
        const diff  = now - start;
        const days  = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = now.getHours();
        const mins  = now.getMinutes();
        return `<span style="color:#a1efbd">${days} days, ${hours}h${String(mins).padStart(2,'0')}m</span>  up since 2023-09-01 (début de l'alternance)
load average: <span style="color:var(--accent)">0.42, 0.38, 0.31</span>`;
    },

    clear: () => '__CLEAR__',

    neofetch: () => `<span style="color:var(--accent)">
    .---.     </span>  <span style="color:var(--text-primary)">lessy@kreotech</span>
   /     \\    <span style="color:var(--text-tertiary)">──────────────────────────</span>
  | (•) (•)|  <span style="color:var(--accent)">OS</span><span style="color:var(--text-secondary)">       : Admin Systèmes &amp; Réseaux</span>
  |   ▽   |   <span style="color:var(--accent)">Host</span><span style="color:var(--text-secondary)">     : Automobiles Réunion (Renault)</span>
   \\ ___ /    <span style="color:var(--accent)">Kernel</span><span style="color:var(--text-secondary)">   : Bac+5 Expert Réseaux Infra &amp; Sécu</span>
    '---'     <span style="color:var(--accent)">Uptime</span><span style="color:var(--text-secondary)">   : 3+ ans d'expérience</span>
      <span style="color:var(--accent)">Shell</span><span style="color:var(--text-secondary)">    : Space Mono / Terminal</span>
      <span style="color:var(--accent)">Skills</span><span style="color:var(--text-secondary)">   : Windows Server, AD, Linux, VLAN, Docker</span>
      <span style="color:var(--accent)">Projects</span><span style="color:var(--text-secondary)"> : KreoTech + KreoLocation</span>
      <span style="color:var(--accent)">Colors</span>   <span style="color:#f97316">███</span><span style="color:#fb923c">███</span><span style="color:#fdba74">███</span>`,
};

{
    const input = document.getElementById('terminalInput');
    const output = document.getElementById('terminalOutput');
    const body = document.getElementById('terminalBody');
    const history = [];
    let historyIndex = -1;

    const escapeHtml = (s) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

    const print = (raw, html, isError = false) => {
        const line = document.createElement('p');
        line.className = 't-cmd';
        line.innerHTML = `<span class="t-prompt">lessy@kreotech:~$</span> ${escapeHtml(raw)}`;
        const out = document.createElement('div');
        out.className = isError ? 't-err' : 't-out';
        out.innerHTML = html.replace(/^\n/, '');
        output.append(line, out);
        body.scrollTop = body.scrollHeight;
    };

    const run = (raw) => {
        const value = raw.trim();
        if (!value) return;
        history.unshift(value);
        historyIndex = -1;
        const handler = COMMANDS[value.toLowerCase()];
        if (!handler) {
            print(value, `bash: ${escapeHtml(value)}: commande introuvable. Tape <span style="color:var(--accent)">help</span> pour la liste.`, true);
            return;
        }
        const result = handler();
        if (result === '__CLEAR__') { output.innerHTML = ''; return; }
        print(value, result);
    };

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            run(input.value);
            input.value = '';
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (historyIndex < history.length - 1) { historyIndex++; input.value = history[historyIndex]; }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex > 0) { historyIndex--; input.value = history[historyIndex]; }
            else { historyIndex = -1; input.value = ''; }
        } else if (e.key === 'Tab') {
            /* Complétion : une seule commande possible → complétée ; plusieurs → listées */
            const typed = input.value.trim().toLowerCase();
            if (!typed) return;
            const matches = Object.keys(COMMANDS).filter((k) => k.startsWith(typed));
            if (!matches.length) return;
            e.preventDefault();
            if (matches.length === 1) input.value = matches[0];
            else print(input.value, matches.join('   '));
        }
    });

    document.querySelectorAll('.term-chips [data-cmd]').forEach((btn) => {
        btn.addEventListener('click', () => run(btn.dataset.cmd));
    });
}
