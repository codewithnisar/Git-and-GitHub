// Cart functionality
let cartCount = 0;
let cartPrice = 0;

// Update cart display
function updateCart() {
    const cartCountEl = document.querySelector('.cart-count');
    const cartPriceEl = document.querySelector('.cart-price');
    
    if (cartCountEl) cartCountEl.textContent = cartCount;
    if (cartPriceEl) cartPriceEl.textContent = '$' + cartPrice.toFixed(2);
}

// Search functionality
document.querySelector('.search-btn').addEventListener('click', function() {
    const searchInput = document.querySelector('.search-bar input');
    const query = searchInput.value.trim();
    
    if (query) {
        console.log('Searching for:', query);
        // Add your search functionality here
    }
});

// Allow Enter key to trigger search
document.querySelector('.search-bar input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.querySelector('.search-btn').click();
    }
});

// Cart icon click handler (example)
document.querySelector('.cart-icon').addEventListener('click', function() {
    console.log('Cart clicked - Items:', cartCount, 'Total:', '$' + cartPrice.toFixed(2));
});

// Navigation link clicks
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const text = this.textContent;
        console.log('Navigating to:', text);
    });
});

// Initialize cart display
updateCart();
