import type { Experience } from '@/types/portfolio';

/**
 * Work history shown in the "Where I've worked" section, most recent first.
 * To add a job, add an object to this list — the UI updates automatically.
 */
export const experiences: Experience[] = [
  {
    shortName: 'Flutterwave',
    company: 'Flutterwave',
    url: 'https://flutterwave.com/ng/',
    position: 'Software Engineer',
    period: 'June 2022 - Present',
    highlights: [
      'Build core features for the Flutterwave for Business platform, helping merchants worldwide sell online, process payments, and scale globally.',
      'Shipped French/Portuguese localization, improving accessibility for francophone merchants across supported markets.',
      'Led development of Pay With Bank Transfer and virtual account services across six currencies (NGN, GHS, ZAR, EGP, KES, USD), including bulk and static account provisioning, configurable expiry, merchant-selected partner banks, underpayment handling, and ZAR hold settlements.',
      'Made payments more secure and reliable by building a transaction guard and a concurrency-safe duplicate-reference check, plus audit logging, IP-whitelist monitoring, and backported security fixes across release branches.',
      'Built end-to-end request tracing across the API, SQS pollers, and queue workers using Node.js AsyncLocalStorage, making failures far faster to diagnose in Signoz.',
    ],
  },
  {
    shortName: 'Qore',
    company: 'Qore (formerly Appzone)',
    url: 'https://qore.inc/',
    position: 'Lead Frontend Engineer (Contract)',
    period: 'August 2022 - November 2025',
    highlights: [
      'Led frontend development of a customizable internet banking platform used by 300+ microfinance banks for secure digital transactions at scale.',
      'Built a scalable, maintainable frontend architecture with React and Styled Components, improving performance and modularity.',
      'Designed the Business Intelligence (BI) platform UI for visualizing and interacting with analytical data.',
    ],
  },
  {
    shortName: 'Humexid',
    company: 'Humexid',
    url: 'https://crendly.com/',
    position: 'Senior Frontend Engineer (Part-Time)',
    period: 'February 2022 - October 2025',
    highlights: [
      'Built Crendly, a digital lending platform managing the full loan lifecycle — origination, disbursement, and repayments — for lenders and borrowers.',
      "Designed Crendly's admin platform, giving internal teams tools for fraud monitoring, risk underwriting, compliance, and customer support.",
    ],
  },
  {
    shortName: 'Rana Energy',
    company: 'Rana Energy',
    url: 'https://ranaenergy.io/',
    position: 'Senior Backend Engineer (Contract)',
    period: 'November 2024 - May 2025',
    highlights: [
      'Built the backend for Rana Solar, generating personalized solar portfolios and installation cost estimates from user inputs.',
      'Developed scalable APIs powering pricing calculations, system configuration, and portfolio generation.',
      'Integrated Google Gemini into a conversational AI assistant that guides users through pricing, installation, and system recommendations.',
    ],
  },
  {
    shortName: 'Access Bank Plc',
    company: 'Access Bank',
    url: 'https://www.accessbankplc.com/',
    position: 'Fullstack Engineer (Full-Time)',
    period: 'December 2021 - June 2022',
    highlights: [
      'Led the revamp of the admin management interface for the Primus Plus corporate banking platform using React, TypeScript, and Styled Components.',
      'Improved code quality, security, and maintainability by applying modern frontend practices and modular component design.',
    ],
  },
  {
    shortName: 'GTBank Ltd',
    company: 'Guaranty Trust Bank',
    url: 'https://www.gtbank.com/',
    position: 'Fullstack Developer (Full-Time)',
    period: 'September 2019 - December 2021',
    highlights: [
      'Built and maintained major banking applications — GTWorld, GTMobile, and OrangeToolBox — using React and Node.js.',
      'Developed internal tools, including a server monitoring dashboard and an email service platform, to support operational visibility.',
      'Implemented frontend architecture and contributed to backend development for scalable, maintainable fullstack solutions.',
    ],
  },
  {
    shortName: 'Newcore Tech.',
    company: 'NewCore Technologies',
    url: 'https://newcoretechnologies.com',
    position: 'Frontend Developer',
    period: '2020 - 2021',
    highlights: [
      "Designed, tested, and implemented new and updated software programs; reviewed other developers' code.",
      "Designed and built the organization's website.",
    ],
  },
  {
    shortName: 'VSProuts',
    company: 'Virtuous Sprouts Academy',
    url: 'https://virtuoussprouts-new.netlify.app/',
    position: 'Fullstack Developer',
    period: '2019 - 2020',
    highlights: [
      "Designed, built, and maintained the school's results portal, including registration, result viewing/upload, and email broadcasting features.",
    ],
  },
];
