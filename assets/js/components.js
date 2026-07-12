/* components.js - Reusable UI Components & Layouts */

document.addEventListener("DOMContentLoaded", () => {
  // Inject Top Info Bar
  const topbarPlaceholder = document.getElementById("topbar-placeholder");
  if (topbarPlaceholder) {
    topbarPlaceholder.innerHTML = `
      <div class="top-bar">
        <div class="container">
          <div class="top-info">
            <div class="top-info-item">
              <i data-lucide="phone"></i>
              <span>+91 96676 09999</span>
            </div>
            <div class="top-info-item">
              <i data-lucide="mail"></i>
              <span>riteducation013@gmail.com</span>
            </div>
            <div class="top-info-item">
              <i data-lucide="map-pin"></i>
              <span>B-9, Shri Ram Colony, Borkheda, Kota - 324001</span>
            </div>
          </div>
          <div class="top-socials">
            <a href="#" aria-label="Facebook"><i data-lucide="facebook"></i></a>
            <a href="#" aria-label="Twitter"><i data-lucide="twitter"></i></a>
            <a href="#" aria-label="Instagram"><i data-lucide="instagram"></i></a>
            <a href="#" aria-label="Youtube"><i data-lucide="youtube"></i></a>
          </div>
        </div>
      </div>
    `;
  }

  // Inject Navigation Bar
  const navbarPlaceholder = document.getElementById("navbar-placeholder");
  if (navbarPlaceholder) {
    navbarPlaceholder.innerHTML = `
      <div class="container">
        <a href="index.html" class="nav-brand">
          <img src="assets/images/logo.png" alt="RIT Logo" class="nav-logo" style="background-color: #ffffff; border-radius: 50%; padding: 2px;">
          <div class="nav-title-wrapper">
            <span class="nav-title">RIT Education and Welfare Society</span>
          </div>
        </a>
        <ul class="nav-menu" id="nav-menu">
          <li><a href="index.html" class="nav-link" data-page="index">Home</a></li>
          <li><a href="about.html" class="nav-link" data-page="about">About Us</a></li>
          <li><a href="management.html" class="nav-link" data-page="management">Management</a></li>
          <li><a href="gallery.html" class="nav-link" data-page="gallery">Gallery</a></li>
          <li><a href="downloads.html" class="nav-link" data-page="downloads">Downloads</a></li>
          <li><a href="news.html" class="nav-link" data-page="news">News</a></li>
          <li><a href="contact.html" class="nav-link" data-page="contact">Contact Us</a></li>
        </ul>
        <button class="menu-toggle" id="menu-toggle" aria-label="Toggle Menu">
          <i data-lucide="menu"></i>
        </button>
      </div>
    `;
  }

  // Inject Floating Quick Actions Widget
  const floatingPlaceholder = document.getElementById("floating-actions-placeholder");
  if (floatingPlaceholder) {
    floatingPlaceholder.innerHTML = `
      <div class="floating-widget" id="floating-widget">
        <div class="floating-menu">
          <a href="tel:+919667609999" class="floating-item">
            <span class="floating-label">Call Us</span>
            <span class="floating-btn floating-phone"><i data-lucide="phone"></i></span>
          </a>
          <a href="mailto:riteducation013@gmail.com" class="floating-item">
            <span class="floating-label">Email Us</span>
            <span class="floating-btn floating-email"><i data-lucide="mail"></i></span>
          </a>
          <a href="https://wa.me/919667609999" target="_blank" rel="noopener" class="floating-item">
            <span class="floating-label">WhatsApp</span>
            <span class="floating-btn floating-whatsapp"><i data-lucide="message-square"></i></span>
          </a>
          <a href="https://maps.google.com/?q=25.178722,75.881917" target="_blank" rel="noopener" class="floating-item">
            <span class="floating-label">Get Directions</span>
            <span class="floating-btn floating-directions"><i data-lucide="map-pin"></i></span>
          </a>
        </div>
        <button class="floating-toggle" id="floating-toggle" aria-label="Quick Contacts">
          <i data-lucide="message-circle"></i>
        </button>
      </div>
      <button class="back-to-top" id="back-to-top" aria-label="Back to Top">
        <i data-lucide="arrow-up"></i>
      </button>
    `;
  }

  // Inject Footer
  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = `
      <div class="container">
        <div class="footer-grid">
          <div class="footer-col-about">
            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem;">
              <img src="assets/images/logo.png" alt="RIT Logo" style="height: 60px; width: 60px; object-fit: contain; background: white; padding: 2px; border-radius: 50%;">
              <div>
                <h3 style="margin: 0; font-size: 1.25rem;">RIT Education and Welfare Society</h3>
                <span style="font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;">Foundation for a Personality</span>
              </div>
            </div>
            <p class="footer-about-text">
              Registered under the Rajasthan Societies Registration Act, 1958 (Act No. 28 of 1958), RIT Education and Welfare Society is dedicated to community empowerment, skill training, and social welfare initiatives.
            </p>
            <div class="top-socials">
              <a href="#" aria-label="Facebook"><i data-lucide="facebook"></i></a>
              <a href="#" aria-label="Twitter"><i data-lucide="twitter"></i></a>
              <a href="#" aria-label="Instagram"><i data-lucide="instagram"></i></a>
              <a href="#" aria-label="Youtube"><i data-lucide="youtube"></i></a>
            </div>
          </div>
          <div>
            <h4 class="footer-col-title">Quick Links</h4>
            <ul class="footer-links">
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About Us</a></li>
              <li><a href="management.html">Management Board</a></li>
              <li><a href="downloads.html">Downloads Library</a></li>
              <li><a href="news.html">News & Notices</a></li>
              <li><a href="contact.html">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 class="footer-col-title">Contact Us</h4>
            <ul class="footer-contact-list">
              <li class="footer-contact-item">
                <i data-lucide="map-pin"></i>
                <span>B-9, Shri Ram Colony, Borkheda, Kota - 324001, Rajasthan, India</span>
              </li>
              <li class="footer-contact-item">
                <i data-lucide="phone"></i>
                <span>+91 96676 09999</span>
              </li>
              <li class="footer-contact-item">
                <i data-lucide="mail"></i>
                <span>riteducation013@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; ${new Date().getFullYear()} RIT Education and Welfare Society. All Rights Reserved.</p>
          <p>Registered under the Rajasthan Societies Registration Act, 1958 (Act No. 28 of 1958)</p>
        </div>
      </div>
    `;
  }

  // Highlight Active Link
  const currentPath = window.location.pathname;
  const pageName = currentPath.split("/").pop().replace(".html", "") || "index";
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    if (link.getAttribute("data-page") === pageName) {
      link.classList.add("active");
    }
  });

  // Mobile Navigation Menu Toggle
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      const icon = menuToggle.querySelector("i");
      if (navMenu.classList.contains("active")) {
        icon.setAttribute("data-lucide", "x");
      } else {
        icon.setAttribute("data-lucide", "menu");
      }
      lucide.createIcons();
    });
  }

  // Floating Widget Expand Toggle
  const floatingToggle = document.getElementById("floating-toggle");
  const floatingWidget = document.getElementById("floating-widget");
  if (floatingToggle && floatingWidget) {
    floatingToggle.addEventListener("click", () => {
      floatingWidget.classList.toggle("active");
    });
  }

  // Back to Top functionality
  const backToTopBtn = document.getElementById("back-to-top");
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    });
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // Sticky Navbar trigger
  const navbarElement = document.querySelector(".navbar");
  if (navbarElement) {
    const stickyOffset = navbarElement.offsetTop + 100;
    window.addEventListener("scroll", () => {
      if (window.scrollY > stickyOffset) {
        navbarElement.classList.add("sticky");
      } else {
        navbarElement.classList.remove("sticky");
      }
    });
  }

  // Initialize Lucide Icons for injected components
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
});
