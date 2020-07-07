const bycrypt = require('bcryptjs');

const password = 'Red12345!';
const encrptyPassword = async (password) => {
    const hashPassword = await bycrypt.hash(password, 8);
    const isMatch = await bycrypt.compare('Red12345!', hashPassword);
   

    console.log("Password : ", password);
    console.log("hashPassword : ",hashPassword);
    console.log("isMatch : ", isMatch);
    return hashPassword;
}

const encrptedPassword = encrptyPassword(password);

