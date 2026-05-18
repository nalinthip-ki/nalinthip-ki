export type Profile = {
  name: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
  availability: string;
};

export type Experience = {
  period: string;
  title: string;
  company: string;
  description: string;
  highlights?: string[];
  projects?: ExperienceProject[];
};

export type ExperienceProject = {
  name: string;
  highlights: string[];
};

export type Education = {
  degree: string;
  institution: string;
  period: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ResumeData = {
  profile: Profile;
  experiences: Experience[];
  educations: Education[];
  skillGroups: SkillGroup[];
};

export const resumeData: ResumeData = {
  profile: {
    name: "Nalinthip Kitiphantayaporn",
    role: "Full-Stack Developer",
    email: "nalinthip.ki@gmail.com",
    phone: "0841234341",
    location: "Bangkok, Thailand",
    summary:
      "Full-Stack Developer with experience building scalable enterprise applications using React/Next.js, NestJS, and Spring Boot. Skilled in frontend and backend development, RESTful APIs, and microservices architecture, with experience delivering solutions for insurance, healthcare, and LMS platforms.",
    availability: "Open for freelance projects and full-time opportunities",
  },
  experiences: [
    {
      period: "07/2023 - Present",
      title: "Senior Software Developer",
      company: "Soilfish Co., Ltd.",
      description:
        "Built enterprise systems across insurance, healthcare, and LMS domains, covering backend APIs, full-stack delivery, and performance-focused architecture.",
      projects: [
        {
          name: "Cost Containment Management (CCM)",
          highlights: [
            "Developed RESTful APIs using Java Spring Boot to power the core Claim Eligibility module, handling complex business logic and Oracle Database integrations.",
            "Implemented core algorithms to validate medical claims, checking coverage conditions, waiting periods, and ICD10/SIMB logic to prevent invalid payouts.",
            "Refactored legacy code and wrote comprehensive unit tests, significantly reducing technical debt and improving overall system maintainability.",
            "Collaborated closely with Business Analysts and QA engineers to translate business requirements into scalable technical solutions, ensuring accurate and timely feature delivery.",
          ],
        },
        {
          name: "WCF Digital Project",
          highlights: [
            "Spearheaded full-stack development for two core systems (PRH and Registrar Management), utilizing Next.js and Tailwind CSS for the frontend, and Java Spring Boot for the backend.",
            "Built a standardized, reusable UI component library, significantly accelerating frontend development and ensuring design consistency across both systems.",
            "Architected core API contracts between the frontend and backend services, ensuring seamless data flow, high integrity, and secure communications.",
            "Optimized data retrieval processes and database queries to efficiently handle large-scale datasets, maintaining high system performance and stability under heavy workloads.",
          ],
        },
        {
          name: "Academy Management System (AMS)",
          highlights: [
            "Delivered a comprehensive Learning Management System (LMS) comprising two distinct domains: a Back-Office Admin Portal and a Learner Portal for insurance agents.",
            "Designed and developed frontend interfaces for both portals utilizing ReactJS and Material-UI, ensuring an intuitive and user-friendly experience for both administrators and agents.",
            "Architected highly scalable backend microservices using NestJS, efficiently managing complex workflows for course administration, user enrollment, and real-time progress tracking.",
          ],
        },
      ],
    },
    {
      period: "09/2023 - 01/2024",
      title: "Software Developer",
      company: "Additional Projects (Freelance)",
      description:
        "Delivered a freelance healthcare website project with a focus on modern frontend implementation, performance, and reliable deployment workflows.",
      projects: [
        {
          name: "Adela Clinic Website",
          highlights: [
            "Developed a modern, high-performance website utilizing Next.js and Tailwind CSS, delivering an engaging user experience to showcase clinic services.",
            "Automated the deployment pipeline using CI/CD integration with Vercel, minimizing manual errors during the deployment process.",
          ],
        },
      ],
    },
    {
      period: "02/2023 - 07/2023",
      title: "Front-End Developer",
      company: "Base Learnx Co., Ltd.",
      description:
        "Built product and campaign frontends across HR assessment and promotional platforms using ReactJS, Next.js, and Tailwind CSS.",
      projects: [
        {
          name: "SeenAbility",
          highlights: [
            "Developed the frontend for an HR assessment platform using ReactJS and Bootstrap, helping organizations evaluate candidate culture fit and drive internal employee development.",
            "Refactored core frontend modules, significantly enhancing application performance, code maintainability, and modularity.",
          ],
        },
        {
          name: "Skillkamp (Landing Page)",
          highlights: [
            "Built a modern, high-performance landing page for the Skillkamp campaign using Next.js and Tailwind CSS to effectively present promotional content and campaign details.",
          ],
        },
        {
          name: "Leader Board (88 Sandbox)",
          highlights: [
            "Developed a dynamic leaderboard interface for the 88 Sandbox campaign using React, TypeScript and Tailwind CSS to track and display participant scores and rankings.",
          ],
        },
      ],
    },
    {
      period: "07/2022 - 01/2023",
      title: "Front-End Developer",
      company: "Forviz Co., Ltd.",
      description:
        "Built interactive customer-facing and operational systems spanning kiosk experiences, indoor navigation, and visitor management workflows.",
      projects: [
        {
          name: "Venue (Interactive Directory Kiosk)",
          highlights: [
            "Developed an interactive kiosk application utilizing ReactJS, Material-UI and Maptalks to display mall directories and store locations.",
            "Integrated a custom indoor navigation algorithm to calculate the fastest path between stores, delivering a seamless, Google Maps-like guided routing experience for mall visitors.",
          ],
        },
        {
          name: "Visitor Management System (SupalaiSABAI)",
          highlights: [
            "Engineered Go-based backend RESTful APIs, specifically designing and implementing core endpoints to efficiently manage visitor check-in and check-out records.",
          ],
        },
      ],
    },
    {
      period: "11/2021 - 06/2022",
      title: "Full-Stack Developer (Internship/Co-op)",
      company: "Intellect Network Web Co.,Ltd.",
      description:
        "Built an end-to-end IoT web application covering frontend, backend services, and real-time device communication for smart power distribution monitoring.",
      projects: [
        {
          name: "Wiplux (SmartPDU) IoT Web Application",
          highlights: [
            "Engineered an end-to-end full-stack application serving as a comprehensive monitoring and control interface for Wiplux SmartPDU IoT devices.",
            "Developed a dynamic frontend utilizing Angular and architected robust backend RESTful APIs and service logic with Node.js.",
            "Integrated the MQTT protocol to establish real-time, bidirectional communication between hardware devices and the Node.js backend, ensuring instantaneous status updates and reliable device control.",
          ],
        },
      ],
    },
  ],
  educations: [
    {
      degree: "Bachelor of Engineering (Computer Engineering)",
      institution: "Kasetsart University, Kamphaeng Saen Campus",
      period: "04/2022",
    },
  ],
  skillGroups: [
    {
      title: "Frontend",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Angular",
        "Tailwind CSS",
        "Material-UI",
        "Bootstrap",
      ],
    },
    {
      title: "Backend & Architecture",
      items: [
        "Node.js",
        "NestJS",
        "Java Spring Boot",
        "Go",
        "RESTful APIs",
        "Microservices",
      ],
    },
    {
      title: "Databases & ORMs",
      items: [
        "SQL (MySQL, PostgreSQL)",
        "Oracle Database",
        "Hibernate",
        "TypeORM",
      ],
    },
    {
      title: "API Tools",
      items: ["Postman", "Swagger (OpenAPI)"],
    },
    {
      title: "Tools / DevOps",
      items: ["Git", "CI/CD (Vercel)", "Jest (Testing Frameworks)"],
    },
    {
      title: "IoT / Specialty",
      items: ["MQTT"],
    },
  ],
};
