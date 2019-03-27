const User =require('../models/User');
const bcrypt =require('bcrypt');
const email_exists =require('../helpers/auth_helpers');


exports.get_all_users =(request, response) => {

    User.find({})
        .then(users => {
            return response.status(200).json({users});
        })
        .catch(err => {
            return response.status(500).json({error: err});
        });

}

exports.register_user =(request, response) => {
    ///return response.status(200).json({name: request.body.password});
    let errors =[];
    
    if(email_exists(request.body.email)){ 
        errors.push({error: 'Email Already Exist'});
    }

    /// Email simple validation
    if(!request.body.username){
        errors.push({error: 'Username not provided'});
    }
    if(request.body.username){
        if(request.body.username.length < 6 || request.body.username.length > 60){
            errors.push({error: 'Username Must Be Between 6 & 60'});
        }
    }
    /// Email simple validation
    if(!request.body.email){
        errors.push({error: 'Email not provided'});
    }
    /// Password simple validation
    if(!request.body.password){
        errors.push({error: 'Password not provided'});
    }
    if(request.body.password){
        if(request.body.username.length < 6 || request.body.username.length > 60){
            errors.push({error: 'Username Must Be Between 6 & 60'});
        }
    }

    if(errors.length > 0){
        return response.status(200).json({errors});
    }else{

        const new_user ={
            username: request.body.username,
            email: request.body.email,
            password: request.body.password
        };

        User.create(new_user)
            .then(res => {

                ///new_user =new_user.save();

                return response.status(200).json({user: res});
                
            }).catch(err => {
                console.log(error);
                return response.status(200).json({error});
            });

    }


}

exports.login_user =(request, response) => {

    let errors =[];

    /// Check If DO NOT Email Exists
    // if(!email_exists(request.body.email)){
    //     errors.push({error: 'Email Do Not Exist'});
    // }
    /// Email simple validation
    if(!request.body.email){
        errors.push({error: 'Email not provided'});
    }
    /// Password simple validation
    if(!request.body.password){
        errors.push({error: 'Password not provided'});
    }

    if(errors.length > 0){
        return response.status(200).json({errors});
    }else{

        /// Find User By Email
        User.findOne({'email': request.body.email})
            .then(user => {

                /// Compare Password
                user.compare_password(request.body.password, (err, is_match) => {
                    if(err) return response.status(500).json({error: err});
                    if(!is_match) return response.status(500).json({error: 'Password InCorrect'});

                    user.generate_token((err, user_with_token) => {
                        if(err) return response.status(500).json({error: err});
                        
                        return response.status(200).json({
                            'user': user_with_token
                        });

                    });

                });

                return response.status(200).json({res});

            })
            .catch(err => {
                console.log("ERROR : ", Error(err));
            });

    }



}

exports.get_user_by_token =(request, response) => {

    /// Check if there token
    

}

exports.remove_user =(request, response) => {



}

exports.update_user_info =(request, response) => {

}