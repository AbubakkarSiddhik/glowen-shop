
window.addEventListener('load', function() {
  setTimeout(function() {
    document.getElementById('loading-overlay').style.opacity = '0';
    setTimeout(function() {
      document.getElementById('loading-overlay').style.display = 'none';
    }, 500);
  }, 100);
});


function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }

  menuContainer.classList.remove('active');
  menuIcon.classList.remove('fa-times');
  menuIcon.classList.add('fa-bars');
}


function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}


window.addEventListener('scroll', function() {
  const backToTop = document.getElementById('back-to-top');
  if (window.pageYOffset > 300) {
    backToTop.classList.add('active');
  } else {
    backToTop.classList.remove('active');
  }
});


const menuContainer = document.getElementById('menu-container');
const menuButton = document.getElementById('menu-button');
const menuIcon = document.getElementById('menu-icon');

menuButton.addEventListener('click', (e) => {
  e.stopPropagation();
  menuContainer.classList.toggle('active');
  if (menuContainer.classList.contains('active')) {
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-times');
  } else {
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
  }
});


document.addEventListener('click', (e) => {
  if (!menuContainer.contains(e.target)) {
    menuContainer.classList.remove('active');
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
  }
});


const fadeElements = document.querySelectorAll('.fade-in');

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

fadeElements.forEach(element => {
  fadeObserver.observe(element);
});


document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    const button = this;
    
    
    button.innerHTML = '<i class="fas fa-check"></i> Added to Cart';
    button.style.backgroundColor = '#4BB543';
    

    setTimeout(() => {
      button.innerHTML = '<i class="fas fa-shopping-cart"></i> Add to Cart';
      button.style.backgroundColor = '';
    }, 2000);
  });
});


document.querySelector('form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const form = this;
  const submitButton = form.querySelector('button[type="submit"]');
  

  submitButton.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';
  submitButton.disabled = true;
  
  setTimeout(() => {
    submitButton.innerHTML = 'Message Sent <i class="fas fa-check"></i>';
    submitButton.style.background = '#4BB543';
    

    setTimeout(() => {
      form.reset();
      submitButton.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
      submitButton.style.background = '';
      submitButton.disabled = false;
    }, 2000);
  }, 1500);
});
