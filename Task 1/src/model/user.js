
const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const crypto = require('crypto');


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    middleName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    Address: [
        {
            address: String,
            country: { type: String, required: true, enum: ['India', 'US', 'UK'] },
            state: String,
            zipcode: Number,
            required: true
        }],
    userName: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 6

    },
    email: {
        type: String,
        required: [true, 'Email must be present'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'please enter a valid email address']
    },
    password: {
        type: String,
        required: [true, 'Password must be there'],
        minlength: 8
    },
    passwordConfirm: {
        type: String,
        required: [true, 'confirm your password'],
        validate: {
            validator: function (passwordConfirm) {
                // console.log(this.password, passwordConfirm)
                return passwordConfirm === this.password
            },
            message: "Passwords must be same"
        }
    },
    phoneNumber: {
        type: Number,
        required: true,
        maxLength: 10

    },
    passwordResetToken: String,
    height: {
        type: Number,
        required: true,
        default: 0,
        enum: ['ft', 'inch']
    },
    weight: {
        type: Number,
        required: true,
        default: 0,
        enum: ['kg']

    }

})

userSchema.methods.createPasswordToken = function () {

    // token generation and assignement to the attribute // here 
    const resetToken = crypto.randomBytes(32).toString('hex')

    // encrypt the token and assign its value to passwordResetToken attribute of user object
    this.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex');

    console.log({ resetToken }, this.passwordResetToken)

    return resetToken
}

userSchema.pre('save', async function (next) {

    this.password = await bcrypt.hash(this.password, 10);
    this.passwordConfirm = undefined;
    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User