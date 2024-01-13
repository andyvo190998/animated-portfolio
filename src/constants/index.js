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
    jobit,
    tripguide,
    threejs,
    ute,
    una,
    solarBk,
    fullerton,
    kiutra
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
        name: "Three JS",
        icon: threejs,
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
        date: "April 2023 - present",
        points: [
            "Brainstorm ideas for development new version of the user interface work flow.",
            "Design and implement and maintain a browser-based GUI using React and Next.js.",
            "Work on a python backend to interface between the newly developed user interface and our machine control API.",
            "Support container-based deployment.",
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
        deployment_link: ''
    },
    {
        name: "Compound Interest Calculator",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
        image: jobit,
        source_code_link: "https://github.com/andyvo190998/compound-interest-calculator",
        deployment_link: ''
    },
    {
        name: "Pomodoro Timer",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
        image: tripguide,
        source_code_link: "https://github.com/",
        deployment_link: ''
    },
    {
        name: "Fancy Restaurant",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
        image: tripguide,
        source_code_link: "https://github.com/andyvo190998/restaurant",
        deployment_link: 'https://andyvo190998.github.io/restaurant/'
    },
];

export { services, technologies, experiences, testimonials, projects, educations };