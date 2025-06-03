/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "./hoc";

const ServiceCard = ({ index, title, icon }) => {
	return (
		<Tilt className="xs:w-[250px] w-full cursor-pointer">
			<motion.div
				variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
				className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
			>
				<div
					options={{
						max: 45,
						scale: 1,
						speed: 450,
					}}
					className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
				>
					<img src={icon} alt={title} className="w-16 h-16 object-contain" />
					<h3 className="text-white text-[-20px] font-bold text-center">{title}</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};

const About = () => {
	// const handleDownloadCv = () => {
	//   // const pdfUrl = 'src/assets/andy-cv-1.pdf';
	//   const pdfUrl = 'public/resumei/andy-cv-1.pdf';
	//   const link = document.createElement('a');
	//   console.log(link);
	//   link.href = pdfUrl;
	//   link.download = 'Andy-Vo-CV.pdf';
	//   document.body.appendChild(link);
	//   link.click();
	//   document.body.removeChild(link);
	// };
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 mb-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
			>
				Versatile and self-motivated Full Stack Web Developer with a strong foundation in
				both front-end and back-end technologies with 3 years experience. As a self-taught
				learner, I have honed my skills through hands-on projects and a passion for staying
				at the forefront of web development trends. Proficient in latest technologies, and
				experienced in building dynamic, responsive web applications. My journey as a
				self-taught developer reflects a commitment to continuous improvement and a
				demonstrated ability to adapt to evolving technologies.
			</motion.p>

			<motion.div variants={fadeIn("", "", 0.1, 1)}>
				<ul className="overview__basic-contact">
					<li className="contact__item">
						<b>From:</b> Ho Chi Minh city, VietNam
					</li>
					{/* <li className="contact__item">
            <b>Lives In:</b> Munich city, Germany
          </li> */}
					<li className="contact__item">
						<b>Age:</b> 27
					</li>
					<li className="contact__item">
						<b>Gender:</b> Male
					</li>
					<li className="contact__item">
						<b>Languages:</b> VietNamese (native speaker), English (proficient), <br />
						German (intermediate)
					</li>
				</ul>

				<a
					href="./resumei/andy-cv-4.pdf"
					download="Andy-Vo-CV.pdf"
					// onClick={() => handleDownloadCv()}
					// className="bg-[#915eff] mt-5 py-3 px-8 font-bold shadow-md shadow-primary outline-none rounded-xl w-fit"
					className="bg-[#151030] hover:bg-inherit border-[1px] border-rose-50 mt-5 py-3 px-8 font-bold shadow-md shadow-primary outline-none rounded-xl w-fit"
				>
					Download Résumé
				</a>
			</motion.div>

			<div className="mt-20 flex flex-wrap gap-10">
				{services.map((service, idx) => (
					<ServiceCard key={service.title} index={idx} {...service} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, "about");
