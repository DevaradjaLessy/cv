<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lessy Dévaradja Jean-Noah | Admin Systèmes & Réseaux</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Sora:wght@300;400;600;700;800&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --bg-primary: #09090b;
            --bg-secondary: #18181b;
            --bg-tertiary: #27272a;
            --accent: #f97316;
            --accent-light: #fb923c;
            --text-primary: #fafafa;
            --text-secondary: #a1a1aa;
            --text-tertiary: #52525b;
            --glow: rgba(249, 115, 22, 0.3);
        }

        body {
            font-family: 'Sora', sans-serif;
            background: var(--bg-primary);
            color: var(--text-primary);
            line-height: 1.6;
            overflow-x: hidden;
            cursor: none;
        }

        .cursor {
            position: fixed;
            width: 20px;
            height: 20px;
            border: 2px solid var(--accent);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.2s ease;
            mix-blend-mode: difference;
        }

        .cursor-dot {
            position: fixed;
            width: 4px;
            height: 4px;
            background: var(--accent);
            border-radius: 50%;
            pointer-events: none;
            z-index: 10000;
        }

        body::before {
            content: '';
            position: fixed;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: 
                radial-gradient(circle at 20% 50%, rgba(249, 115, 22, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(251, 146, 60, 0.08) 0%, transparent 50%);
            animation: gradientRotate 20s linear infinite;
            z-index: 0;
        }

        @keyframes gradientRotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        body::after {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
                linear-gradient(rgba(249, 115, 22, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(249, 115, 22, 0.03) 1px, transparent 1px);
            background-size: 100px 100px;
            z-index: 0;
            mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%);
        }

        .particles {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: 0;
        }

        .particle {
            position: absolute;
            background: var(--accent);
            border-radius: 50%;
            animation: float linear infinite;
            opacity: 0;
        }

        @keyframes float {
            0% {
                transform: translateY(100vh) scale(0);
                opacity: 0;
            }
            10% {
                opacity: 0.3;
            }
            90% {
                opacity: 0.1;
            }
            100% {
                transform: translateY(-100vh) scale(1);
                opacity: 0;
            }
        }

        .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 2rem;
            position: relative;
            z-index: 1;
        }

        .nav {
            position: fixed;
            top: 2rem;
            right: 2rem;
            display: flex;
            gap: 1rem;
            z-index: 100;
            background: rgba(24, 24, 27, 0.7);
            backdrop-filter: blur(20px);
            padding: 1rem 1.5rem;
            border-radius: 50px;
            border: 1px solid rgba(249, 115, 22, 0.2);
        }

        .nav-item {
            font-family: 'Space Mono', monospace;
            font-size: 0.85rem;
            color: var(--text-secondary);
            text-decoration: none;
            transition: color 0.3s ease;
        }

        .nav-item:hover {
            color: var(--accent);
        }

        .hero {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 4rem 0;
        }

        .hero-badge {
            display: inline-block;
            padding: 0.5rem 1.5rem;
            background: rgba(249, 115, 22, 0.1);
            border: 1px solid rgba(249, 115, 22, 0.3);
            border-radius: 50px;
            font-family: 'Space Mono', monospace;
            font-size: 0.85rem;
            color: var(--accent);
            margin-bottom: 2rem;
            animation: fadeInUp 0.8s ease forwards;
            opacity: 0;
            transform: translateY(20px);
        }

        @keyframes fadeInUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .hero h1 {
            font-size: clamp(3rem, 10vw, 8rem);
            font-weight: 800;
            line-height: 0.9;
            margin-bottom: 1rem;
            background: linear-gradient(135deg, var(--text-primary) 0%, var(--accent) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: fadeInUp 0.8s ease 0.2s forwards;
            opacity: 0;
            transform: translateY(20px);
            letter-spacing: -0.05em;
        }

        .hero h2 {
            font-size: clamp(1.5rem, 3vw, 2.5rem);
            font-weight: 300;
            color: var(--text-secondary);
            margin-bottom: 3rem;
            animation: fadeInUp 0.8s ease 0.4s forwards;
            opacity: 0;
            transform: translateY(20px);
        }

        .hero-description {
            max-width: 600px;
            font-size: 1.1rem;
            color: var(--text-secondary);
            line-height: 1.8;
            margin-bottom: 3rem;
            animation: fadeInUp 0.8s ease 0.6s forwards;
            opacity: 0;
            transform: translateY(20px);
        }

        .hero-info {
            display: flex;
            gap: 1.5rem;
            flex-wrap: wrap;
            margin-top: 1.5rem;
            font-family: 'Space Mono', monospace;
            font-size: 0.85rem;
            color: var(--text-secondary);
            animation: fadeInUp 0.8s ease 1s forwards;
            opacity: 0;
            transform: translateY(20px);
        }

        .hero-cta {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
            animation: fadeInUp 0.8s ease 0.8s forwards;
            opacity: 0;
            transform: translateY(20px);
        }

        .btn {
            padding: 1rem 2rem;
            border-radius: 12px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.3s ease;
            font-family: 'Space Mono', monospace;
            font-size: 0.9rem;
            position: relative;
            overflow: hidden;
        }

        .btn-primary {
            background: var(--accent);
            color: var(--bg-primary);
            border: 2px solid var(--accent);
        }

        .btn-primary::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
            transition: left 0.5s ease;
        }

        .btn-primary:hover::before {
            left: 100%;
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 40px var(--glow);
        }

        .btn-secondary {
            background: transparent;
            color: var(--text-primary);
            border: 2px solid var(--bg-tertiary);
        }

        .btn-secondary:hover {
            border-color: var(--accent);
            background: rgba(249, 115, 22, 0.05);
        }

        .floating-stats {
            position: absolute;
            right: 5%;
            top: 50%;
            transform: translateY(-50%);
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }

        .stat-card {
            background: rgba(24, 24, 27, 0.5);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(249, 115, 22, 0.2);
            border-radius: 16px;
            padding: 1.5rem;
            min-width: 150px;
            text-align: center;
            animation: float-card 3s ease-in-out infinite;
        }

        .stat-card:nth-child(2) {
            animation-delay: 0.5s;
        }

        .stat-card:nth-child(3) {
            animation-delay: 1s;
        }

        @keyframes float-card {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }

        .stat-number {
            font-size: 2rem;
            font-weight: 800;
            color: var(--accent);
            font-family: 'Space Mono', monospace;
        }

        .stat-label {
            font-size: 0.85rem;
            color: var(--text-secondary);
            margin-top: 0.5rem;
        }

        .section {
            margin: 8rem 0;
            opacity: 0;
            transform: translateY(50px);
            transition: opacity 1s ease, transform 1s ease;
        }

        .section.visible {
            opacity: 1;
            transform: translateY(0);
        }

        .section-header {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 3rem;
        }

        .section-number {
            font-family: 'Space Mono', monospace;
            font-size: 1rem;
            color: var(--accent);
            font-weight: 700;
        }

        .section-title {
            font-size: clamp(2rem, 5vw, 3.5rem);
            font-weight: 700;
            color: var(--text-primary);
        }

        .section-line {
            flex: 1;
            height: 1px;
            background: linear-gradient(90deg, var(--accent), transparent);
            margin-left: 2rem;
        }

        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 2rem;
        }

        .skill-card {
            background: linear-gradient(135deg, rgba(24, 24, 27, 0.8) 0%, rgba(39, 39, 42, 0.4) 100%);
            border: 1px solid rgba(249, 115, 22, 0.1);
            border-radius: 20px;
            padding: 2.5rem;
            position: relative;
            overflow: hidden;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .skill-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), var(--glow) 0%, transparent 50%);
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .skill-card:hover::before {
            opacity: 1;
        }

        .skill-card:hover {
            transform: translateY(-10px);
            border-color: var(--accent);
            box-shadow: 0 20px 60px rgba(249, 115, 22, 0.2);
        }

        .skill-icon {
            width: 60px;
            height: 60px;
            background: var(--accent);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
            font-family: 'Space Mono', monospace;
            color: var(--bg-primary);
            font-weight: 700;
        }

        .skill-title {
            font-size: 1.4rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: var(--text-primary);
        }

        .skill-list {
            list-style: none;
        }

        .skill-list li {
            color: var(--text-secondary);
            padding: 0.5rem 0;
            padding-left: 1.5rem;
            position: relative;
            font-size: 0.95rem;
        }

        .skill-list li::before {
            content: '▸';
            position: absolute;
            left: 0;
            color: var(--accent);
            font-weight: 700;
        }

        .timeline {
            position: relative;
            padding-left: 4rem;
        }

        .timeline::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 2px;
            background: linear-gradient(180deg, var(--accent) 0%, transparent 100%);
        }

        .timeline-item {
            position: relative;
            margin-bottom: 4rem;
            padding-left: 2rem;
        }

        .timeline-item::before {
            content: '';
            position: absolute;
            left: -4.5rem;
            top: 0;
            width: 12px;
            height: 12px;
            background: var(--accent);
            border-radius: 50%;
            box-shadow: 0 0 0 4px rgba(249, 115, 22, 0.2);
            animation: pulse-dot 2s ease-in-out infinite;
        }

        @keyframes pulse-dot {
            0%, 100% {
                box-shadow: 0 0 0 4px rgba(249, 115, 22, 0.2);
            }
            50% {
                box-shadow: 0 0 0 8px rgba(249, 115, 22, 0.1);
            }
        }

        .timeline-date {
            font-family: 'Space Mono', monospace;
            font-size: 0.85rem;
            color: var(--accent);
            margin-bottom: 0.5rem;
            font-weight: 700;
        }

        .timeline-title {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--text-primary);
            margin-bottom: 0.5rem;
        }

        .timeline-company {
            color: var(--text-secondary);
            font-size: 1.1rem;
            margin-bottom: 1rem;
        }

        .timeline-description {
            color: var(--text-secondary);
            line-height: 1.8;
        }

        .timeline-description li {
            margin-bottom: 0.5rem;
            padding-left: 1.5rem;
            position: relative;
        }

        .timeline-description li::before {
            content: '→';
            position: absolute;
            left: 0;
            color: var(--accent);
        }

        .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            margin-top: 2rem;
        }

        .tag {
            padding: 0.6rem 1.2rem;
            background: rgba(249, 115, 22, 0.1);
            border: 1px solid var(--accent);
            border-radius: 50px;
            font-family: 'Space Mono', monospace;
            font-size: 0.85rem;
            color: var(--accent);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .tag::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background: var(--accent);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            transition: width 0.3s ease, height 0.3s ease;
        }

        .tag:hover::before {
            width: 200%;
            height: 200%;
        }

        .tag:hover {
            color: var(--bg-primary);
            box-shadow: 0 0 20px var(--glow);
        }

        .tag span {
            position: relative;
            z-index: 1;
        }

        .qualities-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1.5rem;
        }

        .quality-card {
            background: rgba(24, 24, 27, 0.5);
            border: 1px solid rgba(249, 115, 22, 0.2);
            border-radius: 16px;
            padding: 2rem;
            text-align: center;
            transition: all 0.4s ease;
            position: relative;
            overflow: hidden;
        }

        .quality-card::after {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: conic-gradient(from 0deg, transparent, var(--glow), transparent 30%);
            animation: rotate 4s linear infinite;
            opacity: 0;
        }

        .quality-card:hover::after {
            opacity: 1;
        }

        @keyframes rotate {
            100% { transform: rotate(360deg); }
        }

        .quality-card-inner {
            position: relative;
            z-index: 1;
        }

        .quality-card:hover {
            transform: scale(1.05);
            border-color: var(--accent);
        }

        .quality-icon {
            font-size: 2rem;
            margin-bottom: 1rem;
            font-family: 'Space Mono', monospace;
            color: var(--accent);
            font-weight: 700;
        }

        .quality-name {
            font-weight: 600;
            color: var(--text-primary);
            font-size: 1.1rem;
        }

        .footer {
            margin-top: 8rem;
            padding: 3rem 0;
            border-top: 1px solid rgba(249, 115, 22, 0.1);
            text-align: center;
        }

        .footer-content {
            font-family: 'Space Mono', monospace;
            color: var(--text-tertiary);
            font-size: 0.9rem;
        }

        .footer-links {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-top: 1rem;
        }

        .footer-link {
            color: var(--text-secondary);
            text-decoration: none;
            transition: color 0.3s ease;
        }

        .footer-link:hover {
            color: var(--accent);
        }

        .scroll-progress {
            position: fixed;
            top: 0;
            left: 0;
            height: 3px;
            background: var(--accent);
            z-index: 1000;
            transform-origin: left;
            box-shadow: 0 0 10px var(--glow);
        }

        @media (max-width: 1024px) {
            .floating-stats {
                position: relative;
                right: auto;
                top: auto;
                transform: none;
                flex-direction: row;
                margin: 3rem 0;
            }

            .nav {
                top: 1rem;
                right: 1rem;
                padding: 0.75rem 1rem;
            }
        }

        @media (max-width: 768px) {
            .hero {
                min-height: auto;
            }

            .section {
                margin: 4rem 0;
            }

            .timeline {
                padding-left: 2rem;
            }

            .timeline-item {
                padding-left: 1rem;
            }

            .timeline-item::before {
                left: -2.5rem;
            }

            .skills-grid,
            .qualities-grid {
                grid-template-columns: 1fr;
            }

            .nav {
                display: none;
            }

            body {
                cursor: auto;
            }

            .cursor, .cursor-dot {
                display: none;
            }
        }
    </style>
</head>
<body>
    <div class="cursor"></div>
    <div class="cursor-dot"></div>
    <div class="scroll-progress"></div>

    <nav class="nav">
        <a href="#profil" class="nav-item">profil</a>
        <a href="#competences" class="nav-item">compétences</a>
        <a href="#experience" class="nav-item">expérience</a>
        <a href="#formation" class="nav-item">formation</a>
        <a href="#projet" class="nav-item">projet</a>
    </nav>

    <div class="particles" id="particles"></div>

    <div class="container">

        <!-- ========== HERO / PROFIL ========== -->
        <section class="hero" id="profil">
            <div class="hero-badge">Disponible pour nouvelles opportunités</div>
            <h1>LESSY<br>DÉVARADJA<br>JEAN-NOAH</h1>
            <h2>Admin Systèmes & Réseaux • Infrastructure IT</h2>
            <p class="hero-description">
                Actuellement en alternance chez SEMAC comme Assistant SI, j'ai développé de bonnes bases en administration systèmes et réseaux.<br><br>
                Je souhaite intégrer votre entreprise pour renforcer mes compétences et continuer à progresser dans l'infrastructure informatique.<br><br>
                Curieux, rigoureux et passionné, je suis prêt à m'investir pleinement en entreprise et en formation pour devenir un professionnel du métier.
            </p>
            <div class="hero-cta">
                <a href="mailto:deva.lessy@gmail.com" class="btn btn-primary">deva.lessy@gmail.com</a>
                <a href="tel:0692200023" class="btn btn-secondary">0692 20 00 23</a>
            </div>
            <div class="hero-info">
                <span>📍 683 chemin Valentin, 97440 Saint-André</span>
                <span>🚗 Permis B</span>
            </div>

            <div class="floating-stats">
                <div class="stat-card">
                    <div class="stat-number">3+</div>
                    <div class="stat-label">Ans d'expérience</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">5+</div>
                    <div class="stat-label">Stages techniques</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">100%</div>
                    <div class="stat-label">Engagement</div>
                </div>
            </div>
        </section>

        <!-- ========== 01 - COMPÉTENCES TECHNIQUES ========== -->
        <section class="section" id="competences">
            <div class="section-header">
                <span class="section-number">01</span>
                <h2 class="section-title">Compétences Techniques</h2>
                <div class="section-line"></div>
            </div>
            <div class="skills-grid">
                <div class="skill-card">
                    <div class="skill-icon">SYS</div>
                    <h3 class="skill-title">Systèmes & Administration</h3>
                    <ul class="skill-list">
                        <li>Windows Server (2016 / 2019 / 2022)</li>
                        <li>Active Directory (comptes, groupes, droits, GPO)</li>
                        <li>Déploiement de postes / imprimantes</li>
                    </ul>
                </div>
                <div class="skill-card">
                    <div class="skill-icon">NET</div>
                    <h3 class="skill-title">Réseaux & Infrastructure</h3>
                    <ul class="skill-list">
                        <li>Réseaux : TCP/IP, DNS, DHCP, VLAN</li>
                        <li>Configuration réseau & Wi-Fi</li>
                        <li>Fibre optique & soudure</li>
                        <li>Câblage & baie de brassage</li>
                    </ul>
                </div>
                <div class="skill-card">
                    <div class="skill-icon">SEC</div>
                    <h3 class="skill-title">Support & Sécurité</h3>
                    <ul class="skill-list">
                        <li>Support utilisateurs N1/N2</li>
                        <li>Gestion des tickets (FreshService)</li>
                        <li>Cybersécurité (mots de passe, antivirus)</li>
                        <li>Animation des "20 minutes SI" (mini-formations IT pour les utilisateurs)</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- ========== 02 - EXPÉRIENCE PROFESSIONNELLE ========== -->
        <section class="section" id="experience">
            <div class="section-header">
                <span class="section-number">02</span>
                <h2 class="section-title">Expérience Professionnelle</h2>
                <div class="section-line"></div>
            </div>
            <div class="timeline">

                <!-- Alternance L3 -->
                <div class="timeline-item">
                    <div class="timeline-date">Septembre 2025 – Septembre 2026 (1 an) • En cours</div>
                    <h3 class="timeline-title">Alternance L3 – Assistant SI</h3>
                    <div class="timeline-company">SEMAC (Groupe Territoires Réunion)</div>
                    <ul class="timeline-description">
                        <li>Administration des comptes, groupes et droits via Active Directory (GPO, OUs)</li>
                        <li>Supervision et maintien en conditions opérationnelles de l'infrastructure réseau</li>
                        <li>Gestion des incidents et suivi des tickets via FreshService (support N1/N2)</li>
                        <li>Déploiement et configuration de postes de travail et imprimantes</li>
                        <li>Rédaction de procédures techniques et documentation IT</li>
                        <li>Participation au déploiement de solutions de virtualisation</li>
                        <li>Animation des "20 minutes SI" (mini-formations IT pour les utilisateurs)</li>
                        <li>Veille technologique et propositions d'amélioration de l'infrastructure</li>
                    </ul>
                </div>

                <!-- Alternance BAC+2 -->
                <div class="timeline-item">
                    <div class="timeline-date">Septembre 2023 – Août 2025 (2 ans)</div>
                    <h3 class="timeline-title">Alternance BAC+2 – Assistant SI</h3>
                    <div class="timeline-company">SEMAC (Groupe Territoires Réunion)</div>
                    <ul class="timeline-description">
                        <li>Assistance aux utilisateurs sur les équipements informatiques (PC, imprimantes, réseau)</li>
                        <li>Participation à la maintenance du parc informatique</li>
                        <li>Suivi des tickets et interventions techniques</li>
                        <li>Collaboration avec l'équipe SI pour le support réseau (Wi-Fi, connexions)</li>
                        <li>Participation à l'intégration de nouveaux équipements</li>
                    </ul>
                </div>

                <!-- Acor Réunion -->
                <div class="timeline-item">
                    <div class="timeline-date">Septembre – Octobre 2022 (4 semaines) et Février – Mars 2023 (4 semaines)</div>
                    <h3 class="timeline-title">Stagiaire chez Acor Réunion</h3>
                    <div class="timeline-company">Acor Réunion</div>
                    <ul class="timeline-description">
                        <li>Installation et configuration d'équipements réseau (Livebox, routeur, répéteur Wi-Fi)</li>
                        <li>Installation de la fibre optique chez différents clients</li>
                        <li>Réalisation de la soudure de fibre optique</li>
                        <li>Branchement des clients de la fibre au PMZ</li>
                    </ul>
                </div>

                <!-- Sorefi -->
                <div class="timeline-item">
                    <div class="timeline-date">Avril 2022 (4 semaines)</div>
                    <h3 class="timeline-title">Stagiaire à la Sorefi de Sainte-Marie</h3>
                    <div class="timeline-company">Sorefi de Sainte-Marie</div>
                    <ul class="timeline-description">
                        <li>Assurer la maintenance des appareils informatiques</li>
                        <li>Câblage de la baie de brassage de l'entreprise</li>
                    </ul>
                </div>

                <!-- Megalithe.tech -->
                <div class="timeline-item">
                    <div class="timeline-date">Novembre 2021 (4 semaines)</div>
                    <h3 class="timeline-title">Stagiaire à Megalithe.tech de Sainte-Marie</h3>
                    <div class="timeline-company">Megalithe.tech de Sainte-Marie</div>
                    <ul class="timeline-description">
                        <li>Résolution de problème de licence dans diverses entreprises</li>
                        <li>Création de Serveur sous Windows Serveur 2016, 2019</li>
                        <li>Réparation et maintenance d'appareils informatique</li>
                    </ul>
                </div>

                <!-- Exper'Elec -->
                <div class="timeline-item">
                    <div class="timeline-date">Décembre 2020 (3 semaines) et Juin 2021 (3 semaines)</div>
                    <h3 class="timeline-title">Stagiaire chez Exper'Elec Réunion</h3>
                    <div class="timeline-company">Exper'Elec Réunion</div>
                    <ul class="timeline-description">
                        <li>Réalisation de câblage électrique en bâtiments</li>
                        <li>Installation de prises électriques</li>
                        <li>Installation de compteurs d'électricité</li>
                    </ul>
                </div>

            </div>
        </section>

        <!-- ========== 03 - FORMATION SCOLAIRE ET DIPLÔME ========== -->
        <section class="section" id="formation">
            <div class="section-header">
                <span class="section-number">03</span>
                <h2 class="section-title">Formation scolaire et diplôme</h2>
                <div class="section-line"></div>
            </div>
            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-date">2025 – 2026 • En cours</div>
                    <h3 class="timeline-title">Licence 3 – Administration Systèmes, Réseaux & Cloud (ASR&C)</h3>
                    <div class="timeline-company">CCI EDN • Alternance</div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-date">2023 – 2025</div>
                    <h3 class="timeline-title">BAC+2 – Technicien Supérieur Systèmes et Réseaux</h3>
                    <div class="timeline-company">Alternance chez SEMAC</div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-date">2019 – 2023</div>
                    <h3 class="timeline-title">Baccalauréat Professionnel Systèmes Numériques</h3>
                    <div class="timeline-company">Option C : Réseaux Informatiques et Systèmes Communicants – (avec BEP) Mention Très bien</div>
                    <div class="tags">
                        <span class="tag"><span>Certification Pix</span></span>
                        <span class="tag"><span>Habilitation Électrique BR</span></span>
                        <span class="tag"><span>Formation « Premier Témoin Incendie »</span></span>
                        <span class="tag"><span>Formation « Premier secours »</span></span>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-date">2019</div>
                    <h3 class="timeline-title">Diplôme national du brevet</h3>
                    <div class="timeline-company">Série générale</div>
                </div>
            </div>
        </section>

        <!-- ========== 04 - COMPÉTENCES & QUALITÉS ========== -->
        <section class="section">
            <div class="section-header">
                <span class="section-number">04</span>
                <h2 class="section-title">Compétences & Qualités</h2>
                <div class="section-line"></div>
            </div>
            <div class="qualities-grid">
                <!-- Compétences (du PDF) -->
                <div class="quality-card">
                    <div class="quality-card-inner">
                        <div class="quality-icon">[+]</div>
                        <div class="quality-name">Esprit d'équipe</div>
                    </div>
                </div>
                <div class="quality-card">
                    <div class="quality-card-inner">
                        <div class="quality-icon">[?]</div>
                        <div class="quality-name">Capacités d'observation</div>
                    </div>
                </div>
                <div class="quality-card">
                    <div class="quality-card-inner">
                        <div class="quality-icon">[=]</div>
                        <div class="quality-name">Autonomie</div>
                    </div>
                </div>
                <!-- Qualités (du PDF) -->
                <div class="quality-card">
                    <div class="quality-card-inner">
                        <div class="quality-icon">[*]</div>
                        <div class="quality-name">Passionné</div>
                    </div>
                </div>
                <div class="quality-card">
                    <div class="quality-card-inner">
                        <div class="quality-icon">[>]</div>
                        <div class="quality-name">Persévérance</div>
                    </div>
                </div>
                <div class="quality-card">
                    <div class="quality-card-inner">
                        <div class="quality-icon">[~]</div>
                        <div class="quality-name">Adaptabilité</div>
                    </div>
                </div>
                <div class="quality-card">
                    <div class="quality-card-inner">
                        <div class="quality-icon">[!]</div>
                        <div class="quality-name">Sérieux</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ========== 05 - PROJET ========== -->
        <section class="section" id="projet">
            <div class="section-header">
                <span class="section-number">05</span>
                <h2 class="section-title">Projet</h2>
                <div class="section-line"></div>
            </div>
            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-date">En parallèle des études • Projet entrepreneurial</div>
                    <h3 class="timeline-title">KreoTech Réunion</h3>
                    <div class="timeline-company">Fondateur – Micro-entreprise IT en développement</div>
                    <ul class="timeline-description">
                        <li>Montage et assemblage de PC sur mesure pour des particuliers</li>
                        <li>Installation et configuration d'équipements réseau (switch, routeur, Wi-Fi)</li>
                        <li>Dépannage informatique et assistance technique à domicile</li>
                        <li>Objectif : développer KreoTech en véritable entreprise de services IT à La Réunion</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- ========== 06 - DISTINCTIONS ========== -->
        <section class="section">
            <div class="section-header">
                <span class="section-number">06</span>
                <h2 class="section-title">Distinctions</h2>
                <div class="section-line"></div>
            </div>
            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-date">WebCup • Compétition de développement web</div>
                    <h3 class="timeline-title">🏆 2ème place – WebCup</h3>
                    <div class="timeline-company">En équipe, sans aucune connaissance préalable en développement</div>
                </div>
            </div>
        </section>

        <!-- ========== 07 - LANGUES ========== -->
        <section class="section">
            <div class="section-header">
                <span class="section-number">07</span>
                <h2 class="section-title">Langues</h2>
                <div class="section-line"></div>
            </div>
            <div class="qualities-grid">
                <div class="quality-card">
                    <div class="quality-card-inner">
                        <div class="quality-icon">FR</div>
                        <div class="quality-name">Français</div>
                    </div>
                </div>
                <div class="quality-card">
                    <div class="quality-card-inner">
                        <div class="quality-icon">EN</div>
                        <div class="quality-name">Anglais</div>
                    </div>
                </div>
                <div class="quality-card">
                    <div class="quality-card-inner">
                        <div class="quality-icon">ES</div>
                        <div class="quality-name">Espagnol</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ========== 08 - CENTRES D'INTÉRÊT ========== -->
        <section class="section">
            <div class="section-header">
                <span class="section-number">08</span>
                <h2 class="section-title">Centres d'intérêt</h2>
                <div class="section-line"></div>
            </div>
            <div class="qualities-grid">
                <div class="quality-card">
                    <div class="quality-card-inner">
                        <div class="quality-icon">[B]</div>
                        <div class="quality-name">Lecture</div>
                    </div>
                </div>
                <div class="quality-card">
                    <div class="quality-card-inner">
                        <div class="quality-icon">[&]</div>
                        <div class="quality-name">Bénévolat</div>
                    </div>
                </div>
                <div class="quality-card">
                    <div class="quality-card-inner">
                        <div class="quality-icon">[W]</div>
                        <div class="quality-name">Musculation</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ========== FOOTER ========== -->
        <footer class="footer">
            <div class="footer-content">
                © 2025 Lessy Dévaradja Jean-Noah • 683 chemin Valentin, 97440 Saint-André, Réunion
            </div>
            <div class="footer-links">
                <a href="mailto:deva.lessy@gmail.com" class="footer-link">deva.lessy@gmail.com</a>
                <a href="tel:0692200023" class="footer-link">0692 20 00 23</a>
            </div>
        </footer>
    </div>

    <script>
        const cursor = document.querySelector('.cursor');
        const cursorDot = document.querySelector('.cursor-dot');
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            cursorDot.style.left = (e.clientX - 2) + 'px';
            cursorDot.style.top = (e.clientY - 2) + 'px';
        });

        document.querySelectorAll('a, .skill-card, .quality-card').forEach(el => {
            el.addEventListener('mouseenter', () => cursor.style.transform = 'scale(1.5)');
            el.addEventListener('mouseleave', () => cursor.style.transform = 'scale(1)');
        });

        const particlesContainer = document.getElementById('particles');
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.width = (Math.random() * 3 + 1) + 'px';
            particle.style.height = particle.style.width;
            particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
            particle.style.animationDelay = Math.random() * 5 + 's';
            particlesContainer.appendChild(particle);
        }

        const sections = document.querySelectorAll('.section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('visible');
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

        sections.forEach(section => observer.observe(section));

        window.addEventListener('scroll', () => {
            const scrollProgress = document.querySelector('.scroll-progress');
            const scrollable = document.documentElement.scrollHeight - window.innerHeight;
            scrollProgress.style.width = (window.scrollY / scrollable * 100) + '%';
        });

        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector(item.getAttribute('href')).scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            });
        });

        document.querySelectorAll('.skill-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                card.style.setProperty('--mouse-x', x + '%');
                card.style.setProperty('--mouse-y', y + '%');
            });
        });
    </script>
</body>
</html>

