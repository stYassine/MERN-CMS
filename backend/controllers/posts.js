const Post =require('../models/Post');


exports.get_all_posts =(request, response) => {

    Post.find({})
        .then(posts => {
            return response.status(200).json({posts});
        })
        .catch(err => {
            console.log(Error(err));
        });

}

exports.get_single_post =(request, response) => {

}

exports.create_post =(request, response) => {

    /// errors
    let errors =[];

    let image_name ='public/uploads/thumbnails/default_placeholder.png';

    if(!request.body.title){
        errors.push({error: 'Title Is Required'});
    }
    if(!request.body.description){
        errors.push({error: 'Description Is Required'});
    }

    /// if there is an image


    /// if there are errors
    if(errors.length > 0){
        return response.status(200).json({errors});
    }else{


        /// If there is image in request
        if(request.files != null){

            let file =request.files.post_image;
            
            image_name =Date.now()+'_'+file.name;

            file.mv('public/thumbnails/'+image_name, (err) => {
                if(err) return response.status(400).json({error: err});
            });

        }

        const new_post ={
            title: request.body.title,
            description: request.body.description,
            image: image_name
        }

        Post.create(new_post)
            .then(res => {
                
                return response.status(200).json({post: res});

            })
            .catch(err => {
                return response.status(400).json({err});
                console.log(Error(err));
            });

    }

    



}

exports.update_post =(request, response) => {
    
    let errors =[];

    let new_post_update ={};

    if(request.body.title){
        new_post_update.title =request.body.title;
    }

    if(request.body.description){
        new_post_update.title =request.body.title;
    }

    if(request.files != null){

        let image_name;
        let file =request.files.post_image;

    }

    /// Find post
    Post.findByIdAndUpdate(request.params.id, new_post_update)
        .then(post => {
            return response.status(400).json({
                message: 'Post Updated Successfully',
                post
            });
        })
        .catch(err => {
            return response.status(400).json({error: err});
        });



}

exports.remove_post =(request, response) => {
    

    Post.findByIdAndRemove(request.params.id)
        .then(post => {
            
            return response.status(200).json({
                'status': 'Post Deleted Successfully',
                'post': post
            });

        })
        .catch(err => {
            return response.status(400).json({error: err});
        });

}