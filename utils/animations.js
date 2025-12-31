// Intersection Observer for scroll animations
export const initScrollAnimations = () => {
  if (typeof window === 'undefined') return;

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with animation classes
  const animatedElements = document.querySelectorAll(
    '.fade-in-on-scroll, .slide-in-left, .slide-in-right, .scale-in-on-scroll'
  );
  
  animatedElements.forEach(el => observer.observe(el));
};

// Typing effect
export const typeWriter = (element, text, speed = 100) => {
  if (!element) return;
  
  let i = 0;
  element.textContent = '';
  
  const type = () => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  };
  
  type();
};

// Stagger animation for multiple elements
export const staggerAnimation = (elements, delay = 100) => {
  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('visible');
    }, index * delay);
  });
};

