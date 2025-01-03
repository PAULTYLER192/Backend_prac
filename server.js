const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Define a basic route
app.get('/', (req, res) => {
    res.send('Welcome to my API!');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log('Server running on http://localhost:${PORT}');
});

// Sample data
const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

// Route to get all users
app.get('/users', (req, res) => {
    res.json(users);
});

// Route to add a new user
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.status(201).json(newUser);
});

// Route to update a user
app.put('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    if (!user) return res.status(404).send('User not found.');

    Object.assign(user, req.body);
    res.json(user);
});


// Route to delete a user
app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex(u => u.id === id);
    if (index === -1) return res.status(404).send('User not found.');

    users.splice(index, 1);
    res.status(204).send();
});

