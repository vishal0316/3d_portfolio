import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  //   {
  //     imageUrl: motion,
  //     name: "Motion",
  //     type: "Animation",
  //   },
  //   {
  //     imageUrl: mui,
  //     name: "Material-UI",
  //     type: "Frontend",
  //   },
  //   {
  //     imageUrl: nextjs,
  //     name: "Next.js",
  //     type: "Frontend",
  //   },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  //   {
  //     imageUrl: typescript,
  //     name: "TypeScript",
  //     type: "Frontend",
  //   },
];

export const experiences = [
  {
    title: "Web Development Challenge Participation:",
    company_name: "UnStop",
    icon: starbucks,
    iconBg: "#accbe1",
    // date: "March 2020 - April 2021",
    points: [
      "Developed the Arpan Shiksha website, contributing to the online presence of the initiative.",
      "Achieved 5th position in the Arpan Shiksha Web Development Challenge",
      "Contributed to the creation of impactful digital solutions.",
      "Tackled real-world web development problems.",
    ],
  },
  {
    title: "Open Source ontributor",
    company_name: "Social Winter of Code",
    icon: tesla,
    iconBg: "#fbc3bc",
    date: "Jan 2024 - Feb 2024",
    points: [
      "Developing and maintaining web applications using HTML , CSS and JS and other related technologies.",
      "Developed responsive contact pages and footer to optimize user experience.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  //   {
  //     title: "Web Developer",
  //     company_name: "Shopify",
  //     icon: shopify,
  //     iconBg: "#b7e4c7",
  //     date: "Jan 2022 - Jan 2023",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  //   {
  //     title: "Full stack Developer",
  //     company_name: "Meta",
  //     icon: meta,
  //     iconBg: "#a2d2ff",
  //     date: "Jan 2023 - Present",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Blood Bank App",
    description:
      "The MERN Stack Blood Bank Project utilizes MongoDB, Express.js, React.js, and Node.js for efficient blood donation management. Features include donor registration, blood requests, inventory management, user authentication, and search functionality.",
    link: "https://github.com/vishal0316/Blood-Bank-App",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "3D portfolio",
    description:
      "Developed a 3D portfolio using three.js, implemented email functionality with Email.js, and utilized React along with its libraries for an interactive and dynamic user experience.",

    link: "https://github.com/vishal0316/3d_portfolio",
  },
  // {
  //   iconUrl: car,
  //   theme: "btn-back-blue",
  //   name: "Car Finding App",
  //   description:
  //     "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
  //   link: "https://github.com/adrianhajdin/project_next13_car_showcase",
  // },
  // {
  //   iconUrl: snapgram,
  //   theme: "btn-back-pink",
  //   name: "Full Stack Instagram Clone",
  //   description:
  //     "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
  //   link: "https://github.com/adrianhajdin/social_media_app",
  // },
  // {
  //   iconUrl: estate,
  //   theme: "btn-back-black",
  //   name: "Real-Estate Application",
  //   description:
  //     "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
  //   link: "https://github.com/adrianhajdin/projects_realestate",
  // },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "Obsy Clone",
    description:
      "Obsy Agency Clone is a website project created with HTML, CSS, and JavaScript. Responsive Design with Media QueriesGSAP Animations for Enhanced User ExperienceSmooth Scrolling with Locomotive Shery.js Library Integration",
    link: "https://github.com/vishal0316/Obsy",
  },
];
