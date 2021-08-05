const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    originalname: String,
    destination: String,
    mimeType: String,
    path: String

})

module.exports = mongoose.model('images', userSchema);