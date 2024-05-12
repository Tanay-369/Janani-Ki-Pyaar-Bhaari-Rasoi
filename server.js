const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; // You can change the port as needed

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Mock database for menu items
const menuItems = [
    { id: 1, name: 'Rice', price: 5, available: true },
    { id: 2, name: 'Dal', price: 6, available: true },
    { id: 3, name: 'Sabzi', price: 8, available: true },
    { id: 4, name: 'Paneer', price: 10, available: true },
    { id: 5, name: 'Chicken', price: 12, available: true },
    { id: 6, name: 'Puri', price: 4, available: true },
    { id: 7, name: 'Roti', price: 3, available: false },
    { id: 8, name: 'Shantula', price: 9, available: false },
    { id: 9, name: 'Dalma', price: 7, available: false },
    { id: 10, name: 'Khata', price: 5, available: true }
];

// API endpoint to fetch menu items
app.get('/api/menu', (req, res) => {
    res.json(menuItems);
});

// API endpoint to process orders
app.post('/api/order', (req, res) => {
    const { items, total } = req.body;
    // Here you would integrate with a payment system and update order status in a real application
    res.json({ success: true, message: 'Order placed successfully', orderDetails: { items, total } });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
