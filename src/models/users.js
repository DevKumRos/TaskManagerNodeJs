const mongoose = require('mongoose');
const validator = require('validator');
//For Encryption
const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
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
        unique: true,
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
    },
    'tokens': [{
        'token': {
            type: String,
            required: true
        }
    }]
});
//Create Authorization Token
userSchema.statics.generateAuthToken = async function (user) {
    const token = await jwt.sign({_id: user._id.toString() }, 'kumarsecret');
    user.tokens= user.tokens.concat({ token });
    await user.save();
    return token;
}

//create custome method for finding data in mongoosedb
userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({email});
    console.log("findByCredentials : ",user)
    if(!user) {
        throw new Error('No User exist with given email: '+email);
    }

    const isMatch = await bycrypt.compare(password, user.password);
    console.log("isMatch : ",isMatch);
    if(!isMatch){
        throw new Error('Unable to Login with this Credential');
    }
    return user;

}

//to encrypt password we are using middle where only save & patch function as this password change.
//but patch not calling this change method
userSchema.pre('save', async function(next) {
    const user = this;
    console.log("Call before Save");
    if(user.isModified('password')) {
        user.password = await bycrypt.hash(user.password, 8);
    }
    next();
});
const User = mongoose.model('User', userSchema);
module.exports = User;