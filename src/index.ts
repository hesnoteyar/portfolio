import './styles.css';
import { Portfolio } from './components/Portfolio';

document.addEventListener('DOMContentLoaded', () => {
  new Portfolio();
  
  // Animate skill bars when they come into view
  const skillBars = document.querySelectorAll('.skill-progress');
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progressBar = entry.target as HTMLElement;
        const width = progressBar.getAttribute('data-width');
        if (width) {
          setTimeout(() => {
            progressBar.style.width = width + '%';
          }, 300);
        }
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  skillBars.forEach(bar => skillObserver.observe(bar));
});

// Add smooth scrolling polyfill for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
  const smoothScroll = (target: Element) => {
    const navHeight = document.querySelector('nav')?.offsetHeight || 0;
    const targetPosition = (target as HTMLElement).offsetTop - navHeight - 20;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  };

  // Override smooth scrolling for older browsers
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target.matches('a[data-section]')) {
      e.preventDefault();
      const sectionId = target.getAttribute('data-section');
      const element = document.getElementById(sectionId || '');
      if (element) {
        smoothScroll(element);
      }
    }
  });
}