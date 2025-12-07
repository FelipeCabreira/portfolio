'use client';

import { useTheme } from '@/context/theme-context';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';

export default function Experience() {
  const { ref } = useSectionInView('Experience');
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item: any, index: any) => {
          return (
            <motion.div
              key={item.id || `${item.title}-${item.date}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <VerticalTimelineElement
                contentStyle={{
                  background: theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
                  boxShadow: 'none',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  textAlign: 'left',
                  padding: '1.3rem 2rem',
                  marginLeft: '60px',
                  marginRight: 'auto',
                  maxWidth: '500px',
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === 'light'
                      ? '0.4rem solid #9ca3af'
                      : '0.4rem solid rgba(255, 255, 255, 0.5)',
                }}
                date={item.date}
                icon={null}
                iconStyle={{
                  background: theme === 'light' ? 'white' : 'rgba(255, 255, 255, 0.15)',
                  fontSize: '1.5rem',
                }}
                dateClassName="!text-gray-500 dark:!text-gray-400 !text-sm !mt-4">
                <div className="flex items-start gap-3">
                  <div className="text-2xl mt-1">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold capitalize">{item.title}</h3>
                    <p className="font-normal !mt-0">{item.location}</p>
                    <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                      {item.description}
                    </p>
                  </div>
                </div>
              </VerticalTimelineElement>
            </motion.div>
          );
        })}
      </VerticalTimeline>
    </section>
  );
}
