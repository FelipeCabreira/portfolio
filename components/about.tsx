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
        I'm currently finishing my degree in <span className="font-medium">Information System</span>
        , but that was not where i found myself engaged with computers, since a young age i had
        curiosity on how computers works,{' '}
        <span className="italic">and how it communicated with the whole web.</span> When i needed to
        choose a career to pursue it was obvious that i should go with one involved in computers and
        technology, and that challenged myself, so I enrolled in a university and learned{' '}
        <span className="font-medium">web development</span>. <br />
        <span className="italic">My favorite part of programming</span> is the problem-solving
        aspect. I <span className="underline">love</span> the feeling of finally figuring out a
        solution to a problem. My core stack is{' '}
        <span className="font-medium">React, Angular, Node.js, Typescript, MongoDB</span>. I am also
        familiar with Next.js/Java/Springboot and SQL. I am always looking to learn new
        technologies, regarding of the stack. I am currently working for{' '}
        <span className="font-medium">ADP Labs</span> as a fulltime fullstack software developer.
      </p>

      <p>
        <span className="font-medium">I am currently learning about</span>.{' '}
        <span className="font-medium">mobile development</span>, with React Native for personal
        knowledge.
        <span className="italic">When I'm not coding</span>, I enjoy playing video games, watching
        movies, animes and reading.
      </p>
    </motion.section>
  );
}
