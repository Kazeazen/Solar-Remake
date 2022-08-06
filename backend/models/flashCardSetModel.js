const mongoose = require('mongoose')

const flashCardSetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    flashCards: [{
        type: mongoose.Types.ObjectId,
        ref: 'Flash-Cards'
    }],
    created: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Card Set')