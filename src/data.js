import portfolio1 from './assets/images/portfolio/portfolio1.jpg'
import portfolio2 from './assets/images/portfolio/portfolio2.jpg'
import portfolio3 from './assets/images/portfolio/portfolio3.jpg'
import portfolio4 from './assets/images/portfolio/portfolio4.jpg'
import portfolio5 from './assets/images/portfolio/portfolio5.jpg'
import portfolio6 from './assets/images/portfolio/portfolio6.jpg'
import portfolio7 from './assets/images/portfolio/portfolio7.jpg'
import portfolio8 from './assets/images/portfolio/portfolio8.jpg'


import client1 from './assets/images/client/01.jpg'
import client2 from './assets/images/client/02.jpg'
import client3 from './assets/images/client/03.jpg'
import client4 from './assets/images/client/04.jpg'

import team1 from './assets/images/team/team1.jpg'
import team2 from './assets/images/team/team2.jpg'
import team3 from './assets/images/team/team3.jpg'
import team4 from './assets/images/team/team4.jpg'


import partner1 from './assets/images/client/bmw.svg'
import partner2 from './assets/images/client/mercedes-benz.svg'
import partner3 from './assets/images/client/kia.svg'
import partner4 from './assets/images/client/audi.svg'
import partner5 from './assets/images/client/volkswagen.svg'
import partner6 from './assets/images/client/renault.svg'


import work1 from './assets/images/work/work1.jpg'
import work2 from './assets/images/work/work2.jpg'
import work3 from './assets/images/work/work3.jpg'


import blog1 from './assets/images/blog/blog1.jpg'
import blog2 from './assets/images/blog/blog2.jpg'
import blog3 from './assets/images/blog/blog3.jpg'


import logo from './assets/images/logo-light.png'


export const beforeNavbar = {
  phone: {
    icon: 'uil uil-phone-alt',
    text: '+49 2306 308291',
    link: 'tel:+492306308291'
  },
  service: {
    icon: 'uil uil-clock',
    text: '24/7 Abschleppwagen-Service',
    link: '#'
  },
  location: {
    icon: 'uil uil-map-marker',
    text: 'Bahnstraße 16, 44532 Lünen, Deutschland',
    link: 'https://goo.gl/maps/jrF43TTcJShDwBRo9'
  }
};




// Exporting navbar links data
export const navbarLinks = [
  { href: "#home", title: "Startseite" },
  { href: "#about", title: "Über Uns" },
  { href: "#features", title: "Leistungen" },
  { href: "#portfolio", title: "Projekte" },
  { href: "#testi", title: "Bewertungen" },
  { href: "#pricing", title: "Preise" },
  { href: "#blog", title: "Blog" },
  { href: "#contact", title: "Kontakt" }
];




export const socialLinks =[
  { iconClass: 'uil uil-github', href: '', title: 'GitHub' },
  { iconClass: 'uil uil-twitter', href: '', title: 'Twitter' },
  { iconClass: 'uil uil-instagram', href: '', title: 'Instagram' },
];




export const heroData = {
  title: "Ihre professionelle Autowerkstatt in Lünen",
  titleTwo: "Für ",
  subtitle: [
    "Reparaturen",
    "Wartung",
    "Reifenservice",
    "Pannenhilfe"
  ],
  description: "DENIZ KFZ in Lünen bietet zuverlässige Autoreparaturen, Wartungsservices und einen 24h-Abschleppdienst zu fairen Preisen.",
  buttonLabel: "Termin vereinbaren",
  buttonUrl: "#contact",
};

export const aboutUs = {
  title: "Über uns",
  subtitle: "Ihre Kfz-Werkstatt und Pannenhilfe in Lünen",
  description: "Bei DENIZ KFZ in Lünen bieten wir umfassende Autoreparaturen, professionellen Reifenservice sowie schnelle Hilfe bei Pannen und Unfällen. Wir setzen auf Kompetenz, Transparenz und Kundenzufriedenheit.",
  buttonLabel: "Mehr erfahren",
  buttonUrl: "#about",
};

export const sectionHeaders = {
 
  feature: {
    title: "Unsere Kfz-Leistungen",
    subtitle: "Autoservice & Reparaturen in Lünen",
    text: "Von der Fahrzeugdiagnose über den Reifenservice bis hin zur Unfallreparatur – wir bieten Ihnen alle Services rund ums Auto unter einem Dach."
  },
  work: {
    title: "Arbeitsprozess",
    subtitle: "Wie wir arbeiten",
    text: "Schnell, zuverlässig und professionell – so behandeln wir Ihr Fahrzeug."
  },
  portfolio: {
    title: "Unsere Arbeiten",
    subtitle: "Kfz-Projekte",
    text: "Verschaffen Sie sich einen Überblick über unsere bisherigen Arbeiten und Projekte."
  },
  client: {
    title: "Kundenbewertungen",
    subtitle: "Was unsere Kunden sagen",
    text: "Lesen Sie die Erfahrungen und Meinungen unserer zufriedenen Kunden."
  },
  pricing: {
    title: "Unsere Preise",
    subtitle: "Faire Tarife",
    text: "Transparente Preisgestaltung ohne versteckte Kosten."
  },
  team: {
    title: "Unser Team",
    subtitle: "Experten für Ihr Fahrzeug",
    text: "Unser qualifiziertes Personal steht Ihnen stets freundlich und kompetent zur Seite."
  },
  blogs: {
    title: "Blog",
    subtitle: "Tipps & Neuigkeiten",
    text: "Hilfreiche Informationen rund um Ihr Fahrzeug und aktuelle Neuigkeiten aus unserer Werkstatt."
  },
  contact: {
    title: "Kontaktieren Sie uns",
    subtitle: "Wir helfen gerne weiter",
    text: "Nehmen Sie Kontakt mit uns auf – wir freuen uns auf Ihre Anfrage."
  }
};

export const featureData = [
  {
    icon: `uil uil-car`,
    title: `Umfassende Wartung`,
    desc: `Von Ölwechsel bis zur komplexen Motorinstandsetzung – Ihr Fahrzeug in besten Händen.`,
    buttonLabel: "Mehr erfahren",
    buttonUrl: "#features",
  },
  {
    icon: `uil uil-wrench`,
    title: `Professionelle Autoreparaturen`,
    desc: `Hochwertige Reparaturen aller Automarken in Lünen.`,
    buttonLabel: "Mehr erfahren",
    buttonUrl: "#features",
  },
  {
    icon: `uil uil-truck`,
    title: `24h-Abschleppdienst`,
    desc: `Rund um die Uhr schnelle Hilfe bei Unfällen und Autopannen.`,
    buttonLabel: "Mehr erfahren",
    buttonUrl: "#features",
  },
  {
    icon: `uil uil-cog`,
    title: `Reifenservice Lünen`,
    desc: `Reifenwechsel, Montage und Lagerung mit Qualitätsgarantie.`,
    buttonLabel: "Mehr erfahren",
    buttonUrl: "#features",
  },
  {
    icon: `uil uil-shield-check`,
    title: `TÜV & Fahrzeuginspektionen`,
    desc: `Sicherheitschecks und Vorbereitung zur Hauptuntersuchung (TÜV).`,
    buttonLabel: "Mehr erfahren",
    buttonUrl: "#features",
  },
  {
    icon: `uil uil-euro-circle`,
    title: `Transparente Preise`,
    desc: `Faire und verständliche Preisgestaltung ohne Überraschungen.`,
    buttonLabel: "Mehr erfahren",
    buttonUrl: "#pricing",
  }
];




 
export const workData = [
  {
    image: work1,
    title: "Fahrzeugdiagnose",
    description: "Wir führen eine detaillierte Diagnose durch, um Fehler präzise zu ermitteln und eine optimale Reparatur sicherzustellen.",
    alt: "Diagnose Bild"
  },
  {
    image: work2,
    title: "Professionelle Reparatur",
    description: "Unsere erfahrenen Mechaniker führen die Reparaturen zuverlässig und fachgerecht mit modernster Technik aus.",
    alt: "Reparatur Bild"
  },
  {
    image: work3,
    title: "Abschlusskontrolle & Übergabe",
    description: "Vor der Übergabe durchläuft Ihr Fahrzeug strenge Qualitäts- und Sicherheitsprüfungen, um höchste Standards zu garantieren.",
    alt: "Übergabe Bild"
  }
];






export const portfolioData = [
  { image: portfolio1, title: "Motor-Reparatur", subTitle: "Instandsetzung" },
  { image: portfolio2, title: "Ölwechsel-Service", subTitle: "Fahrzeugwartung" },
  { image: portfolio3, title: "Reifenwechsel & Einlagerung", subTitle: "Reifenservice" },
  { image: portfolio4, title: "Bremsenservice", subTitle: "Sicherheitsprüfung" },
  { image: portfolio5, title: "Elektronische Diagnose", subTitle: "Fehlersuche" },
  { image: portfolio6, title: "Fahrwerk-Reparatur", subTitle: "Komfort & Sicherheit" },
  { image: portfolio7, title: "Klimaanlagen-Service", subTitle: "Wartung" },
  { image: portfolio8, title: "Unfall-Instandsetzung", subTitle: "Karosseriearbeiten" }
];



 
export const ctaData = {
  title: "Entdecken Sie geprüfte Gebrauchtwagen von Deniz in Lünen",
  description: "Besuchen Sie unser Autohaus und finden Sie Ihr nächstes zuverlässiges Fahrzeug – fair, geprüft und sofort verfügbar.",
  buttonLabel: "Jetzt Fahrzeuge ansehen",
  buttonUrl: "https://deniz-kfz.de/gebrauchtwagen" // ajusta a la URL real del concesionario
};





export const clientData = [
  {
    image: client1,
    name: "Thomas Israel",
    post: "Lünen, Kunde seit 2020",
    desc: "\"Schneller und freundlicher Service – mein Fahrzeug läuft dank DENIZ KFZ wieder einwandfrei!\""
  },
  {
    image: client2,
    name: "Carl Oliver",
    post: "Dortmund, Stammkunde",
    desc: "\"Ich bin begeistert von der professionellen Beratung und transparenten Preisgestaltung.\""
  },
  {
    image: client3,
    name: "Barbara McIntosh",
    post: "Lünen, seit 2018",
    desc: "\"Hochwertige Reparaturen, freundliches Personal und hervorragender Kundenservice.\""
  },
  {
    image: client4,
    name: "Jill Webb",
    post: "Selm, Kundin",
    desc: "\"Sehr schnelle Hilfe bei einer Autopanne, unkomplizierte Abwicklung – absolut empfehlenswert!\""
  }
];


 


export const pricingData = [
  {
    title: 'Basis-Check',
    amount: 59,
    desc: 'Grundlegender Wartungsservice für Ihr Fahrzeug.',
    buttonLabel: "Jetzt anfragen",
    buttonUrl: "#contact",
    feature: [
      'Ölwechsel',
      'Flüssigkeiten-Check',
      'Reifendruckprüfung',
      'Grundinspektion'
    ]
  },
  {
    title: 'Komfort-Service',
    amount: 119,
    desc: 'Umfassender Wartungs- und Diagnose-Service.',
    buttonLabel: "Termin vereinbaren",
    buttonUrl: "#contact",
    feature: [
      'Alle Leistungen vom Basis-Check',
      'Elektronische Fehlerdiagnose',
      'Bremsanlagen-Check',
      '50-Punkte Sicherheitsprüfung'
    ]
  },
  {
    title: 'Premium-Service',
    amount: 249,
    desc: 'Komplettservice für höchste Ansprüche.',
    buttonLabel: "Jetzt kontaktieren",
    buttonUrl: "#contact",
    feature: [
      'Alle Leistungen vom Komfort-Service',
      'Umfassender Motorcheck',
      'Klimaservice',
      'Abhol- und Bringservice'
    ]
  }
];

export const pricingNotice = "Alle Preise sind unverbindlich und individuell.";

 


export const teamData = [
  {
    image: team1,
    social: [
      'uil uil-facebook-f',
      'uil uil-instagram',
      'uil uil-twitter',
    ],
    name: 'Varol Dedeagili',
    position: 'Geschäftsführer & Kfz-Experte'
  },
  {
    image: team2,
    social: [
      'uil uil-facebook-f',
      'uil uil-instagram',
      'uil uil-twitter',
    ],
    name: 'Ali Yilmaz',
    position: 'Werkstattleiter'
  },
  {
    image: team3,
    social: [
      'uil uil-facebook-f',
      'uil uil-instagram',
      'uil uil-twitter',
    ],
    name: 'Sarah Meyer',
    position: 'Kundendienst & Service'
  },
  {
    image: team4,
    social: [
      'uil uil-facebook-f',
      'uil uil-instagram',
      'uil uil-twitter',
    ],
    name: 'Michael Schmidt',
    position: 'Kfz-Mechatroniker'
  }
];




// counterData.js
export const counterData = [
  {
    target: 120,
    symbol: "+",
    title: "Projekte"
  },
  {
    target: 450,
    symbol: "+",
    title: "Zufriedene Kunden"
  },
  {
    target: 15,
    symbol: "+",
    title: "Jahre Erfahrung"
  },
  {
    target: 4,
    symbol: "",
    title: "Experten im Team"
  }
];


 


export const partnerData = [
    partner1,partner2,partner3,partner4,partner5,partner6
]


export const blogData = [
  {
    image: blog1,
    title: 'Wintercheck für Ihr Auto – Experten-Tipps',
    desc: 'So machen Sie Ihr Fahrzeug winterfest und sicher.',
    buttonLabel: "Mehr erfahren",
    buttonUrl: "#blog"
  },
  {
    image: blog2,
    title: 'Reifenwechsel in Lünen – Wann und warum?',
    desc: 'Optimale Zeiten für Sommer- und Winterreifenwechsel.',
    buttonLabel: "Mehr erfahren",
    buttonUrl: "#blog"
  },
  {
    image: blog3,
    title: 'Autocheck: Was gehört dazu?',
    desc: 'Wichtige Prüfpunkte zur regelmäßigen Fahrzeugkontrolle.',
    buttonLabel: "Mehr erfahren",
    buttonUrl: "#blog"
  }
];





  export const contactData = {
  form: {
    fields: [
      { name: 'name', type: 'text', placeholder: 'Ihr Name' },
      { name: 'email', type: 'email', placeholder: 'Ihre E-Mail' },
      { name: 'subject', type: 'text', placeholder: 'Betreff' },
      { name: 'Ihre nachricht..', type: 'textarea' }
    ],
    submitButton: { text: 'Nachricht senden' }
  },
  contactInfo: {
    phone: { title: 'Telefon', value: '+49 2306 308291', href: 'tel:+492306308291' },
    email: { title: 'E-Mail', value: 'info@deniz-kfz.de', href: 'mailto:info@deniz-kfz.de' },
    location: { title: 'Adresse', address: 'Bahnstraße 16, 44532 Lünen, Deutschland' }
  }
};


  // footerData.js
export const footerData = {
  year: new Date().getFullYear(),
  logo: {
      image: logo,
      alt: 'Logo'
  },
  copyrightText: "Design with ",
  designerLink: {
      url: "https://limbermartinez.com/",
      text: "Mtz"
  },
  links: [
      {
          title: "Impressum",
          url: "/impressum"
      },
      {
          title: "Datenschutz",
          url: "/datenschutz"
      },
      {
          title: "AGB",
          url: "/agb"
      }
  ],
  socialLinks: [
      {
          iconClass: "uil uil-linkedin",
          url: "http://linkedin.com/company/shreethemes",
          title: "LinkedIn"
      },
      {
          iconClass: "uil uil-envelope",
          url: "mailto:support@shreethemes.in",
          title: "Email"
      }
  ]
};



