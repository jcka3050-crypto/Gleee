# 🛍️ Customer Journey - How Users Interact with GleeJeYly

## 📊 Complete Customer Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                    CUSTOMER VISITS WEBSITE                       │
│           (https://yourdomain.com or GitHub Pages)               │
└────────────────────────────┬────────────────────────────────────┘
                             │
                ┌────────────┴────────────┐
                │                         │
         ┌──────▼──────┐          ┌──────▼──────┐
         │   HOMEPAGE  │          │  DIRECT     │
         │  (Landing)  │          │  PAGE LINK  │
         └──────┬──────┘          └──────┬──────┘
                │                        │
                └────────────┬───────────┘
                             │
          ┌──────────────────▼──────────────────┐
          │   EXPLORE & GET INFORMATION         │
          │  (Product, Reviews, FAQ, Contact)   │
          └──────────────────┬──────────────────┘
                             │
          ┌──────────────────▼──────────────────┐
          │    READY TO ORDER?                  │
          │  Click "ORDER NOW" Button           │
          │  (Available everywhere)             │
          └──────────────────┬──────────────────┘
                             │
          ┌──────────────────▼──────────────────┐
          │    ORDER PAGE                       │
          │  • Fill in Name, Phone, Address     │
          │  • Select Quantity                  │
          │  • (Optional) Choose Toppings       │
          │  • Review Order Summary             │
          │  • Click "Place Order"              │
          └──────────────────┬──────────────────┘
                             │
          ┌──────────────────▼──────────────────┐
          │  ORDER CONFIRMATION                 │
          │  Shows:                             │
          │  ✅ Order ID                        │
          │  ✅ Full order details              │
          │  ✅ Total Price                     │
          │  ✅ "We'll contact you soon!" msg   │
          └──────────────────┬──────────────────┘
                             │
          ┌──────────────────▼──────────────────┐
          │  BACKEND PROCESSES ORDER            │
          │                                      │
          │  POST /api/orders                   │
          │  → Saves to Database                │
          │  → Validates data                   │
          │  → Returns confirmation             │
          └──────────────────┬──────────────────┘
                             │
          ┌──────────────────▼──────────────────┐
          │  CUSTOMER WAITS FOR CONTACT         │
          │  (Via phone/Facebook)               │
          │  Arrange pickup/delivery            │
          └──────────────────┬──────────────────┘
                             │
          ┌──────────────────▼──────────────────┐
          │  RECEIVES PRODUCT 🍰                │
          │  Customer satisfied!                │
          └──────────────────┬──────────────────┘
                             │
          ┌──────────────────▼──────────────────┐
          │  (OPTIONAL) LEAVE REVIEW            │
          │  • Rate product (1-5 stars)         │
          │  • Rate service (1-5 stars)         │
          │  • Write comment                    │
          │  • Submit feedback                  │
          └──────────────────┬──────────────────┘
                             │
          ┌──────────────────▼──────────────────┐
          │  REVIEW APPEARS ON WEBSITE          │
          │  Other customers see feedback       │
          │  (Stored in database)               │
          └──────────────────────────────────────┘
```

---

## 🚀 Step-by-Step Customer Actions

### **STEP 1: Homepage Discovery**
**What they see:**
- Hero banner with "🍰 GleeJeYly" branding
- Product showcase image
- Quick description: "Premium handmade Jelly Cheesecake"
- **"Order Now" button** (prominent)
- Navigation menu

**Customer might:**
- Scroll to learn more about product
- Click on "Product" in nav
- Click "Order Now" button
- Toggle dark mode with theme button
- Click social links (Facebook, Instagram, TikTok)

---

### **STEP 2: Product Exploration**

#### 2a) **Product Page** (`/product.html`)
**Customer learns:**
- What is jelly cheesecake? Description & benefits
- Ingredients: "Premium jelly + creamy cheesecake + graham base"
- Available flavors:
  - 🍰 **Plain Classic** - ₱25.00
  - 🟣 **Ube Jam** - ₱25.00
  - 🥨 **Extra Crashed Graham** - ₱25.00
- How to order process explained
- Customer reviews preview

#### 2b) **Reviews Page** (`/reviews.html`)
**Customer reads:**
- ⭐⭐⭐⭐⭐ "Absolutely delicious!" - Maria
- ⭐⭐⭐⭐⭐ "Best cheesecake ever!" - Juan
- ⭐⭐⭐⭐ "Great service!" - Rosa
- Can see ratings for Product & Service
- Can read detailed comments

#### 2c) **FAQ Page** (`/faq.html`)
**Customer finds answers:**
- Q: "Is this fresh?" A: "Yes! Made fresh daily"
- Q: "How long does delivery take?" A: "1-2 days"
- Q: "Can I customize?" A: "Yes! Choose your flavor"
- Q: "Allergies?" A: "Contact us with details"
- Q: "Payment methods?" A: "Cash, GCash, Bank transfer"
- Q: "Refunds?" A: "30-day satisfaction guarantee"

#### 2d) **Contact Page** (`/contact.html`)
**Customer can:**
- See contact form for questions
- Find phone number: **(+63) 912-345-6789**
- Email address: **hello@gleejelyly.com**
- Location: **Metro Manila, Philippines**
- Social media links

---

### **STEP 3: Place Order**

**Customer navigates to:** Order Page (`/order.html`)

**Form Fields:**
```
┌─────────────────────────────┐
│  PLACE YOUR ORDER           │
├─────────────────────────────┤
│ Full Name:     [____]       │
│ Phone Number:  [____]       │
│ Address:       [____]       │
│ Quantity:      [1] [2] [3]  │
│                             │
│ Flavor Choice:              │
│ ○ Plain Classic - ₱25.00    │
│ ○ Ube Jam - ₱25.00          │
│ ○ Extra Graham - ₱25.00     │
│                             │
│ Toppings (Optional):        │
│ ☐ Sprinkles (+₱2.00)       │
│ ☐ Chocolate drizzle        │
│ ☐ Whipped cream            │
│                             │
│ ┌─────────────────────────┐ │
│ │  ORDER SUMMARY          │ │
│ ├─────────────────────────┤ │
│ │ Total: ₱____            │ │
│ └─────────────────────────┘ │
│                             │
│ [PLACE ORDER] [CANCEL]      │
└─────────────────────────────┘
```

**What happens:**
1. Customer fills all required fields (name, phone, address, quantity)
2. Validates input in real-time
3. Shows live order summary with total price
4. Clicks "Place Order" button

---

### **STEP 4: Order Confirmation**

**Modal pops up:**
```
╔════════════════════════════════╗
║  ✅ ORDER CONFIRMED!           ║
╠════════════════════════════════╣
║                                ║
║  Thank you, [Customer Name]!   ║
║                                ║
║  Order Summary:                ║
║  ├─ Quantity: 2 boxes          ║
║  ├─ Flavor: Ube Jam            ║
║  ├─ Toppings: Sprinkles        ║
║  └─ Total: ₱54.00              ║
║                                ║
║  📞 We'll contact you at:      ║
║  09123456789                   ║
║                                ║
║  to arrange delivery! 🚗        ║
║                                ║
║          [Got it!]              ║
╚════════════════════════════════╝
```

**Behind the scenes:**
```javascript
POST /api/orders
{
  "full_name": "Juan Dela Cruz",
  "phone_number": "09123456789",
  "address": "Quezon City, Manila",
  "quantity": 2,
  "flavor": "ube_jam",
  "toppings": ["sprinkles"],
  "total_price": 54.00,
  "timestamp": "2026-02-17T10:30:00Z"
}
// Response: ✅ Order saved to database
```

---

### **STEP 5: Post-Order**

**What customer does:**
1. **Receives confirmation modal** - Can see all order details
2. **Waits for contact** - Business owner reviews order
3. **Gets called/messaged** on their phone
4. **Arranges pickup or delivery** 🚗
5. **Receives product** 🍰

---

### **STEP 6: Leave Review (Optional)**

**Customer can:**
1. Go to **Reviews Page** or find **Review Form**
2. Enter name & email
3. **Rate Product** (1-5 stars)
   - More cream? Good flavor? Fresh?
4. **Rate Service** (1-5 stars)
   - Was business professional? Quick delivery?
5. Write detailed comment
6. **Submit Review**

**Review appears:**
```
⭐⭐⭐⭐⭐ "Best cheesecake I've ever had!"
By: Maria Santos | Feb 17, 2026

"Premium quality, super fresh, and the 
customer service was amazing! Highly 
recommended to everyone! 😍"

Product Rating: ⭐⭐⭐⭐⭐
Service Rating: ⭐⭐⭐⭐⭐
```

---

## 🎯 Key Customer Touchpoints

| Page | Purpose | CTA |
|------|---------|-----|
| **Homepage** | First impression, brand awareness | "Order Now" |
| **Product** | Learn product details & flavors | "Order Now" |
| **Reviews** | Build trust through social proof | "Order Now" |
| **FAQ** | Answer questions before ordering | "Order Now" OR "Contact Us" |
| **Contact** | Direct communication channel | Contact form OR call |
| **Order** | Place actual order | Submit form |
| **Confirmation** | Reassure customer | Show order details |

---

## 📱 Mobile Experience

**All pages are fully responsive:**
- ✅ Touch-friendly buttons (large tap targets)
- ✅ Optimized form inputs for mobile keyboards
- ✅ Fast loading (images optimized)
- ✅ Bottom nav bar on mobile
- ✅ Dark mode toggle accessible everywhere
- ✅ Accessible for screen readers

---

## 💾 What Gets Saved

### **Customer's Order Data:**
```json
{
  "order_id": "ORD-1708155000000",
  "full_name": "Juan Dela Cruz",
  "phone_number": "09123456789",
  "address": "Block A, Building 5, Quezon City",
  "quantity": 2,
  "flavor": "ube_jam",
  "toppings": ["sprinkles"],
  "total_price": 54.00,
  "created_at": "2026-02-17T10:30:00Z",
  "status": "pending"
}
```

### **Customer's Review Data:**
```json
{
  "review_id": "REV-1708155100000",
  "name": "Maria Santos",
  "email": "maria@example.com",
  "product_rating": 5,
  "service_rating": 5,
  "comment": "Absolutely delicious! Highly recommended.",
  "created_at": "2026-02-17T12:00:00Z"
}
```

---

## 🔄 Repeat Customer Flow

**Returning Customer:**
1. Visits homepage (faster if cached/PWA)
2. Skips product info (already knows)
3. Directly clicks "Order Now"
4. Sees pre-filled form (browser autofill)
5. Changes quantity/flavor if needed
6. Submits order
7. Leaves review if first-time order

**Time to order:** 30 seconds vs 5 minutes first time

---

## 🎨 User Experience Features

### **Form Validation**
- ✅ Real-time error messages
- ✅ Phone number format checking
- ✅ Address validation
- ✅ Quantity bounds validation
- ✅ Clear error messages

### **Visual Feedback**
- ✅ Order summary updates as user types
- ✅ Total price calculates live
- ✅ Success toast notifications
- ✅ Loading indicators for API calls
- ✅ Confirmation modal for actions

### **Accessibility**
- ✅ ARIA labels for screen readers
- ✅ Keyboard navigation support
- ✅ High contrast colors (dark/light mode)
- ✅ Skip to main content link
- ✅ Form field labels properly associated

### **Performance**
- ✅ Fast page loads (initially optimized)
- ✅ Progressive loading (lazy load images)
- ✅ Cached data for repeat visits
- ✅ Service worker enables offline capability
- ✅ Minified assets

---

## 📊 Customer Analytics (What Business Sees)

**Admin Dashboard shows:**
- Total orders received
- Total revenue
- Product ratings (average)
- Service ratings (average)
- Most popular flavor
- Peak order times
- Customer contact info for follow-up

---

## 🛡️ Customer Trust Signals

**On every page:**
- ✅ Contact information visible
- ✅ Social media presence (Facebook, Instagram, TikTok)
- ✅ Real customer reviews with names
- ✅ Professional design & branding
- ✅ Clear product description
- ✅ Fair pricing displayed
- ✅ HTTPS secure connection
- ✅ Privacy-respecting (no tracking)

---

## 📞 Support Channels

**Customer can reach out via:**
1. **Phone Call:** (+63) 912-345-6789
2. **Email:** hello@gleejelyly.com
3. **Facebook:** facebook.com/gleejelyly
4. **Instagram:** instagram.com/gleejelyly
5. **TikTok:** tiktok.com/@gleejelyly
6. **Contact Form:** contact.html

---

## ✅ Success Metrics

**Customer journey is successful when:**
- ✅ Finds product information easily
- ✅ Places order without confusion
- ✅ Receives order confirmation
- ✅ Gets contacted by business
- ✅ Receives product on time
- ✅ Is satisfied (leaves 5-star review)
- ✅ Becomes repeat customer

---

## 🚀 Future Enhancements for Customers

- [ ] **Payment Integration** - Online payment option (GCash, PayMaya)
- [ ] **Order Tracking** - Real-time delivery status
- [ ] **Loyalty Program** - Rewards for repeat customers
- [ ] **Subscription Orders** - Monthly delivery
- [ ] **Gift Cards** - Perfect for gifting
- [ ] **Customer Accounts** - Save order history
- [ ] **Email Notifications** - Order status updates
- [ ] **Push Notifications** - Order reminders (PWA)
- [ ] **Video Testimonials** - See product in videos
- [ ] **Live Chat** - Real-time support

---

**Created:** February 17, 2026  
**Type:** Customer Journey Documentation  
**Owner:** GleeJeYly
