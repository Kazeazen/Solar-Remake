const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    },
    hash: {
        type: String,
        required: true
    },
    cardSets: [{
        type: mongoose.Types.ObjectId,
        ref: 'Card Set'
    }],
    created: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Users', UserSchema)