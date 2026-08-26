import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import {
  SanitizedExperience,
  SanitizedEducation,
  SanitizedCertification,
  SanitizedExternalProject,
} from './interfaces/sanitized-config';

export type Lang = 'en' | 'fr';

const LANG_STORAGE_KEY = 'gitprofile-lang';

/**
 * UI labels (section titles, buttons) per language.
 */
export const LABELS: Record<Lang, Record<string, string>> = {
  en: {
    language: 'Language',
    theme: 'Theme',
    defaultTheme: 'Default',
    techStack: 'Tech Stack',
    experience: 'Experience',
    education: 'Education',
    certification: 'Certification',
    basedIn: 'Based in:',
    downloadResume: 'Download Resume',
    featuredProjects: 'Featured Projects',
    caseStudies: 'Case Studies',
    viewReport: 'View document (PDF)',
  },
  fr: {
    language: 'Langue',
    theme: 'Thème',
    defaultTheme: 'Défaut',
    techStack: 'Compétences',
    experience: 'Expérience',
    education: 'Formation',
    certification: 'Certifications',
    basedIn: 'Localisation :',
    downloadResume: 'Télécharger le CV',
    featuredProjects: 'Projets',
    caseStudies: 'Cas concrets',
    viewReport: 'Voir le document (PDF)',
  },
};

export interface SkillGroup {
  name: string;
  skills: string[];
}

interface LocalizedContent {
  bio: string;
  skillGroups: SkillGroup[];
  experiences: SanitizedExperience[];
  certifications: SanitizedCertification[];
  educations: SanitizedEducation[];
  externalProjects: SanitizedExternalProject[];
}

/**
 * Localizable page content (bio, experiences, education, certs, projects).
 * Edit here to change the text shown for each language.
 */
export const CONTENT: Record<Lang, LocalizedContent> = {
  en: {
    bio: 'Cybersecurity & Infrastructure engineer (M.Sc.). Specialized in system administration, network security, SOC monitoring and vulnerability management.',
    skillGroups: [
      {
        name: 'Infrastructure & Systems',
        skills: [
          'Windows Server',
          'Linux',
          'Active Directory',
          'GPO',
          'DNS/DHCP',
          'Proxmox',
          'VMware',
          'LXC',
          'Virtualization',
        ],
      },
      {
        name: 'Networks & Security',
        skills: [
          'pfSense',
          'WAF',
          'OpenVPN',
          'VLAN',
          'VPN',
          'Routing',
          'Hardening',
          'Samba AD',
          'Authentik',
          'PKI',
        ],
      },
      {
        name: 'Monitoring & SOC',
        skills: [
          'SIEM',
          'ELK Stack',
          'Monitoring',
          'Alerting',
          'Log Analysis',
          'Incident Handling (N1/N2)',
          'Threat Intelligence',
        ],
      },
      {
        name: 'Vulnerability & Pentest',
        skills: [
          'Vulnerability Analysis',
          'CVE/CVSS',
          'BloodHound',
          'Kerberos',
          'AD Security',
          'Azure AD',
          'Penetration Testing',
          'OSINT',
        ],
      },
      {
        name: 'Automation & Dev',
        skills: ['Python', 'Bash', 'Automation Scripts', 'Docker', 'Jenkins', 'CI/CD'],
      },
    ],
    experiences: [
      {
        company: 'Ingénierie et Conception (Remote)',
        position: 'Cybersecurity & IT Infrastructure Intern',
        from: 'March 2026',
        to: 'August 2026',
        companyLink: '',
      },
      {
        company: 'InnoveQube, Paris',
        position: 'System Administration & Security Intern',
        from: 'March 2025',
        to: 'September 2025',
        companyLink: '',
      },
      {
        company: 'Paris Ynov Campus (Academic Project)',
        position: 'SOC Security Analyst',
        from: '2025',
        to: '2025',
        companyLink: '',
      },
    ],
    certifications: [
      {
        name: 'ISO/IEC 27001 — Information Security Associate',
        body: 'Information Security Management',
        year: '',
        link: '',
      },
      {
        name: 'Cisco — Junior Cybersecurity Analyst',
        body: 'Cisco Networking Academy',
        year: '',
        link: '',
      },
    ],
    educations: [
      {
        institution: 'Paris Ynov Campus, Nanterre',
        degree:
          'M.Sc. Cybersecurity (Bac+5) — Offensive Security, Red Team, SOC, Secured Infrastructure',
        from: '2024',
        to: '2026',
      },
      {
        institution: 'Paris Ynov Campus, Nanterre',
        degree: 'Bachelor Cybersecurity (Bac+3)',
        from: '2023',
        to: '2024',
      },
      {
        institution: 'Ynov Campus Maroc, Casablanca',
        degree: 'Bachelor Computer Science',
        from: '2021',
        to: '2023',
      },
    ],
    externalProjects: [
      {
        title:
          'EnergyGrid Ops — Critical-Infrastructure (OIV) Cybersecurity Case Study (RNCP 40897)',
        description: `End-to-end academic project: the four modules of the RNCP 40897 certification handled on a single fictional organization — EnergyGrid Ops, an electricity-distribution operator (designated critical operator / OIV) in Grenoble — covering the full information system: IT (Active Directory, servers, cloud), industrial OT (SCADA, PLCs, RTUs) and the IT/OT boundary (DMZ, VPN, bastion). Module 1 (strategy / CISO): Purdue-model system mapping (draw.io), EBIOS RM risk analysis (5 workshops), IEC 62443 positioning with a justified SL2 target, Zero Trust vs OT trade-off, identification of CVE-2023-27997 (FortiGate SSL-VPN) as the IT→OT pivot, ISSP and prioritized action plan. Module 2 (project lead): integration of Claroty CTD via passive collection (port mirroring, no production downtime), coupled with Microsoft Sentinel SIEM for IT/OT correlation. Module 3 (operational CISO): obsolescence management (end-of-life Hirschmann switch, 2019 firmwares), monitoring policy and SOC (N1/N2/N3, sensors, playbooks), vulnerability-remediation cycle. Module 4 (crisis management): a compromised contractor account → IT→OT pivot → command injection on industrial PLCs, 8,000 households at risk; OT-aware containment, forensics, ANSSI notification within 24h, and post-mortem. Key strength: each module reuses the previous one's deliverables, demonstrating the full lifecycle of industrial cybersecurity.`,
        imageUrl: '',
        link: '/EnergyGrid_Ops_Dossier_complet.pdf',
      },
      {
        title: 'Incident Response — Hôtel Royal, Paris (April 2026)',
        description: `Solo incident response, alongside my front-desk role, to an infostealer compromise of the reception workstation. Full attack chain: a local Man-in-the-Middle proxy intercepting browser traffic (Booking.com extranet), exfiltration to an Eastern-European C2 server, then a WhatsApp phishing campaign targeting guests with their real reservation data. Alerted by the accuracy of guest reports — which pointed to direct access to the booking system — I led the investigation (processes, network connections, WinHTTP proxy, registry persistence, disk artifacts) and containment: killing the proxy and C2 channel, removing persistence, rotating all critical credentials and enabling 2FA on the extranet. Deliverables: a full technical report (timeline, IoCs, methodology, recommendations) and a GDPR breach-notification file (Art. 33). Outcome: attack chain neutralized, ~10-day data leak stopped, guests protected from fraud, and endpoint-hardening measures recommended (EDR, blocking non-admin installs, back-office segmentation).`,
        imageUrl: '',
        link: '/rapport-incident-hotel-royal.pdf',
      },
    ],
  },
  fr: {
    bio: 'Ingénieur Cybersécurité & Infrastructure (Bac+5), spécialisé en administration système, sécurité réseau, supervision SOC et gestion des vulnérabilités.',
    skillGroups: [
      {
        name: 'Infrastructure & Systèmes',
        skills: [
          'Windows Server',
          'Linux',
          'Active Directory',
          'GPO',
          'DNS/DHCP',
          'Proxmox',
          'VMware',
          'LXC',
          'Virtualisation',
        ],
      },
      {
        name: 'Réseaux & Sécurité',
        skills: [
          'pfSense',
          'WAF',
          'OpenVPN',
          'VLAN',
          'VPN',
          'Routage',
          'Hardening',
          'Samba AD',
          'Authentik',
          'PKI',
        ],
      },
      {
        name: 'Supervision & SOC',
        skills: [
          'SIEM',
          'ELK Stack',
          'Monitoring',
          'Alerting',
          'Analyse de logs',
          'Gestion des incidents N1/N2',
          'Threat Intelligence',
        ],
      },
      {
        name: 'Vulnérabilités & Pentest',
        skills: [
          'Analyse de vulnérabilités',
          'CVE/CVSS',
          'BloodHound',
          'Kerberos',
          'AD Security',
          'Azure AD',
          "Test d'intrusion",
          'OSINT',
        ],
      },
      {
        name: 'Automatisation & Dev',
        skills: [
          'Python',
          'Bash',
          "Scripts d'automatisation",
          'Docker',
          'Jenkins',
          'CI/CD',
        ],
      },
    ],
    experiences: [
      {
        company: 'Ingénierie et Conception (À distance)',
        position: 'Stagiaire Cybersécurité & Infrastructure IT',
        from: 'Mars 2026',
        to: 'Août 2026',
        companyLink: '',
      },
      {
        company: 'InnoveQube, Paris',
        position: 'Stagiaire Administration Système & Sécurité',
        from: 'Mars 2025',
        to: 'Septembre 2025',
        companyLink: '',
      },
      {
        company: 'Paris Ynov Campus (Projet académique)',
        position: 'Analyste Sécurité SOC',
        from: '2025',
        to: '2025',
        companyLink: '',
      },
    ],
    certifications: [
      {
        name: 'ISO/IEC 27001 — Information Security Associate',
        body: 'Management de la sécurité de l’information',
        year: '',
        link: '',
      },
      {
        name: 'Cisco — Analyste Cybersécurité Junior',
        body: 'Cisco Networking Academy',
        year: '',
        link: '',
      },
    ],
    educations: [
      {
        institution: 'Paris Ynov Campus, Nanterre',
        degree:
          'Mastère 2 Cybersécurité (Bac+5) — Sécurité offensive, Red Team, SOC, Infrastructures sécurisées',
        from: '2024',
        to: '2026',
      },
      {
        institution: 'Paris Ynov Campus, Nanterre',
        degree: 'Bachelor Cybersécurité (Bac+3)',
        from: '2023',
        to: '2024',
      },
      {
        institution: 'Ynov Campus Maroc, Casablanca',
        degree: 'Bachelor Informatique',
        from: '2021',
        to: '2023',
      },
    ],
    externalProjects: [
      {
        title:
          "EnergyGrid Ops — Étude de cas cybersécurité d'un OIV (fil rouge RNCP 40897)",
        description: `Projet académique fil rouge : les 4 blocs de la certification RNCP 40897 traités sur une même organisation fictive — EnergyGrid Ops, opérateur de distribution électrique (Opérateur d'Importance Vitale) à Grenoble — couvrant tout le SI : IT (Active Directory, serveurs, cloud), OT industriel (SCADA, automates, RTU) et la frontière IT/OT (DMZ, VPN, bastion). Bloc 1 (stratégie / RSSI) : cartographie du SI selon le modèle Purdue (draw.io), analyse de risque EBIOS RM (5 ateliers), positionnement IEC 62443 avec objectif SL2 justifié devant jury, arbitrage Zero Trust vs OT, identification du vecteur d'attaque CVE-2023-27997 (SSL-VPN FortiGate) comme pivot IT→OT, PSSI et plan d'actions priorisé. Bloc 2 (chef de projet) : intégration de Claroty CTD par collecte passive (port mirroring, sans interruption de production), couplée au SIEM Microsoft Sentinel pour la corrélation IT/OT. Bloc 3 (RSSI opérationnel) : gestion de l'obsolescence (switch Hirschmann en fin de vie, firmwares de 2019), politique de surveillance et SOC (N1/N2/N3, sondes, playbooks), cycle de correction des vulnérabilités. Bloc 4 (gestion de crise) : compromission d'un compte prestataire → pivot IT→OT → injection de commandes sur les automates, 8 000 foyers menacés ; endiguement adapté aux contraintes OT, investigation forensique, notification ANSSI sous 24 h, post-mortem. Point fort : chaque bloc réutilise les livrables du précédent, démontrant le cycle de vie complet de la cybersécurité industrielle.`,
        imageUrl: '',
        link: '/EnergyGrid_Ops_Dossier_complet.pdf',
      },
      {
        title: 'Réponse à incident — Hôtel Royal, Paris (avril 2026)',
        description: `Réponse à incident menée seul, en parallèle de mon poste de réceptionniste, face à la compromission du poste de réception par un infostealer. Chaîne d'attaque complète : proxy Man-in-the-Middle local interceptant le trafic navigateur (extranet Booking.com), exfiltration vers un serveur C2 en Europe de l'Est, puis campagne de phishing WhatsApp ciblant les clients avec leurs vraies données de réservation. Alerté par l'exactitude des signalements clients — révélant un accès direct au système de réservation —, j'ai conduit l'investigation (processus, connexions réseau, proxy WinHTTP, clés de persistance en registre, artefacts disque) puis le confinement : arrêt du proxy et du canal C2, suppression de la persistance, rotation de tous les identifiants critiques et activation du 2FA sur l'extranet. Livrables : rapport technique complet (chronologie, IoC, méthodologie, recommandations) et dossier de notification CNIL (RGPD art. 33). Résultat : chaîne d'attaque neutralisée, fuite de données stoppée après ~10 jours, clients protégés de la fraude, et durcissement recommandé (EDR, blocage des installations hors admin, segmentation du back-office).`,
        imageUrl: '',
        link: '/rapport-incident-hotel-royal.pdf',
      },
    ],
  },
};

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
  content: LocalizedContent;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

const getInitialLang = (): Lang => {
  if (typeof window === 'undefined') return 'en';
  const stored = localStorage.getItem(LANG_STORAGE_KEY);
  if (stored === 'en' || stored === 'fr') return stored;
  // Fall back to the browser language.
  return navigator.language?.toLowerCase().startsWith('fr') ? 'fr' : 'en';
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  const setLang = (next: Lang) => {
    setLangState(next);
    if (typeof window !== 'undefined') {
      localStorage.setItem(LANG_STORAGE_KEY, next);
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key: string): string => LABELS[lang][key] ?? key;

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, t, content: CONTENT[lang] }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = (): LanguageContextValue => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
};
