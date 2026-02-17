// Modern loader with preload & performance hints
(function() {
  // Preload critical resources
  const preloadLinks = [
    { href: '../styles/style.css', as: 'style' },
    { href: 'https://fonts.googleapis.com', as: 'fetch', crossorigin: true },
    { href: '../js/index.js', as: 'script' }
  ];

  preloadLinks.forEach(link => {
    const el = document.createElement('link');
    el.rel = 'preload';
    Object.keys(link).forEach(key => {
      if (key !== 'id') el.setAttribute(key, link[key]);
    });
    document.head.appendChild(el);
  });

  // DNS prefetch for external resources
  const dnsPrefetch = [
    'https://cdnjs.cloudflare.com',
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com'
  ];

  dnsPrefetch.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = url;
    document.head.appendChild(link);
  });

  // Load shared components
  async function loadComponent(path, targetId) {
    try {
      // Ensure path is correct for components folder
      const componentPath = path.startsWith('../') ? path : '../components/' + path.replace(/.*\//, '');
      const response = await fetch(componentPath);
      if (response.ok) {
        document.getElementById(targetId).innerHTML = await response.text();
      }
    } catch (error) {
      console.warn(`Failed to load ${path}:`, error);
    }
  }

  // Load all components in parallel
  Promise.all([
    loadComponent('components/header.html', 'site-header'),
    loadComponent('components/modal.html', 'site-modal'),
    loadComponent('components/footer.html', 'site-footer')
  ]).then(() => {
    // Load main app script as ES module
    const script = document.createElement('script');
    script.type = 'module';
    script.src = '../js/index.js';
    script.defer = true;
    document.body.appendChild(script);
  }).catch(error => {
    console.error('Component loading error:', error);
    // Fallback: still load the script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = '../js/index.js';
    script.defer = true;
    document.body.appendChild(script);
  });
})();
