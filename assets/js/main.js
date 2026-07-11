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
  } else if (pageName === "about") {
    renderAboutJourney();
    renderAboutAchievements();
  } else if (pageName === "management") {
    renderFullManagementBoard();
  } else if (pageName === "programs") {
    renderFullPrograms();
  } else if (pageName === "gallery") {
    renderFullGallery("All");
    initGalleryFilterListeners();
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
  if (!container || !RIT_DATA.programs) return;

  let html = "";
  // Show up to 3 programs on homepage
  RIT_DATA.programs.slice(0, 3).forEach(prog => {
    html += `
      <div class="program-card">
        <div class="program-img-wrapper">
          <img src="${prog.image}" alt="${prog.title}" class="program-card-img" loading="lazy">
          <span class="program-card-tag">${prog.tag}</span>
        </div>
        <div class="program-card-content">
          <h3 class="program-card-title">${prog.title}</h3>
          <p class="program-card-desc">${prog.desc}</p>
          <a href="programs.html#${prog.id}" class="program-card-link">
            Read More <i data-lucide="arrow-right"></i>
          </a>
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
}

// 3. Render Homepage News tabs
function renderHomepageNews(category) {
  const container = document.getElementById("homepage-news-container");
  if (!container || !RIT_DATA.news[category]) return;

  let html = "";
  // Limit to 3 items
  RIT_DATA.news[category].slice(0, 3).forEach(item => {
    html += `
      <div class="news-card-strip">
        <div class="news-date-badge">
          ${item.date.split(" ")[0]}
          <span>${item.date.split(" ")[1]}</span>
        </div>
        <div class="news-strip-content">
          <h3 class="news-strip-title">${item.title}</h3>
          <p class="news-strip-meta">
            <span><i data-lucide="clock" style="width: 12px; margin-right: 4px;"></i>${item.year}</span>
            <span><i data-lucide="file-text" style="width: 12px; margin-right: 4px;"></i>${item.meta}</span>
          </p>
          <p class="about-text" style="margin-top: 0.5rem; font-size: 0.9rem;">${item.desc}</p>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  if (typeof lucide !== "undefined") lucide.createIcons();
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
  if (!container || !RIT_DATA.management) return;

  const leaders = [
    ...RIT_DATA.management.president,
    ...RIT_DATA.management.chairman,
    ...RIT_DATA.management.secretary
  ];

  let html = "";
  leaders.forEach(member => {
    html += `
      <div class="mgmt-card">
        <img src="${member.image}" alt="${member.name}" class="mgmt-photo-img" loading="lazy">
        <h3 class="mgmt-name">${member.name}</h3>
        <p class="mgmt-role">${member.role}</p>
        <p class="mgmt-bio">${member.bio.substring(0, 80)}...</p>
      </div>
    `;
  });

  container.innerHTML = html;
}

// 5. Render Homepage Downloads Preview (Quick docs list)
function renderHomepageDownloads() {
  const container = document.getElementById("homepage-downloads-container");
  if (!container || !RIT_DATA.downloads) return;

  let html = "";
  // Show first 4 downloads
  RIT_DATA.downloads.slice(0, 4).forEach(doc => {
    html += `
      <tr>
        <td>
          <div class="download-cell-name">
            <i data-lucide="file-text"></i>
            <span>${doc.title}</span>
          </div>
        </td>
        <td><span class="download-badge">${doc.category}</span></td>
        <td>${doc.fileSize}</td>
        <td>
          <a href="${doc.url}" class="download-btn">
            <i data-lucide="download"></i> Download
          </a>
        </td>
      </tr>
    `;
  });

  container.innerHTML = html;
  if (typeof lucide !== "undefined") lucide.createIcons();
}

// 6. Render Homepage Gallery Preview
function renderHomepageGallery() {
  const container = document.getElementById("homepage-gallery-container");
  if (!container || !RIT_DATA.gallery) return;

  let html = "";
  // Show first 4 images on home
  RIT_DATA.gallery.slice(0, 4).forEach(item => {
    html += `
      <div class="gallery-item" onclick="openLightbox('${item.image}', '${item.title}', '${item.category}')">
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        <div class="gallery-item-overlay">
          <span class="gallery-item-cat">${item.category}</span>
          <h3 class="gallery-item-title">${item.title}</h3>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}


/* ==========================================
   ABOUT PAGE RENDERINGS
   ========================================== */

// 1. Render Timeline (Our Journey)
function renderAboutJourney() {
  const container = document.getElementById("about-timeline-container");
  if (!container || !RIT_DATA.timeline) return;

  let html = "";
  RIT_DATA.timeline.forEach(milestone => {
    html += `
      <div class="timeline-item">
        <div class="timeline-card">
          <span class="timeline-year">${milestone.year}</span>
          <h3 class="timeline-title">${milestone.title}</h3>
          <p class="timeline-desc">${milestone.desc}</p>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

// 2. Render Achievements Grid
function renderAboutAchievements() {
  const container = document.getElementById("about-achievements-container");
  if (!container || !RIT_DATA.achievements) return;

  let html = "";
  RIT_DATA.achievements.forEach(ach => {
    html += `
      <div class="achievement-card">
        <div class="achievement-icon">
          <i data-lucide="${ach.icon}"></i>
        </div>
        <h3 class="achievement-title">${ach.title}</h3>
        <p class="achievement-desc">${ach.desc}</p>
      </div>
    `;
  });

  container.innerHTML = html;
  if (typeof lucide !== "undefined") lucide.createIcons();
}


/* ==========================================
   MANAGEMENT BOARD PAGE DYNAMIC RENDERINGS
   ========================================== */

function renderFullManagementBoard() {
  // Render President
  const presidentContainer = document.getElementById("mgmt-president-container");
  if (presidentContainer && RIT_DATA.management.president) {
    presidentContainer.innerHTML = renderMgmtCardGroup(RIT_DATA.management.president);
  }

  // Render Chairman
  const chairmanContainer = document.getElementById("mgmt-chairman-container");
  if (chairmanContainer && RIT_DATA.management.chairman) {
    chairmanContainer.innerHTML = renderMgmtCardGroup(RIT_DATA.management.chairman);
  }

  // Render Officers (Secretary & Treasurer)
  const officersContainer = document.getElementById("mgmt-officers-container");
  if (officersContainer) {
    const officers = [...RIT_DATA.management.secretary, ...RIT_DATA.management.treasurer];
    officersContainer.innerHTML = renderMgmtCardGroup(officers);
  }

  // Render Executive Members
  const execContainer = document.getElementById("mgmt-executive-container");
  if (execContainer && RIT_DATA.management.executiveMembers) {
    execContainer.innerHTML = renderMgmtCardGroup(RIT_DATA.management.executiveMembers);
  }

  // Render Advisors
  const advisoryContainer = document.getElementById("mgmt-advisory-container");
  if (advisoryContainer && RIT_DATA.management.advisoryMembers) {
    advisoryContainer.innerHTML = renderMgmtCardGroup(RIT_DATA.management.advisoryMembers);
  }

  // Render Management Committee Table
  const committeeContainer = document.getElementById("mgmt-committee-container");
  if (committeeContainer && RIT_DATA.management.managementCommittee) {
    let tableHtml = "";
    RIT_DATA.management.managementCommittee.forEach((member, index) => {
      tableHtml += `
        <tr>
          <td style="font-weight: 500;">${index + 1}</td>
          <td style="font-weight: 600; color: var(--primary);">${member.name}</td>
          <td>${member.designation}</td>
        </tr>
      `;
    });
    committeeContainer.innerHTML = tableHtml;
  }
}

function renderMgmtCardGroup(members) {
  let html = "";
  members.forEach(member => {
    const photo = member.image
      ? `<img src="${member.image}" alt="${member.name}" class="mgmt-photo-img" loading="lazy">`
      : `<div class="mgmt-photo-placeholder"><i data-lucide="user" style="width: 48px; height: 48px;"></i></div>`;

    html += `
      <div class="mgmt-card">
        ${photo}
        <h3 class="mgmt-name">${member.name}</h3>
        <p class="mgmt-role">${member.role}</p>
        <p class="mgmt-bio">${member.bio}</p>
      </div>
    `;
  });
  return html;
}


/* ==========================================
   ACTIVITIES & PROGRAMS PAGE
   ========================================== */

function renderFullPrograms() {
  const container = document.getElementById("full-programs-container");
  if (!container || !RIT_DATA.programs) return;

  let html = "";
  RIT_DATA.programs.forEach(prog => {
    html += `
      <div class="section ${prog.id % 2 === 0 ? 'section-bg' : ''}" id="${prog.id}">
        <div class="container">
          <div class="about-grid" style="grid-template-columns: ${prog.id % 2 === 0 ? '1fr 1.2fr' : '1.2fr 1fr'}">
            <div style="order: ${prog.id % 2 === 0 ? '0' : '1'}">
              <img src="${prog.image}" alt="${prog.title}" class="about-img" style="height: 380px;" loading="lazy">
            </div>
            <div>
              <span class="hero-tag" style="background-color: rgba(0, 91, 172, 0.08); color: var(--secondary);">${prog.tag}</span>
              <h2 class="section-title" style="text-align: left; margin-top: 0.5rem;">${prog.title}</h2>
              <div class="section-title::after" style="left: 0; transform: none;"></div>
              <p class="about-text" style="font-size: 1.1rem; line-height: 1.8; margin-top: 1.5rem;">${prog.desc}</p>
              <p class="about-text">
                RIT Education & Welfare Society coordinates this program at various sub-centers across urban slums and rural zones. Certified training and guidance resources are supplied to guarantee high-standard mentorship and positive output statistics.
              </p>
              <a href="contact.html?program=${prog.id}" class="btn btn-primary" style="margin-top: 1rem;">Enroll / Support Program</a>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}


/* ==========================================
   DOWNLOADS PAGE DYNAMIC RENDERINGS
   ========================================== */

function renderFullDownloads() {
  const container = document.getElementById("full-downloads-container");
  if (!container || !RIT_DATA.downloads) return;

  // Group downloads by category
  const categories = ["Certificates", "Reports", "Notices", "Brochures", "Admission Forms"];
  let html = "";

  categories.forEach(cat => {
    const docs = RIT_DATA.downloads.filter(d => d.category === cat);
    if (docs.length === 0) return;

    html += `
      <h3 class="mgmt-section-header">${cat}</h3>
      <div class="downloads-table-wrapper" style="margin-bottom: 3rem;">
        <table class="downloads-table">
          <thead>
            <tr>
              <th style="width: 50%;">Document Title</th>
              <th>Format</th>
              <th>File Size</th>
              <th style="text-align: right;">Action</th>
            </tr>
          </thead>
          <tbody>
            ${docs.map(doc => `
              <tr>
                <td>
                  <div class="download-cell-name">
                    <i data-lucide="file-text"></i>
                    <span>${doc.title}</span>
                  </div>
                </td>
                <td><span class="download-badge">${doc.fileType}</span></td>
                <td>${doc.fileSize}</td>
                <td style="text-align: right;">
                  <a href="${doc.url}" class="download-btn">
                    <i data-lucide="download"></i> Download
                  </a>
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;
  });

  container.innerHTML = html;
  if (typeof lucide !== "undefined") lucide.createIcons();
}


/* ==========================================
   NEWS & ANNOUNCEMENTS PAGE PORTAL
   ========================================== */

function renderFullNewsPortal() {
  // 1. Render News Column
  const newsCol = document.getElementById("portal-news-col");
  if (newsCol && RIT_DATA.news.news) {
    let html = "";
    RIT_DATA.news.news.forEach(item => {
      html += `
        <div class="news-card-strip" id="news-${item.id}" style="margin-bottom: 1.5rem;">
          <div class="news-date-badge">
            ${item.date.split(" ")[0]}
            <span>${item.date.split(" ")[1]}</span>
          </div>
          <div class="news-strip-content">
            <h3 class="news-strip-title" style="font-size: 1.25rem;">${item.title}</h3>
            <p class="news-strip-meta">
              <span><i data-lucide="calendar"></i> Year: ${item.year}</span>
              <span><i data-lucide="tag"></i> Category: ${item.meta}</span>
            </p>
            <p class="about-text" style="margin-top: 1rem;">${item.desc}</p>
            <p class="about-text" style="font-size: 0.9rem; opacity: 0.85;">
              Full report: Regular press updates are circulated to news desks. We publish comprehensive reviews of projects to emphasize societal benefit and accountability to our patrons.
            </p>
          </div>
        </div>
      `;
    });
    newsCol.innerHTML = html;
  }

  // 2. Render Announcements Column
  const annCol = document.getElementById("portal-announcements-col");
  if (annCol && RIT_DATA.news.announcements) {
    let html = "";
    RIT_DATA.news.announcements.forEach(item => {
      html += `
        <div class="news-card-strip" id="ann-${item.id}" style="margin-bottom: 1.5rem; border-left: 4px solid var(--secondary);">
          <div class="news-strip-content" style="padding-left: 0.5rem;">
            <span class="hero-tag" style="padding: 0.15rem 0.5rem; font-size: 0.65rem; margin-bottom: 0.5rem;">Announcement</span>
            <h3 class="news-strip-title">${item.title}</h3>
            <p class="news-strip-meta">
              <span><i data-lucide="calendar"></i> Date: ${item.date} ${item.year}</span>
              <span><i data-lucide="building"></i> Source: ${item.meta}</span>
            </p>
            <p class="about-text" style="margin-top: 0.75rem; font-size: 0.95rem;">${item.desc}</p>
          </div>
        </div>
      `;
    });
    annCol.innerHTML = html;
  }

  // 3. Render Notices Column
  const noticeCol = document.getElementById("portal-notices-col");
  if (noticeCol && RIT_DATA.news.notices) {
    let html = "";
    RIT_DATA.news.notices.forEach(item => {
      html += `
        <div class="news-card-strip" id="not-${item.id}" style="margin-bottom: 1.5rem; border-left: 4px solid var(--accent);">
          <div class="news-strip-content" style="padding-left: 0.5rem;">
            <span class="hero-tag" style="background-color: var(--accent); color: var(--primary); padding: 0.15rem 0.5rem; font-size: 0.65rem; margin-bottom: 0.5rem;">Official Notice</span>
            <h3 class="news-strip-title">${item.title}</h3>
            <p class="news-strip-meta">
              <span><i data-lucide="calendar"></i> Issued: ${item.date} ${item.year}</span>
              <span><i data-lucide="award"></i> Board: ${item.meta}</span>
            </p>
            <p class="about-text" style="margin-top: 0.75rem; font-size: 0.95rem;">${item.desc}</p>
          </div>
        </div>
      `;
    });
    noticeCol.innerHTML = html;
  }

  // 4. Render Events Sidebar
  const eventsList = document.getElementById("portal-events-sidebar");
  if (eventsList && RIT_DATA.news.events) {
    let html = "";
    RIT_DATA.news.events.forEach(item => {
      html += `
        <div class="sidebar-event-item">
          <div class="event-mini-date">
            ${item.date}
            <span>${item.month}</span>
          </div>
          <div class="event-mini-info">
            <h4 class="event-mini-title">${item.title}</h4>
            <p class="event-mini-loc"><i data-lucide="map-pin" style="width:12px;"></i> ${item.loc}</p>
            <p class="event-mini-loc" style="margin-top: 0.25rem;"><i data-lucide="clock" style="width:12px;"></i> ${item.time}</p>
            <p class="about-text" style="font-size: 0.8rem; line-height: 1.4; margin-top: 0.4rem;">${item.desc}</p>
          </div>
        </div>
      `;
    });
    eventsList.innerHTML = html;
  }
  
  if (typeof lucide !== "undefined") lucide.createIcons();
}


/* ==========================================
   GALLERY PAGE FILTERING & LIGHTBOX
   ========================================== */

function renderFullGallery(category) {
  const container = document.getElementById("full-gallery-container");
  if (!container || !RIT_DATA.gallery) return;

  const filtered = category === "All"
    ? RIT_DATA.gallery
    : RIT_DATA.gallery.filter(item => item.category === category);

  let html = "";
  if (filtered.length === 0) {
    html = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 3rem;">No media records under this category.</div>`;
  } else {
    filtered.forEach(item => {
      html += `
        <div class="gallery-item" onclick="openLightbox('${item.image}', '${item.title}', '${item.category}')">
          <img src="${item.image}" alt="${item.title}" loading="lazy">
          <div class="gallery-item-overlay">
            <span class="gallery-item-cat">${item.category}</span>
            <h3 class="gallery-item-title">${item.title}</h3>
          </div>
        </div>
      `;
    });
  }

  container.innerHTML = html;
}

function initGalleryFilterListeners() {
  const buttons = document.querySelectorAll(".gallery-filter-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-filter");
      renderFullGallery(category);
    });
  });
}

// Lightbox Open & Close Functions
window.openLightbox = function(imageUrl, title, category) {
  const modal = document.getElementById("lightbox-modal");
  const modalImg = document.getElementById("lightbox-img");
  const captionTitle = document.getElementById("lightbox-title");
  const captionCat = document.getElementById("lightbox-category");

  if (!modal || !modalImg) return;

  modalImg.src = imageUrl;
  captionTitle.textContent = title;
  captionCat.textContent = category;
  modal.style.display = "flex";
  document.body.style.overflow = "hidden"; // Prevent scrolling
};

window.closeLightbox = function() {
  const modal = document.getElementById("lightbox-modal");
  if (modal) {
    modal.style.display = "none";
    document.body.style.overflow = ""; // Re-enable scrolling
  }
};


/* ==========================================
   STATISTICS COUNTERS LOGIC
   ========================================== */

function initStatsCounters() {
  const statNumbers = document.querySelectorAll(".stats-num");
  if (statNumbers.length === 0) return;

  const countUp = (el) => {
    const targetText = el.getAttribute("data-target");
    // Extract numbers, and append suffixes (like +)
    const targetNum = parseInt(targetText.replace(/\D/g, ""), 10);
    const suffix = targetText.replace(/\d/g, "");
    
    let count = 0;
    const duration = 2000; // 2 seconds
    const stepTime = Math.max(Math.floor(duration / targetNum), 15);
    
    const timer = setInterval(() => {
      count += Math.ceil(targetNum / 100);
      if (count >= targetNum) {
        el.textContent = targetNum + suffix;
        clearInterval(timer);
      } else {
        el.textContent = count + suffix;
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

  // Retrieve parameters from URL if any
  const urlParams = new URLSearchParams(window.location.search);
  const progParam = urlParams.get("program");
  if (progParam) {
    const subjectField = document.getElementById("subject");
    if (subjectField) {
      subjectField.value = `Enquiry about Activity: ${progParam.replace(/-/g, " ").toUpperCase()}`;
    }
  }

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
