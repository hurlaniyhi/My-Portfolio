import type { FeaturedProject } from '@/types/portfolio';

/** Large project cards in the "Some Things I've Built" section, in display order. */
export const featuredProjects: FeaturedProject[] = [
  {
    name: 'Crendly',
    description:
      'A platform for social lending. It brings lenders and borrowers together to make lending easier while also handling the processing, payment and disbursement',
    tools: ['React', 'Typescript', 'Styled-Component', 'SCSS', 'Asp.net'],
    url: 'https://crendly.com',
    image: '/assets/crendly.png',
    imagePosition: 'right',
    imageType: 'screenshot',
    animation: 'fade-down-right',
  },
  {
    name: 'Qore Internet Banking',
    description:
      "A web application with three design options and customizable themes used by 300+ micro-finance banks' customers to perform financial transactions.",
    tools: ['React', 'Typescript', 'SCSS', 'Asp.Net', 'Styled-Component'],
    url: 'https://staging.qore.build/fs',
    image: '/assets/ibanking.svg',
    imagePosition: 'left',
    imageType: 'screenshot',
    animation: 'fade-down-left',
  },
  {
    name: 'Qore Ibanking Admin Portal',
    description:
      'A platform used by 300+ micro-finance banks to configure the look and feel, and manage usage reports of their customized internet banking application',
    tools: ['React', 'Typescript', 'Styled-Component', 'SCSS', 'Asp.Net'],
    url: 'https://adminportal.qore.build',
    image: '/assets/ibanking-portal.svg',
    imagePosition: 'right',
    imageType: 'screenshot',
    animation: 'fade-down-right',
  },
  {
    name: 'GTWorld',
    label: 'Featured Project',
    description:
      'GTWorld is one of GTBank mobile apps used by customers to carry out all banking activities including account opening, requests and transactions.',
    tools: ['Ionic-Angular', 'Asp.net', 'SQL'],
    url: 'https://play.google.com/store/search?q=gtword&c=apps',
    image: '/assets/canva2.png',
    imagePosition: 'right',
    imageType: 'phone',
    animation: 'fade-up-right',
  },
];
