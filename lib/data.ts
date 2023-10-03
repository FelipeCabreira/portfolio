import adplabslogoImg from '@/public/adplabslogo.jpeg';
import dbserverImg from '@/public/dbserver.jpeg';
import delllogoImg from '@/public/delllogo.png';
import twlogoImg from '@/public/twlogo.jpg';
import React from 'react';
import { CgWebsite, CgWorkAlt } from 'react-icons/cg';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'DBServer',
    location: 'Porto Alegre, RS - Brazil',
    description:
      'Main activities: Worked as a front-end developer, leading a new team to migrate the legacy project from DELPH to a web strategy using Angular 2.X and .NET, Jasmine, TDD',
    icon: React.createElement(CgWebsite),
    date: 'May 2018 - Dec 2019',
  },
  {
    title: 'Dell Technologies',
    location: 'Eldorado do Sul, RS - Brazil',
    description:
      'Main activities: Design and architect of a newly core team, using micro-frontend approach with Single-SPA framework/Angular 2.X/Java(Springboot), Jasmine, TDD, SOLID Principles',
    icon: React.createElement(CgWorkAlt),
    date: 'Dec 2019 - Dec 2021',
  },
  {
    title: 'Thoughtworks',
    location: 'Remote',
    description:
      'Main activities: Worked as a fullstack developer consultant to ecommerce telecommunication canadian client, using NodeJS/React with Ramda, Jest, TDD',
    icon: React.createElement(CgWebsite),
    date: 'Jan 2022 - Mar 2023',
  },
  {
    title: 'ADP Labs',
    location: 'Porto Alegre, RS - Brazil',
    description:
      'Main activities: Working as a fullstack developer create a new portal to share common knowledge company across all teams, using React with Typescript, Java(Springboot), AWS Cloud Lambdas, TDD, Jest, Solid Principles',
    icon: React.createElement(CgWorkAlt),
    date: 'April 2022 - current ',
  },
] as const;

export const projectsData = [
  {
    title: 'DBServer',
    description:
      'Created a migration project of the company ERP from legacy (DELPHI) UI to a new tech stack with Angular 2.X/.NET and Azure Pipelines',
    tags: [
      'Angular 2.X',
      '.NET',
      'SQL',
      'SCSS',
      'Typescript',
      'TDD',
      'Jasmine',
      'Azure Pipelines',
      'Cypress',
      'NRWL (Nx workspace)',
    ],
    imageUrl: dbserverImg,
  },
  {
    title: 'DELL Technologies',
    description: 'Designed and architectured a core application based on micro front-end strategy',
    tags: [
      'Angular 2.X',
      'Java',
      'Java Springboot',
      'MFE',
      'Redux',
      'Typescript',
      'Gitlab Pipelines',
      'Cypress',
      'NodeJS',
      'Jasmine',
      'Single-SPA',
    ],
    imageUrl: delllogoImg,
  },
  {
    title: 'Thoughtworks',
    description: 'Served as front-end developer consultant to a canadian ecommerce',
    tags: [
      'React',
      'Ramda',
      'NodeJS',
      'Tailwind',
      'Jest',
      'TDD',
      'MFE',
      'Javascript',
      'Redux',
      'Github actions',
    ],
    imageUrl: twlogoImg,
  },
  {
    title: 'ADP Labs',
    description:
      'Currently designing a core internal application to help build and growth the HR processes',
    tags: ['React', 'Typescript', 'AWS', 'Docker', 'Java', 'Tailwind', 'Jest', 'TDD'],
    imageUrl: adplabslogoImg,
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'SCSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Angular',
  'Next.js',
  'Node.js',
  'Jest',
  'Jasmine',
  'TDD',
  'Git',
  'Docker',
  'Github actions',
  'Tailwind',
  'Java',
  'Java Springboot',
  'MongoDB',
  'Redux',
  'Express',
  'SQL',
  'Framer Motion',
] as const;
