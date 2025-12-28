/* ========================================
   PRECISION SYSTEMS - Main JavaScript
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all components
  initNavigation();
  initScrollAnimations();
  initFAQ();
  initQuoteForm();
  initContactForm();
});

/* ========================================
   NAVIGATION
   ======================================== */

function initNavigation() {
  const nav = document.querySelector('.nav');
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  // Scroll behavior - add scrolled class
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });
  }
  
  // Mobile menu toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
      document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu when clicking a link
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
  
  // Set active nav link based on current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* ========================================
   SCROLL ANIMATIONS
   ======================================== */

function initScrollAnimations() {
  const fadeElements = document.querySelectorAll('.fade-in');
  
  if (fadeElements.length === 0) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  fadeElements.forEach(el => observer.observe(el));
}

/* ========================================
   FAQ ACCORDION
   ======================================== */

function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    if (question) {
      question.addEventListener('click', () => {
        // Close other items
        faqItems.forEach(otherItem => {
          if (otherItem !== item && otherItem.classList.contains('active')) {
            otherItem.classList.remove('active');
          }
        });
        
        // Toggle current item
        item.classList.toggle('active');
      });
    }
  });
}

/* ========================================
   QUOTE FORM
   ======================================== */

function initQuoteForm() {
  const quoteTypeButtons = document.querySelectorAll('.quote-type-btn');
  const consumerFields = document.getElementById('consumer-fields');
  const businessFields = document.getElementById('business-fields');
  const quoteForm = document.getElementById('quote-form');
  
  // Quote type selector
  if (quoteTypeButtons.length > 0) {
    quoteTypeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Update active button
        quoteTypeButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Show/hide appropriate fields
        const type = btn.dataset.type;
        if (consumerFields && businessFields) {
          if (type === 'consumer') {
            consumerFields.style.display = 'block';
            businessFields.style.display = 'none';
          } else {
            consumerFields.style.display = 'none';
            businessFields.style.display = 'block';
          }
        }
      });
    });
  }
  
  // Form submission
  if (quoteForm) {
    quoteForm.addEventListener('submit', handleQuoteSubmit);
  }
}

function handleQuoteSubmit(e) {
  e.preventDefault();
  
  const form = e.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  
  // Get active quote type
  const activeTypeBtn = document.querySelector('.quote-type-btn.active');
  data.quoteType = activeTypeBtn ? activeTypeBtn.dataset.type : 'consumer';
  
  // Here you would normally send to your backend
  // For now, we'll show a success message
  console.log('Quote Request:', data);
  
  // Show success state
  showFormSuccess(form, 'Thanks! We\'ll get back to you within 24 hours.');
}

/* ========================================
   CONTACT FORM
   ======================================== */

function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', handleContactSubmit);
  }
}

function handleContactSubmit(e) {
  e.preventDefault();
  
  const form = e.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  
  // Here you would normally send to your backend
  console.log('Contact Form:', data);
  
  // Show success state
  showFormSuccess(form, 'Message sent! We\'ll be in touch soon.');
}

/* ========================================
   FORM UTILITIES
   ======================================== */

function showFormSuccess(form, message) {
  // Create success message
  const successDiv = document.createElement('div');
  successDiv.className = 'form-success';
  successDiv.innerHTML = `
    <div class="form-success-icon">✓</div>
    <h3>Request Submitted</h3>
    <p>${message}</p>
    <button type="button" class="btn btn-secondary" onclick="resetForm(this)">Submit Another</button>
  `;
  
  // Style the success message
  successDiv.style.cssText = `
    text-align: center;
    padding: 60px 40px;
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 16px;
  `;
  
  // Hide form and show success
  form.style.display = 'none';
  form.parentNode.insertBefore(successDiv, form.nextSibling);
  
  // Style the icon
  const icon = successDiv.querySelector('.form-success-icon');
  icon.style.cssText = `
    width: 64px;
    height: 64px;
    background: linear-gradient(135deg, #00e676, #00b359);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: #0a0a0f;
    margin: 0 auto 20px;
  `;
}

function resetForm(button) {
  const successDiv = button.closest('.form-success');
  const form = successDiv.previousElementSibling;
  
  successDiv.remove();
  form.style.display = 'block';
  form.reset();
}

// Make resetForm globally available
window.resetForm = resetForm;

/* ========================================
   SMOOTH SCROLL FOR ANCHOR LINKS
   ======================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    
    e.preventDefault();
    const target = document.querySelector(href);
    
    if (target) {
      const navHeight = document.querySelector('.nav')?.offsetHeight || 0;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

/* ========================================
   UTILITY FUNCTIONS
   ======================================== */

// Debounce function for performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
