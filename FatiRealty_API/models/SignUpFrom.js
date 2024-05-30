const sqlConnection = require("../Database/sqlConnection.js");
const SignUpFrom = function () {};
const {
    test,
 
} = require("../tableName/test.js");


SignUpFrom.SignUp = ( userName ,
   password ,
   firstName ,
   lastName ,
   dateOfBirth ,
   email ,
   phone ,
   action,
  cb
) => {
    const params = {
        userName: userName,
        password: password,
        firstName: firstName,
        lastName: lastName,
        dateOfBirth: dateOfBirth,
        email: email,
        phone: phone,
        action : action
    };
    sqlConnection.executeStoredProcedure('SignUpSP', params)
    .then(result => {
        // Process the result if needed
        cb(null, { message: 'Successfully saved user data', data: result });
    })
    .catch(error => {
        cb(error, null);
    });
};

SignUpFrom.Login = (userName, password, cb) => {
    const params = {
        UserName: userName,
        Password: password,
        UserID: 0,
        error: 0
    };

    sqlConnection.executeStoredProcedure('Login', params)
    .then(result => {
        if (params.error === 0 && result && result.length > 0) {
            cb(null, result[0]);
        } else {
            cb({ message: 'Invalid username or password' }, null);
        }
    })
    .catch(error => {
        console.error('Error logging in:', error);
        cb({ message: 'Error logging in. Please try again later.' }, null);
    });
};


module.exports = SignUpFrom;