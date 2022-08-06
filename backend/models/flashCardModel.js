const mongoose = require('mongoose')

const flashCardSchema = new mongoose.Schema({
    term: {
        type: String,
        required: true
    },
    definition: String,
    created: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Flash-Cards', flashCardSchema)