import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';

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
    icon: React.createElement(LuGraduationCap),
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
    icon: React.createElement(FaReact),
    date: 'Jan 2022 - Mar 2023',
  },
  {
    title: 'ADP Labs',
    location: 'Porto Alegre, RS - Brazil',
    description:
      'Main activities: Working as a fullstack developer create a new portal to share common knowledge company across all teams, using React with Typescript, Java(Springboot), AWS Cloud Lambdas, TDD, Jest, Solid Principles',
    icon: React.createElement(FaReact),
    date: 'April 2022 - current ',
  },
] as const;

export const projectsData = [
  {
    title: 'Linx project',
    description:
      'I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    // imageUrl: corpcommentImg,
  },
  {
    title: 'Core data team',
    description:
      'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
    // imageUrl: rmtdevImg,
  },
  {
    title: 'TELUS Company',
    description:
      'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
    // imageUrl: wordanalyticsImg,
  },
  {
    title: 'ESI Connect',
    description:
      'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
    // imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'MongoDB',
  'Redux',
  'GraphQL',
  'Apollo',
  'Express',
  'PostgreSQL',
  'Python',
  'Django',
  'Framer Motion',
] as const;
