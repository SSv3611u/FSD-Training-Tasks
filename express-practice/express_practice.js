// app.js
const express = require('express');
const app = express();

app.use(express.json());

let users = [
    { id: 1, name: "Sai" }
];

// CREATE
app.post('/users', (req, res) => {
    const user = req.body;
    users.push(user);
    res.send("User Added");
});

// READ
app.get('/users', (req, res) => {
    res.json(users);
});

// UPDATE
app.put('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    users = users.map(u => u.id === id ? req.body : u);
    res.send("User Updated");
});

// DELETE
app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    users = users.filter(u => u.id !== id);
    res.send("User Deleted");
});

app.listen(3000, () => console.log("Server running"));