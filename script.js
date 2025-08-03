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

// Phone data with image paths
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
    image: 'https://www.financialexpress.com/wp-content/uploads/2024/10/Nothing-Phone-2a-Plus-Community-Edition-MAIN.jpg'
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
    image: 'https://images.moneycontrol.com/static-mcnews/2024/02/OPtion-2.jpg?impolicy=website&width=1600&height=900'
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
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm6A-hCL4LFVFE3eI1oerzTZzpCE1mqrXEqQ&s'
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
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
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
    image: 'https://i.ytimg.com/vi/WPbTj5u-NZ0/sddefault.jpg'
  }
];

// [Previous code remains exactly the same until the upcomingPhones array]

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
    price: '₹28,999',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_4_7Axm3nk4-yknIU3t2_DDh_k7j9EEehmg&s'
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
    price: '₹25,499',
    image: 'data:image/jpeg;base64,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'
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
    price: '₹29,999',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWDcWHE3IVwU5e4SQRrJ7zgkLamTLKv2sGgQ&s'
  }
];

// [Rest of the code remains exactly the same]

// Phone data with image paths remains the same...

// Update the brands array with working logo URLs
const brands = [
  {
    name: 'Nothing', 
    url: 'https://www.nothing.tech/', 
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJl7-itucgi75axEuCZ9bSoWsZkM49YSLupQ&s'
  },
  {
    name: 'Samsung',
    url: 'https://www.samsung.com/in/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/240px-Samsung_Logo.svg.png'
  },
  {
    name: 'Vivo',
    url: 'https://www.vivo.com/in',
    logo: 'https://static.vecteezy.com/system/resources/thumbnails/054/650/800/small_2x/vivo-logo-rounded-vivo-logo-free-png.png'
  },
  {
    name: 'Oppo', 
    url: 'https://www.oppo.com/in/', 
    logo: 'https://static.vecteezy.com/system/resources/previews/054/650/848/non_2x/oppo-logo-rounded-oppo-logo-free-png.png'
  },
  { 
    name: 'Realme', 
    url: 'https://www.realme.com/in/', 
    logo: 'https://i.pinimg.com/474x/55/4c/42/554c42188083c10f00588c2ac8dc2a24.jpg'
  },
  {
    name: 'iQOO', 
    url: 'https://www.iqoo.com/in/', 
    logo: 'https://i.pinimg.com/474x/a0/c5/a7/a0c5a7cf72d99603d74ae5b1e742f0eb.jpg'
  },
  {
    name: 'Xiaomi', 
    url: 'https://www.mi.com/in/', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/240px-Xiaomi_logo_%282021-%29.svg.png'
  },
  {
    name: 'OnePlus', 
    url: 'https://www.oneplus.in/', 
    logo: 'https://imgs.search.brave.com/rZK8rHQsWJE8E5EOA8R_Jq74d-cuoAmRNQlov-kzhgs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZGl4LmNvbS9sb2dv/LzIyMDg0MTcucG5n'
  }
];

// Update the renderBrands function with error handling
function renderBrands() {
  const brandGrid = document.querySelector('.brand-grid');
  brandGrid.innerHTML = '';
  
  brands.forEach(brand => {
    const brandEl = document.createElement('div');
    brandEl.className = 'brand-card';
    
    // Create image element with error handling
    const img = document.createElement('img');
    img.className = 'brand-logo';
    img.alt = brand.name;
    img.loading = 'lazy';
    img.src = brand.logo;
    
    // Add error handler to fallback to text if image fails to load
    img.onerror = function() {
      this.style.display = 'none';
      const fallback = document.createElement('div');
      fallback.className = 'brand-fallback';
      fallback.textContent = brand.name.charAt(0);
      brandEl.querySelector('.brand-icon').prepend(fallback);
    };
    
    brandEl.innerHTML = `
      <div class="brand-icon"></div>
      <h3>${brand.name}</h3>
      <a href="${brand.url}" target="_blank" rel="noopener noreferrer">
        Visit Site <i class="fas fa-external-link-alt"></i>
      </a>
    `;
    
    // Insert the image into the brand-icon div
    brandEl.querySelector('.brand-icon').appendChild(img);
    brandGrid.appendChild(brandEl);
  });
}
// Rest of the code remains the same...

const testimonials = [
  {
    name: 'Priya M.',
    rating: 5,
    text: 'Loved the comparison! Helped me decide between iQOO and Realme. Thanks a ton!',
    avatar: 'https://randomuser.me/api/portraits/women/32.jpg'
  },
  {
    name: 'Arjun R.',
    rating: 4,
    text: 'The site is neat and easy to navigate. Would love to see camera samples too!',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg'
  },
  {
    name: 'Sneha K.',
    rating: 5,
    text: 'Appreciate the official links. Got my Nothing Phone 2a at a great price!',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
  },
  {
    name: 'Rajesh P.',
    rating: 5,
    text: 'The comparison table is a game-changer. Saved me hours of research!',
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg'
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
        <img src="${phone.image}" alt="${phone.name}" loading="lazy">
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
        <div class="phone-image-container" style="width: 100%; height: 200px; overflow: hidden; display: flex; justify-content: center; align-items: center; background: #f5f5f5;">
          <img src="${phone.image}" alt="${phone.name}" style="width: 100%; height: 100%; object-fit: cover;" loading="lazy">
        </div>
        <div class="upcoming-header-content">
          <h3>${phone.name}</h3>
          <p>Expected: ${phone.release}</p>
        </div>
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
      <div class="testimonial-header">
        <img src="${testimonial.avatar}" alt="${testimonial.name}" class="testimonial-avatar" loading="lazy">
        <div class="stars">${stars}</div>
      </div>
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