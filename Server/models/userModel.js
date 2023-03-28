const mongoose = require('mongoose')

const User = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    password_confirm: String,
    roles: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Role"
        }
    ],
    // otp: {
    //     type: String,
    //     required: false,
    // },
    verification: Boolean,
    status: Boolean
})

module.exports = mongoose.model('user', User)
