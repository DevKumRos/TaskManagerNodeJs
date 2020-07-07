const jwt = require('jsonwebtoken');

const jwtAuthorization = async () => {
    //MetaData
  //  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
    //Payload
  //  eyJfaWQiOiJhYmMxMjM0IiwiaWF0IjoxNTk0MTE5MDQ5fQ.
    //Signature
  //  _MX1hGVEDT6kFbwfNmimwiAZvDtA2Xf4CQOWzoygSaE

    //Create Token
    const token = await jwt.sign({_id: 'abc1234'}, 'kumar22bms', { expiresIn: '30 minutes'});
    console.log("Token: ",token);

    //Verify Token
    const data = await jwt.verify(token, 'kumar22bms');
    console.log("data : ", data);
};

jwtAuthorization();