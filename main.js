// scripts.js

// Define an array of products
const products = [
    { id: 1, name: 'Product 1', price: 10.00 },
    { id: 2, name: 'Product 2', price: 15.00 },
    { id: 3, name: 'Product 3', price: 20.00 },
    { id: 4, name: 'Product 4', price: 25.00 },
];

// Shopping cart array
const cart = [];

// Function to render products in the catalog
function renderProducts() {
    const productsContainer = document.getElementById('products');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsContainer.appendChild(productElement);
    });
}

// Function to add a product to the cart
function addToCart(productId) {
    // Find the product in the products array
    const product = products.find(p => p.id === productId);
    // Add the product to the cart array
    cart.push(product);
    // Update the cart display
    updateCart();
}

// Function to update the cart display
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    // Clear the current cart display
    cartItems.innerHTML = '';

    // Calculate total price
    let totalPrice = 0;

    // Loop through each item in the cart and display it
    cart.forEach((product, index) => {
        // Create a list item for each product
        const listItem = document.createElement('li');
        listItem.innerText = `${product.name} - $${product.price.toFixed(2)}`;
        // Add a button to remove the product from the cart
        const removeButton = document.createElement('button');
        removeButton.innerText = 'Remove';
        removeButton.onclick = () => removeFromCart(index);
        listItem.appendChild(removeButton);
        // Add the list item to the cart display
        cartItems.appendChild(listItem);
        // Add the product price to the total price
        totalPrice += product.price;
    });

    // Update the total price
    totalPriceElement.innerText = totalPrice.toFixed(2);
}

// Function to remove a product from the cart
function removeFromCart(index) {
    // Remove the product from the cart array
    cart.splice(index, 1);
    // Update the cart display
    updateCart();
}

// Render the products on page load
window.onload = renderProducts;