const db = require('../db/config');


const Users = {

	findAll: () => db.manyOrNone('SELECT * FROM users'),


	findUserByEmail: (email) => { return db.one('SELECT * FROM users WHERE email = $1',
			[email]
		);
	},

	create: (name, email, lastName, address, city, state, zipCode, credits) => {
		return db.one(
			`INSERT INTO users (name, email, lastname, address, city, state, zipCode, credits) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) returning id`,
			[name, email, lastName, address, city, state, zipCode, credits]
		);
	},

	updateUserCredits: (id, credits) => {
		return db.one(
			'UPDATE users SET credits = $2 WHERE id = $1 returning id',
			[id, credits]
		);
	},

	/*update: (users, id) => {
	  return db.one(
	    'UPDATE rifas SET users = $1 WHERE id = $2 returning id',
	    [users, id]
	  );
	},*/


	delete: (id) => db.none('DELETE FROM users WHERE id = $1', [id])

};


module.exports = Users;