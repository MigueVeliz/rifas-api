const router = require('express').Router(),
	Users = require('../models/users');

	router.post('/users', (req, res) => {
		console.log("Posting This:", req.body)
		const { name, email, lastName, address, city, state, zipCode, credits } = req.body

		Users.create(name, email, lastName, address, city, state, zipCode, credits)
			.then((data) => {
				res.json(data);
			})
			.catch(err => console.log("Controller POST Error: ", err));
	});



	router.get('/users', (req, res) => {

		// const user_id = req.params.id

		Users.findAll()
			.then((data) => {
				res.json(data);
			})
			.catch(err => console.log('Controller get error:', err ));
	});


	router.get('/users/:email', (req,res) => {

		const userEmail = req.params.email;

		Users.findUserByEmail(userEmail)
		.then( data => {
			res.json(data);
		})
		.catch( err => console.log("Cannot get user by email: " + err));

	});

	router.put('/users/editUserCredits/:id', (req,res) => {
		const { id, credits } = req.body;

		Users.updateUserCredits(id, credits)
		.then( data => res.json(data))
		.catch(error => console.log("Error: " + error))
	});


/*	router.delete('/users/:id', (req, res) => {
		const id = req.params.id;

		Users.delete(id)
			.then((data) => {
				res.send('Deleted from DB.');
			})
			.catch(err => console.log('Controller Delete Error:', err));
	});*/




	module.exports = router;
