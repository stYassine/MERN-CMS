const Comment =require('../models/Comment');

exports.get_post_comments =(request, response) => {

    Comment.find({'post_id': request.params.post_id})
        .then(comments => {
            return response.status(200).json({comments});
        })
        .catch(err => {
            console.log(Error(err));
        });

}

exports.create_comment =(request, response) => {

    let errors =[];

    const new_comment ={
        post_id: request.body.post_id,
        user_id: request.body.user_id,
        comment: request.body.comment
    };

    Comment.create(new_comment)
        .then(comment => {

            return response.status(201).json({
                message: 'Comment Created Successfully',
                comment
            });

        })
        .catch(err => {
            console.log(Error(err));
        });
    

}

exports.remove_comment =(request, response) => {

    Comment.findByIdAndRemove(request.params.id)
        .then(comment => {
            return response.status(201).json({
                message: 'Comment Deleted Successfully',
                comment
            });
        })
        .catch(err => {
            console.log(Error(err));
        });

}