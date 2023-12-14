/* eslint-disable react/prop-types */
// import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../style';
// import { experiences } from '../constants';
// import { SectionWrapper } from './hoc';
import { textVariant } from '../utils/motion';
import { SectionWrapper } from './hoc';
import { educations } from '../constants';

const EducationCard = ({ education }) => {
  return (
    <VerticalTimelineElement
      // position="right"
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={education.date}
      iconStyle={{ background: education.iconBg }}
      className="vertical-timeline-element--work"
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={education.icon}
            alt={education.university}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div className="text-white text-[24px]">
        <h3>{education.major}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {education.university}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {education.points.map((point, idx) => (
          <li
            key={`point ${idx}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Educations.</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline layout="2-columns">
          {educations.map((education, idx) => (
            <EducationCard key={idx} education={education} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, 'educations');
