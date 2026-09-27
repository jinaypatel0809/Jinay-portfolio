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
import EmployManagementSystem from './assets/work_logo/Project 1.png'
import InventoryManagementSystem from './assets/work_logo/Project 2.png'
import ExpanceTrackerSystem from './assets/work_logo/Project 3.png'
import EcommerceWebsite from './assets/work_logo/Project 4.png'
import Ecommerce from './assets/work_logo/Project 5.png'
import InventoryManagement from './assets/work_logo/Project 6.png'
import EmployManagement from './assets/work_logo/Project 8.png'
import TravelBooking from './assets/work_logo/Project 7.png'
import Zomato from './assets/work_logo/Zomato.png'
//Certificates Section
import Image from './assets/certificate_logo/Certificate1.png'
import Image1 from './assets/certificate_logo/Certificate2.png'
import Image2 from './assets/certificate_logo/Certificate3.png'

export const certificates = [
  {
    id: 0,
    title: "WEBHACKS",
    issuer: "Image",
    date: "2022",
    image: Image,
    description:
      "Participated in TECHWAR 2026 – WEBHACKS organized by Red & White Skill Education. Demonstrated web development and problem-solving skills. Collaborated in a competitive coding environment.Strengthened teamwork and practical project development experience.",
    credentialUrl: "/certificates/full-stack-web-development-certificate.pdf",
  },
  {
    id: 1,
    title: "JavaScript",
    issuer: "freeCodeCamp",
    date: "2026",
    image: Image1,
    description:
      "Successfully completed the JavaScript Essentials 1 certification. Gained hands-on knowledge of JavaScript fundamentals, including variables, functions, loops, arrays, objects, and DOM manipulation. Strengthened problem-solving and front-end web development skills through practical programming concepts.",
    credentialUrl: "/certificates/javascript-essentials-1-certificate.pdf",
  },
  {
    id: 2,
    title: "Skill Certificate",
    issuer: "Red & White Skill Education",
    date: "2026",
    image: Image2,
    description:
      "Earned a skill certificate from Red & White Skill Education, recognizing practical knowledge, dedication, and hands-on learning.",
    credentialUrl: "/certificates/RW-Skill-Certificate-RW-FF260789.pdf",
  },
];

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
  role: "FreeLancing Projects",
  date: "17/04/2026 - Present",
  desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Built responsive user interfaces, implemented RESTful APIs, integrated databases, and developed custom web solutions based on client requirements.",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React JS",
    "Node JS",
    "Express JS",
    "Tailwind CSS",
    "MongoDB",
    "REST APIs",
    "Git",
    "GitHub",
  ],
},

{
  id: 1,
  img: webverseLogo,
  role: "Web Development Intern",
  date: "17/09/2026 - Present",
  desc: "Developing and customizing responsive websites using WordPress and Elementor. Working on website pages, layouts, navigation, forms, media, content updates, responsive design, debugging, and website optimization based on project requirements.",
  skills: [
    "WordPress",
    "Elementor",
    "HTML",
    "CSS",
    "JavaScript",
    "Responsive Design",
    "Website Optimization",
    "Git",
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
      title: "Employee Management System",
      description:
        "Developed a responsive Employee Management System using JavaScript to manage employee records efficiently. The application allows users to add, edit, delete, search, and filter employee information with real-time updates. It features client-side validation, dynamic DOM manipulation, and Local Storage integration for persistent data without requiring a backend.",
      image: EmployManagementSystem,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/jinaypatel0809/Employ-Management-System.git",
      webapp: "https://employ-management-system-rose.vercel.app/",
    },
    {
      id: 1,
      title: "Inventory Management System",
      description:
        "Built an interactive Inventory Management System that helps manage products, stock levels, pricing, and inventory records. Users can perform CRUD operations, search products, monitor stock availability, and maintain inventory using Local Storage. The application is designed with a clean and responsive interface.",
      image: InventoryManagementSystem,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/jinaypatel0809/Inventory-Management-Syatem.git",
      webapp: "https://inventory-management-syatem.vercel.app/",
    },
    {
      id: 2,
      title: "Expance Tracker System",
      description:
        "Created a modern Expense Tracker System to monitor daily income and expenses. The application enables users to record transactions, categorize expenses, calculate total balance automatically, and visualize financial summaries. Data is stored locally, ensuring persistence across browser sessions.",
      image: ExpanceTrackerSystem,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/jinaypatel0809/Expanse-Tracker-System.git",
      webapp: "https://expanse-tracker-system.vercel.app/",
    },
    {
      id: 3,
      title: "Ecommerce Website",
      description:
        "Designed and developed a fully responsive Ecommerce Website using JavaScript featuring a modern shopping experience. Users can browse products, search items, filter by categories, manage a shopping cart, and experience a smooth checkout flow. The project demonstrates dynamic rendering, reusable components, and responsive design principles.",
      image: EcommerceWebsite,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/jinaypatel0809/Ecommerce-Website.git",
      webapp: "https://ecommerce-website-umber-pi.vercel.app/",
    },
    {
      id: 4,
      title: "Ecommerce Website Using React",
      description:
        "A modern and fully responsive e-commerce web application developed using React.js. The platform allows users to browse products, search and filter items, view detailed product information, manage their shopping cart, and complete a seamless checkout experience. It features an intuitive user interface, optimized performance, reusable components, and a responsive design that delivers a smooth shopping experience across all devices.",
      image: Ecommerce,
      tags: ["HTML", "CSS", "JavaScript", "React"],
      github: "https://github.com/jinaypatel0809/Ecommerce-Website-Using-React.git",
      webapp: "https://ecommerce-website-using-react-tan.vercel.app/",
    },
    {
      id: 5,
      title: "Inventary Management Using React",
      description:
        "A responsive inventory management application built with React.js to simplify product and stock management. The system enables users to add, update, delete, and organize inventory records while tracking stock availability in real time. It provides an easy-to-use dashboard with efficient data management, improving inventory accuracy and streamlining daily operations.",
      image: InventoryManagement,
      tags: ["HTML", "CSS", "JavaScript", "React"],
      github: "https://github.com/jinaypatel0809/Inventory-Management-System-using-React.git",
      webapp: "https://inventory-management-system-using-r.vercel.app/",
    },
    {
      id: 6,
      title: "Employee Management Using React",
      description:
        "A React-based employee management system designed to efficiently manage employee records. The application allows administrators to add, edit, delete, and search employee information through a clean and user-friendly interface. Built with reusable components and responsive layouts, it helps simplify workforce management while providing an organized and efficient user experience.",
      image: EmployManagement,
      tags: ["HTML", "CSS", "JavaScript", "React"],
      github: "https://github.com/jinaypatel0809/Employ-Management-System-Using-React.git",
      webapp: "https://employ-management-system-using-reac.vercel.app/",
    },
    {
      id: 7,
      title: "Travel-Booking-System Using React",
      description:
        "A modern travel booking web application developed with React.js that enables users to explore destinations, search travel packages, view detailed trip information, and make bookings through an intuitive interface. The application focuses on responsive design, smooth navigation, and an engaging user experience, making travel planning simple and convenient across all devices.",
      image: TravelBooking,
      tags: ["HTML", "CSS", "JavaScript", "React"],
      github: "https://github.com/jinaypatel0809/Travel-Booking-System.git",
      webapp: "https://travel-booking-system-opal.vercel.app/",
    },
    
    
    {
      id: 11,
      title: "Zomato Website",
      description:
        "Swiggy Clone is a full-stack food delivery web application. Users can browse restaurants, search for food, and manage their cart and wishlist. It includes address management, secure checkout, and order tracking. The platform supports Razorpay payments and OTP-based Cash on Delivery. It also features secure authentication and a dedicated admin dashboard. Built with React.js, Tailwind CSS, Node.js, Express.js, and MongoDB.",
      image: Zomato,
      tags: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "Mongodb"],
      github: "https://github.com/jinaypatel0809/SWIGGY-Full-Stack.git",
      webapp: "https://food-ordering-website-dusky-pi.vercel.app/",
    },
  ];  
