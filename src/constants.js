// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import logo from './assets/education_logo/logo.webp';

// Project Section Logo's
import watchlogo from './assets/work_logo/watch.png';
import Market from './assets/work_logo/Market.png';
import Event from './assets/work_logo/event.png';
import Real from './assets/work_logo/real.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Fullstack Developer",
      company: "Webverse Digital",
      date: "April 2024 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Fullstack Engineer",
      company: "Agumentik Group of Companies",
      date: "July 2023 - March 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      img: newtonschoolLogo,
      role: "Frontend Intern",
      company: "Newton School",
      date: "September 2021 - August 2022",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Material UI",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: logo,
      school: "LJ Institute of Computer Application, Ahmedabad",
      date: "Sept 2022 - July 2024",
      grade: "7.81 CGPA",
      desc: "“I am pursuing my Master of Computer Applications (MCA) with a focus on software development, web technologies, and computer science fundamentals. Throughout my course, I am gaining strong technical knowledge, practical project experience, and problem-solving skills that prepare me for a professional career in the IT industry.",
      degree: "Master of Computer Applications - MCA",
    },
    {
      id: 1,
      img: logo,
      school: "LJ Institute of Computer Application, Ahmedabad",
      date: "Sept 2018 - Aug 2021",
      grade: "73.2%",
      desc: "have successfully completed my Bachelor of Computer Applications (BCA), gaining strong knowledge in programming, web development, databases, and computer systems. Throughout my course, I worked on multiple practical projects, improving my technical skills and problem-solving abilities.",
      degree: "Bachelor of Computer Applications - BCA",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Watch Website",
      description:
        "Create a modern and responsive Watch E-Commerce Website using HTML, CSS, and JavaScript. The website should showcase different categories of watches with stylish product cards, smooth animations, and interactive features. The design must be clean, premium, and suitable for luxury watch brands.",
      image: watchlogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/jinaypatel0809/Watch-Website.git",
      webapp: "https://watch-website-liart.vercel.app/",
    },
    {
      id: 1,
      title: "Sher Market Website",
      description:
        "Create a modern and responsive Share Market Website using HTML, CSS, and JavaScript that displays live stock prices, market trends, company details, and interactive charts. The website should include a homepage with stock tickers, a market overview section, watchlist management, and a chart visualization area. Use JavaScript to fetch and update real-time stock data, handle search functionality, and create dynamic UI components. Style the website using clean, professional layouts with CSS to give it a financial dashboard look.",
      image: Market,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/jinaypatel0809/SHER-MARKET-WEBSITE.git",
      webapp: "https://sher-market-website.vercel.app/",
    },
    {
      id: 2,
      title: "Event Management ",
      description:
        "Create a fully responsive Event Management Website using HTML, CSS, and JavaScript that showcases upcoming events, event categories, booking details, and contact information. The website should include a modern homepage banner, event cards with images, interactive navigation, smooth animations, and a dynamic event registration form using JavaScript. Users should be able to view event details, register for events, and explore categories like weddings, corporate events, concerts, and parties. The design must be clean, attractive, and mobile-friendly.",
      image: Event,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/jinaypatel0809/Event-Management-.git",
      webapp: "https://event-management-xi-three.vercel.app/",
    },
    {
      id: 3,
      title: "Real-assist-Website",
      description:
        "Create a modern Real-Assist website that helps users find, view, and manage real-estate properties. The website should include a clean home page, property listing section, property details page, and a contact form. Use HTML for structure, CSS for stylish layouts with responsive design, and JavaScript for interactive features like property search, filtering, image sliders, and form validation. The UI should look professional, easy-to-navigate, and optimized for both mobile and desktop.",
      image: Real,
      tags: ["Html", "CSS", "Java Script"],
      github: "https://github.com/jinaypatel0809/Real-assist-Website.git",
      webapp: "https://real-assist-website.vercel.app/",
    },
  ];  