import {
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  figma,
  carrent,
  uiux,
  Api,
  optimization,
  greenme,
  nextjs,
  bootstrap,
  aka,
  shopspy,
  lockey,
  allocateHome,
  smmQuizBg,
  coachbg,
  creative,
  Reliability,
  communication,
  dedication,
  github,
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-end Developer",
    icon: web,
  },
  {
    title: "Ui/Ux Developer",
    icon: uiux,
  },
  {
    title: "API integration",
    icon: Api,
  },
  {
    title: "Tech Stack Mastery",
    icon: optimization,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: github,
  },
  {
    name: "Figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Innovation and Creativity",
    icon: creative,
    iconBg: "#E6DEDD",
    points: [
      "Innovation is at the heart of my work. I bring a fresh perspective and creative solutions to every project, pushing boundaries and thinking outside the box to deliver truly unique and impactful results.",
    ],
  },
  {
    title: "Reliability and Consistency",
    icon: Reliability,
    iconBg: "#383E56",
    points: [
      "You can count on me to deliver consistently excellent work, every time. With a track record of reliability and a commitment to meeting deadlines, I ensure that your project progresses smoothly and is completed to the highest standards.",
    ],
  },
  {
    title: "Communication and Collaboration",
    icon: communication,
    iconBg: "#383E56",
    points: [
      "Effective communication is key to project success. I prioritize open and transparent communication, keeping you informed every step of the way and actively seeking your input to ensure that your vision is fully realized.",
    ],
  },
  {
    title: "Passion and Dedication",
    icon: dedication,
    iconBg: "#383E56",
    points: [
      "I am passionate about what I do, and that passion shines through in every project I undertake. With unwavering dedication and a relentless pursuit of excellence, I go above and beyond to exceed your expectations and deliver results that truly impress.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Atif proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Atif does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Atif optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "E-Commerce Store",
    description:
      "US Store is a comprehensive online platform designed for both administrators and shoppers to engage in seamless e-commerce transactions. With a focus on functionality and user experience, USStore provides a powerful set of features to streamline product management and purchasing, ensuring a smooth and efficient shopping experience for all users involved.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: lockey,
    // source_code_link: "https://github.com/",
  },
  {
    name: "Weather Application",
    description:
      "US Weather Application is a user-friendly platform that gives personalized weather updates. When users create an account, their location is set, and each time they log in, they see their local weather on the home page. Users can also check the weather in other cities by typing the city name in the weather update section.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: allocateHome,
    // source_code_link: "https://github.com/",
  },
  {
    name: "Dashboard",
    description:
      "Custom Dashboards is a flexible service that allows you to create dashboards for any purpose. Whether you need to track metrics, see data visually, or manage information, this service lets you build dashboards that fit your needs, making it easier to understand and use your data.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "Styled Components",
        color: "pink-text-gradient",
      },
    ],
    image: coachbg,
  },
  {
    name: "Movies Application",
    description:
      "Movies Application is a simple platform where users can sign up or log in to explore movies. The app also includes a feature that lets users add their favorite movies to a dedicated 'Favorites' section, making it easy to keep track of the movies they love.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Style Components",
        color: "pink-text-gradient",
      },
    ],
    image: smmQuizBg,
  },
];

export { services, technologies, experiences, testimonials, projects };
