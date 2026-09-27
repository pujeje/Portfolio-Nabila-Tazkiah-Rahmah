import { PortfolioData } from '../types/portfolio';
import heroPortrait from '../assets/images/profile.jpeg';
import projectAirQuality from '../assets/images/Air_Quality.png';
import projectFinTrack from '../assets/images/FinTrack.png';
import projectAcademicFigma from '../assets/images/figma.png';
import projectVolunteer from '../assets/images/volunteer.jpeg';
import projectRetailSales from '../assets/images/retail.png';
import cvImage from '../assets/images/CV_Nabila Tazkiah Rahmah.png';

export const initialPortfolioData: PortfolioData = {
  profile: {
    name: 'Nabila Tazkiah Rahmah',
    title: 'Computer Science Student',
    institution: 'Bina Nusantara University',
    tagline: 'Transforming complex data into meaningful insights and crafting human-centered digital experiences.',
    bio: 'I am Nabila Tazkiah Rahmah, a Computer Science student at Bina Nusantara University. My interests lie in UI/UX design and data analytics, where I enjoy transforming complex data into meaningful insights and create impactful digital solutions that are not only functional but also designed with a user-friendly interface. I am committed to continuously developing my skills, whether in data analytics, UI/UX design, or other areas of computer science, to grow both technically and personally.',
    avatarUrl: heroPortrait,
    location: 'Jakarta, Indonesia',
    email: 'nabilatazkiahrahmah@gmail.com',
    phone: '085772311049',
    availableForHire: true,
    availabilityText: 'Open for Data Analytics, UI/UX, & Tech Roles',
    cvUrl: '',
    cvImageUrl: cvImage,
    socials: [
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/nabilatzkh', label: 'linkedin.com/in/nabilatzkh' },
      { platform: 'Email', url: 'mailto:nabilatazkiahrahmah@gmail.com', label: 'nabilatazkiahrahmah@gmail.com' },
      { platform: 'WhatsApp', url: 'https://wa.me/6285772311049', label: '+62 857-7231-1049' },
      { platform: 'GitHub', url: 'https://github.com/pujeje', label: 'github.com/pujeje' },
    ],
    stats: [
      { label: 'Featured Projects', value: '5+', subtext: 'ETL Pipelines, Web, UI/UX & Analytics' },
      { label: 'University', value: 'BINUS', subtext: 'Computer Science Department' },
      { label: 'Core Focus', value: 'UI/UX & Data', subtext: 'Human-Centered & Data-Driven' },
    ],
  },
  projects: [
    {
      id: 'etl-polusi-udara',
      title: 'Automated ETL for Air Quality Data & Power BI Visualization',
      category: 'Data Engineering',
      year: '2026',
      role: 'Data Engineer',
      projectType: 'Group Project',
      summary: 'Automated ETL pipeline using Pentaho Spoon and phpMyAdmin to process air quality data from five monitoring stations in Jakarta, visualized through an interactive Power BI dashboard.',
      description: 'Developed an automated ETL pipeline using Pentaho Spoon ETL and phpMyAdmin to process air quality data from five monitoring stations in Jakarta. The cleaned dataset was integrated into Power BI, resulting in an interactive dashboard that supports analysis of pollution trends. This project enabled structured environmental data analysis and taught me how to automate ETL workflows, manage databases, and collaborate effectively in a group setting.',
      image: projectAirQuality,
      tags: ['Pentaho Spoon ETL', 'phpMyAdmin', 'Power BI', 'MySQL', 'Automated Pipeline'],
      metrics: 'Integrated 5 Monitoring Stations Across Jakarta',
      liveUrl: 'https://binusianorg-my.sharepoint.com/my?id=%2Fpersonal%2Fnabila%5Frahmah001%5Fbinus%5Fac%5Fid%2FDocuments%2FProject&ga=1',
      links: [
        { label: 'Project Documentation', url: 'https://binusianorg-my.sharepoint.com/my?id=%2Fpersonal%2Fnabila%5Frahmah001%5Fbinus%5Ac%5Fid%2FDocuments%2FProject&ga=1', type: 'github' }
      ],
      deliverables: [
        'Automated ETL Workflow via Pentaho Spoon',
        'Database Schema & Data Cleaning in phpMyAdmin',
        'Interactive Air Quality Dashboard in Power BI',
        'Multi-Station Pollution Trend Analysis',
      ],
      challenge: 'Raw records from five distinct monitoring stations contained fragmented schemas, missing values, and varying temporal intervals.',
      solution: 'Constructed an automated staging transformation pipeline (Transformation 1-6 & Fact Table) standardizing PM2.5, PM10, SO2, CO, and NO2 metrics seamlessly.',
    },
    {
      id: 'fintrack-finance-web',
      title: 'FinTrack — Personal Finance Management Web Application',
      category: 'Full-stack Development',
      year: '2026',
      role: 'Full-stack Developer',
      projectType: 'Group Project',
      summary: 'A clean, responsive financial management web platform tailored for young users, engineered with Python backend, HTML & CSS frontend, and SQLite.',
      description: 'Designed and developed a financial website tailored for young users, with Python for backend, HTML & CSS for frontend, and SQLite for database management. The project emphasized responsive design and smooth navigation, showcased through a demo presentation. This work provided a practical platform for financial tracking and strengthened my skills in full-stack development, user friendly interface, and teamwork.',
      image: projectFinTrack,
      tags: ['Python Backend', 'HTML & CSS', 'SQLite Database', 'Responsive Web', 'Full-stack'],
      metrics: 'Lightweight UI & Evaluated Through Live Demo Presentation',
      liveUrl: 'https://binusianorg-my.sharepoint.com/my?id=%2Fpersonal%2Fnabila%5Frahmah001%5Fbinus%5Ac%5Fid%2FDocuments%2FProject%20Software%20Engineering&ga=1',
      links: [
        { label: 'Project Documentation', url: 'https://binusianorg-my.sharepoint.com/my?id=%2Fpersonal%2Fnabila%5Frahmah001%5Fbinus%5Ac%5Fid%2FDocuments%2FProject%20Software%20Engineering&ga=1', type: 'github' }
      ],
      deliverables: [
        'Responsive Frontend Architecture (HTML & CSS)',
        'Python Web Backend & Business Logic',
        'SQLite Relational Database Schema',
        'Interactive Income vs. Expense Donut Charts',
      ],
      challenge: 'Young adults often feel overwhelmed tracking daily expenses when traditional financial applications are cluttered and unintuitive.',
      solution: 'Created an uncluttered, modern interface with categorized spending donut charts, quick summary cards, and friction-free navigation.',
    },
    {
      id: 'academic-dashboard-figma',
      title: 'Academic Dashboard & Multi-Website Designs',
      category: 'UI/UX & Product Design',
      year: '2024 – 2026',
      role: 'UI/UX Designer',
      projectType: 'Individual & Collaborative Projects',
      summary: 'A comprehensive collection of four website design projects in Figma, emphasizing intuitive academic dashboards and consistent visual systems.',
      description: 'Created multiple website design projects using Figma, combining four works into one comprehensive portfolio. Some designs were developed collaboratively with peers, while others were created independently. The projects focused on intuitive academic dashboards and user-friendly interfaces. This experience improved my ability to design consistent visual systems, balance collaboration with independent creativity, and communicate ideas effectively through design.',
      image: projectAcademicFigma,
      tags: ['Figma', 'UI/UX Design', 'Academic Dashboard', 'Design Systems', 'Prototyping'],
      metrics: '4 Cohesive Web Interfaces with Unified Design Guidelines',
      liveUrl: 'https://binusianorg-my.sharepoint.com/my?id=%2Fpersonal%2Fnabila%5Frahmah001%5Fbinus%5Fac%5Fid%2FDocuments%2FProject%20Figma&ga=1',
      links: [
        { label: 'Figma Prototype', url: 'https://binusianorg-my.sharepoint.com/my?id=%2Fpersonal%2Fnabila%5Frahmah001%5Fbinus%5Fac%5Fid%2FDocuments%2FProject%20Figma&ga=1', type: 'figma' },
      ],
      deliverables: [
        'Academic Student Portal & Schedule Dashboard',
        'Mobile E-Commerce Plant Store (Floral & Co)',
        'Coffee Shop & F&B Digital Menu Experience',
        'High-Fidelity Interactive Prototypes in Figma',
      ],
      challenge: 'Balancing data-heavy student schedules and grade metrics with clean, approachable aesthetics that prevent cognitive overload.',
      solution: 'Structured a modular card system with soft eye-friendly pastel tones and deliberate typographic hierarchy for effortless navigation.',
    },
    {
      id: 'retail-sales-analysis',
      title: 'Retail Sales Pattern Analysis & Interactive BI Dashboard',
      category: 'Data Analytics & BI',
      year: '2026',
      role: 'Data Preparation & Visualization',
      projectType: 'Group Project',
      summary: 'Data preparation and interactive Power BI dashboard visualizing product sales patterns, seasonal trends, and customer buying behavior from a Kaggle retail dataset.',
      description: 'As part of the team, I was responsible for data preparation, drawing on a raw retail sales dataset from Kaggle. I then developed an interactive dashboard using Power BI to visualize product sales patterns, seasonal trends, and customer behavior. This project provided a reliable dataset and clear visualizations that support better business decision-making. Through this experience, I learned how to transform messy data into meaningful insights, strengthened my skills in data cleaning, visualization, and analytical thinking, and gained valuable collaboration experience on team-based projects.',
      image: projectRetailSales,
      tags: ['Power BI', 'Data Cleaning', 'Kaggle Dataset', 'Sales Trends', 'Business Intelligence'],
      metrics: 'Turned Complex Raw Datasets into Strategic Actionable Insights',
      liveUrl: 'https://binusianorg-my.sharepoint.com/my?id=%2Fpersonal%2Fnabila%5Frahmah001%5Fbinus%5Fac%5Fid%2FDocuments%2FProject%20Data%20Analytics%20%26%20Data%20Visualization&ga=1',
      links: [
        { label: 'Project Documentation', url: 'https://binusianorg-my.sharepoint.com/my?id=%2Fpersonal%2Fnabila%5Frahmah001%5Fbinus%5Fac%5Fid%2FDocuments%2FProject%20Data%20Analytics%20%26%20Data%20Visualization&ga=1', type: 'powerbi' }
      ],
      deliverables: [
        'Data Cleaning & Preprocessing Workflow',
        'Interactive Superstore Sales Dashboard',
        'Product Sub-category & Profit Breakdown',
        'Geographic & Regional Sales Map Analytics',
      ],
      challenge: 'Large-scale multi-category retail datasets contained anomalies, missing variables, and multi-layered product hierarchies.',
      solution: 'Executed structured data cleaning, designed profit vs. discount parameters, and built dynamic drill-down views per region and category.',
    },
    {
      id: 'volunteer-teaching-program',
      title: 'Volunteer Teaching Program — Elementary Mathematics',
      category: 'Social Impact',
      year: '2025',
      role: 'Volunteer Teacher',
      projectType: 'Social Impact & Community',
      summary: 'Conducted five interactive tutoring sessions for second-grade elementary students, fostering communication, empathy, and positive social impact.',
      description: 'I taught five tutoring sessions for second-grade students, focusing on basic mathematics. This program fostered communication, empathy, and teamwork while providing social impact through education. This experience taught me how to adapt my teaching to young students, manage the classroom atmosphere, and appreciate the importance of contributing to community development.',
      image: projectVolunteer,
      tags: ['Social Impact', 'Volunteer Teaching', 'Public Communication', 'Empathy', 'Teamwork'],
      metrics: 'Interactive Tutoring Sessions for 2nd Grade Students',
      liveUrl: '',
      links: [
        { label: 'Documentation & Activities', url: '', type: 'drive' },
      ],
      deliverables: [
        'Interactive Math Tutoring Sessions',
        'Engaging Educational Games & Activities',
        'Classroom Atmosphere & Empathy Management',
        'Community Social Development Impact',
      ],
      challenge: 'Making abstract early mathematical concepts intuitive, fun, and memorable for energetic young children.',
      solution: 'Blended visual learning aids, collaborative games, and warm, encouraging mentorship tailored to each student\'s learning pace.',
    },
  ],
  pillars: [
    {
      tag: '01. Purpose',
      title: 'Interest & Motivation',
      subtitle: 'Continuous Growth & Lifelong Learning',
      description: 'I am excited to join BelajarLinkedin because it provides a supportive environment where people come together to learn and grow. My motivation comes from a strong desire to deepen the knowledge I’ve gained during my studies and to continuously explore new skills. I enjoy learning new things, I don’t give up easily, and I believe this program is the right place for me to challenge myself and thrive.',
      iconName: 'sparkles',
    },
    {
      tag: '02. Craft',
      title: 'Creativity & Expression',
      subtitle: 'Designing with Empathy & Clarity',
      description: 'I enjoy expressing ideas through design and visuals, such as creating mockups in Figma or interactive dashboards in Power BI. For me, creativity is not only about aesthetics, but also about ensuring that others can easily understand the message without lengthy explanations. With strong empathy and sensitivity, I strive to design solutions that make people’s work easier and more intuitive, turning my ideas into meaningful outcomes that support users in their daily tasks.',
      iconName: 'compass',
    },
    {
      tag: '03. Synergy',
      title: 'Interdisciplinary Potential',
      subtitle: 'Bridging Data Logic & Human Experience',
      description: 'I’ve learned how to combine technical skills with visual communication by studying data engineering while also exploring UI/UX design. I enjoy turning processed data into clear visualizations so that messages can be easily understood. My experience in social projects, such as the teaching program, also helped me explain ideas more clearly and connect with different audiences. These diverse experiences allow me to think across disciplines, bring together different perspectives into one meaningful outcome, and make exploring new fields an exciting journey.',
      iconName: 'layers',
    },
    {
      tag: '04. Integrity',
      title: 'Work Ethic & Excellence',
      subtitle: 'Consistency, Perseverance & Teamwork',
      description: 'I approach every project with consistency, perseverance, and attention to detail. I\'m persistent and always strive for the best results, whether working independently or as part of a team. I also possess excellent communication skills to perform well in a team. My projects reflect not only technical execution but also the discipline and commitment I place on the process. I believe excellence is achieved through continuous effort, and I\'m driven by continuous improvement while supporting others in achieving their goals.',
      iconName: 'heartHandshake',
    },
  ],
  education: [
    {
      id: 'edu-binus',
      institution: 'Bina Nusantara University (BINUS)',
      degree: 'Bachelor of Computer Science',
      period: '2023 – Present',
      details: 'Focusing on software engineering, data structures, data engineering, UI/UX design, and business analytics.',
    },
  ],
  skillCategories: [
    {
      category: 'UI/UX & Product Design',
      description: 'Crafting user-friendly, aesthetically engaging, and accessible digital interfaces.',
      skills: ['Figma', 'Wireframing & Prototyping', 'Design Systems', 'User Interface (UI)', 'User Experience (UX)', 'Visual Storytelling'],
    },
    {
      category: 'Data Analytics & Engineering',
      description: 'Transforming complex data pipelines into clear, actionable business insights.',
      skills: ['Power BI', 'Pentaho Spoon ETL', 'phpMyAdmin & MySQL', 'Data Cleaning', 'Data Preparation', 'Trend Analysis'],
    },
    {
      category: 'Programming & Web Dev',
      description: 'Technical foundation for building scalable, responsive web solutions.',
      skills: ['Python', 'HTML5 & CSS3', 'SQLite', 'Git & GitHub Basics', 'Database Management', 'Responsive Design'],
    },
    {
      category: 'Soft Skills & Leadership',
      description: 'Interpersonal competencies that empower empathetic team collaboration.',
      skills: ['Communication & Empathy', 'Team Collaboration', 'Detail-Oriented', 'Problem Solving', 'Adaptability', 'Volunteer Mentorship'],
    },
  ],
};
