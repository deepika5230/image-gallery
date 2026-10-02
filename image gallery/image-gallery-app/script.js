/**
 * Modern Image Gallery - Application Script
 * Features: Dynamic rendering, Category filtering, Lightbox modal, Keyboard & Touch navigation
 */

// Gallery Dataset with high-resolution Unsplash images
const imagesData = [
  // Nature
  {
    id: 1,
    category: 'nature',
    title: 'Emerald Forest Valley',
    author: 'Luca Bravo',
    description: 'A breathtaking misty morning view over a lush green mountain pine forest valley.',
    thumbUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=85'
  },
  {
    id: 2,
    category: 'nature',
    title: 'Serene Alpine Lake',
    author: 'Bailey Zindel',
    description: 'Crystal clear glacial reflection on Moraine Lake amidst rugged mountain peaks at sunrise.',
    thumbUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1600&q=85'
  },
  {
    id: 3,
    category: 'nature',
    title: 'Autumn Woodland Trail',
    author: 'Sebastian Unrau',
    description: 'Golden sunlight filtering through vibrant orange maple leaves in a dense autumn forest.',
    thumbUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=85'
  },

  // Architecture
  {
    id: 4,
    category: 'architecture',
    title: 'Modern Geometric Skyscraper',
    author: 'Joel Filipe',
    description: 'Minimalist futuristic glass building facade rising sharp against a soft pastel sky.',
    thumbUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85'
  },
  {
    id: 5,
    category: 'architecture',
    title: 'Spiral Monolithic Staircase',
    author: 'Dan Freeman',
    description: 'Hypnotic architectural spiral staircase viewed from below in a modern art museum.',
    thumbUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85'
  },
  {
    id: 6,
    category: 'architecture',
    title: 'Gothic Cathedral Arches',
    author: 'Patrick Federi',
    description: 'Intricate classic stone vaulting and stained glass lighting in a historic European cathedral.',
    thumbUrl: 'https://images.unsplash.com/photo-1548625361-195fe6144df3?auto=format&fit=crop&w=800&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1548625361-195fe6144df3?auto=format&fit=crop&w=1600&q=85'
  },

  // Animals
  {
    id: 7,
    category: 'animals',
    title: 'Majestic Red Fox',
    author: 'Ray Hennessy',
    description: 'A curious wild red fox resting gracefully among golden autumn ferns and moss.',
    thumbUrl: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=800&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=1600&q=85'
  },
  {
    id: 8,
    category: 'animals',
    title: 'Golden Eagle Portrait',
    author: 'Richard Lee',
    description: 'Detailed close-up of a powerful eagle with intense golden eyes and sharp plumage.',
    thumbUrl: 'https://images.unsplash.com/photo-1611689342806-0863700ce1e4?auto=format&fit=crop&w=800&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1611689342806-0863700ce1e4?auto=format&fit=crop&w=1600&q=85'
  },
  {
    id: 9,
    category: 'animals',
    title: 'Snowy Arctic Wolf',
    author: 'Yannick Menard',
    description: 'A lone white wolf treading silently through fresh winter powder in the arctic tundra.',
    thumbUrl: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef9?auto=format&fit=crop&w=800&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef9?auto=format&fit=crop&w=1600&q=85'
  },

  // Travel
  {
    id: 10,
    category: 'travel',
    title: 'Santorini Sunset Coast',
    author: 'Heidi Kaden',
    description: 'Classic whitewashed cliffside villas and blue domes overlooking the Aegean sea during dusk.',
    thumbUrl: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1600&q=85'
  },
  {
    id: 11,
    category: 'travel',
    title: 'Kyoto Bamboo Sanctuary',
    author: 'Su San Lee',
    description: 'Tranquil path leading through towering green bamboo stalks in Arashiyama, Japan.',
    thumbUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=85'
  },
  {
    id: 12,
    category: 'travel',
    title: 'Hot Air Balloons over Cappadocia',
    author: 'Tomas Alberio',
    description: 'Dozen colorful hot air balloons floating over surreal fairy chimney rock formations at dawn.',
    thumbUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85'
  },

  // Food
  {
    id: 13,
    category: 'food',
    title: 'Artisanal Berry Tart',
    author: 'Brooke Lark',
    description: 'Freshly baked pastry filled with rich vanilla cream and topped with glossy raspberries and blueberries.',
    thumbUrl: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1600&q=85'
  },
  {
    id: 14,
    category: 'food',
    title: 'Gourmet Woodfired Pizza',
    author: 'Chad Montano',
    description: 'Authentic Neapolitan pizza topped with fresh basil, buffalo mozzarella, and san marzano tomato sauce.',
    thumbUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1600&q=85'
  },
  {
    id: 15,
    category: 'food',
    title: 'Fresh Avocado Toast',
    author: 'Jenn Kosar',
    description: 'Crispy sourdough topped with mashed avocado, poached egg, microgreens, and chili flakes.',
    thumbUrl: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
    fullUrl: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1600&q=85'
  }
];

// DOM Elements
const galleryGrid = document.getElementById('gallery-grid');
const emptyState = document.getElementById('empty-state');
const filterBtns = document.querySelectorAll('.filter-btn');

// Lightbox Elements
const lightbox = document.getElementById('lightbox');
const lightboxOverlay = document.getElementById('lightbox-overlay');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxSpinner = document.getElementById('lightbox-spinner');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxNext = document.getElementById('lightbox-next');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxCategory = document.getElementById('lightbox-category');
const lightboxDescription = document.getElementById('lightbox-description');
const lightboxCurrent = document.getElementById('lightbox-current');
const lightboxTotal = document.getElementById('lightbox-total');

// State Variables
let currentFilter = 'all';
let currentlyFilteredImages = [...imagesData];
let currentLightboxIndex = 0;

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  updateCategoryCounts();
  renderGallery(imagesData);
  setupFilterListeners();
  setupLightboxListeners();
});

/**
 * Calculates and updates badge counts for each category
 */
function updateCategoryCounts() {
  const counts = {
    all: imagesData.length,
    nature: 0,
    architecture: 0,
    animals: 0,
    travel: 0,
    food: 0
  };

  imagesData.forEach(img => {
    if (counts[img.category] !== undefined) {
      counts[img.category]++;
    }
  });

  Object.keys(counts).forEach(cat => {
    const countEl = document.getElementById(`count-${cat}`);
    if (countEl) {
      countEl.textContent = counts[cat];
    }
  });
}

/**
 * Renders gallery card HTML into the grid
 */
function renderGallery(images) {
  galleryGrid.innerHTML = '';

  if (images.length === 0) {
    emptyState.classList.remove('hidden');
    return;
  }
  emptyState.classList.add('hidden');

  images.forEach((img, index) => {
    const card = document.createElement('div');
    card.className = 'gallery-card show';
    card.setAttribute('data-category', img.category);
    card.setAttribute('data-id', img.id);

    card.innerHTML = `
      <div class="card-image-wrapper">
        <img class="gallery-img" src="${img.thumbUrl}" alt="${img.title}" loading="lazy" />
        <div class="card-overlay">
          <div class="card-top-bar">
            <span class="card-category-badge">${img.category}</span>
            <div class="card-expand-icon" aria-label="Expand image">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="15 3 21 3 21 9"></polyline>
                <polyline points="9 21 3 21 3 15"></polyline>
                <line x1="21" y1="3" x2="14" y2="10"></line>
                <line x1="3" y1="21" x2="10" y2="14"></line>
              </svg>
            </div>
          </div>
          <div class="card-bottom-bar">
            <h3 class="card-title">${img.title}</h3>
            <p class="card-subtitle">Photo by ${img.author}</p>
          </div>
        </div>
      </div>
    `;

    // Handle image load skeleton removal
    const imgEl = card.querySelector('.gallery-img');
    const wrapper = card.querySelector('.card-image-wrapper');

    if (imgEl.complete) {
      wrapper.classList.add('loaded');
    } else {
      imgEl.addEventListener('load', () => wrapper.classList.add('loaded'));
    }

    // Open lightbox on card click
    card.addEventListener('click', () => {
      openLightbox(index);
    });

    galleryGrid.appendChild(card);
  });
}

/**
 * Filter Logic with Smooth Animations
 */
function setupFilterListeners() {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedCategory = btn.getAttribute('data-category');
      if (selectedCategory === currentFilter) return;

      // Update Active Button UI
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      currentFilter = selectedCategory;

      // Filter Data
      if (selectedCategory === 'all') {
        currentlyFilteredImages = [...imagesData];
      } else {
        currentlyFilteredImages = imagesData.filter(img => img.category === selectedCategory);
      }

      // Re-render gallery with smooth card enter transition
      renderGallery(currentlyFilteredImages);
    });
  });
}

/**
 * Lightbox Modal Controller
 */
function setupLightboxListeners() {
  // Navigation Buttons
  lightboxPrev.addEventListener('click', (e) => {
    e.stopPropagation();
    navigateLightbox(-1);
  });

  lightboxNext.addEventListener('click', (e) => {
    e.stopPropagation();
    navigateLightbox(1);
  });

  lightboxClose.addEventListener('click', closeLightbox);
  lightboxOverlay.addEventListener('click', closeLightbox);

  // Keyboard Shortcuts (Esc, Left Arrow, Right Arrow)
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;

    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      navigateLightbox(-1);
    } else if (e.key === 'ArrowRight') {
      navigateLightbox(1);
    }
  });

  // Touch Swipe Support for Mobile
  let touchStartX = 0;
  let touchEndX = 0;

  lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  lightbox.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) {
      // Swiped Left -> Next Image
      navigateLightbox(1);
    }
    if (touchEndX > touchStartX + swipeThreshold) {
      // Swiped Right -> Previous Image
      navigateLightbox(-1);
    }
  }
}

/**
 * Opens Lightbox for specific image index in current dataset
 */
function openLightbox(index) {
  currentLightboxIndex = index;
  updateLightboxContent();

  lightbox.classList.add('active');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

/**
 * Updates Lightbox DOM content and manages image loading state
 */
function updateLightboxContent() {
  const item = currentlyFilteredImages[currentLightboxIndex];
  if (!item) return;

  // Show spinner, hide current image while loading high-res
  lightboxSpinner.classList.add('active');
  lightboxImg.classList.remove('loaded');

  // Set image source
  lightboxImg.src = item.fullUrl;
  lightboxImg.alt = item.title;

  lightboxImg.onload = () => {
    lightboxSpinner.classList.remove('active');
    lightboxImg.classList.add('loaded');
  };

  // Set Meta Texts
  lightboxCategory.textContent = item.category;
  lightboxTitle.textContent = item.title;
  lightboxDescription.textContent = item.description;
  lightboxCurrent.textContent = currentLightboxIndex + 1;
  lightboxTotal.textContent = currentlyFilteredImages.length;
}

/**
 * Navigates Lightbox previous/next with circular wrapping
 */
function navigateLightbox(direction) {
  currentLightboxIndex += direction;

  if (currentLightboxIndex < 0) {
    currentLightboxIndex = currentlyFilteredImages.length - 1;
  } else if (currentLightboxIndex >= currentlyFilteredImages.length) {
    currentLightboxIndex = 0;
  }

  updateLightboxContent();
}

/**
 * Closes Lightbox Modal
 */
function closeLightbox() {
  lightbox.classList.remove('active');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = ''; // Restore scrolling
}
