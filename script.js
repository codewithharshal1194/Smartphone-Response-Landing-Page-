// DOM Elements
const themeToggle = document.querySelector('.theme-toggle');
const navbar = document.getElementById('navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const backToTop = document.querySelector('.back-to-top');
const phoneSelect = document.getElementById('phone');
const ratingStars = document.querySelectorAll('.rating-stars i');
const ratingInput = document.getElementById('rating');
const feedbackForm = document.getElementById('feedbackForm');
const searchInput = document.getElementById('searchPhones');
const compareBtn = document.querySelector('.compare-btn');
const scrollDown = document.querySelector('.scroll-down');

// Initialize AOS
AOS.init({
  duration: 800,
  once: true
});

// Theme Toggle
function setTheme(theme) {
  document.body.className = theme;
  localStorage.setItem('theme', theme);
}

function toggleTheme() {
  if (document.body.classList.contains('dark')) {
    setTheme('light');
  } else {
    setTheme('dark');
  }
}

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'dark';
setTheme(savedTheme);

themeToggle.addEventListener('click', toggleTheme);

// Navbar scroll effect
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
  backToTop.classList.toggle('visible', window.scrollY > 500);
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close mobile menu when clicking links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// Back to top
backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Scroll down arrow
scrollDown.addEventListener('click', () => {
  document.querySelector('#top-smartphones').scrollIntoView({ 
    behavior: 'smooth' 
  });
});

// Rating stars
ratingStars.forEach(star => {
  star.addEventListener('click', () => {
    const value = parseInt(star.getAttribute('data-value'));
    ratingInput.value = value;
    
    ratingStars.forEach((s, index) => {
      if (index < value) {
        s.classList.add('active');
        s.classList.remove('far');
        s.classList.add('fas');
      } else {
        s.classList.remove('active');
        s.classList.remove('fas');
        s.classList.add('far');
      }
    });
  });
});

// Form submission
feedbackForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    rating: document.getElementById('rating').value,
    message: document.getElementById('message').value
  };
  
  // In a real app, you would send this to your server
  console.log('Form submitted:', formData);
  
  // Show success message
  alert('Thank you for your feedback!');
  feedbackForm.reset();
  
  // Reset stars
  ratingStars.forEach(star => {
    star.classList.remove('active', 'fas');
    star.classList.add('far');
  });
  ratingInput.value = '0';
});

// Phone data
const phones = [
  {
    id: 1,
    name: 'Nothing Phone 2a (Special Edition)',
    brand: 'Nothing',
    battery: '5000mAh',
    camera: 'Sony IMX890 sensor',
    processor: 'Dimensity 7200 Pro',
    display: '6.7" AMOLED 120Hz',
    price: '₹24,999',
    rating: 4.8,
    image: 'phone1'
  },
  {
    id: 2,
    name: 'iQOO Z9 Turbo',
    brand: 'iQOO',
    battery: '6000mAh',
    camera: 'Sony IMX882 sensor',
    processor: 'Snapdragon 7+ Gen 2',
    display: '6.78" AMOLED 144Hz',
    price: '₹26,999',
    rating: 4.6,
    image: 'phone2'
  },
  {
    id: 3,
    name: 'Realme GT Neo 5 SE',
    brand: 'Realme',
    battery: '5500mAh',
    camera: 'Sony IMX890 sensor',
    processor: 'Snapdragon 7+ Gen 2',
    display: '6.74" AMOLED 120Hz',
    price: '₹27,999',
    rating: 4.5,
    image: 'phone3'
  },
  {
    id: 4,
    name: 'Samsung Galaxy M15 5G',
    brand: 'Samsung',
    battery: '6000mAh',
    camera: '50MP Triple Camera',
    processor: 'Dimensity 6100+',
    display: '6.5" Super AMOLED',
    price: '₹12,999',
    rating: 4.2,
    image: 'phone4'
  },
  {
    id: 5,
    name: 'Vivo T3x 5G',
    brand: 'Vivo',
    battery: '6000mAh',
    camera: 'Sony IMX882 sensor',
    processor: 'Snapdragon 6 Gen 1',
    display: '6.58" IPS LCD',
    price: '₹13,999',
    rating: 4.3,
    image: 'phone5'
  }
];

const upcomingPhones = [
  {
    id: 1,
    name: 'OnePlus Nord 5',
    brand: 'OnePlus',
    release: 'June 2025',
    specs: [
      'Expected: Snapdragon 7+ Gen 3',
      'AMOLED 120Hz Display',
      '5000mAh, 80W Fast Charging',
      '50MP OIS Main Camera'
    ],
    price: '₹28,999'
  },
  {
    id: 2,
    name: 'Xiaomi Redmi Note 14 Pro+',
    brand: 'Xiaomi',
    release: 'July 2025',
    specs: [
      '200MP Samsung HPX Sensor',
      'Dimensity 8300 Ultra',
      'OLED, 144Hz Refresh Rate',
      '120W HyperCharge'
    ],
    price: '₹25,499'
  },
  {
    id: 3,
    name: 'iQOO Neo 9 SE',
    brand: 'iQOO',
    release: 'August 2025',
    specs: [
      'Snapdragon 8s Gen 3',
      'Independent Display Chip',
      '144Hz AMOLED | 1.5K Resolution',
      '120W FlashCharge'
    ],
    price: '₹29,999'
  }
];

const brands = [
  { name: 'Nothing', url: 'https://www.nothing.tech/', icon: 'fas fa-sparkles' },
  { name: 'Samsung', url: 'https://www.samsung.com/in/', icon: 'fas fa-s' },
  { name: 'Vivo', url: 'https://www.vivo.com/in', icon: 'fas fa-v' },
  { name: 'Oppo', url: 'https://www.oppo.com/in/', icon: 'fas fa-o' },
  { name: 'Realme', url: 'https://www.realme.com/in/', icon: 'fas fa-r' },
  { name: 'iQOO', url: 'https://www.iqoo.com/in/', icon: 'fas fa-bolt' },
  { name: 'Xiaomi', url: 'https://www.mi.com/in/', icon: 'fas fa-x' },
  { name: 'OnePlus', url: 'https://www.oneplus.in/', icon: 'fas fa-1' }
];

const testimonials = [
  {
    name: 'Priya M.',
    rating: 5,
    text: 'Loved the comparison! Helped me decide between iQOO and Realme. Thanks a ton!'
  },
  {
    name: 'Arjun R.',
    rating: 4,
    text: 'The site is neat and easy to navigate. Would love to see camera samples too!'
  },
  {
    name: 'Sneha K.',
    rating: 5,
    text: 'Appreciate the official links. Got my Nothing Phone 2a at a great price!'
  },
  {
    name: 'Rajesh P.',
    rating: 5,
    text: 'The comparison table is a game-changer. Saved me hours of research!'
  }
];

// Render phones
function renderPhones() {
  const featuresGrid = document.querySelector('.features-grid');
  featuresGrid.innerHTML = '';
  
  phones.forEach(phone => {
    const phoneEl = document.createElement('div');
    phoneEl.className = 'feature-box';
    phoneEl.innerHTML = `
      <div class="phone-image">
        <img src="images/${phone.image}.png" alt="${phone.name}">
      </div>
      <div class="phone-details">
        <h3><i class="fas fa-mobile-alt"></i> ${phone.name}</h3>
        <ul>
          <li><strong>Battery:</strong> ${phone.battery}</li>
          <li><strong>Camera:</strong> ${phone.camera}</li>
          <li><strong>Processor:</strong> ${phone.processor}</li>
          <li><strong>Display:</strong> ${phone.display}</li>
        </ul>
        <div class="price-tag">${phone.price}</div>
      </div>
    `;
    featuresGrid.appendChild(phoneEl);
  });
}

// Render comparison table
function renderComparisonTable() {
  const tbody = document.getElementById('comparisonBody');
  tbody.innerHTML = '';
  
  phones.forEach(phone => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><input type="checkbox" class="compare-checkbox" data-id="${phone.id}"></td>
      <td>${phone.brand}</td>
      <td>${phone.name}</td>
      <td>${phone.battery}</td>
      <td>${phone.camera}</td>
      <td>${phone.processor}</td>
      <td>${phone.display}</td>
      <td>${phone.price}</td>
      <td>${phone.rating} <i class="fas fa-star" style="color: #ffc107;"></i></td>
    `;
    tbody.appendChild(row);
  });
  
  // Populate phone select in feedback form
  phones.forEach(phone => {
    const option = document.createElement('option');
    option.value = phone.id;
    option.textContent = `${phone.brand} ${phone.name}`;
    phoneSelect.appendChild(option);
  });
}

// Render upcoming phones
function renderUpcomingPhones() {
  const upcomingGrid = document.querySelector('.upcoming-grid');
  upcomingGrid.innerHTML = '';
  
  upcomingPhones.forEach(phone => {
    const phoneEl = document.createElement('div');
    phoneEl.className = 'upcoming-box';
    phoneEl.innerHTML = `
      <div class="upcoming-header">
        <h3>${phone.name}</h3>
        <p>Expected: ${phone.release}</p>
      </div>
      <div class="upcoming-content">
        <ul>
          ${phone.specs.map(spec => `<li>${spec}</li>`).join('')}
        </ul>
        <div class="price-tag">${phone.price}</div>
      </div>
    `;
    upcomingGrid.appendChild(phoneEl);
  });
}

// Render brands
function renderBrands() {
  const brandGrid = document.querySelector('.brand-grid');
  brandGrid.innerHTML = '';
  
  brands.forEach(brand => {
    const brandEl = document.createElement('div');
    brandEl.className = 'brand-card';
    brandEl.innerHTML = `
      <div class="brand-icon">
        <i class="${brand.icon}"></i>
      </div>
      <h3>${brand.name}</h3>
      <a href="${brand.url}" target="_blank">Visit Site <i class="fas fa-external-link-alt"></i></a>
    `;
    brandGrid.appendChild(brandEl);
  });
}

// Render testimonials
function renderTestimonials() {
  const slider = document.querySelector('.testimonial-slider');
  slider.innerHTML = '';
  
  testimonials.forEach(testimonial => {
    const testimonialEl = document.createElement('div');
    testimonialEl.className = 'testimonial-item';
    
    let stars = '';
    for (let i = 0; i < 5; i++) {
      if (i < testimonial.rating) {
        stars += '<i class="fas fa-star"></i>';
      } else {
        stars += '<i class="far fa-star"></i>';
      }
    }
    
    testimonialEl.innerHTML = `
      <div class="stars">${stars}</div>
      <p>${testimonial.text}</p>
      <h4>${testimonial.name}</h4>
    `;
    slider.appendChild(testimonialEl);
  });
}

// Search phones
searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const rows = document.querySelectorAll('#comparisonBody tr');
  
  rows.forEach(row => {
    const text = row.textContent.toLowerCase();
    row.style.display = text.includes(searchTerm) ? '' : 'none';
  });
});

// Compare selected phones
compareBtn.addEventListener('click', () => {
  const selectedIds = [];
  document.querySelectorAll('.compare-checkbox:checked').forEach(checkbox => {
    selectedIds.push(parseInt(checkbox.getAttribute('data-id')));
  });
  
  if (selectedIds.length < 2) {
    alert('Please select at least 2 phones to compare');
    return;
  }
  
  // In a real app, you would show a comparison modal or page
  const selectedPhones = phones.filter(phone => selectedIds.includes(phone.id));
  let comparisonText = 'Comparing:\n';
  selectedPhones.forEach(phone => {
    comparisonText += `- ${phone.brand} ${phone.name}\n`;
  });
  alert(comparisonText);
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  renderPhones();
  renderComparisonTable();
  renderUpcomingPhones();
  renderBrands();
  renderTestimonials();
});