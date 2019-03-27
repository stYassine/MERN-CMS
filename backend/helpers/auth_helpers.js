const User =require('../models/User');

/// Check if email exists in database
const email_exists =(email) => {

    User.findOne({'email': email})
        .then(res => {
            ///console.log('Hona', res);

            if(res != null){
                return true;
            }else{
                return false;
            }

        })
        .catch(err => {
            console.log(Error(err));
            return false;
        });

}

module.exports =email_exists;