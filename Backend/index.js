const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ToDoModel = require('./Models/Todos');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('<insert mongodb credentials here>');

app.get('/get', (req, res) => {
    const userEmail = req.query.userEmail;
    ToDoModel.find({ userEmail: userEmail })
        .sort({ date: 1, task: 1 })
        .then(result => res.json(result))
        .catch(err => res.json(err))
});

app.put('/update/:id', (req, res) => {
    const { id } = req.params;
    ToDoModel.findById(id)
        .then(todo => {
            todo.done = !todo.done;
            return todo.save();
        })
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

app.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    ToDoModel.findByIdAndDelete({ _id: id })
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

app.post('/add', (req, res) => {
    const { task, date, userEmail } = req.body;
    ToDoModel.create({
        task: task,
        date: date,
        userEmail: userEmail
    }).then(result => res.json(result)).catch(err => res.json(err))
});

// Allow requests from your frontend URL
const frontendURL = 'https://to-do-app-frontend-qprr.onrender.com';
const corsOptions = {
    origin: frontendURL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Add the methods you want to allow
    allowedHeaders: ['Content-Type', 'Authorization'], // Add the headers you want to allow
};
app.use(cors(corsOptions));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});