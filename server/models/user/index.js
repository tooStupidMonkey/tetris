const mongoose = require('mongoose')
const schema = mongoose.Schema

const userModel = new schema({
    username: { type: String} ,
    score: { type: String },
    password: {type: String},
    created_at: { type: Date},
})

module.exports = mongoose.model('users',userModel)