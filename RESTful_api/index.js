import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// In-memory product list
let products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
];

// Default route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Get all products
app.get('/api/products', (req, res) => {
    res.json(products);
});

// Get single product by ID
app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).send('Product not found');
    res.json(product);
});

// Create a new product
app.post('/api/products', (req, res) => {
    const { name, price } = req.body;
    const newProduct = {
        id: products.length + 1,
        name,
        price
    };
    products.push(newProduct);
    res.status(201).json(newProduct).send("product created");
});

// Update a product
app.put('/api/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).send('Product not found');

    const { name, price } = req.body;
    product.name = name;
    product.price = price;

    res.json(product).send("product updated");
});
// Delete a product
app.delete('/api/products/:id', (req, res) => {
    const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
    if (productIndex === -1) return res.status(404).send('Product not found');

    products.splice(productIndex, 1);
    res.status(204).send("product deleted");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
