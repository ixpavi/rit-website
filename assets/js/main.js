/* main.js - Core Logic & Dynamic CMS Rendering */

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Dynamic Content rendering based on current page
  initPageContent();
});

// Main router for page-specific dynamic rendering
function initPageContent() {
  const currentPath = window.location.pathname;
  const pageName = currentPath.split("/").pop().replace(".html", "") || "index";

  // Shared initializations
  initStatsCounters();

  // Route specific initializations
  if (pageName === "index") {
    renderHomepageHero();
    renderHomepagePrograms();
    renderHomepageNews("news");
    initNewsTabListeners();
    renderHomepageManagement();
    renderHomepageDownloads();
    renderHomepageGallery();
    initAboutSlideshow();
  } else if (pageName === "about") {
    renderAboutJourney();
    renderAboutAchievements();
  } else if (pageName === "management") {
    renderFullManagementBoard();
  } else if (pageName === "programs") {
    renderFullPrograms();
  } else if (pageName === "gallery") {
    renderFullGallery();
  } else if (pageName === "downloads") {
    renderFullDownloads();
  } else if (pageName === "news") {
    renderFullNewsPortal();
  } else if (pageName === "contact") {
    initContactFormValidation();
  }

  // Re-run Lucide Icons rendering just in case dynamic components were just added
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

/* ==========================================
   HOMEPAGE DYNAMIC RENDERINGS
   ========================================== */

// 1. Render Hero Slider
function renderHomepageHero() {
  const sliderContainer = document.getElementById("hero-slider-container");
  if (!sliderContainer || !RIT_DATA.heroSlides) return;

  let slidesHtml = "";
  let dotsHtml = "";

  RIT_DATA.heroSlides.forEach((slide, idx) => {
    const isActive = idx === 0 ? "active" : "";
    slidesHtml += `
      <div class="hero-slide ${isActive}" data-slide-id="${idx}">
        <div class="hero-slide-bg" style="background-image: url('${slide.image}');"></div>
        <div class="container">
          <div class="hero-content">
            <span class="hero-tag">${slide.tag}</span>
            <h1 class="hero-title">${slide.title}</h1>
            <p class="hero-desc">${slide.desc}</p>
            <div class="hero-btns">
              <a href="${slide.ctaPrimaryLink}" class="btn btn-accent">${slide.ctaPrimary}</a>
              <a href="${slide.ctaSecondaryLink}" class="btn btn-outline-white">${slide.ctaSecondary}</a>
            </div>
          </div>
        </div>
      </div>
    `;
    dotsHtml += `<div class="slider-dot ${isActive}" data-slide-to="${idx}"></div>`;
  });

  // Slider navigation buttons
  const navHtml = `
    <button class="slider-nav slider-prev" aria-label="Previous Slide"><i data-lucide="chevron-left"></i></button>
    <button class="slider-nav slider-next" aria-label="Next Slide"><i data-lucide="chevron-right"></i></button>
    <div class="slider-dots">${dotsHtml}</div>
  `;

  sliderContainer.innerHTML = slidesHtml + navHtml;
  initHeroSliderLogic();
}

// Hero Slider Auto & Manual transitions
function initHeroSliderLogic() {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".slider-dot");
  const prevBtn = document.querySelector(".slider-prev");
  const nextBtn = document.querySelector(".slider-next");
  if (slides.length === 0) return;

  let currentIdx = 0;
  let slideInterval;

  const showSlide = (idx) => {
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));
    
    slides[idx].classList.add("active");
    dots[idx].classList.add("active");
    currentIdx = idx;
  };

  const nextSlide = () => {
    let next = currentIdx + 1;
    if (next >= slides.length) next = 0;
    showSlide(next);
  };

  const prevSlide = () => {
    let prev = currentIdx - 1;
    if (prev < 0) prev = slides.length - 1;
    showSlide(prev);
  };

  const startAutoSlide = () => {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000); // 5 seconds
  };

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      prevSlide();
      startAutoSlide();
    });
    nextBtn.addEventListener("click", () => {
      nextSlide();
      startAutoSlide();
    });
  }

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const idx = parseInt(dot.getAttribute("data-slide-to"));
      showSlide(idx);
      startAutoSlide();
    });
  });

  startAutoSlide();
}

// 2. Render Homepage Programs Preview (Activities & Programs)
function renderHomepagePrograms() {
  const container = document.getElementById("homepage-programs-container");
  if (!container) return;

  container.innerHTML = `
    <div class="placeholder-card" style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border); width: 100%;">
      <i data-lucide="info" style="width: 32px; height: 32px; color: var(--secondary); margin-bottom: 1rem; display: inline-block;"></i>
      <p style="color: var(--text-muted); font-size: 1.1rem; margin: 0;">Program details will be updated soon.</p>
    </div>
  `;
}

// 3. Render Homepage News tabs
function renderHomepageNews(category) {
  const container = document.getElementById("homepage-news-container");
  if (!container) return;

  container.innerHTML = `
    <div style="text-align: center; padding: 3rem; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border); width: 100%;">
      <i data-lucide="bell-off" style="width: 32px; height: 32px; color: var(--accent); margin-bottom: 1rem; display: inline-block;"></i>
      <p style="color: var(--text-muted); font-size: 1.1rem; margin: 0;">No announcements available at the moment.</p>
    </div>
  `;
}

function initNewsTabListeners() {
  const tabs = document.querySelectorAll(".news-tab-btn");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const category = tab.getAttribute("data-tab");
      renderHomepageNews(category);
    });
  });
}

// 4. Render Homepage Management Preview (Top three officers)
function renderHomepageManagement() {
  const container = document.getElementById("homepage-mgmt-container");
  if (!container) return;

  container.innerHTML = `
    <div class="placeholder-card" style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border); width: 100%;">
      <i data-lucide="users" style="width: 32px; height: 32px; color: var(--secondary); margin-bottom: 1rem; display: inline-block;"></i>
      <h3 style="color: var(--primary); font-size: 1.3rem; margin-bottom: 0.5rem;">Management Committee</h3>
      <p style="color: var(--text-muted); font-size: 1.05rem; margin: 0;">Official information will be updated soon.</p>
    </div>
  `;
}

// 5. Render Homepage Downloads Preview (Quick docs list)
function renderHomepageDownloads() {
  const container = document.getElementById("homepage-downloads-container");
  if (!container) return;

  container.innerHTML = `
    <tr>
      <td colspan="4" style="text-align: center; padding: 3rem; color: var(--text-muted);">
        <i data-lucide="file-text" style="width: 32px; height: 32px; color: var(--secondary); margin-bottom: 1rem; display: inline-block;"></i>
        <p style="margin: 0; font-size: 1.1rem;">Documents will be uploaded soon.</p>
      </td>
    </tr>
  `;
}

// 6. Render Homepage Gallery Preview (First 8 images with hover effects and lightbox support)
function renderHomepageGallery() {
  const container = document.getElementById("homepage-gallery-container");
  if (!container || !RIT_DATA.gallery || RIT_DATA.gallery.length === 0) return;

  const items = RIT_DATA.gallery.slice(0, 8);

  container.innerHTML = items.map(item => `
    <div class="gallery-item" onclick="window.openLightbox('${item.image}', '${item.title}')">
      <img src="${item.image}" alt="${item.title}" loading="lazy">
      <div class="gallery-item-overlay">
        <h4 class="gallery-item-title">${item.title}</h4>
      </div>
    </div>
  `).join("");

  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}


/* ==========================================
   ABOUT PAGE RENDERINGS
   ========================================== */

// 1. Render Timeline (Our Journey)
function renderAboutJourney() {
  const container = document.getElementById("about-timeline-container");
  if (!container) return;
  container.innerHTML = `
    <div style="text-align: center; padding: 3rem; color: var(--text-muted);">
      <p style="margin: 0; font-size: 1.1rem;">This information will be updated soon.</p>
    </div>
  `;
}

// 2. Render Achievements Grid
function renderAboutAchievements() {
  const container = document.getElementById("about-achievements-container");
  if (!container) return;
  container.innerHTML = "";
}


/* ==========================================
   MANAGEMENT BOARD PAGE DYNAMIC RENDERINGS
   ========================================== */

function renderFullManagementBoard() {
  const sections = [
    "mgmt-president-container",
    "mgmt-chairman-container",
    "mgmt-officers-container",
    "mgmt-executive-container",
    "mgmt-advisory-container"
  ];

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = "";
  });

  const committeeContainer = document.getElementById("mgmt-committee-container");
  if (committeeContainer) {
    committeeContainer.innerHTML = `
      <tr>
        <td colspan="3" style="text-align: center; padding: 3rem; color: var(--text-muted);">
          <i data-lucide="users" style="width: 32px; height: 32px; color: var(--secondary); margin-bottom: 1rem; display: inline-block;"></i>
          <h3 style="color: var(--primary); font-size: 1.3rem; margin-bottom: 0.5rem;">Management Committee</h3>
          <p style="margin: 0; font-size: 1.1rem;">Official information will be updated soon.</p>
        </td>
      </tr>
    `;
  }
}


/* ==========================================
   ACTIVITIES & PROGRAMS PAGE
   ========================================== */

function renderFullPrograms() {
  const container = document.getElementById("full-programs-container");
  if (!container) return;

  container.innerHTML = `
    <div class="section">
      <div class="container" style="text-align: center; padding: 4rem 2rem;">
        <i data-lucide="info" style="width: 48px; height: 48px; color: var(--secondary); margin-bottom: 1.5rem; display: inline-block;"></i>
        <h2 style="color: var(--primary); margin-bottom: 1rem;">Activities & Programs</h2>
        <p style="color: var(--text-muted); font-size: 1.2rem; max-width: 600px; margin: 0 auto;">Program details will be updated soon.</p>
      </div>
    </div>
  `;
}


/* ==========================================
   DOWNLOADS PAGE DYNAMIC RENDERINGS
   ========================================== */

function renderFullDownloads() {
  const container = document.getElementById("full-downloads-container");
  if (!container) return;

  container.innerHTML = `
    <div style="text-align: center; padding: 5rem 2rem;">
      <i data-lucide="file-text" style="width: 48px; height: 48px; color: var(--secondary); margin-bottom: 1.5rem; display: inline-block;"></i>
      <h2 style="color: var(--primary); margin-bottom: 1rem;">Documents Library</h2>
      <p style="color: var(--text-muted); font-size: 1.2rem; max-width: 600px; margin: 0 auto;">Documents will be uploaded soon.</p>
    </div>
  `;
}


/* ==========================================
   NEWS & ANNOUNCEMENTS PAGE PORTAL
   ========================================== */

function renderFullNewsPortal() {
  const newsCol = document.getElementById("portal-news-col");
  if (newsCol) {
    newsCol.innerHTML = `
      <div style="padding: 3rem 2rem; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border); text-align: center; margin-bottom: 3.5rem;">
        <i data-lucide="newspaper" style="width: 32px; height: 32px; color: var(--secondary); margin-bottom: 1rem; display: inline-block;"></i>
        <p style="color: var(--text-muted); font-size: 1.1rem; margin: 0;">No announcements available at the moment.</p>
      </div>
    `;
  }

  const annCol = document.getElementById("portal-announcements-col");
  if (annCol) annCol.innerHTML = "";

  const noticeCol = document.getElementById("portal-notices-col");
  if (noticeCol) noticeCol.innerHTML = "";

  const eventsList = document.getElementById("portal-events-sidebar");
  if (eventsList) {
    eventsList.innerHTML = `
      <div style="text-align: center; padding: 2rem 1rem; color: var(--text-muted);">
        <p style="margin: 0; font-size: 0.95rem;">No upcoming events scheduled.</p>
      </div>
    `;
  }
}


/* ==========================================
   GALLERY PAGE FILTERING & LIGHTBOX
   ========================================== */

// Render full gallery — shows ALL images, no filtering
function renderFullGallery() {
  const container = document.getElementById("full-gallery-container");
  if (!container) return;

  const items = RIT_DATA.gallery;

  if (!items || items.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 5rem 2rem; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border);">
        <i data-lucide="image" style="width: 48px; height: 48px; color: var(--secondary); margin-bottom: 1.5rem; display: inline-block;"></i>
        <h2 style="color: var(--primary); margin-bottom: 0.5rem; font-size: 1.5rem;">Media Archive</h2>
        <p style="font-size: 1.15rem; margin: 0;">Gallery will be updated soon.</p>
      </div>
    `;
    if (typeof lucide !== "undefined") lucide.createIcons();
    return;
  }

  container.innerHTML = items.map(item => `
    <div class="gallery-item" onclick="window.openLightbox('${item.image}', '${item.title}', '')">
      <img src="${item.image}" alt="${item.title}" loading="lazy">
      <div class="gallery-item-overlay">
        <h4 class="gallery-item-title">${item.title}</h4>
      </div>
    </div>
  `).join("");

  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

// Lightbox Open & Close Functions with Keyboard Navigation
let currentLightboxIndex = -1;

window.openLightbox = function(imageUrl, title) {
  const modal = document.getElementById("lightbox-modal");
  const modalImg = document.getElementById("lightbox-img");
  const captionTitle = document.getElementById("lightbox-title");

  if (!modal || !modalImg) return;

  modalImg.src = imageUrl;
  captionTitle.textContent = title;
  modal.style.display = "flex";
  document.body.style.overflow = "hidden"; // Prevent scrolling

  // Find index in current gallery array
  currentLightboxIndex = RIT_DATA.gallery.findIndex(item => item.image === imageUrl);
};

window.closeLightbox = function() {
  const modal = document.getElementById("lightbox-modal");
  if (modal) {
    modal.style.display = "none";
    document.body.style.overflow = ""; // Re-enable scrolling
  }
};

// Keyboard listener for lightbox
window.addEventListener("keydown", (e) => {
  const modal = document.getElementById("lightbox-modal");
  if (!modal || modal.style.display !== "flex") return;

  if (e.key === "Escape") {
    window.closeLightbox();
  } else if (e.key === "ArrowRight") {
    navigateLightbox(1);
  } else if (e.key === "ArrowLeft") {
    navigateLightbox(-1);
  }
});

function navigateLightbox(direction) {
  if (currentLightboxIndex === -1 || !RIT_DATA.gallery || RIT_DATA.gallery.length === 0) return;

  currentLightboxIndex = (currentLightboxIndex + direction + RIT_DATA.gallery.length) % RIT_DATA.gallery.length;
  const item = RIT_DATA.gallery[currentLightboxIndex];
  
  const modalImg = document.getElementById("lightbox-img");
  const captionTitle = document.getElementById("lightbox-title");

  if (modalImg) modalImg.src = item.image;
  if (captionTitle) captionTitle.textContent = item.title;
}

function initAboutSlideshow() {
  const container = document.getElementById("about-slideshow");
  if (!container) return;

  const images = container.querySelectorAll(".about-img");
  if (images.length <= 1) return;

  let currentIdx = 0;

  setInterval(() => {
    images[currentIdx].classList.remove("active");
    currentIdx = (currentIdx + 1) % images.length;
    images[currentIdx].classList.add("active");
  }, 4000);
}


/* ==========================================
   STATISTICS COUNTERS LOGIC
   ========================================== */

function initStatsCounters() {
  const statNumbers = document.querySelectorAll(".stats-num");
  if (statNumbers.length === 0) return;

  const countUp = (el) => {
    const targetText = el.getAttribute("data-target");
    if (!targetText) return;

    // Check if target has numbers to animate
    const numberMatch = targetText.match(/\d+/);
    if (!numberMatch) {
      el.textContent = targetText;
      return;
    }

    const targetNum = parseInt(numberMatch[0], 10);
    const prefix = targetText.split(/\d+/)[0] || "";
    const suffix = targetText.split(/\d+/)[1] || "";
    
    let count = 0;
    const duration = 2000; // 2 seconds
    const stepTime = Math.max(Math.floor(duration / targetNum), 15);
    
    const timer = setInterval(() => {
      count += Math.ceil(targetNum / 100);
      if (count >= targetNum) {
        el.textContent = prefix + targetNum + suffix;
        clearInterval(timer);
      } else {
        el.textContent = prefix + count + suffix;
      }
    }, stepTime);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        countUp(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(num => observer.observe(num));
}


/* ==========================================
   CONTACT FORM VALIDATION
   ========================================== */

function initContactFormValidation() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !phone || !message) {
      alert("Please fill in all required fields (Name, Email, Phone, and Message).");
      return;
    }

    // Basic email check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please provide a valid email address.");
      return;
    }

    // Success response simulation
    alert(`Thank you, ${name}! Your enquiry has been received. Our coordination cell will reach out to you within 24-48 hours.`);
    form.reset();
  });
}
