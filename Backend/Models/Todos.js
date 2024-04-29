const mongoose = require('mongoose');

const ToDoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        required: true
    },
    userEmail: { // New field to store user's email
        type: String,
        required: true
    }
});

const ToDoModel = mongoose.model('To Do App Collection', ToDoSchema);
module.exports = ToDoModel;