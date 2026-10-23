/**
 * Audiophile E-Commerce - Pure Vanilla JavaScript Engine
 */

const PRODUCTS = [
  {
    id: 'xx99-mark-two-headphones',
    slug: 'xx99-mark-two-headphones',
    name: 'XX99 Mark II Headphones',
    shortName: 'XX99 MK II',
    category: 'headphones',
    newProduct: true,
    price: 2999,
    description:
      'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
    features: [
      'Featuring a genuine leather headband and robust yet lightweight aluminum components to offer an exceptional listening experience, the XX99 Mark II headphones effortlessly merge comfort and performance.',
      'A custom 50mm beryllium-coated dynamic transducer is meticulously tuned to uncover micro-details and deliver punchy, articulate bass down to 5 Hz without muddiness or distortion.',
      'The memory foam ear cushions are upholstered in breathable acoustic fabric, offering superior passive acoustic isolation and extended wearing comfort for long studio sessions.'
    ],
    includes: [
      { quantity: 1, item: 'Headphone unit' },
      { quantity: 2, item: 'Replacement earcups' },
      { quantity: 1, item: 'User manual' },
      { quantity: 1, item: '3.5mm 5m audio cable' },
      { quantity: 1, item: 'Hard-shell travel case' }
    ],
    image: './images/hero_headphones.jpg',
    gallery: [
      './images/hero_headphones.jpg',
      './images/audio_artisan.jpg',
      './images/hero_headphones.jpg'
    ],
    others: [
      { id: 'xx99-mark-one-headphones', name: 'XX99 Mark I', image: './images/hero_headphones.jpg' },
      { id: 'xx59-headphones', name: 'XX59', image: './images/hero_headphones.jpg' },
      { id: 'zx9-speaker', name: 'ZX9 Speaker', image: './images/speaker_zx9.jpg' }
    ]
  },
  {
    id: 'xx99-mark-one-headphones',
    slug: 'xx99-mark-one-headphones',
    name: 'XX99 Mark I Headphones',
    shortName: 'XX99 MK I',
    category: 'headphones',
    newProduct: false,
    price: 1750,
    description:
      'As the gold standard for headphones, the classic XX99 Mark I offers detailed and balanced audio for both audio enthusiasts and everyday listeners alike.',
    features: [
      'As the premier headphone for studio recording and monitoring, the XX99 Mark I delivers transparent acoustic accuracy across the complete 10 Hz - 40 kHz frequency spectrum.',
      'Crafted with hand-polished brushed steel sliders and supple lambskin ear pads, the acoustic seal naturally attenuates ambient background noise while preserving spatial stage depth.'
    ],
    includes: [
      { quantity: 1, item: 'Headphone unit' },
      { quantity: 2, item: 'Replacement earcups' },
      { quantity: 1, item: 'User manual' },
      { quantity: 1, item: '3.5mm 3.5m audio cable' }
    ],
    image: './images/hero_headphones.jpg',
    gallery: [
      './images/hero_headphones.jpg',
      './images/audio_artisan.jpg',
      './images/hero_headphones.jpg'
    ],
    others: [
      { id: 'xx99-mark-two-headphones', name: 'XX99 Mark II', image: './images/hero_headphones.jpg' },
      { id: 'xx59-headphones', name: 'XX59', image: './images/hero_headphones.jpg' },
      { id: 'zx9-speaker', name: 'ZX9 Speaker', image: './images/speaker_zx9.jpg' }
    ]
  },
  {
    id: 'xx59-headphones',
    slug: 'xx59-headphones',
    name: 'XX59 Headphones',
    shortName: 'XX59',
    category: 'headphones',
    newProduct: false,
    price: 899,
    description:
      'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
    features: [
      'These wireless headphones offer robust Bluetooth 5.2 connectivity with aptX HD codec support for high-bitrate wireless streaming with ultra-low latency.',
      'An intuitive on-ear tactile control suite allows instant adjustment of track playback, volume, and voice calls without reaching for your device.'
    ],
    includes: [
      { quantity: 1, item: 'Headphone unit' },
      { quantity: 2, item: 'Replacement earcups' },
      { quantity: 1, item: 'User manual' },
      { quantity: 1, item: 'USB-C charging cable' }
    ],
    image: './images/hero_headphones.jpg',
    gallery: [
      './images/hero_headphones.jpg',
      './images/audio_artisan.jpg',
      './images/hero_headphones.jpg'
    ],
    others: [
      { id: 'xx99-mark-two-headphones', name: 'XX99 Mark II', image: './images/hero_headphones.jpg' },
      { id: 'xx99-mark-one-headphones', name: 'XX99 Mark I', image: './images/hero_headphones.jpg' },
      { id: 'zx7-speaker', name: 'ZX7 Speaker', image: './images/speaker_zx7.jpg' }
    ]
  },
  {
    id: 'zx9-speaker',
    slug: 'zx9-speaker',
    name: 'ZX9 Speaker',
    shortName: 'ZX9',
    category: 'speakers',
    newProduct: true,
    price: 4500,
    description:
      'Upgrade your sound system with the all new ZX9 active speaker. It is a flagship active monitor speaker system that offers truly wireless connectivity, pristine spatial realism, and breathtaking acoustic power.',
    features: [
      'Connect via Bluetooth or Wi-Fi to link seamlessly with your home network and streaming platforms. Supporting lossless audio up to 24-bit/192kHz, the ZX9 reveals the pure intent of the recording engineer.',
      'Equipped with custom magnesium composite woofers and a high-efficiency Class-D bi-amplifier outputting 300 watts RMS per channel.'
    ],
    includes: [
      { quantity: 2, item: 'Speaker unit' },
      { quantity: 2, item: 'Speaker cloth grill' },
      { quantity: 1, item: 'User manual' },
      { quantity: 1, item: '3.5mm 10m audio cable' }
    ],
    image: './images/speaker_zx9.jpg',
    gallery: [
      './images/speaker_zx9.jpg',
      './images/speaker_zx7.jpg',
      './images/speaker_zx9.jpg'
    ],
    others: [
      { id: 'zx7-speaker', name: 'ZX7 Speaker', image: './images/speaker_zx7.jpg' },
      { id: 'xx99-mark-one-headphones', name: 'XX99 Mark I', image: './images/hero_headphones.jpg' },
      { id: 'yx1-earphones', name: 'YX1 Wireless', image: './images/earphones_yx1.jpg' }
    ]
  },
  {
    id: 'zx7-speaker',
    slug: 'zx7-speaker',
    name: 'ZX7 Speaker',
    shortName: 'ZX7',
    category: 'speakers',
    newProduct: false,
    price: 3500,
    description:
      'Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represent top-of-the-line powered speakers for home or studio use.',
    features: [
      'Rechargeable lithium battery and high-efficiency dual drivers give you true acoustic freedom. Enjoy deep punchy bass notes without requiring an external dedicated subwoofer.',
      'The solid MDF cabinet is acoustically dampened to suppress internal resonance, while the premium wood veneer finish complements modern architectural interiors.'
    ],
    includes: [
      { quantity: 2, item: 'Speaker unit' },
      { quantity: 2, item: 'Speaker cloth grill' },
      { quantity: 1, item: 'User manual' },
      { quantity: 1, item: '3.5mm 7.5m audio cable' }
    ],
    image: './images/speaker_zx7.jpg',
    gallery: [
      './images/speaker_zx7.jpg',
      './images/speaker_zx9.jpg',
      './images/speaker_zx7.jpg'
    ],
    others: [
      { id: 'zx9-speaker', name: 'ZX9 Speaker', image: './images/speaker_zx9.jpg' },
      { id: 'xx99-mark-two-headphones', name: 'XX99 Mark II', image: './images/hero_headphones.jpg' },
      { id: 'yx1-earphones', name: 'YX1 Wireless', image: './images/earphones_yx1.jpg' }
    ]
  },
  {
    id: 'yx1-earphones',
    slug: 'yx1-earphones',
    name: 'YX1 Wireless Earphones',
    shortName: 'YX1',
    category: 'earphones',
    newProduct: true,
    price: 599,
    description:
      'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
    features: [
      'Experience total acoustic freedom with advanced active hybrid noise cancellation (ANC). Dual feedforward and feedback microphones measure ambient environmental noise to cancel disruptions in real time.',
      'Precision acoustic nozzle design paired with 6 ergonomic silicone and memory foam ear tip choices guarantee a secure fit, deep bass response, and comfortable all-day wear.'
    ],
    includes: [
      { quantity: 2, item: 'Earphone unit' },
      { quantity: 6, item: 'Multi-size earplugs' },
      { quantity: 1, item: 'User manual' },
      { quantity: 1, item: 'USB-C charging cable' }
    ],
    image: './images/earphones_yx1.jpg',
    gallery: [
      './images/earphones_yx1.jpg',
      './images/audio_artisan.jpg',
      './images/earphones_yx1.jpg'
    ],
    others: [
      { id: 'xx99-mark-one-headphones', name: 'XX99 Mark I', image: './images/hero_headphones.jpg' },
      { id: 'xx59-headphones', name: 'XX59', image: './images/hero_headphones.jpg' },
      { id: 'zx9-speaker', name: 'ZX9 Speaker', image: './images/speaker_zx9.jpg' }
    ]
  }
];

class AudiophileApp {
  constructor() {
    this.currentView = 'home';
    this.currentCategory = 'headphones';
    this.currentProduct = PRODUCTS[0];
    this.historyStack = ['home'];
    this.pdpQuantity = 1;
    this.cart = this.loadCart();

    this.initElements();
    this.bindEvents();
    this.handleRoute();
    this.renderCartUI();
  }

  loadCart() {
    try {
      const saved = localStorage.getItem('audiophile_vanilla_cart');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  }

  saveCart() {
    try {
      localStorage.setItem('audiophile_vanilla_cart', JSON.stringify(this.cart));
    } catch (e) {}
  }

  initElements() {
    this.cartBadge = document.getElementById('cart-badge');
    this.cartModal = document.getElementById('cart-modal-overlay');
    this.orderModal = document.getElementById('order-modal-overlay');
    this.toast = document.getElementById('toast');
    this.toastText = document.getElementById('toast-text');
  }

  bindEvents() {
    // Navigation link clicks
    document.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', (e) => {
        const view = link.getAttribute('data-view');
        const cat = link.getAttribute('data-cat');
        if (view === 'category' && cat) {
          this.goToCategory(cat);
        } else {
          this.goToHome();
        }
      });
    });

    // Cart Button Click
    document.getElementById('cart-btn').addEventListener('click', () => {
      this.openCart();
    });

    // Close modals on clicking backdrop
    this.cartModal.addEventListener('click', (e) => {
      if (e.target === this.cartModal) {
        this.closeCart();
      }
    });

    // Hash change handler
    window.addEventListener('hashchange', () => this.handleRoute());
  }

  handleRoute() {
    const hash = window.location.hash.replace('#', '') || 'home';
    if (hash === 'home') {
      this.showView('home');
    } else if (hash.startsWith('category/')) {
      const cat = hash.split('/')[1];
      this.goToCategory(cat, false);
    } else if (hash.startsWith('product/')) {
      const slug = hash.split('/')[1];
      this.goToProduct(slug, false);
    } else if (hash === 'checkout') {
      this.goToCheckout(false);
    }
  }

  showView(viewName) {
    this.currentView = viewName;
    document.querySelectorAll('.page-view').forEach((view) => {
      view.classList.remove('active');
    });

    const target = document.getElementById(`view-${viewName}`);
    if (target) {
      target.classList.add('active');
    }

    // Update active state in nav
    document.querySelectorAll('.nav-link').forEach((link) => {
      link.classList.remove('active');
      const dataView = link.getAttribute('data-view');
      const dataCat = link.getAttribute('data-cat');
      if (viewName === 'home' && dataView === 'home') {
        link.classList.add('active');
      } else if (viewName === 'category' && dataCat === this.currentCategory) {
        link.classList.add('active');
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  goToHome(updateHash = true) {
    if (updateHash) window.location.hash = 'home';
    this.historyStack.push('home');
    this.showView('home');
  }

  goToCategory(catName, updateHash = true) {
    this.currentCategory = catName;
    if (updateHash) window.location.hash = `category/${catName}`;
    this.historyStack.push(`category/${catName}`);

    // Set title
    const titleEl = document.getElementById('cat-title');
    if (titleEl) {
      titleEl.textContent = catName.toUpperCase();
    }

    // Render products
    const listEl = document.getElementById('category-products-list');
    const filtered = PRODUCTS.filter((p) => p.category === catName);

    listEl.innerHTML = filtered
      .map((p, idx) => {
        const isReverse = idx % 2 === 1;
        return `
          <div class="product-row ${isReverse ? 'reverse' : ''}">
            <div class="product-row-media">
              <img src="${p.image}" alt="${p.name}" class="product-row-img" />
            </div>
            <div class="product-row-content">
              ${p.newProduct ? '<span class="sub-kicker" style="color: var(--primary);">NEW PRODUCT</span>' : ''}
              <h2 class="product-row-title">${p.name}</h2>
              <p class="product-row-desc">${p.description}</p>
              <button type="button" class="btn btn-primary" onclick="app.goToProduct('${p.slug}')">
                SEE PRODUCT
              </button>
            </div>
          </div>
        `;
      })
      .join('');

    this.showView('category');
  }

  goToProduct(slug, updateHash = true) {
    const product = PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];
    this.currentProduct = product;
    this.pdpQuantity = 1;

    if (updateHash) window.location.hash = `product/${slug}`;
    this.historyStack.push(`product/${slug}`);

    const container = document.getElementById('product-detail-content');
    container.innerHTML = `
      <!-- Main Buy Block -->
      <div class="pdp-main-box">
        <div class="pdp-media">
          <img src="${product.image}" alt="${product.name}" class="pdp-main-img" />
        </div>
        <div class="pdp-info">
          ${product.newProduct ? '<span class="sub-kicker" style="color: var(--primary);">NEW PRODUCT</span>' : ''}
          <h1 class="pdp-title">${product.name}</h1>
          <p class="pdp-desc">${product.description}</p>
          <div class="pdp-price">$ ${product.price.toLocaleString('en-US')}</div>
          
          <div class="pdp-actions">
            <div class="stepper">
              <button type="button" class="stepper-btn" onclick="app.stepPDPQty(-1)">&minus;</button>
              <span class="stepper-count" id="pdp-qty">1</span>
              <button type="button" class="stepper-btn" onclick="app.stepPDPQty(1)">&plus;</button>
            </div>
            <button type="button" class="btn btn-primary" onclick="app.addCurrentToCart()">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>

      <!-- Specs & In The Box -->
      <div class="pdp-specs-grid">
        <div>
          <h2 class="specs-heading">FEATURES</h2>
          <div class="specs-body">
            ${product.features.map((f) => `<p>${f}</p>`).join('')}
          </div>
        </div>
        <div>
          <h2 class="specs-heading">IN THE BOX</h2>
          <ul class="box-list">
            ${product.includes
              .map(
                (inc) => `
              <li class="box-item">
                <span class="box-qty">${inc.quantity}x</span>
                <span class="box-name">${inc.item}</span>
              </li>
            `
              )
              .join('')}
          </ul>
        </div>
      </div>

      <!-- Gallery -->
      <div class="pdp-gallery-grid">
        <div class="gallery-col-stack">
          <div class="gallery-item gallery-short">
            <img src="${product.gallery[0]}" alt="${product.name} shot 1" />
          </div>
          <div class="gallery-item gallery-short">
            <img src="${product.gallery[1]}" alt="${product.name} shot 2" />
          </div>
        </div>
        <div class="gallery-item gallery-tall">
          <img src="${product.gallery[2]}" alt="${product.name} hero shot" />
        </div>
      </div>

      <!-- Recommendations -->
      <div class="pdp-related">
        <h2 class="related-heading">YOU MAY ALSO LIKE</h2>
        <div class="related-grid">
          ${product.others
            .map(
              (other) => `
            <div class="related-card">
              <div class="related-thumb-box">
                <img src="${other.image}" alt="${other.name}" />
              </div>
              <h3 class="related-card-title">${other.name}</h3>
              <button type="button" class="btn btn-primary" onclick="app.goToProduct('${other.id}')">
                SEE PRODUCT
              </button>
            </div>
          `
            )
            .join('')}
        </div>
      </div>
    `;

    this.showView('product');
  }

  goBack() {
    if (this.currentView === 'product') {
      this.goToCategory(this.currentProduct.category);
    } else if (this.currentView === 'checkout') {
      this.goToHome();
    } else {
      this.goToHome();
    }
  }

  stepPDPQty(delta) {
    this.pdpQuantity = Math.max(1, this.pdpQuantity + delta);
    const el = document.getElementById('pdp-qty');
    if (el) el.textContent = this.pdpQuantity;
  }

  addCurrentToCart() {
    this.addToCart(this.currentProduct, this.pdpQuantity);
    this.showToast(`Added ${this.pdpQuantity}x ${this.currentProduct.shortName} to cart`);
  }

  addToCart(product, quantity = 1) {
    const existing = this.cart.find((item) => item.id === product.id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      this.cart.push({
        id: product.id,
        name: product.name,
        shortName: product.shortName,
        price: product.price,
        image: product.image,
        quantity: quantity
      });
    }
    this.saveCart();
    this.renderCartUI();
  }

  updateCartQty(id, delta) {
    const index = this.cart.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.cart[index].quantity += delta;
      if (this.cart[index].quantity <= 0) {
        this.cart.splice(index, 1);
      }
    }
    this.saveCart();
    this.renderCartUI();
    if (this.currentView === 'checkout') {
      this.renderCheckoutSummary();
    }
  }

  removeAllCart() {
    this.cart = [];
    this.saveCart();
    this.renderCartUI();
    if (this.currentView === 'checkout') {
      this.renderCheckoutSummary();
    }
  }

  openCart() {
    this.renderCartUI();
    this.cartModal.classList.add('active');
  }

  closeCart() {
    this.cartModal.classList.remove('active');
  }

  renderCartUI() {
    const totalCount = this.cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    this.cartBadge.textContent = totalCount;
    document.getElementById('cart-items-count').textContent = totalCount;
    document.getElementById('cart-modal-total-price').textContent = `$ ${totalPrice.toLocaleString('en-US')}`;

    const listEl = document.getElementById('cart-modal-list');
    if (this.cart.length === 0) {
      listEl.innerHTML = `
        <div style="text-align: center; padding: 24px 0; color: var(--text-muted);">
          <p>Your cart is empty.</p>
        </div>
      `;
    } else {
      listEl.innerHTML = this.cart
        .map(
          (item) => `
        <div class="summary-item-row">
          <div class="item-left">
            <img src="${item.image}" alt="${item.name}" class="item-thumb" />
            <div class="item-meta">
              <strong>${item.shortName}</strong>
              <span>$ ${item.price.toLocaleString('en-US')}</span>
            </div>
          </div>
          <div class="stepper" style="padding: 4px 8px;">
            <button type="button" class="stepper-btn" onclick="app.updateCartQty('${item.id}', -1)">&minus;</button>
            <span class="stepper-count">${item.quantity}</span>
            <button type="button" class="stepper-btn" onclick="app.updateCartQty('${item.id}', 1)">&plus;</button>
          </div>
        </div>
      `
        )
        .join('');
    }
  }

  goToCheckout(updateHash = true) {
    this.closeCart();
    if (this.cart.length === 0) {
      this.showToast('Please add items to cart before checkout');
      return;
    }

    if (updateHash) window.location.hash = 'checkout';
    this.historyStack.push('checkout');
    this.renderCheckoutSummary();
    this.showView('checkout');
  }

  renderCheckoutSummary() {
    const totalPrice = this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = this.cart.length > 0 ? 50 : 0;
    const vat = Math.round(totalPrice * 0.2);
    const grandTotal = totalPrice + shipping;

    const listEl = document.getElementById('checkout-items-list');
    listEl.innerHTML = this.cart
      .map(
        (item) => `
      <div class="summary-item-row">
        <div class="item-left">
          <img src="${item.image}" alt="${item.name}" class="item-thumb" />
          <div class="item-meta">
            <strong>${item.shortName}</strong>
            <span>$ ${item.price.toLocaleString('en-US')}</span>
          </div>
        </div>
        <div class="item-qty">x${item.quantity}</div>
      </div>
    `
      )
      .join('');

    document.getElementById('summary-total').textContent = `$ ${totalPrice.toLocaleString('en-US')}`;
    document.getElementById('summary-shipping').textContent = `$ ${shipping.toLocaleString('en-US')}`;
    document.getElementById('summary-vat').textContent = `$ ${vat.toLocaleString('en-US')}`;
    document.getElementById('summary-grand-total').textContent = `$ ${grandTotal.toLocaleString('en-US')}`;
  }

  togglePaymentMethod(method) {
    const emoneyInputs = document.getElementById('emoney-inputs');
    const cashNotice = document.getElementById('cash-notice');
    const labelEmoney = document.getElementById('label-emoney');
    const labelCash = document.getElementById('label-cash');

    if (method === 'emoney') {
      emoneyInputs.style.display = 'grid';
      cashNotice.style.display = 'none';
      labelEmoney.classList.add('active');
      labelCash.classList.remove('active');
    } else {
      emoneyInputs.style.display = 'none';
      cashNotice.style.display = 'block';
      labelCash.classList.add('active');
      labelEmoney.classList.remove('active');
    }
  }

  handleCheckoutSubmit(e) {
    e.preventDefault();
    if (this.cart.length === 0) return;

    const totalPrice = this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const grandTotal = totalPrice + 50;

    // Show Confirmation Modal
    const firstItem = this.cart[0];
    const othersCount = this.cart.length - 1;

    document.getElementById('order-receipt-items').innerHTML = `
      <div class="summary-item-row" style="padding-bottom: 12px; border-bottom: 1px solid var(--border-light);">
        <div class="item-left">
          <img src="${firstItem.image}" alt="${firstItem.name}" class="item-thumb" />
          <div class="item-meta">
            <strong>${firstItem.shortName}</strong>
            <span>$ ${firstItem.price.toLocaleString('en-US')}</span>
          </div>
        </div>
        <div class="item-qty">x${firstItem.quantity}</div>
      </div>
      ${
        othersCount > 0
          ? `<p style="text-align: center; font-size: 12px; color: var(--text-muted); font-weight: 700; margin-top: 12px;">and ${othersCount} other item(s)</p>`
          : ''
      }
    `;

    document.getElementById('order-receipt-grand-total').textContent = `$ ${grandTotal.toLocaleString('en-US')}`;
    this.orderModal.classList.add('active');
  }

  finishOrder() {
    this.orderModal.classList.remove('active');
    this.removeAllCart();
    this.goToHome();
  }

  showToast(message) {
    if (!this.toast) return;
    this.toastText.textContent = message;
    this.toast.classList.add('show');
    clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      this.toast.classList.remove('show');
    }, 3000);
  }
}

// Instantiate and expose globally
const app = new AudiophileApp();
window.app = app;
