npm init -y 
npm install express


const express = require('express');

const app = express();

// Middleware
app.use(express.json());

// Custom middleware to log requests
app.use((req, res, next) => {

    console.log(
        `${req.method} request received for ${req.url}`
    );

    next();
});

// Product data
const products = [

    {
        id: 1,
        name: "mi"
    },

    {
        id: 2,
        name: "iphone"
    },

    {
        id: 3,
        name: "oppo"
    }
];

// Root endpoint
app.get('/', (req, res) => {

    res.send('Hello, Express!');
});

// Get all products
app.get('/products', (req, res) => {

    res.send(products);
});

// Get single product
app.get('/products/:id', (req, res) => {

    const newData = products.filter(
        item => item.id.toString() === req.params.id
    );

    res.send(newData);
});

// Add product
app.post('/addproducts', (req, res) => {

    const { id, name } = req.body;

    const newProduct = { id, name };

    products.push(newProduct);

    res.send(newProduct);
});

// Update product
app.put('/updateproducts/:id', (req, res) => {

    const product = products.find(
        item => item.id.toString() === req.params.id
    );

    Object.assign(product, req.body);

    res.send(product);
});

// Delete product
app.delete('/deleteproducts/:id', (req, res) => {

    const index = products.findIndex(
        item => item.id.toString() === req.params.id
    );

    const deletedProduct =
        products.splice(index, 1);

    res.send(deletedProduct);
});

// Server start
app.listen(3000, () => {

    console.log(
        'Server running on http://localhost:3000'
    );
});