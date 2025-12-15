import { personalInfo, skills, projects, education, workExperience } from '../types/data';
import { Project, Skill, Education, WorkExperience } from '../types/types';

export class Portfolio {
  private typingIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typingTexts = [
    "Full Stack Developer",
    "Android Developer", 
    "Web Developer",
    "Cybersecurity Enthusiast"
  ];

  constructor() {
    this.init();
  }

  private init(): void {
    this.renderHero();
    this.renderAbout();
    this.renderTechStack();
    this.renderExperience();
    this.renderProjects();
    this.renderContact();
    this.setupNavigation();
    this.setupScrollAnimations();
    this.startTypingAnimation();
  }

  private startTypingAnimation(): void {
    const typingElement = document.querySelector('.typing-container');
    if (!typingElement) return;

    const typeWriter = () => {
      const currentText = this.typingTexts[this.typingIndex];
      
      if (this.isDeleting) {
        // Deleting text
        typingElement.innerHTML = currentText.substring(0, this.charIndex - 1) + '<span class="cursor">|</span>';
        this.charIndex--;
        
        if (this.charIndex === 0) {
          this.isDeleting = false;
          this.typingIndex = (this.typingIndex + 1) % this.typingTexts.length;
          setTimeout(typeWriter, 500); // Pause before typing next word
          return;
        }
        
        setTimeout(typeWriter, 50); // Consistent deleting speed
      } else {
        // Typing text
        typingElement.innerHTML = currentText.substring(0, this.charIndex + 1) + '<span class="cursor">|</span>';
        this.charIndex++;
        
        if (this.charIndex === currentText.length) {
          setTimeout(() => {
            this.isDeleting = true;
            typeWriter();
          }, 2000); // Pause after completing word
          return;
        }
        
        setTimeout(typeWriter, 100); // Consistent typing speed
      }
    };

    typeWriter();
  }

  private renderHero(): void {
    const heroSocialEl = document.querySelector('.hero-social');
    const scrollIndicatorEl = document.querySelector('.scroll-indicator');
    
    // Update hero name with cleaner styling
    const heroNameEl = document.getElementById('hero-name');
    if (heroNameEl) {
      heroNameEl.innerHTML = '<  hesnoteyar  / >';
    }
    
    if (heroSocialEl) {
      heroSocialEl.innerHTML = `
        <a href="https://github.com/hesnoteyar" target="_blank" class="social-link">
          <i class="fab fa-github"></i>
        </a>
        <a href="mailto:jrsaranza92@email.com" class="social-link">
          <i class="fas fa-envelope"></i>
        </a>
        <a href="https://www.linkedin.com/in/noel-saranza-626111256/" target="_blank" class="social-link">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/_.eyar/" target="_blank" class="social-link">
          <i class="fab fa-instagram"></i>
        </a>
      `;
    }

    if (scrollIndicatorEl) {
      scrollIndicatorEl.innerHTML = '<div class="scroll-arrow"></div>';
    }

    // Add glow effect to avatar
    const avatarImg = document.getElementById('avatar-img');
    if (avatarImg) {
      const glowDiv = document.createElement('div');
      glowDiv.className = 'avatar-glow';
      avatarImg.parentElement?.appendChild(glowDiv);
    }
  }

  private renderAbout(): void {
    const aboutContentEl = document.querySelector('.about-content');
    if (aboutContentEl) {
      aboutContentEl.innerHTML = `
        <div class="about-text">
          <div style="text-align: left; margin-bottom: 1rem; color: var(--text-muted); font-family: var(--font-mono); font-size: 0.9rem;">
            // about_me
          </div>
          <p id="about-bio">
            I'm a passionate developer specializing in full-stack development with expertise in 
            mobile applications, web technologies, and cybersecurity. Recently graduated with a degree 
            in Information Technology major in Cybersecurity, building innovative solutions and contributing 
            to the tech community.
          </p>
        </div>
        <div class="about-highlights">
          <div class="highlight-card">
            <div class="highlight-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" alt="Android" style="width: 48px; height: 48px;">
            </div>
            <h3>Android Development</h3>
            <p>Building native Android applications with Java and modern development practices</p>
          </div>
          <div class="highlight-card">
            <div class="highlight-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="Web" style="width: 48px; height: 48px;">
            </div>
            <h3>Web Development</h3>
            <p>Creating responsive web applications using modern frameworks and technologies</p>
          </div>
          <div class="highlight-card">
            <div class="highlight-icon">
              <img src="https://www.kali.org/images/kali-dragon-icon.svg" alt="Cybersecurity" style="width: 48px; height: 48px;">
            </div>
            <h3>Cybersecurity</h3>
            <p>Specializing in network security, ethical hacking, and information systems protection</p>
          </div>
          <div class="highlight-card">
            <div class="highlight-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Systems" style="width: 48px; height: 48px;">
            </div>
            <h3>Cloud-Based Systems</h3>
            <p>Developing distributed systems and microservices for cloud environments</p>
          </div>
        </div>
      `;
    }
  }

  private renderTechStack(): void {
    const techGridEl = document.getElementById('tech-grid');
    if (techGridEl) {
      const technologies = [
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Android', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
        { name: 'Laravel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
        { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
        { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
        { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
        { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
        { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
        { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' }
      ];

      techGridEl.innerHTML = `
        <div class="tech-stack-container">
          <div style="text-align: left; margin-bottom: 1rem; color: var(--text-muted); font-family: var(--font-mono); font-size: 0.9rem;">
            // tech_stack
          </div>
          <div class="tech-icons-grid">
            ${technologies.map(tech => `
              <div class="tech-icon-item" data-tech="${tech.name}">
                <img src="${tech.logo}" alt="${tech.name}" class="tech-logo">
                <span class="tech-tooltip">${tech.name}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }
  }

  private renderExperience(): void {
    // Use a more specific selector to ensure we're targeting the right element
    const timelineEl = document.querySelector('#experience .timeline');
    if (timelineEl) {
      const experienceData = [
        {
          company: 'AxionByte',
          position: 'Founder & CEO',
          period: '2025-Present',
          status: 'Current',
          description: 'Founded and leading AxionByte, a technology startup focused on innovative software solutions and digital transformation. Building a team of skilled developers and establishing partnerships with key technology vendors.'
        },
        {
          company: 'University of Makati',
          position: 'BS Information Technology Major in Cybersecurity',
          period: '2021-2025',
          status: 'Graduated',
          description: 'Graduated August 2025 with specialization in cybersecurity, focusing on network security, ethical hacking, and information systems protection.'
        },
        {
          company: 'Department of Trade and Industry',
          position: 'Internship - QA & Full Stack Developer',
          period: '2024-2025',
          status: 'Completed',
          description: 'Gained practical experience in quality assurance testing and full-stack development, working on government digital transformation projects.'
        },
        {
          company: 'University of Makati',
          position: 'Senior High School ICT',
          period: '2019-2021',
          status: 'Completed',
          description: 'Specialized in Information and Communications Technology track with focus on programming fundamentals and computer systems.'
        },
        {
          company: 'Fort Bonifacio Elementary School',
          position: 'Junior High School',
          period: '2015-2019',
          status: 'Completed',
          description: 'General education with early exposure to computer science and technology fundamentals.'
        }
      ];

      timelineEl.innerHTML = experienceData.map((exp, index) => `
        <div class="timeline-item">
          <div class="timeline-content">
            <span class="timeline-date">${exp.period}</span>
            <h3>${exp.position}</h3>
            <h4>${exp.company}</h4>
            <p>${exp.description}</p>
          </div>
          <div class="timeline-dot"></div>
        </div>
      `).join('');
    }
  }

  private getTechLogo(tech: string): string {
    const techLogos: { [key: string]: string } = {
      'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
      'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
      'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
      'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
      'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
      'PHP': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
      'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
      'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
      'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
      'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
      'CSS3': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
      'Bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
      'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg',
      'Android SDK': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg',
      'SQLite': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg',
      'XML': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xml/xml-original.svg',
      'Chart.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'
    };
    return techLogos[tech] || '';
  }

  private renderProjects(): void {
    const projectsGridEl = document.getElementById('projects-grid');
    if (projectsGridEl) {
      const projectsData = [
        {
          title: 'ISMS Inventory Management System',
          description: 'A comprehensive inventory management system built with PHP for tracking and managing stock levels, orders, and suppliers.',
          technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
          github: 'https://github.com/hesnoteyar/isms-inventory',
          image: './ISMSInventory.png'
        },
        {
          title: 'Messaging App',
          description: 'Real-time messaging application for Android devices with features like group chats, file sharing, and push notifications.',
          technologies: ['Java', 'Android SDK', 'Firebase', 'XML', 'SQLite'],
          github: 'https://github.com/hesnoteyar/messaging-app',
          image: './MessagingApp.png'
        },
        {
          title: 'Foodify Web',
          description: 'Food delivery web application with restaurant management, order tracking, and payment integration.',
          technologies: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'CSS3'],
          github: 'https://github.com/hesnoteyar/foodify-web',
          image: './FoodifyWeb.png'
        },
        {
          title: 'Capstone Project',
          description: 'Final year project demonstrating full-stack development skills with modern web technologies.',
          technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'Chart.js'],
          github: 'https://github.com/hesnoteyar/capstone-project',
          image: './Capstone.png'
        },
        {
          title: 'Employee Management System',
          description: 'HR management system for handling employee records, payroll, and performance tracking.',
          technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
          github: 'https://github.com/hesnoteyar/employee-management',
          image: './EmployeeManagement.png'
        },
        {
          title: 'Certificates Repository',
          description: 'Digital repository for storing and managing academic and professional certificates with verification system.',
          technologies: [],
          github: 'https://github.com/hesnoteyar/certificates-repo',
          image: './Certificates.png'
        }
      ];

      projectsGridEl.innerHTML = projectsData.map(project => `
        <div class="project-card">
          <div class="project-image">
            <img src="${project.image}" alt="${project.title}" loading="lazy">
          </div>
          <div class="project-content">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tech">
              ${project.technologies.map(tech => {
                const logoUrl = this.getTechLogo(tech);
                return logoUrl 
                  ? `<span class="tech-item"><img src="${logoUrl}" class="tech-logo" alt="${tech}"><span class="tech-name">${tech}</span></span>`
                  : `<span class="tech-tag">${tech}</span>`;
              }).join('')}
            </div>
            <div class="project-links">
              <a href="${project.github}" class="project-link" target="_blank">GitHub</a>
            </div>
          </div>
        </div>
      `).join('');
      
      // Add centered "See More" button
      const seeMoreButton = document.createElement('div');
      seeMoreButton.className = 'projects-see-more';
      seeMoreButton.innerHTML = `
        <a href="https://github.com/hesnoteyar" target="_blank" class="cta-button">
          <i class="fab fa-github" style="margin-right: 0.5rem;"></i>
          See More on GitHub
        </a>
      `;
      projectsGridEl.appendChild(seeMoreButton);
    }
  }

  private renderContact(): void {
    const contactContentEl = document.querySelector('.contact-content');
    if (contactContentEl) {
      contactContentEl.innerHTML = `
        <div class="contact-methods">
          <div class="contact-card">
            <div class="contact-icon">
              <i class="fas fa-envelope"></i>
            </div>
            <h3>Email</h3>
            <a href="mailto:jrsaranza92@email.com">jrsaranza92@email.com</a>
          </div>
          <div class="contact-card">
            <div class="contact-icon">
              <i class="fab fa-github"></i>
            </div>
            <h3>GitHub</h3>
            <a href="https://github.com/hesnoteyar" target="_blank">@hesnoteyar</a>
          </div>
          <div class="contact-card">
            <div class="contact-icon">
              <i class="fab fa-linkedin"></i>
            </div>
            <h3>LinkedIn</h3>
            <a href="https://www.linkedin.com/in/noel-saranza-626111256/" target="_blank">Connect with me</a>
          </div>
          <div class="contact-card">
            <div class="contact-icon">
              <i class="fab fa-instagram"></i>
            </div>
            <h3>Instagram</h3>
            <a href="https://www.instagram.com/_.eyar/" target="_blank">@_.eyar</a>
          </div>
        </div>
        <div class="contact-cta">
          <a href="/CV_Saranza.pdf" class="cta-button" download="CV_Saranza.pdf">
            <i class="fas fa-download" style="margin-right: 0.5rem;"></i>
            Download My Resume
          </a>
        </div>
      `;
    }
  }

  private setupNavigation(): void {
    const navLinks = document.querySelectorAll('nav a[data-section]');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const section = (e.target as HTMLElement).getAttribute('data-section');
        if (section) {
          this.scrollToSection(section);
        }
      });
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', () => {
      this.updateActiveNavLink();
    });
  }

  private setupScrollAnimations(): void {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          
          // Animate tech progress bars
          if (entry.target.classList.contains('tech-item')) {
            const progressBar = entry.target.querySelector('.tech-progress') as HTMLElement;
            const level = entry.target.getAttribute('data-level');
            if (progressBar && level) {
              setTimeout(() => {
                progressBar.style.setProperty('--progress-width', level + '%');
                progressBar.style.width = level + '%';
              }, 200);
            }
          }
        }
      });
    }, observerOptions);

    document.querySelectorAll('.section, .tech-item, .timeline-item, .project-card, .highlight-card, .contact-card').forEach(section => {
      observer.observe(section);
    });
  }

  private scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 70;
      const targetPosition = element.offsetTop - navHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }

  private updateActiveNavLink(): void {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('nav a[data-section]');
    
    let current = '';
    sections.forEach(section => {
      const sectionTop = (section as HTMLElement).offsetTop;
      const navHeight = 70;
      
      if (window.pageYOffset >= sectionTop - navHeight - 100) {
        current = section.getAttribute('id') || '';
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-section') === current) {
        link.classList.add('active');
      }
    });
  }
}