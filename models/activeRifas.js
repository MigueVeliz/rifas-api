const db = require('../db/config');

const activeRifas = {

	findAll: () => db.manyOrNone('SELECT * FROM activeRifas'),

	create: (user_email, user_name, user_location, rifa_id, rifa_name) => {
		return db.one(
			`INSERT INTO activeRifas (user_email, user_name, user_location, rifa_id, rifa_name) VALUES ($1, $2, $3, $4, $5) returning id`,
			[user_email, user_name, user_location, rifa_id, rifa_name]
		);
	},

	delete: (id) => db.none('DELETE FROM activeRifas WHERE id = $1', [id])

};


module.exports = activeRifas;