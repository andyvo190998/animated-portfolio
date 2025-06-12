import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	carrent,
	compoundInterestCalculator,
	python,
	ute,
	una,
	solarBk,
	fullerton,
	kiutra,
	pomodoroTimer,
	fancyRestaurant,
	lamaBlog,
	pythonProjects,
	jsmd
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "educations",
		title: "Educations",
	},
	{
		id: "projects",
		title: "Projects",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Web Developer",
		icon: web,
	},
	{
		title: "ReactJS",
		icon: mobile,
	},
	{
		title: "Backend Developer",
		icon: backend,
	},
	{
		title: "Figma Designer",
		icon: creator,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "Python",
		icon: python,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
	{
		name: "docker",
		icon: docker,
	},
];

const experiences = [
	{
		title: "R&D Engineer",
		company_name: "SolarBK",
		icon: solarBk,
		iconBg: "#E6DEDD",
		date: "December 2019 - December 2020",
		points: [
			"Research and develop new trend of solar cell.",
			"Optimize efficiency of current solar cell.",
			"Receive feedbacks from clients and find the solution to fix these issues.",
			"Deal with supplier to get the a good material for making a solar cell.",
		],
	},
	{
		title: "Full Stack Developer",
		company_name: "FULLERTON HEALTH",
		icon: fullerton,
		iconBg: "#E6DEDD",
		date: "July 2021 - October 2021",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
		],
	},
	{
		title: "Software Developer",
		company_name: "kiutra",
		icon: kiutra,
		iconBg: "#E6DEDD",
		date: "April 2022 - November 2024",
		points: [
			"Developing and maintaining front-end applications using ReactJS, NextJS for seamless user experiences.",
			"Building REST API with Flask, Quart, and WebSockets to enable efficient communication and data exchange.",
			"Creating and managing middleware in Python to facilitate inter-process communication.",
			"Supporting and setting up software applications for the hardware team to ensure smooth integration and operation."
		],
	},
	{
		title: "Full Stack Software Developer",
		company_name: "Jochen Schweizer mydays Group ",
		icon: jsmd,
		iconBg: "#E6DEDD",
		date: "December 2024 - present",
		points: [
			"As a passionate Full-Stack Developer, I specialize in building scalable and maintainable web applications using modern technologies. On the frontend, I create intuitive and performant UIs with React and TypeScript, while on the backend, I architect robust solutions using NestJS, PHP, and REST APIs.",
			"I have a deep understanding of Hexagonal Architecture and Domain-Driven Design (DDD), ensuring that applications are modular, testable, and easy to maintain. My approach to software development prioritizes clean architecture, scalability, and best practices.",
			"With experience in microservices and containerized deployments using Docker and Kubernetes, I focus on delivering high-availability and efficient cloud-native solutions. Additionally, I emphasize end-to-end (E2E) testing with in-house developed tools and unit testing, ensuring software reliability and high code quality.",
			"Driven by innovation and continuous learning, I thrive on solving complex problems and delivering impactful software solutions.",
		],
	},
];

const educations = [
	{
		degree: "Bachelor of Science",
		major: 'Materials Science (BSc)',
		university: "HCMC University of Technology and Education",
		icon: ute,
		iconBg: "#E6DEDD",
		date: "June 2016 - June 2020",
		points: [
			"Materials Analysis: Proficient in using various techniques for characterizing materials, including microscopy, spectroscopy, and mechanical testing.",
			"Lab Techniques: Skilled in laboratory procedures, sample preparation, and experimental design.",
			"Computer Skills: Familiarity with software for materials modeling and simulation. (Python, Matlab,...)",
			"Materials Processing: Experienced in diverse processing methods such as casting, heat treatment, and additive manufacturing.",
		],
	},
	{
		degree: "Master of Science",
		major: 'Materials Science (MSc)',
		university: "University of Augsburg",
		icon: una,
		iconBg: "#E6DEDD",
		date: "April 2021 - November 2023",
		points: [
			"Materials Modeling: Proficient in using computational tools for materials modeling and simulation to predict and analyze material behavior.",
			"Advanced Characterization: Extensive experience in utilizing cutting-edge techniques such as electron microscopy, X-ray diffraction, and spectroscopy for in-depth materials analysis.",
			"Research Methodology: Well-versed in designing and conducting experiments, collecting and interpreting data, and contributing to the advancement of materials science knowledge.",
			"Project Management: Demonstrated leadership and project management skills through the successful execution of complex research projects.",
		],
	},
];

const testimonials = [
	{
		testimonial:
			"I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
		name: "Sara Lee",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: "Chris Brown",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "Lisa Wang",
		designation: "CTO",
		company: "456 Enterprises",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
];

const projects = [
	{
		name: "Car Rent",
		description:
			"Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
		tags: [
			{
				name: "NextJS",
				color: "blue-text-gradient",
			},
			{
				name: "Typescript",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: carrent,
		source_code_link: "https://github.com/andyvo190998/car-rental",
		deployment_link: 'https://car-rental-eight-mu.vercel.app/?manufacturer=volkswagen'
	},
	{
		name: "Lama Blog",
		description:
			"Full stack social media website to allow users to create account, post, edit, update posts",
		tags: [
			{
				name: "ReactJS",
				color: "blue-text-gradient",
			},
			{
				name: "NodeJS",
				color: "green-text-gradient",
			},
			{
				name: "Mysql",
				color: "pink-text-gradient",
			},
		],
		image: lamaBlog,
		source_code_link: "https://github.com/andyvo190998/blog-app",
		deployment_link: 'https://andyvo190998.github.io/blog-app/'
	},
	{
		name: "Compound Interest Calculator",
		description:
			"Web application that helps users to calculate compound interest rate (the 8th World Wonder according to Einstein.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "Typescript",
				color: "green-text-gradient",
			},
			{
				name: "Vite",
				color: "pink-text-gradient",
			},
		],
		image: compoundInterestCalculator,
		source_code_link: "https://github.com/andyvo190998/compound-interest-calculator",
		deployment_link: 'https://andyvo190998.github.io/compound-interest-calculator/'
	},
	{
		name: "Pomodoro Timer",
		description:
			"Pomodoro is an incredible technique for better concentration and productive. When I start working or studying, I always set a pomodoro timer to take a short rest every 25 minutes. And when I learn web development, I think why don't I develop an app to use for myself? That the reason I built this app. This is a fullstack NextJS app with jwt authentication.",
		tags: [
			{
				name: "NextJS",
				color: "blue-text-gradient",
			},
			{
				name: "JWT authentication",
				color: "green-text-gradient",
			},
			{
				name: "Material UI",
				color: "pink-text-gradient",
			},
		],
		image: pomodoroTimer,
		source_code_link: "https://github.com/andyvo190998/pomodoro-timmer",
		deployment_link: 'https://pomodoro-timmer.vercel.app/'
	},
	{
		name: "Fancy Restaurant",
		description: "A responsive and fancy front-end web site for a restaurant. This includes the menu, images, videos of the restaurant and also the contact.",
		tags: [
			{
				name: "React",
				color: "blue-text-gradient",
			},
			{
				name: "Responsive",
				color: "green-text-gradient",
			},
			{
				name: "Modern Design",
				color: "pink-text-gradient",
			},
		],
		image: fancyRestaurant,
		source_code_link: "https://github.com/andyvo190998/restaurant",
		deployment_link: 'https://andyvo190998.github.io/restaurant/'
	},
	{
		name: "Python Apps",
		description: "Check out some apps I built with python for fun and practice.",
		tags: [
			{
				name: "Python",
				color: "blue-text-gradient",
			},
			{
				name: "Game",
				color: "green-text-gradient",
			}
		],
		image: pythonProjects,
		source_code_link: "https://github.com/andyvo190998?tab=repositories&q=&type=&language=python&sort=stargazers",
		deployment_link: 'https://github.com/andyvo190998?tab=repositories&q=&type=&language=python&sort=stargazers'
	},
];

export { services, technologies, experiences, testimonials, projects, educations };