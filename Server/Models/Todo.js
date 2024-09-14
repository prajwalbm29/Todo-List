const mongoose = require('mongoose')

const TodoSchma = new mongoose.Schema({
    task: String
})

const TodoModel = mongoose.model('todos', TodoSchma)

module.exports = TodoModel