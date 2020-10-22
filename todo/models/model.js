const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
    title: String,
},);

module.exports = mongoose.model('Todo', TodoSchema);