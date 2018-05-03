const express = require('express'),
	logger = require('morgan'),
	app	= express(),
	bodyParser	= require('body-parser'),
	PORT = process.env.PORT || 8080,
	//PORT = process.env.PORT || "https://serene-dusk-55355.herokuapp.com/api",
	// Auth = require('./services/auth'),
	cors = require('cors');


// cross-origin requests will not work from react server to express
// server with out this
app.use(cors());

// 1. set up the view engines
app.set('view engine', 'html');
app.set('views', __dirname + '/views/');
app.use(express.static(__dirname + '/public/'));

// logger to see whats going on
app.use(logger('dev'));


// 2. set body parser to get form data
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// before all routes, use the middleware we define in Auth to get the
// current user
// app.use(Auth.authenticate);

// set up base routes
/*app.use('/users', require('./controllers/users_controller'));
app.use('/login', require('./controllers/sessions_controller'));*/

// 3. connect controller
app.use('/', require('./controllers/rifas'));
app.use('/', require('./controllers/users'));
app.use('/', require('./controllers/activeRifas'));
// app.use('/activeRifas', require('./controllers/activeRifas'));

// 4. listen
app.listen(PORT, () => console.log('Server is listening on port: ', PORT));
