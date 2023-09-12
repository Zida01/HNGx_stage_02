

const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, 'NAME CAN NOT  BE  EMPTY'],
    },

    age: {
        type: Number,
        required: [true, 'AGE CAN  NOT BE EMPTY'],
    },


});



const User = mongoose.model('User', UserSchema);
module.exports = User
