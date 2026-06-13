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
import WeatherAPI from './assets/work_logo/Weather App (API Based).png'
import Calculator from './assets/work_logo/Calculator.png'
import KFC from './assets/work_logo/KFC.png'
import NOTES from './assets/work_logo/Notes.png'
import Quiz from './assets/work_logo/Quiz.png'
import ToDoList from './assets/work_logo/To-Do List.png'
import Apple from './assets/work_logo/Apple.png'
import Job from './assets/work_logo/JobPortal.png'
import Swiggy from './assets/work_logo/Swiggy.png'
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
        "",
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
      title: "Weather App (API Based)",
      description:
        "Created an API-based Weather App that fetches and displays live weather information including temperature, city-wise forecast, and weather status using external weather APIs.",
      image: WeatherAPI,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/jinaypatel0809/Weather-App",
      webapp: "https://weather-app-otql.vercel.app/",
    },
    {
      id: 1,
      title: "Calculator",
      description:
        "Developed a functional calculator project to perform basic mathematical calculations efficiently, focusing on accuracy, simplicity, and ease of use.",
      image: Calculator,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/jinaypatel0809/Currency-Converter",
      webapp: "https://currency-converter-brown-two.vercel.app/",
    },
    {
      id: 2,
      title: "KFC Burger",
      description:
        "Built a responsive and visually appealing KFC-style burger website with dynamic menu sections and interactive features using HTML, CSS, and JavaScript, focusing on user experience and clean design.",
      image: KFC,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/jinaypatel0809/KFC-BURGER",
      webapp: "https://kfc-burger.vercel.app/",
    },
    {
      id: 3,
      title: "Notes App",
      description:
        "Created a Notes App using modern development tools to manage notes effectively, supporting CRUD operations with a responsive and user-friendly interface.",
      image: NOTES,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/jinaypatel0809/Notes-App",
      webapp: "https://kfc-burger-gwvn.vercel.app/",
    },
    {
      id: 4,
      title: "Quiz App",
      description:
        "Quiz App – Designed and developed a quiz application with multiple questions, timer-based gameplay, score tracking, and responsive user interface using modern app development concepts.",
      image: Quiz,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/jinaypatel0809/Quiz-App",
      webapp: "https://quiz-app-eta-ruddy.vercel.app/",
    },
    {
      id: 5,
      title: "To-Do List",
      description:
        "Developed a To-Do List application using HTML, CSS, and JavaScript that allows users to add, edit, and delete tasks efficiently. Implemented real-time task updates, user-friendly UI, and toast notifications for actions like add and delete to enhance user experience.",
      image: ToDoList,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/jinaypatel0809/To-Do-list-",
      webapp: "https://quiz-app-mw46.vercel.app/",
    },
    {
      id: 5,
      title: "Apple Store",
      description:
        "Built a fully responsive Apple Store-inspired e-commerce website using React.js. The application allows users to browse products like watches, mobiles, and laptops with a clean and modern UI.",
      image: Apple,
      tags: ["HTML", "CSS", "JavaScript", "React"],
      github: "https://github.com/jinaypatel0809/Apple-Store.git",
      webapp: "https://apple-store-chi-sable.vercel.app/",
    },
    {
      id: 6,
      title: "Job Portal App",
      description:
        "A modern Full Stack Job Finder Application developed to connect job seekers with recruiters through a simple, fast, and user-friendly platform. This application allows users to search and apply for jobs, create professional profiles, upload resumes, and track application status in real time. Recruiters can post job vacancies, manage applications, and find suitable candidates efficiently.",
      image: Job,
      tags: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "Mongodb"],
      github: "https://github.com/jinaypatel0809/Job-Portal-Frontend.git",
      webapp: "https://job-portal-frontend-two-zeta.vercel.app/",
    },
    {
      id: 7,
      title: "Swiggy App",
      description:
        "Developed a full-stack food delivery web application inspired by Swiggy, enabling users to browse restaurants, explore menus, place orders, and track order status in real-time. Implemented secure user authentication, responsive UI, cart management, order processing, and admin functionalities for restaurant and menu management. Built RESTful APIs for seamless communication between the frontend and backend while ensuring efficient database operations and scalable architecture.",
      image: Swiggy,
      tags: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "Mongodb"],
      github: "https://github.com/jinaypatel0809/SWIGGY-Full-Stack.git",
      webapp: "https://swiggy-full-stack-9nsc.vercel.app/",
    },
  ];  