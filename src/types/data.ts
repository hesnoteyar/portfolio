import { Project, Skill, PersonalInfo, Education, WorkExperience } from './types';

export const personalInfo: PersonalInfo = {
  name: "hesnoteyar",
  title: "Full Stack Developer & Founder",
  bio: "Passionate developer and entrepreneur with expertise in Android development, web technologies, and cloud infrastructure. Founder & CEO of AxionByte, a technology startup focused on innovative software solutions. Currently pursuing BS Information Technology while building innovative applications and leading a growing tech company.",
  email: "hesnoteyar@example.com",
  linkedinUrl: "https://linkedin.com/in/hesnoteyar",
  githubUrl: "https://github.com/hesnoteyar",
  instagramUrl: "https://instagram.com/hesnoteyar"
};

export const skills: Skill[] = [
  { name: "Java", category: "languages", proficiency: 95 },
  { name: "PHP", category: "languages", proficiency: 90 },
  { name: "JavaScript", category: "languages", proficiency: 85 },
  { name: "Python", category: "languages", proficiency: 80 },
  { name: "Android", category: "frontend", proficiency: 95 },
  { name: "React", category: "frontend", proficiency: 85 },
  { name: "HTML/CSS", category: "frontend", proficiency: 90 },
  { name: "Bootstrap", category: "frontend", proficiency: 85 },
  { name: "MySQL", category: "backend", proficiency: 90 },
  { name: "Firebase", category: "backend", proficiency: 85 },
  { name: "Apache", category: "backend", proficiency: 80 },
  { name: "AWS", category: "tools", proficiency: 75 },
  { name: "Docker", category: "tools", proficiency: 70 },
  { name: "Git", category: "tools", proficiency: 90 }
];

export const education: Education[] = [
  {
    id: "1",
    institution: "University",
    degree: "Bachelor of Science",
    field: "Information Technology",
    startDate: "2021",
    endDate: "Present",
    description: "Currently pursuing a comprehensive degree in Information Technology with focus on software development, systems analysis, and emerging technologies."
  },
  {
    id: "2",
    institution: "Senior High School",
    degree: "Senior High School",
    field: "Information and Communication Technology",
    startDate: "2019",
    endDate: "2021",
    description: "Specialized in ICT strand, building foundation in programming, web development, and computer systems."
  },
  {
    id: "3",
    institution: "Junior High School",
    degree: "Junior High School Diploma",
    field: "General Education",
    startDate: "2015",
    endDate: "2019",
    description: "Completed comprehensive secondary education with strong performance in mathematics and science subjects."
  }
];

export const workExperience: WorkExperience[] = [
  {
    id: "1",
    company: "AxionByte",
    position: "Founder & CEO",
    startDate: "2025",
    endDate: "Present",
    current: true,
    description: "Founded and leading AxionByte, a technology startup focused on innovative software solutions and digital transformation.",
    responsibilities: [
      "Strategic planning and business development",
      "Leading technical architecture and development teams",
      "Client relationship management and project oversight",
      "Product development and market expansion",
      "Building company culture and hiring top talent"
    ],
    achievements: [
      "Successfully launched multiple client projects",
      "Built a team of skilled developers and designers",
      "Established partnerships with key technology vendors",
      "Developed proprietary tools and frameworks"
    ]
  }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "ISMS Inventory Management System",
    description: "Comprehensive inventory management system for tracking stock levels, managing suppliers, and generating reports. Features real-time updates and user role management.",
    technologies: ["PHP", "MySQL", "HTML/CSS", "JavaScript", "Bootstrap"],
    githubUrl: "https://github.com/hesnoteyar/isms-inventory"
  },
  {
    id: "2",
    title: "Messaging App",
    description: "Real-time messaging application for Android with features like group chats, file sharing, and offline message sync. Built with modern Android development practices.",
    technologies: ["Java", "Android SDK", "Firebase", "Material Design"],
    githubUrl: "https://github.com/hesnoteyar/messaging-app"
  },
  {
    id: "3",
    title: "Foodify Web",
    description: "Food ordering and delivery web application with restaurant management, menu customization, and order tracking capabilities.",
    technologies: ["PHP", "MySQL", "JavaScript", "CSS3", "AJAX"],
    githubUrl: "https://github.com/hesnoteyar/foodify-web"
  },
  {
    id: "4",
    title: "Capstone Project",
    description: "Final year capstone project implementing a comprehensive solution for academic and administrative management with advanced features and integrations.",
    technologies: ["PHP", "MySQL", "JavaScript", "Chart.js", "PDF Generation"],
    githubUrl: "https://github.com/hesnoteyar/capstone-project"
  },
  {
    id: "5",
    title: "Employee Management System",
    description: "Complete HR management system with employee records, payroll processing, attendance tracking, and performance evaluation modules.",
    technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript", "Session Management"],
    githubUrl: "https://github.com/hesnoteyar/employee-management"
  },
  {
    id: "6",
    title: "Certificates Repository",
    description: "Digital certificate management and verification system for storing, organizing, and validating educational and professional certificates.",
    technologies: ["PHP", "MySQL", "QR Code", "PDF", "Responsive Design"],
    githubUrl: "https://github.com/hesnoteyar/certificates-repo"
  }
];