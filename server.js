require('./models/db');//including a mongodb database file

//including all the files
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const NewsController = require('./controllers/NewsController');
const bodyParser = require('body-parser');
const userRoutes = require('./controllers/user');
const loginRoutes = require('./controllers/login');
const ListRoutes = require('./controllers/List');
//const UpdateRoutes = require('./controllers/Update');


const app = express();
let allow = true;
let news = false;
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(bodyParser.json());

//listening on port 3000
/*app.listen(3000, () =>{
	console.log('Express srver started at port : 3000');
});*/

//set a engine for express handlebars hbs
app.set('views',path.join(__dirname,'/views/')); //setting a views
app.engine('hbs', exphbs({extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts' }));
app.set('view engine','hbs');

//Rendering to a News Controller

app.use('/',ListRoutes);
app.use('/user',userRoutes);
app.use('/login',loginRoutes);
app.use('/News',NewsController);
//app.use('/Update',UpdateRoutes);

app.listen(3000, () =>{
	console.log('Express srver started at port : 3000');
});



//Explore a differenet thing 
//methtod
//get,post,set,engine,use
