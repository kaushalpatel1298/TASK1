const mongoose = require('mongoose')
const validator = require('validator')


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        //required: [true, 'Name must be present']
    },
    userName: {
        type: String,
        //required: true,
        unique: true,
    },

    password: {
        type: String,
       //required: [true, 'Password must be there'],
        minlength: 8
    },
    confirmPassword: {
        type: String,
       // required: [true, 'confirm your password'],
        validate: {
            validator: function (confirmPassword) {
                // console.log(this.password, passwordConfirm)
                return confirmPassword === this.password
            },
            message: "Passwords must be same"
        }
    },
    profilePicture: {
        type: mongoose.Schema.ObjectId,
        ref: 'images'
    },
    zipCode: {
        type: Number,
       // required: true
    }

})

const User = mongoose.model('User', userSchema)

module.exports = User