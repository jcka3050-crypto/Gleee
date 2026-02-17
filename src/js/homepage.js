/**
 * Landing Page / Homepage Renderer
 * Creates an engaging, conversion-focused homepage
 */

export function renderHomePage() {
  const homeSection = document.getElementById('home');
  if (!homeSection) return;

  const html = `
    <!-- HERO SECTION -->
    <section class="hero-section">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            <span class="emoji-large">🍰</span>
            <br>
            Premium Jelly Cheesecake
          </h1>
          <p class="hero-subtitle">
            Handmade with <strong>love</strong> • Fresh <strong>daily</strong> • Delivered <strong>fresh</strong>
          </p>
          <p class="hero-description">
            Indulge in our signature creamy jelly cheesecake with crushed graham base. 
            Every bite is a celebration of taste and quality.
          </p>
          <div class="hero-cta">
            <a href="order.html" class="btn btn-primary btn-lg">
              <i class="fas fa-shopping-cart"></i> Order Now
            </a>
            <a href="product.html" class="btn btn-secondary">
              <i class="fas fa-info-circle"></i> Learn More
            </a>
          </div>
        </div>
        <div class="hero-image">
          <img src="images/cheesecake.jpg" alt="Premium Jelly Cheesecake" class="hero-img" loading="lazy">
          <div class="hero-badge">
            <span class="badge-star">⭐⭐⭐⭐⭐</span>
            <span class="badge-text">4.8 Stars</span>
          </div>
        </div>
      </div>
    </section>

    <!-- FEATURED FLAVORS SECTION -->
    <section class="featured-section">
      <div class="container">
        <h2 class="section-title">Choose Your Flavor</h2>
        <p class="section-subtitle">Three delicious options to satisfy your cravings</p>
        
        <div class="flavors-grid">
          <!-- Flavor 1 -->
          <div class="flavor-card">
            <div class="flavor-icon">🍰</div>
            <h3 class="flavor-name">Plain Classic</h3>
            <p class="flavor-description">
              Our signature jelly cheesecake with creamy texture and crushed graham base
            </p>
            <p class="flavor-price">₱25.00</p>
            <span class="flavor-badge">Most Popular</span>
          </div>

          <!-- Flavor 2 -->
          <div class="flavor-card">
            <div class="flavor-icon">🟣</div>
            <h3 class="flavor-name">Ube Jam</h3>
            <p class="flavor-description">
              Rich purple yam flavor with aromatic notes. A Filipino favorite!
            </p>
            <p class="flavor-price">₱25.00</p>
            <span class="flavor-badge">Sweet & Aromatic</span>
          </div>

          <!-- Flavor 3 -->
          <div class="flavor-card">
            <div class="flavor-icon">🥨</div>
            <h3 class="flavor-name">Extra Crashed Graham</h3>
            <p class="flavor-description">
              Double the crunch! More graham on top and base for texture lovers
            </p>
            <p class="flavor-price">₱25.00</p>
            <span class="flavor-badge">Extra Crunchy</span>
          </div>
        </div>
      </div>
    </section>

    <!-- WHY CHOOSE US SECTION -->
    <section class="why-us-section">
      <div class="container">
        <h2 class="section-title">Why Choose GleeJeYly?</h2>
        
        <div class="benefits-grid">
          <div class="benefit-card">
            <div class="benefit-icon">✨</div>
            <h3>Premium Quality</h3>
            <p>Made with the finest ingredients, fresh daily. No shortcuts, no compromises.</p>
          </div>

          <div class="benefit-card">
            <div class="benefit-icon">🚚</div>
            <h3>Fast Delivery</h3>
            <p>Order today, receive within 1-2 days in Metro Manila. Swift and reliable.</p>
          </div>

          <div class="benefit-card">
            <div class="benefit-icon">💯</div>
            <h3>100% Fresh</h3>
            <p>Made fresh to order. You get it at its peak deliciousness. Guaranteed!</p>
          </div>

          <div class="benefit-card">
            <div class="benefit-icon">😊</div>
            <h3>Customer Love</h3>
            <p>Loved by hundreds of happy customers. See reviews from real satisfied buyers.</p>
          </div>

          <div class="benefit-card">
            <div class="benefit-icon">🎨</div>
            <h3>Customizable</h3>
            <p>Choose your flavor, quantity, and optional toppings to make it yours.</p>
          </div>

          <div class="benefit-card">
            <div class="benefit-icon">📞</div>
            <h3>Personal Touch</h3>
            <p>We contact you personally to confirm and arrange the perfect delivery time.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SOCIAL PROOF SECTION -->
    <section class="social-proof-section">
      <div class="container">
        <h2 class="section-title">Loved by Customers</h2>
        
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-number">500+</div>
            <div class="stat-label">Happy Customers</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">4.8★</div>
            <div class="stat-label">Average Rating</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">98%</div>
            <div class="stat-label">Would Recommend</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">100%</div>
            <div class="stat-label">Fresh Guarantee</div>
          </div>
        </div>

        <div class="testimonials-container">
          <h3 class="testimonials-title">What Customers Say</h3>
          <div class="testimonials-grid">
            <div class="testimonial-card">
              <div class="testimonial-stars">⭐⭐⭐⭐⭐</div>
              <p class="testimonial-text">
                "Best cheesecake I've ever had! So creamy and delicious. The fresh graham base is perfect!"
              </p>
              <p class="testimonial-author">— Maria Santos</p>
            </div>

            <div class="testimonial-card">
              <div class="testimonial-stars">⭐⭐⭐⭐⭐</div>
              <p class="testimonial-text">
                "Amazing service and faster delivery than promised. The ube flavor is absolutely divine! 🤤"
              </p>
              <p class="testimonial-author">— Juan Dela Cruz</p>
            </div>

            <div class="testimonial-card">
              <div class="testimonial-stars">⭐⭐⭐⭐⭐</div>
              <p class="testimonial-text">
                "This is now our go-to for special occasions. Every time it's perfect. Highly recommended!"
              </p>
              <p class="testimonial-author">— Rosa Reyes</p>
            </div>
          </div>
          <div class="view-all-reviews">
            <a href="reviews.html" class="link-button">
              View all <span class="review-count">52</span> customer reviews →
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- HOW IT WORKS SECTION -->
    <section class="how-it-works-section">
      <div class="container">
        <h2 class="section-title">Ordering is Easy</h2>
        
        <div class="steps-container">
          <div class="step-card">
            <div class="step-number">1</div>
            <h3>Choose Flavor</h3>
            <p>Select from our 3 delicious flavors or customize with toppings</p>
          </div>

          <div class="step-arrow">→</div>

          <div class="step-card">
            <div class="step-number">2</div>
            <h3>Place Order</h3>
            <p>Fill in your details. It takes less than 2 minutes!</p>
          </div>

          <div class="step-arrow">→</div>

          <div class="step-card">
            <div class="step-number">3</div>
            <h3>We Confirm</h3>
            <p>We call you to confirm and arrange delivery time</p>
          </div>

          <div class="step-arrow">→</div>

          <div class="step-card">
            <div class="step-number">4</div>
            <h3>Enjoy! 🍰</h3>
            <p>Receive fresh cheesecake. Savor every delicious bite!</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ PREVIEW SECTION -->
    <section class="faq-preview-section">
      <div class="container">
        <h2 class="section-title">Quick Questions?</h2>
        
        <div class="faq-preview">
          <div class="faq-item">
            <div class="faq-question-preview">
              <span class="faq-icon">❓</span>
              <p>How fresh is the cheesecake?</p>
            </div>
            <p class="faq-answer-preview">
              Made fresh daily to order! You receive it at its peak deliciousness.
            </p>
          </div>

          <div class="faq-item">
            <div class="faq-question-preview">
              <span class="faq-icon">🚚</span>
              <p>How long does delivery take?</p>
            </div>
            <p class="faq-answer-preview">
              Usually 1-2 days in Metro Manila. We arrange the perfect time with you.
            </p>
          </div>

          <div class="faq-item">
            <div class="faq-question-preview">
              <span class="faq-icon">⚙️</span>
              <p>Can I customize my order?</p>
            </div>
            <p class="faq-answer-preview">
              Absolutely! Choose flavor, quantity, and add optional toppings.
            </p>
          </div>

          <div class="faq-item">
            <div class="faq-question-preview">
              <span class="faq-icon">💰</span>
              <p>What payment methods do you accept?</p>
            </div>
            <p class="faq-answer-preview">
              Cash, GCash, Bank transfer. Choose what works for you!
            </p>
          </div>
        </div>

        <div class="faq-cta">
          <a href="faq.html" class="btn btn-outline">View Full FAQ →</a>
        </div>
      </div>
    </section>

    <!-- FINAL CTA SECTION -->
    <section class="final-cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Taste Heaven? 😋</h2>
          <p>Order your premium jelly cheesecake today and experience the difference quality makes.</p>
          <a href="order.html" class="btn btn-primary btn-lg">
            <i class="fas fa-shopping-cart"></i> Order Now
          </a>
          <p class="cta-guarantee">
            <i class="fas fa-check-circle"></i> 100% Fresh • Fast Delivery • Satisfaction Guaranteed
          </p>
        </div>
      </div>
    </section>
  `;

  homeSection.innerHTML = html;
}

// Initialize homepage when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('section#home')) {
    renderHomePage();
  }
});
