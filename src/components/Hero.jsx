/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../style";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 820px)");
		setIsMobile(mediaQuery.matches);
		const handleMediaQueryChange = (event) => {
			setIsMobile(event.matches);
		};

		mediaQuery.addEventListener("change", handleMediaQueryChange);

		return () => {
			mediaQuery.removeEventListener("change", handleMediaQueryChange);
		};
	}, []);
	return (
		<section className={`relative w-full ${isMobile ? "h-[400px]" : "h-screen"} mx-auto`}>
			<div
				className={`${styles.paddingX} absolute inset-0 top-[80px] max-x-7xl flex mx-auto flex-row items-start gap-5`}
			>
				<div className="flex flex-col justify-center items-center mt-5">
					<div className="w-5 h-5 rounded-full bg-[#915eff]" />
					<div className="w-1 sm:h-80 h-40 violet-gradient" />
				</div>
				<div className="z-10">
					<h1 className={`${styles.heroHeadText}`}>
						HI, I'm <span className="text-[#915eff]">Andy</span>
					</h1>
					<p className={`${styles.heroSubText} mt-2 text-white-100`}>
						I develop full stack web applications.
					</p>
				</div>
			</div>
			<ComputersCanvas isMobile={isMobile} />
			<div
				className={`absolute xs:bottom-0 ${
					isMobile ? "bottom-16" : "bottom-32"
				} w-full flex justify-center`}
			>
				<a href="#about">
					<div className="flex justify-center items-start p-2 w-[35px] h-[64px] rounded-3xl border-4 border-secondary">
						<motion.div
							animate={{
								y: [0, 24, 0],
							}}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: "loop",
							}}
							className="w-3 h-3 rounded-full bg-secondary mb-1"
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;
