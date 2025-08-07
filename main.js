// ====================================
// MODERN PORTFOLIO - STATE OF THE ART
// ====================================

// Modern ES6+ JavaScript with improved functionality

class PortfolioApp {
  constructor() {
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.handleLoader();
    this.setupThemeToggle();
    this.setupNavigation();
    this.setupScrollEffects();
    this.setupTypingAnimation();
    this.setupPortfolio();
    this.setupContactForm();
    this.setupAnimations();
    this.setupModal();
    this.preloadImages();
  }

  // Event Listeners
  setupEventListeners() {
    window.addEventListener('load', () => this.hideLoader());
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => this.handleKeydown(e));
  }

  // Loading Screen
  handleLoader() {
    const loader = document.getElementById('loader');
    if (loader) {
      // Minimum loading time for better UX
      setTimeout(() => {
        this.hideLoader();
      }, 1500);
    }
  }

  hideLoader() {
    const loader = document.getElementById('loader');
    const mainContainer = document.getElementById('main-container');
    
    if (loader && mainContainer) {
      loader.classList.add('hidden');
      mainContainer.style.visibility = 'visible';
      mainContainer.style.opacity = '1';
      
      // Remove loader from DOM after animation
      setTimeout(() => {
        loader.remove();
      }, 500);
    }
  }

  // Theme Toggle
  setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    
    // Get saved theme or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    this.setTheme(savedTheme);
    
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
      });
    }
  }

  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
      themeIcon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }
  }

  // Navigation
  setupNavigation() {
    const header = document.getElementById('header');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    
    // Smooth scrolling for nav links
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
          const offsetTop = targetSection.offsetTop - 80; // Account for fixed header
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
        
        // Update active nav link
        this.updateActiveNavLink(targetId);
        
        // Close mobile menu if open
        const navList = document.getElementById('nav-list');
        if (navList && navList.classList.contains('mobile-open')) {
          this.toggleMobileMenu();
        }
      });
    });

    // Mobile menu toggle
    if (mobileToggle) {
      mobileToggle.addEventListener('click', () => {
        this.toggleMobileMenu();
      });
    }
  }

  updateActiveNavLink(sectionId) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${sectionId}`) {
        link.classList.add('active');
      }
    });
  }

  toggleMobileMenu() {
    const navList = document.getElementById('nav-list');
    const hamburgerLines = document.querySelectorAll('.hamburger-line');
    
    if (navList) {
      navList.classList.toggle('mobile-open');
      
      // Animate hamburger menu
      hamburgerLines.forEach((line, index) => {
        if (navList.classList.contains('mobile-open')) {
          if (index === 0) line.style.transform = 'rotate(45deg) translate(5px, 5px)';
          if (index === 1) line.style.opacity = '0';
          if (index === 2) line.style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
          line.style.transform = 'none';
          line.style.opacity = '1';
        }
      });
    }
  }

  // Scroll Effects
  setupScrollEffects() {
    this.throttledScroll = this.throttle(this.handleScroll.bind(this), 16);
    this.throttledResize = this.throttle(this.handleResize.bind(this), 100);
    
    // Add event listeners with throttled functions
    window.addEventListener('scroll', this.throttledScroll);
    window.addEventListener('resize', this.throttledResize);
  }

  handleScroll() {
    this.updateProgressBar();
    this.updateActiveSection();
    this.handleScrollAnimations();
  }

  handleResize() {
    this.updateDimensions();
    this.repositionElements();
  }

  updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    if (!progressBar) return;

    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    progressBar.style.width = scrolled + '%';
  }

  updateActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        this.updateActiveNavLink(sectionId);
      }
    });
  }

  handleScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-aos]');
    const triggerBottom = window.innerHeight / 5 * 4;

    animatedElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < triggerBottom) {
        element.classList.add('aos-animate');
      }
    });
  }

  updateDimensions() {
    // Update any dimension-dependent calculations
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
  }

  repositionElements() {
    // Handle any responsive repositioning if needed
    const mobileBreakpoint = 768;
    if (this.windowWidth <= mobileBreakpoint) {
      // Mobile adjustments
      this.handleMobileLayout();
    } else {
      // Desktop adjustments
      this.handleDesktopLayout();
    }
  }

  handleMobileLayout() {
    // Mobile-specific layout adjustments
    const navList = document.getElementById('nav-list');
    if (navList && navList.classList.contains('mobile-open')) {
      // Close mobile menu if window is resized
      this.toggleMobileMenu();
    }
  }

  handleDesktopLayout() {
    // Desktop-specific layout adjustments
    const navList = document.getElementById('nav-list');
    if (navList) {
      navList.classList.remove('mobile-open');
      // Reset hamburger menu animation
      const hamburgerLines = document.querySelectorAll('.hamburger-line');
      hamburgerLines.forEach(line => {
        line.style.transform = 'none';
        line.style.opacity = '1';
      });
    }
  }

  // Typing Animation
  setupTypingAnimation() {
    const typingElement = document.getElementById('typing-text');
    if (!typingElement) return;

    const phrases = [
      'Full-Stack Developer',
      'React Enthusiast', 
      'Ruby on Rails Developer',
      'Open Source Contributor',
      'Problem Solver',
      'Tech Innovator'
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseDelay = 2000;

    const type = () => {
      const currentPhrase = phrases[phraseIndex];
      
      if (isDeleting) {
        typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
      }

      let delay = isDeleting ? deletingSpeed : typingSpeed;

      if (!isDeleting && charIndex === currentPhrase.length) {
        delay = pauseDelay;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }

      setTimeout(type, delay);
    };

    setTimeout(type, 1000);
  }

  // Animations
  setupAnimations() {
    // Counter animations
    this.setupCounterAnimations();
    
    // Intersection Observer for animations
    this.setupIntersectionObserver();
    
    // Floating elements
    this.setupFloatingElements();
  }

  setupCounterAnimations() {
    const counters = document.querySelectorAll('.stat-number[data-target]');
    
    const animateCounter = (counter) => {
      const target = parseInt(counter.getAttribute('data-target'));
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;
      
      const updateCounter = () => {
        current += step;
        if (current < target) {
          counter.textContent = Math.floor(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      };
      
      updateCounter();
    };

    // Use Intersection Observer to trigger when visible
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
      counterObserver.observe(counter);
    });
  }

  setupIntersectionObserver() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe elements that should animate on scroll
    const animatedElements = document.querySelectorAll('.portfolio-item, .skill-item, .about-text');
    animatedElements.forEach(el => {
      observer.observe(el);
    });
  }

  setupFloatingElements() {
    const floatingElements = document.querySelectorAll('.floating-element');
    
    floatingElements.forEach(element => {
      const speed = parseFloat(element.getAttribute('data-speed')) || 0.5;
      const amplitude = 20;
      let offset = Math.random() * Math.PI * 2;
      
      const animate = () => {
        offset += speed * 0.02;
        const y = Math.sin(offset) * amplitude;
        element.style.transform = `translateY(${y}px)`;
        requestAnimationFrame(animate);
      };
      
      animate();
    });
  }

  // Modal System
  setupModal() {
    // Modal will be created dynamically when needed
    this.createModalHTML();
    
    // Close modal on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeModal();
      }
    });
  }

  createModalHTML() {
    const modalHTML = `
      <div id="project-modal" class="modal">
        <div class="modal-overlay"></div>
        <div class="modal-content">
          <button class="modal-close" aria-label="Close modal">
            <i class="fas fa-times"></i>
          </button>
          <div class="modal-body">
            <!-- Modal content will be populated dynamically -->
          </div>
        </div>
      </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Add event listeners
    const modal = document.getElementById('project-modal');
    const modalOverlay = modal.querySelector('.modal-overlay');
    const modalClose = modal.querySelector('.modal-close');
    
    modalOverlay.addEventListener('click', () => this.closeModal());
    modalClose.addEventListener('click', () => this.closeModal());
  }

  showProjectModal(project) {
    const modal = document.getElementById('project-modal');
    const modalBody = modal.querySelector('.modal-body');
    
    modalBody.innerHTML = `
      <div class="modal-header">
        <img src="${project.image}" alt="${project.title}" class="modal-image" />
        <div class="modal-title-section">
          <h2 class="modal-title">${project.title}</h2>
          <div class="modal-tags">
            ${project.technologies.map(tech => `<span class="modal-tag">${tech}</span>`).join('')}
          </div>
        </div>
      </div>
      <div class="modal-description">
        <p>${project.description}</p>
      </div>
      <div class="modal-actions">
        <a href="${project.liveLink}" class="btn btn-primary" target="_blank" rel="noopener">
          <i class="fas fa-external-link-alt"></i>
          Live Demo
        </a>
        <a href="${project.sourceLink}" class="btn btn-secondary" target="_blank" rel="noopener">
          <i class="fab fa-github"></i>
          Source Code
        </a>
      </div>
    `;
    
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    const modal = document.getElementById('project-modal');
    if (modal) {
      modal.classList.remove('show');
      document.body.style.overflow = '';
    }
  }

  // Keyboard Navigation
  handleKeydown(e) {
    // Handle keyboard shortcuts
    if (e.ctrlKey || e.metaKey) {
      switch(e.key) {
        case 'd':
          e.preventDefault();
          this.toggleTheme();
          break;
      }
    }
    
    // Handle modal closing
    if (e.key === 'Escape') {
      this.closeModal();
    }
  }

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  // Preload Images
  preloadImages() {
    const images = [
      './resources/img/capstone.png',
      './resources/img/BibleQuiz.png', 
      './resources/img/calculator.png',
      './resources/img/todo.png'
    ];

    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }

  // Portfolio Projects
  setupPortfolio() {
    this.projects = [
      {
        id: 1,
        title: "E-Learning Platform",
        description: "A comprehensive e-learning platform with interactive courses, progress tracking, and user management. Built with modern web technologies for optimal performance.",
        image: "./resources/img/capstone.png",
        technologies: ["React", "Node.js", "MongoDB", "Express"],
        category: "fullstack",
        liveLink: "https://oyepriscilla.github.io/First-Microverse-Capstone-Project/",
        sourceLink: "https://github.com/OyePriscilla/First-Microverse-Capstone-Project",
        featured: true
      },
      {
        id: 2,
        title: "Bible Quiz WebApp",
        description: "Interactive Bible quiz application with timed challenges, score tracking, and character-based gameplay. Perfect for learning and entertainment.",
        image: "./resources/img/BibleQuiz.png",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
        category: "frontend",
        liveLink: "https://oyepriscilla.github.io/QuizAppFrontend",
        sourceLink: "https://github.com/OyePriscilla/QuizAppFrontend",
        featured: true
      },
      {
        id: 3,
        title: "React Calculator",
        description: "A modern calculator application with a clean interface and advanced mathematical operations. Built with React for seamless user interaction.",
        image: "./resources/img/calculator.png",
        technologies: ["React", "JavaScript", "CSS3", "HTML5"],
        category: "react",
        liveLink: "https://bespoke-pastelito-6aabde.netlify.app/",
        sourceLink: "https://github.com/OyePriscilla/calculatorappreact",
        featured: false
      },
      {
        id: 4,
        title: "Task Management App",
        description: "A comprehensive todo application with local storage, task editing, completion tracking, and intuitive UI design.",
        image: "./resources/img/todo.png",
        technologies: ["JavaScript", "HTML5", "CSS3", "LocalStorage"],
        category: "frontend",
        liveLink: "https://oyepriscilla.github.io/todo/",
        sourceLink: "https://github.com/OyePriscilla/todo",
        featured: false
      },
      {
        id: 5,
        title: "Leaderboard API",
        description: "Dynamic leaderboard application demonstrating API integration, data manipulation, and real-time updates.",
        image: "./resources/img/leaderboard.jpg",
        technologies: ["JavaScript", "API", "HTML5", "CSS3"],
        category: "frontend",
        liveLink: "https://oyepriscilla.github.io/Leaderboard-Api/",
        sourceLink: "https://github.com/OyePriscilla/Leaderboard-Api",
        featured: false
      }
    ];

    this.renderPortfolio();
    this.setupPortfolioFilter();
  }

  renderPortfolio(filter = 'all') {
    const portfolioGrid = document.getElementById('portfolio-grid');
    if (!portfolioGrid) return;

    const filteredProjects = filter === 'all' 
      ? this.projects 
      : this.projects.filter(project => project.category === filter);

    portfolioGrid.innerHTML = '';

    filteredProjects.forEach((project, index) => {
      const projectElement = this.createProjectElement(project, index);
      portfolioGrid.appendChild(projectElement);
    });

    // Trigger reveal animation
    setTimeout(() => {
      const portfolioItems = document.querySelectorAll('.portfolio-item[data-reveal]');
      portfolioItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('animate-in');
        }, index * 100);
      });
    }, 100);
  }

  createProjectElement(project, index) {
    const projectDiv = document.createElement('div');
    projectDiv.className = 'portfolio-item';
    projectDiv.setAttribute('data-reveal', '');
    projectDiv.style.animationDelay = `${index * 0.1}s`;
    
    projectDiv.innerHTML = `
      <img src="${project.image}" alt="${project.title}" class="portfolio-item-image" />
      <div class="portfolio-item-content">
        <h3 class="portfolio-item-title">${project.title}</h3>
        <p class="portfolio-item-description">${project.description}</p>
        <div class="portfolio-item-tags">
          ${project.technologies.map(tech => `<span class="portfolio-item-tag">${tech}</span>`).join('')}
        </div>
        <div class="portfolio-item-links">
          <a href="${project.liveLink}" class="portfolio-link" target="_blank" rel="noopener">
            <i class="fas fa-external-link-alt"></i>
            Live Demo
          </a>
          <a href="${project.sourceLink}" class="portfolio-link" target="_blank" rel="noopener">
            <i class="fab fa-github"></i>
            Source Code
          </a>
          <button class="portfolio-link view-details" data-project-id="${project.id}">
            <i class="fas fa-info-circle"></i>
            View Details
          </button>
        </div>
      </div>
    `;

    // Add click event for viewing details
    const viewDetailsBtn = projectDiv.querySelector('.view-details');
    if (viewDetailsBtn) {
      viewDetailsBtn.addEventListener('click', () => {
        this.showProjectModal(project);
      });
    }

    return projectDiv;
  }

  setupPortfolioFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Filter projects
        this.renderPortfolio(filter);
      });
    });
  }

  // Contact Form
  setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleFormSubmit(contactForm);
    });

    // Real-time validation
    const inputs = contactForm.querySelectorAll('.form-input, .form-textarea');
    inputs.forEach(input => {
      input.addEventListener('blur', () => this.validateField(input));
      input.addEventListener('input', () => this.clearFieldError(input));
    });

    // Save form data to localStorage
    this.setupFormStorage(contactForm);
  }

  async handleFormSubmit(form) {
    const submitBtn = document.getElementById('submit-btn');
    const submitText = submitBtn.querySelector('.submit-text');
    const submitLoader = submitBtn.querySelector('.submit-loader');
    const formStatus = document.getElementById('form-status');

    // Validate all fields
    const isValid = this.validateForm(form);
    if (!isValid) return;

    // Show loading state
    submitBtn.disabled = true;
    submitText.style.display = 'none';
    submitLoader.style.display = 'inline-flex';

    try {
      const formData = new FormData(form);
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        this.showFormStatus('success', 'Message sent successfully! I\'ll get back to you soon.');
        form.reset();
        this.clearFormStorage();
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error:', error);
      this.showFormStatus('error', 'Failed to send message. Please try again or contact me directly.');
    } finally {
      // Reset button state
      submitBtn.disabled = false;
      submitText.style.display = 'inline';
      submitLoader.style.display = 'none';
    }
  }

  validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    const errorElement = document.getElementById(`${fieldName}-error`);

    let isValid = true;
    let errorMessage = '';

    // Required field validation
    if (!value) {
      isValid = false;
      errorMessage = 'This field is required.';
    }
    // Email validation
    else if (fieldName === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
        errorMessage = 'Please enter a valid email address.';
      }
      // Check for lowercase (as per original requirement)
      else if (value !== value.toLowerCase()) {
        isValid = false;
        errorMessage = 'Email address should be in lowercase.';
      }
    }
    // Name validation
    else if (fieldName === 'name') {
      if (value.length < 2) {
        isValid = false;
        errorMessage = 'Name must be at least 2 characters long.';
      }
    }
    // Message validation
    else if (fieldName === 'message') {
      if (value.length < 10) {
        isValid = false;
        errorMessage = 'Message must be at least 10 characters long.';
      }
    }

    // Show/hide error
    if (errorElement) {
      errorElement.textContent = errorMessage;
      errorElement.classList.toggle('show', !isValid);
    }

    // Add/remove error styling
    field.classList.toggle('error', !isValid);

    return isValid;
  }

  clearFieldError(field) {
    const fieldName = field.name;
    const errorElement = document.getElementById(`${fieldName}-error`);
    
    if (errorElement) {
      errorElement.classList.remove('show');
      errorElement.textContent = '';
    }
    
    field.classList.remove('error');
  }

  validateForm(form) {
    const inputs = form.querySelectorAll('.form-input, .form-textarea');
    let isFormValid = true;

    inputs.forEach(input => {
      const isFieldValid = this.validateField(input);
      if (!isFieldValid) {
        isFormValid = false;
      }
    });

    return isFormValid;
  }

  setupFormStorage(form) {
    const inputs = form.querySelectorAll('.form-input, .form-textarea');
    
    // Load saved data
    inputs.forEach(input => {
      const savedValue = localStorage.getItem(`form-${input.name}`);
      if (savedValue) {
        input.value = savedValue;
      }
    });

    // Save data on input
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        localStorage.setItem(`form-${input.name}`, input.value);
      });
    });
  }

  clearFormStorage() {
    ['name', 'email', 'message'].forEach(field => {
      localStorage.removeItem(`form-${field}`);
    });
  }

  showFormStatus(type, message) {
    const formStatus = document.getElementById('form-status');
    if (!formStatus) return;

    formStatus.className = `form-status ${type}`;
    formStatus.textContent = message;
    formStatus.style.display = 'block';

    // Auto-hide success messages
    if (type === 'success') {
      setTimeout(() => {
        formStatus.style.display = 'none';
      }, 5000);
    }
  }

  // Utility Functions
  throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new PortfolioApp();
});
