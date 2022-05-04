const mongoose = require('mongoose')
const newSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    subject: {
        type: String,
        require: true,
        trim: true,
    },
    message: {
        type: String,
        require: true,
        trim: true
    },

})

const Newregistration = new mongoose.model("Newregistration", newSchema)

module.exports = Newregistration;