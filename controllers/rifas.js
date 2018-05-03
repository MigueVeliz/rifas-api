const router = require('express').Router(),
	Rifas = require('../models/rifas');

	router.post('/rifas', (req, res) => {
		console.log("Posting This:", req.body)
		const {flyer, price, finish_date, users} = req.body

		Rifas.create(flyer, price, finish_date, users)
			.then((data) => {
				res.json(data);
			})
			.catch(err => console.log("Controller POST Error: ", err));
	});


	router.get('/rifas', (req, res) => {

		const user_id = req.params.id

		Rifas.findAll()
			.then((data) => {
				res.json(data);
			})
			.catch(err => console.log('Controller get error:', err ));
	});


	router.put('/rifas/edit/:id', (req,res) => {
		const {users, id} = req.body

		// console.log("Body Data from controller: " + req.body.id)

	  Rifas.update(users, id)
	  	.then(data => res.json(data))
	  	.catch(error => console.log(`Error: there was an issue in the put route/model ${error}`))
	});

	/*router.put('/users/edit/:id', (req,body) => {
		const { id, credits } = req.body;

		Rifas.updateUserCredits(id, credits)
		.then( data => res.json(data))
		.catch(error => console.log("Error: " + error))
	});*/



	/*router.put('/rifas/edit/:id', (req,res) => {
		const {flyer, price, finish_date, users, id} = req.body


	  Rifas.update(flyer, price, finish_date, users, id)
	  	.then(data => res.json(data))
	  	.catch(err => console.log(`Error: there was an issue in the put route/model ${error}`))
	});*/


	router.delete('/rifas/:id', (req, res) => {
		const id = req.params.id;

		Rifas.delete(id)
			.then((data) => {
				res.send('Deleted from DB.');
			})
			.catch(err => console.log('Controller Delete Error:', err));
	});




	module.exports = router;
