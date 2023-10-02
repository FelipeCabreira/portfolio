'use client';

import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about">
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm finishing my degree in <span className="font-medium">Information System</span>, but that
        was not where i found myself engaged with computers, since a young age i was trying to
        figure it out problems and understand how the{' '}
        <span className="italic">insides of things works</span> so when i need to choose a career to
        pursue it was obvious that i should go with one that let me code, build and that challenged
        myself. to pursue my passion for programming. I enrolled in a coding bootcamp and learned{' '}
        <span className="font-medium">full-stack web development</span>.{' '}
        <span className="italic">My favorite part of programming</span> is the problem-solving
        aspect. I <span className="underline">love</span> the feeling of finally figuring out a
        solution to a problem. My core stack is{' '}
        <span className="font-medium">React, Next.js, Node.js, Typescript and MongoDB</span>. I am
        also familiar with Java/Springboot and SQL. I am always looking to learn new technologies,
        regarding of the stack. I am currently working for a{' '}
        <span className="font-medium">ADP Labs</span> as a software developer.
      </p>

      <p>
        <span className="font-medium">I am currently learning about</span>.{' '}
        <span className="font-medium">mobile development</span>, with React Native.
        <span className="italic">When I'm not coding</span>, I enjoy playing video games, watching
        movies, animes and reading.
      </p>
    </motion.section>
  );
}
