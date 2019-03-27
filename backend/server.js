const express =require('express');
const app =express();
const bodyParser =require('body-parser');
const mongoose =require('mongoose');
const express_fileupload =require('express-fileupload');
const config =require('./config');



//////////////////////////////////////
/// Connect To Database
//////////////////////////////////////
mongoose.Promise =global.Promise;
mongoose.connect(config.database_url)
    .then(db => {
        console.log('Database Connected Successfully');
    })
    .catch(err => console.log(Error(err)));


//////////////////////////////////////
/// Allow Cors
////////////////////////////////////// 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//////////////////////////////////////
/// Middlewares
//////////////////////////////////////
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express_fileupload());


//////////////////////////////////////
/// Routes
//////////////////////////////////////
const users_routes =require('./routes/users');
const posts_routes =require('./routes/posts');
const comments_routes =require('./routes/comments');

app.use('/users', users_routes);
app.use('/posts', posts_routes);
app.use('/comments', comments_routes);


//////////////////////////////////////
/// Listen For Server
//////////////////////////////////////
app.listen(config.port, (err) => {
    if(err){
        console.log(Error(err));
    }
        console.log('Your Server Is Running On Port : '+config.port);
});