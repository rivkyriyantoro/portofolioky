import { CMSContent, WorkExperience, FeaturedProject } from "@/types/cms"

export const workExperiences: WorkExperience[] = [
  {
    id: "exp-000",
    title: "Software Quality Assurance",
    company: "Bank Sinarmas",
    location: "Indonesia",
    period: "October 2024 - Present",
    isCurrentPosition: true,
    description: "Responsible for quality assurance in banking software systems, ensuring robust and secure digital banking products through comprehensive testing strategies and quality standards.",
    technologies: ["Postman", "Playwright", "Manual Testing", "API Testing", "JIRA", "DBeaver"],
    achievements: [
      "Ensured quality standards for critical banking software systems",
      "Implemented comprehensive testing strategies for digital banking products",
      "Collaborated with cross-functional teams to deliver secure banking solutions"
    ],
    responsibilities: [
      "Manual and automated testing of banking applications",
      "API testing and validation",
      "Bug reporting and tracking",
      "Test case creation and execution",
      "Quality assurance documentation"
    ]
  },
  {
    id: "exp-001",
    title: "Quality Assurance",
    company: "LAYANA.ID",
    location: "Yogyakarta, Indonesia",
    period: "August 2024 - October 2024",
    description: "Responsible for ensuring quality standards in software development processes, performing comprehensive testing of web applications and mobile applications to deliver high-quality products.",
    technologies: ["Selenium", "Postman", "TestNG", "JIRA", "Manual Testing", "API Testing", "Mobile Testing"],
    achievements: [
      "Implemented comprehensive testing strategies for web and mobile applications",
      "Reduced bug detection time by establishing efficient testing workflows",
      "Collaborated with development teams to ensure quality deliverables",
      "Maintained quality documentation and test case management"
    ],
    responsibilities: [
      "Manual and automated testing of web applications",
      "API testing and validation",
      "Mobile application testing across different devices",
      "Bug reporting and tracking using JIRA",
      "Quality assurance process documentation"
    ]
  },
  {
    id: "exp-002",
    title: "Software Engineer and Quality Assurance",
    company: "HRH Synergy Nusantara Tech",
    location: "Yogyakarta, Indonesia",
    period: "11/2024 – 01/2025",
    description: "Dual role focusing on software engineering and quality assurance, ensuring both development excellence and comprehensive testing coverage for client projects.",
    technologies: ["React", "TypeScript", "Node.js", "Jest", "Git", "Playwright"],
    achievements: [
      "Successfully balanced software engineering and QA responsibilities",
      "Delivered features on time with zero critical defects",
      "Established testing protocols for software components"
    ],
    responsibilities: [
      "Software engineering using React and modern web technologies",
      "Component testing and UI/UX validation",
      "Cross-browser compatibility testing",
      "Responsive design implementation and testing",
      "Code review and quality assurance"
    ]
  },
  {
    id: "exp-003",
    title: "Quality Assurance",
    company: "Jogjawebcamp",
    location: "Yogyakarta, Indonesia",
    period: "March 2024 - July 2024",
    description: "Focused on quality assurance processes for web development projects, ensuring high standards in software delivery and implementing testing best practices.",
    technologies: ["Manual Testing", "Automated Testing", "Bug Tracking", "Test Documentation", "Web Testing"],
    achievements: [
      "Established comprehensive testing procedures for web applications",
      "Improved bug detection rate through systematic testing approaches",
      "Created detailed test documentation and reports",
      "Collaborated effectively with development teams"
    ],
    responsibilities: [
      "Web application testing and validation",
      "Test case creation and execution",
      "Bug identification and reporting",
      "Quality assurance documentation",
      "Testing process improvement"
    ]
  },
  {
    id: "exp-004",
    title: "Freelance UI/UX Designer",
    company: "Luncsphere",
    location: "Netherlands",
    period: "June 2023 - August 2023",
    description: "Provided freelance UI/UX design services for international clients, creating user-centered design solutions and improving user experiences for digital products.",
    technologies: ["Figma", "Adobe XD", "Sketch", "Prototyping", "User Research", "Wireframing"],
    achievements: [
      "Delivered comprehensive UI/UX design solutions for international clients",
      "Created user-centered design systems and style guides",
      "Improved user engagement through intuitive interface designs",
      "Successfully managed remote client relationships"
    ],
    responsibilities: [
      "User interface and user experience design",
      "Wireframing and prototyping",
      "User research and usability testing",
      "Design system creation",
      "Client communication and project management"
    ]
  },
  {
    id: "exp-005",
    title: "Web Developer",
    company: "TK ABA Krapyak Wetan",
    location: "Yogyakarta, Indonesia",
    period: "March 2023 - July 2023",
    description: "Developed and maintained the school's website, implementing modern web technologies to improve online presence and user experience for the educational institution.",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "WordPress", "Responsive Design"],
    achievements: [
      "Successfully developed and launched the school's modern website",
      "Improved online presence and user engagement",
      "Implemented responsive design for multi-device accessibility",
      "Provided training and support for content management"
    ],
    responsibilities: [
      "Website development and maintenance",
      "Content management system implementation",
      "Responsive web design",
      "SEO optimization",
      "User training and support"
    ]
  },
  {
    id: "exp-006",
    title: "UI/UX Designer Intern",
    company: "TVRI Nasional",
    location: "Yogyakarta, Indonesia",
    period: "February 2022 - March 2022",
    description: "Internship focused on UI/UX design for national television broadcasting digital platforms, gaining experience in media industry design requirements and standards.",
    technologies: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research", "Design Systems"],
    achievements: [
      "Contributed to digital platform design improvements",
      "Gained valuable experience in media industry design standards",
      "Created prototypes for broadcasting digital interfaces",
      "Learned professional design workflow and processes"
    ],
    responsibilities: [
      "UI/UX design for digital broadcasting platforms",
      "Prototype creation and testing",
      "Design research and analysis",
      "Collaboration with development teams",
      "Design documentation and presentation"
    ]
  },
  {
    id: "exp-007",
    title: "Graphic Design & IT Support",
    company: "PrintShop",
    location: "Yogyakarta, Indonesia",
    period: "August 2018 - September 2019",
    description: "Provided graphic design services and IT support for printing business operations, handling both creative design work and technical support responsibilities.",
    technologies: ["Adobe Creative Suite", "Photoshop", "Illustrator", "InDesign", "Print Design", "IT Support"],
    achievements: [
      "Successfully managed both design and IT support responsibilities",
      "Improved workflow efficiency through technical solutions",
      "Delivered high-quality print designs for various clients",
      "Maintained and optimized IT infrastructure"
    ],
    responsibilities: [
      "Graphic design for print materials",
      "IT system maintenance and support",
      "Client consultation and design services",
      "Print production coordination",
      "Technical troubleshooting and support"
    ]
  }
]

export const featuredProjects: FeaturedProject[] = [
  // Quality Assurance Projects
  {
    id: "proj-001",
    title: "Premi Air",
    description: "The multi-platform application for Premi Air airline conducts testing on the FMS (Flight Management System), CMS (Crew Management System), Crew Portal, and Aircraft Portal modules using Postman for API testing, FCM emulator for notification testing, and performing functional testing, regression testing, and usability testing on the Laravel and React Native-based application. Additionally, integration testing is performed with Radar Flight and Chatfy to ensure optimal real-time communication and flight tracking functionality.",
    shortDescription: "Multi-platform airline FMS and CMS quality assurance testing",
    image: "/images/projects/premi-air.png",
    technologies: ["Postman", "FCM Emulator", "Laravel", "React Native", "Radar Flight", "Chatfy", "Manual Testing"],
    category: "QA Testing",
    githubUrl: "https://github.com/rivkyriyantoro/premi-air-testing",
    featured: true,
    status: "completed",
    startDate: "2024-08-01",
    endDate: "2024-12-01",
    highlights: [
      "Flight Management System (FMS) testing",
      "Crew Management System (CMS) comprehensive testing",
      "Real-time flight tracking integration testing",
      "Multi-platform Laravel and React Native testing"
    ],
    challenges: [
      "Complex airline system integration testing",
      "Real-time communication testing with Chatfy",
      "Flight tracking accuracy validation with Radar Flight"
    ],
    learnings: [
      "Aviation industry system testing",
      "Real-time flight tracking technologies",
      "Airline crew management workflows"
    ]
  },
  {
    id: "proj-002",
    title: "E-commerce Sonus Hub",
    description: "Conducted end-to-end testing on a B2B and B2G-based PWA platform, testing payment integration with Xendit to ensure secure and smooth transactions. Test cases were created and executed for key features such as electrical material ordering and inventory management. Additionally, performance testing was carried out to ensure the application can handle high user loads. Tools used include Postman for API testing, Playwright for automation, and integration with Chat AI and Xendit payment methods to validate functionality and transaction security.",
    shortDescription: "B2B/B2G PWA platform with Xendit payment integration testing",
    image: "/images/projects/sonus-hub.png",
    technologies: ["Postman", "Playwright", "Xendit", "Chat AI", "PWA", "Performance Testing"],
    category: "QA Testing",
    githubUrl: "https://github.com/rivkyriyantoro/sonus-hub-testing",
    featured: true,
    status: "completed",
    startDate: "2024-03-01",
    endDate: "2024-07-01",
    highlights: [
      "B2B/B2G PWA platform comprehensive testing",
      "Xendit payment integration security testing",
      "Electrical material ordering system validation",
      "High-load performance testing capabilities"
    ],
    challenges: [
      "Complex B2B/B2G transaction flow validation",
      "Payment security testing with Xendit",
      "PWA performance optimization validation"
    ],
    learnings: [
      "PWA testing methodologies",
      "Payment gateway security testing",
      "B2B/B2G e-commerce testing strategies"
    ]
  },
  {
    id: "proj-003",
    title: "HopHop Multi-Branch Management",
    description: "The multi-platform and multi-branch outlet application is designed to efficiently manage operations across multiple outlet locations. It supports order management, stock tracking, sales reporting, and integrates with payment and delivery systems. Functional testing is performed across all branches to ensure optimal performance, utilizing tools such as Postman for API testing, Appium for mobile automation, and Swagger for comprehensive API documentation. Integration with payment gateways like Midtrans and delivery services such as Grab Express is thoroughly tested to ensure seamless transaction and delivery processes across each outlet.",
    shortDescription: "Multi-platform multi-branch outlet management system testing",
    image: "/images/projects/hophop.png",
    technologies: ["Postman", "Appium", "Swagger", "Midtrans", "Grab Express", "Multi-platform Testing"],
    category: "QA Testing",
    githubUrl: "https://github.com/rivkyriyantoro/hophop-testing",
    featured: true,
    status: "completed",
    startDate: "2024-11-01",
    endDate: "2025-01-01",
    highlights: [
      "Multi-branch outlet management testing",
      "Midtrans payment gateway integration testing",
      "Grab Express delivery system integration",
      "Comprehensive API documentation with Swagger"
    ],
    challenges: [
      "Complex multi-branch synchronization testing",
      "Payment and delivery integration coordination",
      "Cross-platform performance optimization"
    ],
    learnings: [
      "Multi-branch system testing strategies",
      "Payment gateway integration testing",
      "Delivery service API testing"
    ]
  },
  {
    id: "proj-004",
    title: "Sekola.id Learning Management System",
    description: "Quality assurance testing for an educational Learning Management System (LMS), ensuring robust functionality for students, teachers, and administrators with course management, assessments, and progress tracking.",
    shortDescription: "Educational LMS platform comprehensive testing",
    image: "/images/projects/sekola-id.png",
    technologies: ["Playwright", "Postman", "Manual Testing", "Automated Testing", "API Testing"],
    category: "QA Testing",
    githubUrl: "https://github.com/rivkyriyantoro/sekola-testing",
    featured: false,
    status: "completed",
    startDate: "2024-06-01",
    endDate: "2024-10-01",
    highlights: [
      "Complete LMS functionality testing",
      "User role-based testing (students, teachers, admins)",
      "Assessment and grading system validation",
      "Course content management testing"
    ],
    challenges: [
      "Complex user role and permission testing",
      "Assessment system validation",
      "Content delivery testing across different media types"
    ],
    learnings: [
      "Educational platform testing methodologies",
      "Multi-role user testing strategies",
      "Content management system testing"
    ]
  },
  {
    id: "proj-005",
    title: "SIMRS Hospital Management System",
    description: "Comprehensive testing of a Hospital Management System (SIMRS), ensuring critical healthcare operations including patient management, medical records, billing, and staff coordination systems.",
    shortDescription: "Hospital management system critical testing",
    image: "/images/projects/simrs.png",
    technologies: ["DBeaver", "Postman", "Manual Testing", "Database Testing", "API Testing"],
    category: "QA Testing",
    githubUrl: "https://github.com/rivkyriyantoro/simrs-testing",
    featured: false,
    status: "completed",
    startDate: "2024-04-01",
    endDate: "2024-08-01",
    highlights: [
      "Critical healthcare system testing",
      "Patient data security validation",
      "Medical record management testing",
      "Healthcare compliance testing"
    ],
    challenges: [
      "Healthcare data privacy and security testing",
      "Critical system reliability validation",
      "Complex medical workflow testing"
    ],
    learnings: [
      "Healthcare system testing standards",
      "Medical data security testing",
      "Critical system reliability testing"
    ]
  },

  // UI/UX Design Projects
  {
    id: "proj-006",
    title: "Employee Leave Management System Website for TVRI Nasional",
    description: "Developed an efficient and transparent employee leave management system for TVRI Nasional by designing an intuitive UI/UX using Figma, utilizing Google Forms as a data collection tool for leave requests, and implementing real-time leave tracking to significantly speed up the approval and management process.",
    shortDescription: "Employee leave management system UI/UX design for national TV station",
    image: "/images/projects/tvri-leave-system.png",
    technologies: ["Figma", "Google Forms", "UI/UX Design", "Real-time Tracking", "User Research"],
    category: "UI/UX Design",
    githubUrl: "https://github.com/rivkyriyantoro/tvri-leave-system",
    featured: true,
    status: "completed",
    startDate: "2022-02-01",
    endDate: "2022-03-31",
    highlights: [
      "Efficient employee leave management system",
      "Real-time leave tracking implementation",
      "Transparent approval process design",
      "Google Forms integration for data collection"
    ],
    challenges: [
      "Complex approval workflow design",
      "Real-time tracking system implementation",
      "Multi-level authorization interface"
    ],
    learnings: [
      "Enterprise HR system design",
      "Real-time data visualization",
      "Government sector UI/UX standards"
    ]
  },
  {
    id: "proj-007",
    title: "Luncsphere SaaS Web3 Application",
    description: "Designing a SaaS Web3 website application utilizing blockchain technology by conducting user research, developing interactive prototypes using Figma, optimizing a responsive user interface, and managing the project with Notion to ensure an intuitive and user-centered experience. Worked full remote for a client based in the Netherlands.",
    shortDescription: "SaaS Web3 blockchain application UI/UX design",
    image: "/images/projects/luncsphere-web3.png",
    technologies: ["Figma", "Blockchain", "Web3", "Notion", "User Research", "Interactive Prototypes"],
    category: "UI/UX Design",
    githubUrl: "https://github.com/rivkyriyantoro/luncsphere-web3",
    featured: true,
    status: "completed",
    startDate: "2023-06-01",
    endDate: "2023-08-31",
    highlights: [
      "Web3 blockchain technology integration",
      "International remote client collaboration",
      "Interactive prototypes development",
      "User-centered blockchain experience design"
    ],
    challenges: [
      "Complex blockchain UX design",
      "Remote international client communication",
      "Web3 technology user experience optimization"
    ],
    learnings: [
      "Blockchain UI/UX best practices",
      "Web3 technology design patterns",
      "International remote design collaboration"
    ]
  },
  {
    id: "proj-008",
    title: "E-commerce Mobile App Design",
    description: "Complete UI/UX design for a modern e-commerce mobile application, focusing on user journey optimization, conversion rate improvement, and seamless shopping experience across Android and iOS platforms.",
    shortDescription: "Mobile e-commerce app UI/UX design",
    image: "/images/projects/ecommerce-mobile-design.png",
    technologies: ["Figma", "Adobe XD", "Prototyping", "User Journey Mapping", "Mobile Design"],
    category: "UI/UX Design",
    githubUrl: "https://github.com/rivkyriyantoro/ecommerce-mobile-design",
    featured: false,
    status: "completed",
    startDate: "2023-09-01",
    endDate: "2023-11-30",
    highlights: [
      "Mobile-first design approach",
      "Conversion rate optimization",
      "Cross-platform consistency",
      "User journey optimization"
    ],
    challenges: [
      "Mobile screen size constraints",
      "Platform-specific design guidelines",
      "Complex checkout flow design"
    ],
    learnings: [
      "Mobile UX best practices",
      "E-commerce conversion optimization",
      "Platform-specific design patterns"
    ]
  },

  // Web Development Projects
  {
    id: "proj-009",
    title: "TK ABA Krapyak Wetan School Website",
    description: "Full-stack development of a modern school website with content management system, featuring responsive design, SEO optimization, and user-friendly interface for educational institution needs.",
    shortDescription: "Educational institution website development",
    image: "/images/projects/school-website.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "WordPress", "Responsive Design"],
    category: "Web Development",
    liveUrl: "https://tkabakrapyakwetan.sch.id",
    githubUrl: "https://github.com/rivkyriyantoro/school-website",
    featured: true,
    status: "completed",
    startDate: "2023-03-01",
    endDate: "2023-07-31",
    highlights: [
      "Modern responsive school website",
      "Content management system integration",
      "SEO optimization for better visibility",
      "User training and support provided"
    ],
    challenges: [
      "Educational content organization",
      "Multi-device responsive design",
      "Content management training for staff"
    ],
    learnings: [
      "Educational website development best practices",
      "WordPress customization and optimization",
      "User training and support methodologies"
    ]
  },
  {
    id: "proj-010",
    title: "Corporate Portfolio Website",
    description: "Development of a professional corporate portfolio website using modern web technologies, featuring responsive design, performance optimization, and content management capabilities for business showcase.",
    shortDescription: "Corporate portfolio website with modern technologies",
    image: "/images/projects/corporate-portfolio.png",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Vercel"],
    category: "Web Development",
    liveUrl: "https://corporate-portfolio-demo.vercel.app",
    githubUrl: "https://github.com/rivkyriyantoro/corporate-portfolio",
    featured: false,
    status: "completed",
    startDate: "2023-08-01",
    endDate: "2023-10-31",
    highlights: [
      "Modern React-based architecture",
      "Performance optimized loading",
      "SEO-friendly structure",
      "Content management integration"
    ],
    challenges: [
      "Performance optimization for large portfolios",
      "SEO implementation for dynamic content",
      "Responsive design across all devices"
    ],
    learnings: [
      "Modern React development patterns",
      "Next.js optimization techniques",
      "Performance monitoring and optimization"
    ]
  },
  {
    id: "proj-011",
    title: "Inventory Management System",
    description: "Web-based inventory management system for small to medium businesses, featuring real-time stock tracking, automated reporting, supplier management, and multi-location inventory control.",
    shortDescription: "Web-based inventory management system",
    image: "/images/projects/inventory-system.png",
    technologies: ["Laravel", "Vue.js", "MySQL", "Bootstrap", "Chart.js", "RESTful API"],
    category: "Web Development",
    githubUrl: "https://github.com/rivkyriyantoro/inventory-management",
    featured: false,
    status: "completed",
    startDate: "2023-01-01",
    endDate: "2023-04-30",
    highlights: [
      "Real-time inventory tracking",
      "Automated reporting system",
      "Multi-location support",
      "Supplier management integration"
    ],
    challenges: [
      "Real-time data synchronization",
      "Complex reporting requirements",
      "Multi-location data management"
    ],
    learnings: [
      "Laravel advanced features",
      "Real-time web application development",
      "Business process automation"
    ]
  },

  // Project Management Projects
  {
    id: "proj-012",
    title: "Premi Air - Assistant Project Manager & QA",
    description: "Served as Assistant Project Manager and Quality Assurance Lead for the Premi Air multi-platform airline operations suite (FMS, CMS, Crew Portal, Aircraft Portal). Coordinated cross-functional development across Laravel and React Native stacks, managed sprint deliverables, aligned flight tracking API integrations, and spearheaded delivery quality.",
    shortDescription: "Airline operations suite coordination, sprint tracking, and multi-platform delivery management",
    image: "/images/projects/premi-air.png",
    technologies: ["Jira", "Whimsical", "Postman", "Notion", "Slack", "Laravel", "React Native"],
    category: "Project Management",
    featured: true,
    status: "completed",
    startDate: "2024-03-01",
    endDate: "2024-09-30",
    highlights: [
      "Cross-functional team coordination between backend, mobile, and airline stakeholders",
      "Release planning and sprint tracking for Flight and Crew Management systems",
      "End-to-end integration management with Radar Flight and Chatfy communication tools",
      "Delivery quality oversight and milestone sign-offs"
    ],
    challenges: [
      "Managing complex real-time flight tracking requirements across distributed teams",
      "Coordinating tight release schedules across multiple operational portals",
      "Bridging aviation domain logic between operational users and engineering teams"
    ],
    learnings: [
      "Aviation domain project delivery and mission-critical release management",
      "Multi-platform release coordination and stakeholder management",
      "Agile backlog grooming for high-reliability systems"
    ]
  },
  {
    id: "proj-013",
    title: "Mobile LMS BPR CMA - Assistant Project Manager",
    description: "Assistant Project Manager for BPR CMA's Mobile Loan Management System (LMS). Facilitated sprint planning, tracked feature development from loan origination to disbursement and repayment workflows, and coordinated technical validation across engineering and banking stakeholders.",
    shortDescription: "Fintech Loan Management System project coordination, sprint management, and banking delivery",
    image: "/images/projects/bpr-cma-lms.png",
    technologies: ["Jira", "Confluence", "Notion", "Postman", "Whimsical", "Slack"],
    category: "Project Management",
    featured: true,
    status: "completed",
    startDate: "2024-04-01",
    endDate: "2024-10-31",
    highlights: [
      "Sprint planning and backlog prioritization for core lending user journeys",
      "Facilitated cross-functional collaboration between mobile developers, QA, and bank teams",
      "Milestone tracking for secure loan application, credit scoring, and disbursement flows",
      "Structured bug triage and pre-release acceptance coordination"
    ],
    challenges: [
      "Balancing regulatory compliance requirements with fast-paced sprint deliverables",
      "Managing scope changes during multi-party loan disbursement workflow integrations",
      "Synchronizing mobile app release versions with core banking backend milestones"
    ],
    learnings: [
      "Fintech and banking operational workflows and project governance",
      "Risk assessment and defect triage in financial software rollouts",
      "Client communication and stakeholder alignment in BPR financial domains"
    ]
  },
  {
    id: "proj-014",
    title: "E-commerce Sonus Hub - Assistant Project Manager & QA",
    description: "Assistant Project Manager and QA coordinator for Sonus Hub, a B2B and B2G PWA electrical material ordering platform. Managed feature delivery roadmaps, coordinated AI chat assistant and Xendit payment integrations, and ensured delivery on time.",
    shortDescription: "B2B/B2G e-commerce platform project coordination, AI integration roadmap, and release management",
    image: "/images/projects/sonus-hub.png",
    technologies: ["Jira", "Notion", "Whimsical", "Postman", "Slack", "Google Workspace"],
    category: "Project Management",
    featured: true,
    status: "completed",
    startDate: "2024-02-01",
    endDate: "2024-08-31",
    highlights: [
      "Project roadmap and timeline execution for multi-vendor B2B procurement workflows",
      "Coordinated third-party API milestones including Xendit payment gateways and AI chat",
      "Organized sprint retrospectives, daily stand-ups, and sprint review demos",
      "User acceptance testing (UAT) planning and stakeholder sign-off leadership"
    ],
    challenges: [
      "Aligning multi-tier B2B purchase order approvals with automated checkout timelines",
      "Managing deliverables across procurement inventory and payment gateway dependencies",
      "Coordinating performance testing gates before government-scale procurement launch"
    ],
    learnings: [
      "B2B/B2G procurement project lifecycle management",
      "Third-party payment and AI service integration project planning",
      "Stakeholder communication and UAT facilitation"
    ]
  },

  // Additional QA Testing Projects
  {
    id: "proj-015",
    title: "Mobile Application for Loan Management System (LMS) BPR CMA",
    description: "The mobile application for BPR CMA Credit is designed for BPR CMA customers, ensuring that the loan application, disbursement, and installment payment processes run smoothly. The application is tested using Postman for API testing, Appium for mobile automation testing, and Visual Studio for development and debugging. The testing includes verifying the functionality of loan application submission, disbursement processes, and installment payment tracking to ensure a seamless user experience and optimal system performance.",
    shortDescription: "Banking loan management system mobile application testing",
    image: "/images/projects/bpr-cma-lms.png",
    technologies: ["Postman", "Appium", "Visual Studio", "Mobile Testing", "Banking Systems"],
    category: "QA Testing",
    githubUrl: "https://github.com/rivkyriyantoro/bpr-cma-testing",
    featured: false,
    status: "completed",
    startDate: "2024-05-01",
    endDate: "2024-09-01",
    highlights: [
      "Banking loan management system testing",
      "Mobile automation testing with Appium",
      "Loan disbursement process validation",
      "Payment tracking system verification"
    ],
    challenges: [
      "Financial system security testing",
      "Complex loan calculation validation",
      "Mobile banking compliance requirements"
    ],
    learnings: [
      "Banking system testing methodologies",
      "Financial mobile app testing",
      "Loan management system workflows"
    ]
  },
  {
    id: "proj-016",
    title: "Studio Warna IoT Integration",
    description: "The multi-platform application for managing photo studio services integrated with IoT includes modules such as CRM, ERP, HRM, and POS. Testing is performed on the Kotlin-based mobile app and Laravel-based web app using Postman for API testing, Appium for mobile automation, and Playwright for web automation testing. Regression testing ensures smooth feature updates. Integration with the camera and Midtrans is tested to ensure proper photo capture and transaction functionality.",
    shortDescription: "Photo studio IoT management system comprehensive testing",
    image: "/images/projects/studio-warna.png",
    technologies: ["Kotlin", "Laravel", "Postman", "Appium", "Playwright", "IoT", "Midtrans"],
    category: "QA Testing",
    githubUrl: "https://github.com/rivkyriyantoro/studio-warna-testing",
    featured: false,
    status: "completed",
    startDate: "2024-02-01",
    endDate: "2024-06-01",
    highlights: [
      "IoT camera integration testing",
      "Multi-platform CRM/ERP/HRM testing",
      "Photo studio workflow automation",
      "Midtrans payment integration validation"
    ],
    challenges: [
      "IoT device integration testing",
      "Real-time photo capture validation",
      "Multi-module system coordination"
    ],
    learnings: [
      "IoT integration testing strategies",
      "Photo studio management systems",
      "Camera hardware integration testing"
    ]
  },
  {
    id: "proj-017",
    title: "Eagle Vision Multi-Branch SaaS",
    description: "Conduct testing on a multi-platform and multi-branch SaaS solution used for retail operations, covering modules for task management, HRIS, and ERP, including geolocation integration for asset and task tracking. Perform functional and regression testing on Laravel-based back-end and React Native-based mobile front-end applications. Use Postman for API testing, Swagger UI for API documentation, and Playwright for web automation testing.",
    shortDescription: "Multi-branch retail SaaS solution with geolocation testing",
    image: "/images/projects/eagle-vision.png",
    technologies: ["Laravel", "React Native", "Postman", "Swagger UI", "Playwright", "Geolocation"],
    category: "QA Testing",
    githubUrl: "https://github.com/rivkyriyantoro/eagle-vision-testing",
    featured: false,
    status: "completed",
    startDate: "2024-01-01",
    endDate: "2024-05-01",
    highlights: [
      "Multi-branch retail SaaS testing",
      "Geolocation asset tracking validation",
      "HRIS and ERP module integration",
      "Comprehensive API documentation"
    ],
    challenges: [
      "Geolocation accuracy testing",
      "Multi-branch data synchronization",
      "Retail workflow automation validation"
    ],
    learnings: [
      "Retail SaaS testing methodologies",
      "Geolocation testing strategies",
      "Multi-branch system validation"
    ]
  },
  {
    id: "proj-018",
    title: "Genesy IoT Warehouse Management System",
    description: "A multi-platform application integrated with a Warehouse Management System (WMS) for IoT-based asset management. Testing includes IoT integration for real-time asset tracking, functional and performance testing on the Laravel application. API testing is done using Postman, API documentation via Swagger UI, and DBeaver is used for database visualization.",
    shortDescription: "IoT-based warehouse management system testing",
    image: "/images/projects/genesy-wms.png",
    technologies: ["Laravel", "IoT", "Postman", "Swagger UI", "DBeaver", "WMS"],
    category: "QA Testing",
    githubUrl: "https://github.com/rivkyriyantoro/genesy-testing",
    featured: false,
    status: "completed",
    startDate: "2024-03-01",
    endDate: "2024-07-01",
    highlights: [
      "IoT-based warehouse management testing",
      "Real-time asset tracking validation",
      "Database integration with DBeaver",
      "Warehouse workflow optimization"
    ],
    challenges: [
      "IoT device connectivity testing",
      "Real-time data accuracy validation",
      "Warehouse automation testing"
    ],
    learnings: [
      "Warehouse management system testing",
      "IoT asset tracking technologies",
      "Database visualization techniques"
    ]
  },
  {
    id: "proj-019",
    title: "Inastek IoT Monitoring Management",
    description: "Web application for SaaS-based monitoring management on IoT for real-time device management and monitoring. Conduct testing on applications built with Laravel, React.js, and Vue.js. Test IoT integration for asset monitoring and management. Use Postman for API testing, PostgreSQL for the database, Swagger UI for API documentation, and Playwright for automated testing.",
    shortDescription: "IoT device monitoring and management SaaS testing",
    image: "/images/projects/inastek-iot.png",
    technologies: ["Laravel", "React.js", "Vue.js", "PostgreSQL", "Postman", "Swagger UI", "Playwright"],
    category: "QA Testing",
    githubUrl: "https://github.com/rivkyriyantoro/inastek-testing",
    featured: false,
    status: "completed",
    startDate: "2024-04-01",
    endDate: "2024-08-01",
    highlights: [
      "IoT device monitoring SaaS testing",
      "Real-time device management validation",
      "Multi-framework application testing",
      "PostgreSQL database integration"
    ],
    challenges: [
      "Real-time IoT monitoring accuracy",
      "Multi-framework integration testing",
      "Device connectivity validation"
    ],
    learnings: [
      "IoT monitoring system testing",
      "Multi-framework application validation",
      "Real-time data monitoring techniques"
    ]
  },
  {
    id: "proj-020",
    title: "LookzMe Multi-platform CRM",
    description: "Multi-platform CRM for customer management. Test payment integration using Midtrans. Create and execute test cases for customer interaction, sales, booking, e-wallet, POS, and HRIS features. Use Postman for API testing, Selenium for automated testing, and DBeaver to view the database and integration with the main database.",
    shortDescription: "Multi-platform CRM with payment integration testing",
    image: "/images/projects/lookzme-crm.png",
    technologies: ["Midtrans", "Postman", "Selenium", "DBeaver", "CRM", "E-wallet", "POS"],
    category: "QA Testing",
    githubUrl: "https://github.com/rivkyriyantoro/lookzme-testing",
    featured: false,
    status: "completed",
    startDate: "2024-02-01",
    endDate: "2024-06-01",
    highlights: [
      "Comprehensive CRM testing",
      "Midtrans payment integration validation",
      "E-wallet and POS system testing",
      "Customer interaction workflow validation"
    ],
    challenges: [
      "Multi-platform CRM coordination",
      "Payment integration security testing",
      "Complex customer workflow validation"
    ],
    learnings: [
      "CRM system testing methodologies",
      "Payment gateway integration testing",
      "Customer management workflow optimization"
    ]
  },
  {
    id: "proj-021",
    title: "MySalon CRM Application",
    description: "Customer Relationship Management (CRM) application for salons. Conduct testing on Laravel-based (backend) and React Native-based (mobile) applications. Test payment integration using Xendit. Use Appium for mobile automation testing and Postman for API testing.",
    shortDescription: "Salon CRM with Xendit payment integration testing",
    image: "/images/projects/mysalon-crm.png",
    technologies: ["Laravel", "React Native", "Xendit", "Appium", "Postman", "CRM"],
    category: "QA Testing",
    githubUrl: "https://github.com/rivkyriyantoro/mysalon-testing",
    featured: false,
    status: "completed",
    startDate: "2024-01-01",
    endDate: "2024-04-01",
    highlights: [
      "Salon CRM system testing",
      "Xendit payment integration validation",
      "Mobile salon management testing",
      "Customer booking system validation"
    ],
    challenges: [
      "Salon workflow automation testing",
      "Mobile payment integration validation",
      "Customer appointment system testing"
    ],
    learnings: [
      "Salon management system testing",
      "Mobile CRM application validation",
      "Service booking system optimization"
    ]
  },
  {
    id: "proj-022",
    title: "Hemofilia Patient Care Mobile App",
    description: "Hemofilia is a mobile application that connects hemophilia patients with their care team. The app helps patients record symptoms and bleeding events to assist doctors in making informed treatment decisions. Testing was conducted on the Laravel-based (backend) and React Native-based (mobile) applications, with API testing using Postman.",
    shortDescription: "Healthcare patient care mobile application testing",
    image: "/images/projects/hemofilia-app.png",
    technologies: ["Laravel", "React Native", "Postman", "Healthcare", "Mobile Testing"],
    category: "QA Testing",
    githubUrl: "https://github.com/rivkyriyantoro/hemofilia-testing",
    featured: false,
    status: "completed",
    startDate: "2024-06-01",
    endDate: "2024-10-01",
    highlights: [
      "Healthcare patient management testing",
      "Medical symptom tracking validation",
      "Doctor-patient communication testing",
      "Medical data security validation"
    ],
    challenges: [
      "Medical data privacy compliance",
      "Patient care workflow validation",
      "Healthcare system integration testing"
    ],
    learnings: [
      "Healthcare application testing standards",
      "Medical data security protocols",
      "Patient care system optimization"
    ]
  },
  {
    id: "proj-023",
    title: "Pickme MaaS Application",
    description: "MaaS (Mobility as a Service) application with features including booking, shuttle service, and payment integration using Xendit and OpenStreetMap. Testing was performed using Postman for API verification, Android Emulator for mobile testing, and running performance and load tests.",
    shortDescription: "Mobility as a Service application comprehensive testing",
    image: "/images/projects/pickme-maas.png",
    technologies: ["Xendit", "OpenStreetMap", "Postman", "Android Emulator", "Performance Testing"],
    category: "QA Testing",
    githubUrl: "https://github.com/rivkyriyantoro/pickme-testing",
    featured: false,
    status: "completed",
    startDate: "2024-03-01",
    endDate: "2024-07-01",
    highlights: [
      "Mobility service application testing",
      "OpenStreetMap integration validation",
      "Shuttle booking system testing",
      "Performance and load testing"
    ],
    challenges: [
      "Real-time location tracking validation",
      "Transportation service coordination",
      "Mobile performance optimization"
    ],
    learnings: [
      "MaaS application testing methodologies",
      "Location-based service testing",
      "Transportation workflow optimization"
    ]
  },
  {
    id: "proj-024",
    title: "AESI Multi-vendor E-commerce",
    description: "AESI is a multi-vendor e-commerce platform integrating products from various stores and brands. This project involved end-to-end testing on a B2B and B2G PWA platform, focusing on Xendit payment integration to ensure secure transactions. Test cases covered features like electrical material ordering and inventory management, with performance testing to handle high user loads.",
    shortDescription: "Multi-vendor e-commerce platform comprehensive testing",
    image: "/images/projects/aesi-ecommerce.png",
    technologies: ["Xendit", "PWA", "Postman", "Playwright", "Multi-vendor", "B2B/B2G"],
    category: "QA Testing",
    githubUrl: "https://github.com/rivkyriyantoro/aesi-testing",
    featured: false,
    status: "completed",
    startDate: "2024-05-01",
    endDate: "2024-09-01",
    highlights: [
      "Multi-vendor e-commerce testing",
      "Xendit payment security validation",
      "B2B/B2G transaction testing",
      "Electrical material ordering system"
    ],
    challenges: [
      "Multi-vendor integration coordination",
      "Complex inventory management testing",
      "High-load e-commerce performance"
    ],
    learnings: [
      "Multi-vendor platform testing",
      "E-commerce security protocols",
      "Vendor management system optimization"
    ]
  },
  {
    id: "proj-025",
    title: "KAVE POS System",
    description: "KAVE POS is a Point of Sale system designed to optimize transaction processing and business operations for small to medium-sized businesses. This project involved testing key features such as payment processing, inventory management, and financial reporting. Test cases were executed to validate functionality, and performance testing ensured the system could handle high transaction volumes.",
    shortDescription: "Point of Sale system comprehensive testing",
    image: "/images/projects/kave-pos.png",
    technologies: ["POS System", "Postman", "Playwright", "Payment Processing", "Inventory Management"],
    category: "QA Testing",
    githubUrl: "https://github.com/rivkyriyantoro/kave-pos-testing",
    featured: false,
    status: "completed",
    startDate: "2024-07-01",
    endDate: "2024-11-01",
    highlights: [
      "POS system comprehensive testing",
      "Payment processing validation",
      "Inventory management testing",
      "High-volume transaction testing"
    ],
    challenges: [
      "Real-time transaction processing",
      "Inventory synchronization testing",
      "Financial reporting accuracy"
    ],
    learnings: [
      "POS system testing methodologies",
      "Retail transaction optimization",
      "Business operation automation"
    ]
  },
  {
    id: "proj-026",
    title: "EduLoan - Mantle Network",
    description: "Developed and deployed EduLoan smart contracts on Mantle Network. Features educational loan DeFi mechanics, automated loan disbursement, repayment schedules, and contract testing using Foundry.",
    shortDescription: "EduLoan DeFi smart contracts and web platform deployed on Mantle Network",
    image: "/images/projects/eduloan.png",
    technologies: ["Solidity", "Foundry", "Mantle Network", "Smart Contracts", "DeFi", "Web3"],
    category: "Web Development",
    liveUrl: "https://docs.ethjkt.com/docs/Mantle-Co-Learning-Camp/foundry-eduloan/foundry-eduloan-workshop",
    featured: true,
    status: "completed",
    startDate: "2024-05-01",
    endDate: "2024-06-01",
    highlights: [
      "EduLoan smart contract implementation and architecture",
      "Automated unit and fuzz testing using Foundry Forge",
      "Deployment and contract verification on Mantle Sepolia testnet",
      "Gas optimization and security analysis"
    ],
    challenges: [
      "Handling educational loan repayment schedules in Solidity",
      "Simulating multi-party loan scenarios with Forge tests",
      "Mantle Layer 2 testnet configuration and deployment"
    ],
    learnings: [
      "Foundry framework workflows (forge, cast, anvil)",
      "Mantle Network L2 ecosystem and deployment",
      "DeFi lending protocols and smart contract testing"
    ]
  },
  {
    id: "proj-027",
    title: "Organization Election DApp - Arbitrum",
    description: "Decentralized voting application (DApp) for organizational leadership elections built on Arbitrum. Implemented tamper-proof voting smart contracts, transparent tallying, role-based voter authorization, and frontend integration.",
    shortDescription: "Decentralized election voting DApp and governance smart contracts on Arbitrum L2",
    image: "/images/projects/digital-transformation.png",
    technologies: ["Solidity", "Arbitrum", "Smart Contracts", "Ethers.js", "React", "Web3"],
    category: "Web Development",
    featured: true,
    status: "completed",
    startDate: "2024-06-01",
    endDate: "2024-08-01",
    highlights: [
      "Secure and immutable ballot smart contract design",
      "Low-gas voting transactions using Arbitrum Layer 2",
      "Anti-double-voting validation and role-based voter registration",
      "Real-time election results via Web3 frontend"
    ],
    challenges: [
      "Ensuring voter anonymity while maintaining voter verification",
      "Optimizing gas usage for batch voter registration",
      "Handling transaction state updates on L2"
    ],
    learnings: [
      "Arbitrum rollup architecture and deployment mechanics",
      "Decentralized governance and voting smart contract patterns",
      "Web3 frontend integration with wallet providers"
    ]
  },
  {
    id: "proj-028",
    title: "Building Parking Payment Smart Contract - Ethereum",
    description: "Automated parking payment system backed by Ethereum smart contracts. Calculates parking duration and tariffs automatically, processes on-chain payments, and issues verifiable digital parking passes.",
    shortDescription: "Ethereum-based building parking payment and automated tariff smart contract",
    image: "/images/projects/inventory-system.png",
    technologies: ["Solidity", "Ethereum", "Smart Contracts", "Hardhat", "Web3.js", "Next.js"],
    category: "Web Development",
    featured: true,
    status: "completed",
    startDate: "2024-08-01",
    endDate: "2024-10-01",
    highlights: [
      "Automated time-based parking fee calculation smart contract",
      "Secure ETH payment escrow and instant checkout flow",
      "Verifiable on-chain parking receipt/pass token generation",
      "Comprehensive test coverage using Hardhat framework"
    ],
    challenges: [
      "Accurate block timestamp handling for parking duration calculation",
      "Secure refund handling for overpayment and tariff adjustments",
      "Minimizing gas costs during peak parking check-in/out"
    ],
    learnings: [
      "Smart contract payment lifecycle and escrow design",
      "Hardhat testing, simulation, and gas reporting",
      "Real-world IoT and Web3 payment integration patterns"
    ]
  },
  {
    id: "proj-029",
    title: "Tembi Historical Home - Heritage Hotel Platform",
    description: "Developed a bilingual web-based heritage hotel and cultural tourism platform utilizing Next.js, TypeScript, and Tailwind CSS. Built custom admin CMS for room booking, venue reservations, event management, and integrated Xendit payment gateway.",
    shortDescription: "Bilingual heritage hotel booking and cultural venue reservation platform with Xendit integration",
    image: "/images/projects/school-website.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MySQL", "Xendit", "REST API"],
    category: "Web Development",
    featured: true,
    status: "completed",
    startDate: "2023-08-01",
    endDate: "2023-12-01",
    highlights: [
      "Bilingual guest booking flow with real-time room availability calendar",
      "Seamless Xendit payment gateway integration for automated booking confirmation",
      "Custom admin dashboard for room pricing, package offerings, and venue management",
      "Responsive design optimized for international tourists and mobile visitors"
    ],
    challenges: [
      "Managing bilingual content synchronization across room catalogs and events",
      "Handling real-time booking reservation locks to prevent overbooking",
      "Optimizing image-heavy cultural heritage assets for fast web load times"
    ],
    learnings: [
      "Hospitality booking workflow and payment escrow architectures",
      "Next.js server-side rendering for localized SEO and performance",
      "Payment gateway webhook verification and automated booking state handling"
    ]
  },
  {
    id: "proj-030",
    title: "Loista - Company Profile & Business Management",
    description: "Developed a modern company profile and business catalog platform using Laravel and React.js. Implemented dynamic product showcases, inventory inquiry tracking, company portfolio presentation, and smooth inquiry workflows.",
    shortDescription: "Corporate company profile and dynamic product catalog platform built with Laravel and React",
    image: "/images/projects/corporate-portfolio.png",
    technologies: ["Laravel", "React.js", "MySQL", "Tailwind CSS", "REST API", "PHP"],
    category: "Web Development",
    featured: true,
    status: "completed",
    startDate: "2023-04-01",
    endDate: "2023-07-01",
    highlights: [
      "Interactive corporate presentation and product catalog browsing experience",
      "CMS admin module for easy content, service, and inventory showcase updates",
      "Direct customer inquiry and lead capture pipeline integration",
      "Fast rendering and SEO optimization for corporate branding"
    ],
    challenges: [
      "Designing a clean UI that accommodates diverse industrial product specifications",
      "Ensuring responsive layout fidelity across complex multi-tier service catalogs",
      "Balancing high-resolution showcase media with minimal page load latency"
    ],
    learnings: [
      "Corporate brand storytelling through interactive UI/UX architecture",
      "Laravel RESTful API design paired with modern React frontend components",
      "Client CMS customization and non-technical admin user onboarding"
    ]
  }
]

export const cmsContent: CMSContent = {
  workExperiences,
  featuredProjects,
  lastUpdated: new Date().toISOString(),
  version: "1.0.0"
}

export default cmsContent