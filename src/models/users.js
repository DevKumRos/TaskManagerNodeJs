const mongoose = require('mongoose');
const validator = require('validator')
const User = mongoose.model('User', {
    'name': {
        type: String,
        trim: true
    },
    'password': {
        type: String,
        required: true,
        trim: true,
        minlength: [7, 'Password should be greater than 6'],
        validate(value){
            if( validator.equals("password", value )) {
                throw new Error('Password cannot "password"');
            }
        }
    },
    'email': {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if( !validator.isEmail(value)) {
                throw new Error('Not a valid Email Id');
            }
        }
    },
    'age': {
        type: Number,
        trim: true,
        default: 0,
        validate(value) {
            if(value < 0)
               throw new Error('Age cannot be negative value');
        }
    }
});


module.exports = User;