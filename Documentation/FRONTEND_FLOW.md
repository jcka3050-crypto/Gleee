# Frontend Application Flow

## Overview
The GleeJeYly frontend follows a **modern modular architecture** with progressive initialization and lazy loading to optimize performance.

## Initialization Sequence

### 1. **Page Load** → `loader-modern.js`
When an HTML page loads, the final script tag executes `loader-modern.js`:

```html
<script src="../js/loader-modern.js" defer></script>
```

**What it does:**
- Preloads critical resources (CSS, fonts, main JS module)
- Sets up DNS prefetch for external CDNs
- Fetches and injects reusable components (header, modal, footer)
- Loads the main module `index.js` asynchronously

### 2. **Resource Preloading**
```javascript
Preload URLs:
├── ../styles/style.css          (Critical CSS)
├── ../js/index.js               (Main module)
└── https://fonts.googleapis.com (Fonts)

DNS Prefetch:
├── https://cdnjs.cloudflare.com (Font Awesome)
├── https://fonts.googleapis.com
└── https://fonts.gstatic.com
```

**Benefits:**
- Hints browser to download critical resources early
- Reduces time to interactive (TTI)
- Prevents render-blocking resources

### 3. **Component Injection**
```javascript
// Parallel component loading
Promise.all([
  loadComponent('components/header.html', 'site-header'),
  loadComponent('components/modal.html', 'site-modal'),
  loadComponent('components/footer.html', 'site-footer')
])
```

**Components**:
- `header.html` - Navigation & branding (injected into `#site-header`)
- `modal.html` - Confirmation/info modals (injected into `#site-modal`)
- `footer.html` - Contact & social links (injected into `#site-footer`)

### 4. **Main App Initialization** → `index.js`
Once components are loaded, the main module executes:

```javascript
// index.js initialization flow
async function initApp() {
  1. Start performance tracking
  2. Setup loading indicator
  3. Wait for DOMContentLoaded
  4. Initialize mobile optimizations
  5. Initialize navigation
  6. Initialize page-specific features:
     ├── FAQ accordion
     ├── Order form
     ├── Reviews system
     └── (Others based on page)
  7. Setup lazy loading for images
  8. Register Service Worker
  9. Report Web Vitals
  10. Mark app as ready (app-ready class)
}
```

## Architecture Layers

### **Layer 1: Loading Layer** (`loader-modern.js`)
- **Purpose**: Resource optimization & component injection
- **Entry Point**: `<script src="../js/loader-modern.js" defer></script>`
- **Outputs**:
  - Injected HTML components
  - Preloaded resources
  - Main module loading triggered

### **Layer 2: Core Module** (`index.js`)
- **Purpose**: Main application engine
- **Imports**:
  - `config.js` - Feature flags & initialization guards
  - `utils.js` - Lazy loading & utilities
  - `performance.js` - Web Vitals tracking
  - `pwa.js` - Service Worker registration
  - Feature modules (navigation, orders, reviews, etc.)
- **Responsibilities**:
  - Orchestrate feature initialization
  - Prevent duplicate initialization (guards)
  - Handle error states
  - Mark application ready

### **Layer 3: Feature Modules**
Located in `/src/js/`:

| Module | Purpose | Trigger |
|--------|---------|---------|
| `navigation.js` | Menu, page routing, mobile optimization | All pages |
| `orders.js` | Order form, calculations, validation | Order page |
| `reviews.js` | Review loading, form submission | Reviews page |
| `config.js` | Feature detection, initialization guards | Bootstrap |
| `utils.js` | Lazy loading, utilities, helpers | As needed |
| `pwa.js` | Service Worker setup, offline support | Bootstrap |
| `performance.js` | Web Vitals, performance monitoring | Bootstrap |
| `accessibility.js` | ARIA, keyboard nav, screen reader support | All pages |
| `homepage.js` | Landing page dynamic rendering | Homepage |
| `ui.js` | UI utilities and helpers | As needed |

### **Layer 4: Specialized Modules** (Modern Architecture)
- **Purpose**: Feature-specific utilities and specialized functionality
- **Contains**:
  - `homepage.js` - Dynamic rendering of landing page sections
  - `ui.js` - Shared UI utilities
  - `accessibility.js` - ARIA attributes and screen reader support
  - `performance.js` - Web Vitals monitoring
  - `pwa.js` - PWA and offline capabilities
- **Status**: Fully modular, production-ready, no legacy code

## Data Flow

### **User Interaction Flow**
```
User Action (e.g., submit order)
    ↓
Feature Module Handler (orders.js)
    ↓
Validation (validators.js)
    ↓
API Call (secureFetch to /api/*)
    ↓
Toast Notification (success/error)
    ↓
UI Update (DOM manipulation)
    ↓
Optional: Service Worker Cache Update
```

### **API Integration**
```
Request Flow:
  └─ secureFetch() wrapper
     ├─ Timeout protection (10s)
     ├─ Abort controller for cancellation
     └─ Error handling

Response Flow:
  ├─ API Success → Update UI → Cache (if offline)
  ├─ API Timeout → Show timeout toast → Fallback
  └─ Network Error → Use localStorage cache → Show offline banner
```

### **State Management**
```
Global State (window object):
├── GLE_INIT_DONE - Initialization guards
├── lastOrder - Most recent order data
├── reviews - Reviews array (API or localStorage)
└── localStorage:
    └── gleejeyly_reviews - Persistent reviews backup
```

## Performance Optimizations

### **1. Resource Hints**
- ✅ `<link rel="preload">` - Critical resources loaded early
- ✅ `<link rel="dns-prefetch">` - DNS lookup parallelized
- ✅ `<link rel="preconnect">` - Connection established in advance

### **2. Code Splitting**
- ✅ Feature modules loaded only when needed
- ✅ Page-specific code gated behind feature detection
- ✅ Unused modules not downloaded

### **3. Lazy Loading**
- ✅ Images lazy-loaded with Intersection Observer
- ✅ Components fetched only after critical path
- ✅ Service Worker caches offline assets

### **4. Caching Strategy**
```
Service Worker Cache Levels:
1. Critical Assets Cache (gleejeyly-v2)
   └─ HTML, CSS, core JS
2. Runtime Cache (gleejeyly-runtime)
   └─ Dynamic API responses
3. Image Cache (gleejeyly-images)
   └─ Product images, avatars
```

## Page-Specific Flows

### **Homepage (`/public/index.html`)**
```
Load → Components → index.js → Navigation init → Mark ready
```

### **Order Page (`/pages/order.html`)**
```
Load → Components → index.js
    ↓
Detect #orderForm
    ↓
initOrderForm()
    ├─ Setup form validation
    ├─ Calculate total price
    ├─ Bind form submit handler
    └─ Setup payment flow
    ↓
Mark ready
```

### **Reviews Page (`/pages/reviews.html`)**
```
Load → Components → index.js
    ↓
Detect [data-reviews]
    ↓
loadReviews()
    ├─ Try API: GET /api/reviews
    ├─ Fallback: localStorage
    ├─ Render review list
    └─ Setup pagination
    ↓
initReviewForm()
    ├─ Setup form validation
    ├─ Bind submit handler
    └─ Handle POST /api/reviews
    ↓
Mark ready
```

### **FAQ Page (`/pages/faq.html`)**
```
Load → Components → index.js
    ↓
Detect .faq
    ↓
initFAQ()
    ├─ Find accordion items
    ├─ Bind click handlers
    ├─ Setup expand/collapse animation
    └─ Manage ARIA attributes
    ↓
Mark ready
```

## Error Handling

### **Global Error Handlers**
```javascript
window.addEventListener('error', handler)           // Sync errors
window.addEventListener('unhandledrejection', handler) // Promise rejections
```

### **Request Error Fallbacks**
```
API Request
    ├─ Success → Use API data → Cache locally
    ├─ Timeout → Show error toast → Retry option
    ├─ Network error → Check localStorage → Show offline mode
    └─ 5xx server error → Show maintenance message
```

## Initialization Guards

Prevents duplicate initialization when scripts are injected multiple times:

```javascript
window.GLE_INIT_DONE = {
  mobile: false,
  navigation: false,
  faq: false,
  orderForm: false,
  reviews: false
}
```

Each feature checks its guard before initializing:
```javascript
if (!initGuards.orderForm) {
  initOrderForm();
  initGuards.orderForm = true;
}
```

## Development Workflow

### **Adding a New Feature**
1. Create module in `/src/js/`
2. Define initialization guard in `index.js`
3. Add feature detection (DOM element, data attribute, etc.)
4. Export init function
5. Call from `initApp()` with guard check
6. Update Service Worker cache list if needed

### **Debugging**
```javascript
// Check initialization state
console.log(window.GLE_INIT_DONE)

// Check performance
console.log(window.resourceTiming)

// Check Service Worker
navigator.serviceWorker.getRegistrations()
  .then(registrations => console.log(registrations))

// Check cached resources
caches.keys().then(names => 
  names.forEach(name => caches.open(name).then(cache => cache.keys()))
)
```

## Monitoring & Metrics

### **Web Vitals Tracked**
- **LCP** (Largest Contentful Paint) - Loading performance
- **FID** (First Input Delay) - Interactivity
- **CLS** (Cumulative Layout Shift) - Visual stability
- **TTFB** (Time to First Byte) - Server response
- **FCP** (First Contentful Paint) - Perceived load

### **Custom Metrics**
- Module initialization time
- Component fetch duration
- Service Worker registration time
- API response times

## Browser Compatibility

### **Required APIs**
- ✅ Fetch API (all modern browsers)
- ✅ Promise & async/await (ES2017+)
- ✅ Intersection Observer API (lazy loading)
- ✅ Service Worker API (offline support)
- ✅ localStorage (persistence)

### **Graceful Degradation**
```javascript
// Feature detection in config.js
FEATURES.supportsServiceWorker = () => 'serviceWorker' in navigator
FEATURES.supportsLazyLoading = () => 'IntersectionObserver' in window
```

Features degrade gracefully if APIs unavailable.

## Security Considerations

### **CSP (Content Security Policy)**
- ✅ All inline scripts minimized
- ✅ External resources from trusted domains only
- ✅ Form submissions use CSRF tokens

### **Data Protection**
- ✅ Sensitive data not stored in localStorage
- ✅ API calls use secure fetch wrapper
- ✅ Timeout protection against slow endpoints
- ✅ XSS prevention via proper DOM methods

### **API Security**
```javascript
// Timeout protection
const controller = new AbortController()
const timeoutId = setTimeout(() => controller.abort(), 10000)

// Error handling
if (error.name === 'AbortError') {
  throw new Error('Request timeout')
}
```

---

**Last Updated**: February 17, 2026  
**Architecture Version**: 2.0 (Modern Modular)
