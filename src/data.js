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
    text: '+49 1575 7057121',
    link: 'tel:+4915757057121'
  },
  service: {
    icon: 'uil uil-clock',
    text: '24/7 Soforthilfe & Abschleppdienst',
    link: '#contact'
  },
  location: {
    icon: 'uil uil-map-marker',
    text: 'Eberstraße 12, 44145 Dortmund',
    link: 'https://maps.app.goo.gl/xWYKDi76jY2Rc7X1A'
  }
};

export const navbarLinks = [
  { href: "#home", title: "Home" },
  { href: "#about", title: "Über Uns" },
  { href: "#features", title: "Leistungen" },
  { href: "#cta-section", title: "Gutachtenbüro" },
  { href: "#testi", title: "Kundenstimmen" },
  { href: "#pricing", title: "Preise" },
  { href: "#blog", title: "Blog" },
  { href: "#contact", title: "Kontakt" }
];

export const socialLinks =[
  { iconClass: 'uil uil-instagram', href: '', title: 'Instagram' },
  { iconClass: 'uil uil-facebook-f', href: '', title: 'Facebook' },
  { iconClass: 'uil uil-envelope', href: 'mailto:m.dmli@web.de', title: 'E-Mail' },
];

export const heroData = {
  title: "KFZ-Service Memmo",
  titleTwo: "Meisterbetrieb & Sachverständigenbüro in Dortmund",
  subtitle: [
    "Kfz-Reparaturen vom Profi",
    "Unabhängige Gutachten",
    "HU/AU & TÜV-Vorbereitung",
    "24h Abschleppdienst"
  ],
  description: "Kompetent. Transparent. Persönlich. Bei Memmo erhalten Sie alles rund ums Auto – von der Inspektion bis zum Unfallgutachten – aus Meisterhand.",
  buttonLabel: "Jetzt Termin sichern",
  buttonUrl: "#contact",
};

export const aboutUs = {
  title: "Über uns",
  subtitle: "Kompetenz aus Meisterhand in Dortmund",
  description: "KFZ-Service Memmo ist Ihr persönlicher Ansprechpartner für alle Belange rund ums Fahrzeug – von fachmännischer Wartung und Reparatur bis zu neutralen Kfz-Gutachten nach einem Unfall. Mit Sitz in Dortmund vereinen wir moderne Technik mit jahrelanger Erfahrung als Kfz-Meisterbetrieb und zertifiziertes Sachverständigenbüro.",
  buttonLabel: "Mehr über uns",
  buttonUrl: "#contact",
};

export const sectionHeaders = {
  feature: {
    title: "Unsere Leistungen",
    subtitle: "Meisterservice & KFZ-Sachverständigenbüro",
    text: "Ob Reparaturen, Inspektion, Elektrik oder Unfallgutachten – wir bieten Ihnen alle Services rund ums Fahrzeug aus einer Hand."
  },
  work: {
    title: "So arbeiten wir",
    subtitle: "Kompetent. Schnell. Fair.",
    text: "Unser eingespieltes Team analysiert präzise, repariert effizient und berät Sie transparent – für Ihre Sicherheit auf der Straße."
  },
  portfolio: {
    title: "Galerie",
    subtitle: "Einblicke in unsere Werkstatt",
    text: "Werfen Sie einen Blick auf unsere Projekte und Werkstatt – modern ausgestattet und kundenorientiert."
  },
  client: {
    title: "Kundenstimmen",
    subtitle: "Das sagen unsere Kunden",
    text: "Ehrliche Meinungen und Erfahrungen – Ihre Zufriedenheit ist unser Antrieb."
  },
  pricing: {
    title: "Preise",
    subtitle: "Transparente Leistungen",
    text: "Faire und nachvollziehbare Preise – individuell angepasst an Ihre Bedürfnisse."
  },
  team: {
    title: "Unser Team",
    subtitle: "Fachleute mit Herz & Know-how",
    text: "Unsere Meister, Techniker und Gutachter stehen Ihnen mit Rat und Tat zur Seite – persönlich und kompetent."
  },
  blogs: {
    title: "News & Tipps",
    subtitle: "Rund ums Fahrzeug",
    text: "Wissenswertes, Empfehlungen und technische Einblicke – direkt aus der Werkstatt."
  },
  contact: {
    title: "Kontaktieren Sie uns",
    subtitle: "Wir sind für Sie da",
    text: "Sie haben Fragen oder möchten einen Termin? Wir freuen uns auf Ihre Nachricht oder Ihren Anruf."
  }
};

export const featureData = [
  {
    slug: 'inspektion-wartung',
    icon: `uil uil-car`,
    title: `Inspektion & Wartung`,
    desc: `Saisonale Fahrzeugchecks, Ölwechsel, Filter- und Flüssigkeitsservice für alle Fahrzeugtypen.`,
    buttonLabel: "Mehr erfahren",
  },
  {
    slug: 'hu-au-service',
    icon: `uil uil-shield-check`,
    title: `HU/AU-Service`,
    desc: `Vorbereitung und Durchführung Ihrer Haupt- und Abgasuntersuchung in Zusammenarbeit mit Prüforganisationen.`,
    buttonLabel: "Mehr erfahren",
  },
  {
    slug: 'bremsen-fahrwerk',
    icon: `uil uil-wrench`,
    title: `Bremsen & Fahrwerk`,
    desc: `Sicher unterwegs mit fachgerechter Reparatur und Wartung von Bremsen, Stoßdämpfern & Achsen.`,
    buttonLabel: "Mehr erfahren",
  },
  {
    slug: 'kfz-elektrik-elektronik',
    icon: `uil uil-setting`,
    title: `KFZ-Elektrik & Elektronik`,
    desc: `Diagnose und Reparatur elektronischer Systeme – von Lichtanlage bis Steuergerät.`,
    buttonLabel: "Mehr erfahren",
  },
  {
    slug: 'autoglas-service',
    icon: `uil uil-wind`,
    title: `Autoglas-Service`,
    desc: `Scheibenreparatur und -austausch bei Steinschlag oder Riss – schnell & zuverlässig.`,
    buttonLabel: "Mehr erfahren",
  },
  {
    slug: 'sachverstaendigenbuero',
    icon: `uil uil-clipboard-notes`,
    title: `Sachverständigenbüro`,
    desc: `Unfallgutachten, Wertgutachten, Kostenvoranschläge und mehr – objektiv & unabhängig.`,
    buttonLabel: "Mehr erfahren",
  }
];


export const workData = [
  {
    image: work1,
    title: "Annahme & Beratung",
    description: "Wir nehmen Ihr Fahrzeug entgegen, analysieren das Problem und besprechen mit Ihnen alle nächsten Schritte – transparent und ehrlich.",
    alt: "Fahrzeugannahme Bild"
  },
  {
    image: work2,
    title: "Fehlerdiagnose & Reparatur",
    description: "Unsere Kfz-Meister prüfen Ihr Fahrzeug mit modernster Diagnosetechnik und führen die Reparaturen fachgerecht durch.",
    alt: "Reparatur Bild"
  },
  {
    image: work3,
    title: "Gutachten & Abschlussprüfung",
    description: "Falls gewünscht, erstellen wir ein offizielles Gutachten. Nach Abschluss führen wir eine Qualitätskontrolle durch – erst dann geben wir das Fahrzeug frei.",
    alt: "Gutachten Übergabe Bild"
  }
];

// src/data.js
export const portfolioData = [
  { slug: "inspektions-service",  image: portfolio1, title: "Inspektions-Service",    subTitle: "Regelmäßige Wartung" },
  { slug: "bremsenreparatur",     image: portfolio2, title: "Bremsenreparatur",       subTitle: "Sicherheitsrelevante Systeme" },
  { slug: "autoglas-service",     image: portfolio3, title: "Steinschlag-Reparatur",  subTitle: "Autoglas-Service" },
  { slug: "elektronik-diagnose",  image: portfolio4, title: "Elektronik-Diagnose",    subTitle: "Moderne Fahrzeugtechnik" },
  { slug: "hu-au-vorbereitung",   image: portfolio5, title: "HU/AU-Vorbereitung",     subTitle: "TÜV & Abgasuntersuchung" },
  { slug: "unfallgutachten",      image: portfolio6, title: "Unfallgutachten",        subTitle: "Sachverständigenbüro" },
  { slug: "reifenwechsel",        image: portfolio7, title: "Reifenwechsel",          subTitle: "Rad & Reifen Service" },
  { slug: "klimaanlagenwartung",  image: portfolio8, title: "Klimaanlagenwartung",    subTitle: "Komfort & Leistung" },
];


export const ctaData = {
  title: "Unabhängiges Kfz-Gutachten direkt vom Experten",
  description: "Sie hatten einen Unfall oder benötigen ein professionelles Gutachten? KFZ-Service Memmo erstellt präzise, unabhängige Kfz-Gutachten für Privatpersonen, Werkstätten und Versicherungen – schnell, transparent und rechtssicher.",
  buttonLabel: "Jetzt Gutachten anfordern",
  buttonUrl: "#contact"
};


export const clientData = [
  {
    image: client1,
    name: "Andreas Becker",
    post: "Dortmund, Privatkunde",
    desc: "\"Sehr kompetentes Team – mein Fahrzeug war schnell und professionell repariert. Absolute Empfehlung für jeden in der Umgebung!\""
  },
  {
    image: client2,
    name: "Murat Yildiz",
    post: "Dortmund, Unfallgutachten",
    desc: "\"Ich war nach einem Unfall verzweifelt. Herr Memmo hat mir mit einem klaren und professionellen Gutachten sehr geholfen.\""
  },
  {
    image: client3,
    name: "Sabine Krüger",
    post: "Kundin aus Huckarde",
    desc: "\"Tolles Preis-Leistungs-Verhältnis. Die HU-Vorbereitung war gründlich und ohne böse Überraschungen.\""
  },
  {
    image: client4,
    name: "Dominik R.",
    post: "Dortmund, Stammkunde",
    desc: "\"Seit Jahren mein Ansprechpartner bei Reparaturen – immer freundlich, fair und schnell erreichbar.\""
  }
];

export const pricingData = [
  {
    title: 'Basis-Service',
    amount: 69,
    desc: 'Ideal für regelmäßige Wartung und Kontrolle.',
    feature: [
      'Öl- und Filterwechsel',
      'Reifen- & Luftdruckkontrolle',
      'Sichtprüfung aller Flüssigkeiten',
      'Service-Heft Eintrag'
    ]
  },
  {
    title: 'Technik-Check',
    amount: 149,
    desc: 'Umfassende Diagnose und Inspektion für Ihr Fahrzeug.',
    feature: [
      'Alle Leistungen aus Basis-Service',
      'Elektronische Fehlerdiagnose',
      'Bremsen- & Fahrwerksprüfung',
      'Batteriecheck'
    ]
  },
  {
    title: 'Premium-Inspektion',
    amount: 249,
    desc: 'Komplettpaket für langfristige Fahrzeugsicherheit.',
    feature: [
      'Alle Leistungen aus Technik-Check',
      'Klimaanlagen-Service',
      'Motor- & Getriebekontrolle',
      'Karosserie-Check'
    ]
  }
];


export const pricingNotice = "Preise variieren je nach Fahrzeugtyp und Arbeitsaufwand – sprechen Sie uns an für ein individuelles Angebot.";

export const teamData = [
  {
    image: team1,
    social: ['uil uil-instagram'],
    name: 'Mehmet Memmo',
    position: 'Kfz-Meister & Geschäftsführer'
  },
  {
    image: team2,
    social: ['uil uil-envelope'],
    name: 'Sachverständiger DMLI',
    position: 'Zertifizierter Kfz-Gutachter'
  },
  {
    image: team3,
    social: ['uil uil-phone-alt'],
    name: 'Service-Team',
    position: 'Kundenberatung & Terminmanagement'
  },
  {
    image: team4,
    social: ['uil uil-cog'],
    name: 'Werkstatt-Team',
    position: 'Kfz-Mechatroniker & Elektriker'
  }
];

export const counterData = [
  {
    target: 250,
    symbol: "+",
    title: "Reparaturen pro Jahr"
  },
  {
    target: 400,
    symbol: "+",
    title: "Zufriedene Kunden"
  },
  {
    target: 10,
    symbol: "+",
    title: "Jahre Erfahrung"
  },
  {
    target: 6,
    symbol: "",
    title: "Mitarbeiter im Team"
  }
];

export const partnerData = [
    partner1,partner2,partner3,partner4,partner5,partner6
]

export const blogData = [
  {
    slug: 'bremsen-wechseln-wann-und-warum',
    image: blog1,
    title: 'Wann sollte man die Bremsen wechseln?',
    desc: 'Anzeichen für abgenutzte Bremsen erkennen und rechtzeitig reagieren.',
    desc2: 'In diesem Beitrag erfährst du, welche Symptome du niemals ignorieren solltest, wie du selbst einen Schnell-Check durchführen kannst und warum regelmäßige Bremsenwartung Leben retten kann.',
    content: `
      <h2>1. Typische Warnsignale</h2>
      <p>Wenn du beim Bremsen ein quietschendes oder mahlendes Geräusch hörst, könnte das auf stark abgenutzte Beläge hindeuten. Ebenso wenn das Bremspedal unerwartet weich oder schwammig reagiert.</p>
      <h2>2. DIY-Sichtprüfung</h2>
      <p>Parke das Auto auf gerader Fläche, zieh die Handbremse an und check die Bremsbeläge durch die Felgen: Eine Reststärke unter 3 mm ist kritisch.</p>
      <h2>3. Bremsflüssigkeit</h2>
      <p>Alter Bremsflüssigkeit absorbiert Wasser und verliert an Siedepunkt. Ein Wechsel alle 1–2 Jahre ist empfehlenswert.</p>
      <h2>4. Fachmann aufsuchen</h2>
      <p>Bei Unsicherheit immer eine Profiwerkstatt aufsuchen – speziell wenn ABS-Leuchte angeht oder Vibrationen auftreten.</p>
      <blockquote>„Sicherheit beginnt mit der Bremsanlage – investiere lieber früher als später.“</blockquote>
      <h2>Fazit</h2>
      <p>Regelmäßige Kontrollen sind günstig im Vergleich zu teuren Reparaturen und Unfällen. Höre immer auf Warnsignale und handle zeitnah.</p>
    `,
    buttonLabel: 'Mehr erfahren',
    date: '1. April 2025',
    author: 'Cristina Romsey',
  },
  {
    slug: 'hu-au-service-tipps-zur-vorbereitung',
    image: blog2,
    title: 'HU/AU: Das müssen Sie wissen',
    desc: 'Wie Sie sich auf die Hauptuntersuchung optimal vorbereiten.',
    desc2: 'Die Haupt- und Abgasuntersuchung sind Pflicht – wir zeigen dir, was du vorher checken musst, um böse Überraschungen und Nachprüfungen zu vermeiden.',
    content: `
      <h2>Warum HU/AU?</h2>
      <p>Bei der HU überprüft der TÜV-Prüfer Bremsen, Beleuchtung, Achsen und Fahrwerk, während die AU den Schadstoffausstoß misst.</p>
      <h2>Checkliste für dich:</h2>
      <ul>
        <li>Reifenprofil und -druck prüfen</li>
        <li>Lichter, Blinker und Rückleuchten testen</li>
        <li>Scheibenwischer und Flüssigkeitsstände</li>
        <li>Bremsscheiben und -beläge begutachten</li>
      </ul>
      <h2>Mängel beheben</h2>
      <p>Kleinere Roststellen oder defekte Leuchten kannst du selbst tauschen. Für Bremsen- und Abgassysteme empfiehlt sich die Werkstatt.</p>
      <h2>Termin-Tipp</h2>
      <p>Plane rechtzeitig: Im Frühjahr und Herbst sind Prüftermine oft knapp.</p>
    `,
    buttonLabel: 'Mehr erfahren',
    date: '10. März 2025',
    author: 'Max Mustermann',
  },
  {
    slug: 'unfall-erstmaßnahmen-und-fachgutachter',
    image: blog3,
    title: 'Was tun nach einem Unfall?',
    desc: 'Erste Schritte und wie ein Kfz-Gutachter helfen kann.',
    desc2: 'Ein Unfall ist Stress pur – wir erklären dir präzise, welche To-Dos direkt vor Ort anstehen und warum ein Gutachten deine Rechte sichert.',
    content: `
      <h2>1. Unfallstelle absichern</h2>
      <p>Warnblinker an, Warndreieck aufstellen, Fahrzeuge aus dem Gefahrenbereich fahren (wenn möglich).</p>
      <h2>2. Erste Hilfe leisten</h2>
      <p>Setze sofort einen Notruf ab, falls Verletzte zu versorgen sind.</p>
      <h2>3. Daten aufnehmen</h2>
      <ul>
        <li>Unfallgegner und Zeugen: Namen, Adressen, Versicherungsdaten</li>
        <li>Fotos von Fahrzeugen, Kennzeichen und Umgebung</li>
        <li>Skizze der Unfallstelle</li>
      </ul>
      <h2>4. Gutachter beauftragen</h2>
      <p>Ein unabhängiger Kfz-Gutachter erstellt ein detailliertes Schadensgutachten für Versicherung und Rechtssicherheit.</p>
      <h2>5. Versicherung informieren</h2>
      <p>Reiche Fotos und Gutachten zügig bei deiner Versicherung ein, um Leistungsansprüche zu sichern.</p>
    `,
    buttonLabel: 'Mehr erfahren',
    date: '20. Februar 2025',
    author: 'Eva Beispiel',
  },
];

export const contactData = {
  form: {
    fields: [], // no necesario
    submitButton: { text: 'Wie Sie uns finden' } // Nuevo botón
  },
  contactInfo: {
    phone: {
      title: 'Telefon',
      value: '+49 1575 7057121',
      href: 'tel:+4915757057121'
    },
    email: {
      title: 'E-Mail',
      value: 'm.dmli@web.de',
      href: 'mailto:m.dmli@web.de'
    },
    location: {
      title: 'Adresse',
      address: 'Eberstraße 12, 44145 Dortmund, Deutschland'
    }
  }
};


export const footerData = {
  year: new Date().getFullYear(),
  logo: {
      image: logo,
      alt: 'Logo'
  },
  copyrightText: "Developed by",
  designerLink: {
      url: "https://www.limbermartinez.com/",
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
          url: "https://www.linkedin.com/in/limber-martinez-developer/",
          title: "LinkedIn"
      }
  ]
};



