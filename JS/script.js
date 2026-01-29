const menuButton = document.querySelector('.menu');
const menuCont = document.querySelector('.menu-container');
menuButton.addEventListener('click', () => {
    menuCont.classList.toggle('active');
});
const contactForm = document.querySelector('.contact-form');
if(contactForm){
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if(firstName === "" || lastName === "" || email === "" || message === ""){
        alert("please fill all the required fields marked with *");
        return;
    }
     if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address.");
    return;
     }

    console.log("Form submitted Successfuly:", {firstName, lastName, email, message});
    alert(`Thank you, ${firstName} ! your message has been sent.`);
    contactForm.reset();
});
}
function setupProductClickListeners() {
    const productItems = document.querySelectorAll('.product-item');

    if (productItems.length > 0) {
        productItems.forEach(item => {
            item.addEventListener('click', () => {
                 
                const productName = item.querySelector('.product-name').textContent;
                const productPrice = item.querySelector('.product-price').textContent;
                const productImageSrc = item.querySelector('.product-image').getAttribute('src');

                const selectedProduct = {
                    name: productName,
                    price: productPrice,
                    imageSrc: productImageSrc,
                    quantity: 1  
                };

                localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));

                window.location.href = 'cart.html';
            });
        });
    }
}
const cartItemsContainer = document.getElementById('cart-items-container');
const emptyCartMessage = document.getElementById('empty-cart-message');

function renderCartPageFromStorage() {
    const storedProductJSON = localStorage.getItem('selectedProduct');

    if (storedProductJSON && cartItemsContainer) {
    
        if (emptyCartMessage) emptyCartMessage.style.display = 'none';

        const product = JSON.parse(storedProductJSON);
        cartItemsContainer.innerHTML = `
            <div class="product-detail-page" style="display: block;">
                <div class="product-image-container">
                    <img src="${product.imageSrc}" alt="${product.name}" class="product-image">
                </div>
                
                <p class="product-name product-title">${product.name}</p>
                <p class="product-price-large">${product.price}</p>

                <div class="form-group-options">
                    <label for="quantity">Quantity *</label>
                    <div class="quantity-selector">
                        <button id="decrease-qty">-</button>
                        <span id="qty-display">${product.quantity}</span>
                        <button id="increase-qty">+</button>
                    </div>
                </div>

                <div class="action-buttons">
                    <button class="btn-primary" id="add-to-cart-btn">Add to Cart</button>
                    <button class="btn-secondary" id="buy-now-btn">Buy Now</button>
                </div>
            </div>
        `;
        setupQuantitySelectors(product);

    } else if (emptyCartMessage) {
        emptyCartMessage.style.display = 'block';
    }
}
function setupQuantitySelectors(product){
    const decreaseButton = document.getElementById('decrease-qty');
    const increaseButton = document.getElementById('increase-qty');
    const quantityDisplay = document.getElementById('qty-display');

    if (decreaseButton && increaseButton && quantityDisplay) {
        increaseButton.addEventListener('click', () => {
            product.quantity++;
            quantityDisplay.textContent = product.quantity;
            localStorage.setItem('selectedProduct', JSON.stringify(product));
        });

        decreaseButton.addEventListener('click', () => {
            if (product.quantity > 1) {
                product.quantity--;
                quantityDisplay.textContent = product.quantity;
                localStorage.setItem('selectedProduct', JSON.stringify(product));
            }
        });
    }

    const addToCartButton = document.getElementById('add-to-cart-btn');
    const buyNowButton = document.getElementById('buy-now-btn');

    if(addToCartButton) addToCartButton.addEventListener('click', () => {
        alert(`${product.quantity}x ${product.name} added to cart!`);
    });

    if(buyNowButton) buyNowButton.addEventListener('click', () => {
         alert(`Proceeding to checkout with ${product.quantity}x ${product.name}!`);
    });
}
document.addEventListener('DOMContentLoaded', () => {
    setupProductClickListeners(); 
    renderCartPageFromStorage(); 
}); 
const searchProducts = document.getElementById('searchh');

if (searchh) {
    searchh.addEventListener('input', () => {
        const filter = searchh.value.toLowerCase();
        const products = document.querySelectorAll('.product-item');

        products.forEach(item => {
            const name = item.querySelector('.product-name').textContent.toLowerCase();
            item.style.display = name.includes(filter) ? 'flex' : 'none';
        });
    });
}
