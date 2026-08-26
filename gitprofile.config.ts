// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'J0ohnnyy',
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Shows curated repos from the manual list below.
      header: 'GitHub Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Curated list of repositories to display (owner/repo). Add more as you push them.
        projects: [
          'J0ohnnyy/soc-detection-lab',
          'J0ohnnyy/SMSI-VoIP',
          'J0ohnnyy/SoftPower',
          'J0ohnnyy/MedData',
        ],
      },
    },
    external: {
      header: 'Featured Projects',
      // Example projects based on Karim's real work — replace links/images with your published repos.
      projects: [
        {
          title: 'Hands-on Cybersecurity Lab Platform',
          description:
            'Designed and deployed multi-level (beginner → advanced) practical cybersecurity labs and secured cloud environments used as training material for e-learning modules.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Secured Network Infrastructure (pfSense + OpenVPN)',
          description:
            'Deployed and hardened pfSense firewalls, OpenVPN tunnels, VLAN segmentation and routing across virtualized Proxmox / LXC environments.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'SOC — Vulnerability Analysis & SIEM Monitoring',
          description:
            'Built a SOC workflow: vulnerability scanning, SIEM-based event supervision, incident detection/investigation and remediation tracking with the ELK stack.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Active Directory Security Assessment',
          description:
            'AD security auditing with BloodHound, Kerberos attack-path analysis and hardening (GPO, tiering, Samba AD, Authentik) in a controlled lab.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Karim EL HAOURATI — Cybersecurity & Infrastructure',
    description:
      'M.Sc. Cybersecurity graduate specializing in infrastructure & security: system administration, network hardening, SOC supervision and vulnerability analysis.',
    imageURL: '',
  },
  social: {
    linkedin: 'karim-el-haourati-414440240',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'karim.11hrt@gmail.com',
  },
  resume: {
    // Served from the public/ folder. Update the base path if you deploy under a different repo name.
    fileUrl: '/CV_Karim_EL_HAOURATI.pdf',
  },
  skills: [
    'Windows Server',
    'Linux',
    'Active Directory',
    'GPO',
    'DNS/DHCP',
    'Proxmox',
    'VMware',
    'pfSense',
    'OpenVPN',
    'VLAN',
    'PKI',
    'Hardening',
    'SIEM',
    'ELK Stack',
    'Threat Intelligence',
    'BloodHound',
    'Kerberos',
    'Azure AD',
    'OSINT',
    'Pentest',
    'Python',
    'Bash',
    'Docker',
    'CI/CD',
  ],
  experiences: [
    {
      company: 'Ingénierie et Conception (Remote)',
      position: 'Cybersecurity & IT Infrastructure Intern',
      from: 'March 2026',
      to: 'Present',
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
      degree: 'M.Sc. Cybersecurity (Bac+5) — Offensive Security, Red Team, SOC, Secured Infrastructure',
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
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // Empty hides the blog section.
    limit: 2,
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'dim',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
