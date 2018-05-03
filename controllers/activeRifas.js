const router = require('express').Router(),
	ActiveRifas = require('../models/activeRifas');

	router.post('/activeRifas', (req, res) => {
		console.log("Posting This:", req.body)
		const {user_email, user_name, user_location, rifa_id, rifa_name} = req.body

		ActiveRifas.create(user_email, user_name, user_location, rifa_id, rifa_name)
			.then((data) => {
				res.json(data);
			})
			.catch(err => console.log("Controller POST Error: ", err));
	});


	router.get('/activeRifas', (req, res) => {

		const user_id = req.params.id

		ActiveRifas.findAll()
			.then((data) => {
				res.json(data);
			})
			.catch(err => console.log('Controller get error:', err ));
	});


	router.delete('/activeRifas/:id', (req, res) => {
		const id = req.params.id;

		ActiveRifas.delete(id)
			.then((data) => {
				res.send('Deleted from DB.');
			})
			.catch(err => console.log('Controller Delete Error:', err));
	});




	module.exports = router;
