const menuItems = [
    { id: 1, name: 'Rice+Dal+Sabzi+khatta', price: 90, image: 'rice.jpg' , available: true },
    { id: 2, name: 'Paneer', price: 70, image: 'paneer.jpg', available: false, availability: 'Available only on Wednesdays & Sundays' },
    { id: 3, name: 'Chicken', price: 100, image: 'chicken.jpg', available: false, availability: 'Available only on Wednesdays & Sundays' },
    { id: 4, name: 'Puri', price: 9, image: 'puri.jpg', available: false, availability: 'Available after 6 PM' },
    { id: 5, name: 'Roti', price: 6, image: 'roti.jpg', available: false, availability: 'Available after 6 PM' },
    { id: 6, name: 'Shantula', price: 45, image: 'shantula.jpg', available: false, availability: 'Available only on Fridays' },
    { id: 7, name: 'Dalma', price: 45, image: 'dalma.jpg', available: false, availability: 'Available only on Thursdays' },
];

document.addEventListener('DOMContentLoaded', () => {
    displayMenu();
});

function displayMenu() {
    const menuSection = document.getElementById('menu');
    menuItems.forEach(item => {
        const menuItemElement = document.createElement('div');
        menuItemElement.classList.add('menu-item');
        menuItemElement.innerHTML = `
            <h3>${item.name}</h3>
            <img src="images/${item.image}" alt="${item.name}">
            <p>₹${item.price}</p>
            ${item.available ? '' : `<p class="availability">${item.availability}</p>`}
            <button onclick="addToCart(${item.id})">Add to Cart</button>
        `;
        menuSection.appendChild(menuItemElement);
    });
}

const cart = [];

function addToCart(itemId) {
    const item = menuItems.find(item => item.id === itemId);
    cart.push(item);
    updateCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    cartItemsElement.innerHTML = '';
    cart.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');
        cartItemElement.innerHTML = `
            <span>${item.name}</span>
            <span>₹${item.price}</span>
        `;
        cartItemsElement.appendChild(cartItemElement);
    });
    calculateTotal();
}

function calculateTotal() {
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const totalElement = document.getElementById('total-price');
    totalElement.textContent = `Total: ₹${totalPrice}`;
}

document.getElementById('checkout-btn').addEventListener('click', () => {
    const orderDetailsElement = document.getElementById('order-details');
    orderDetailsElement.textContent = `You ordered: ${cart.map(item => item.name).join(', ')}`;
    document.getElementById('menu').classList.add('hidden');
    document.getElementById('cart').classList.add('hidden');
    document.getElementById('order-confirmation').classList.remove('hidden');
});
