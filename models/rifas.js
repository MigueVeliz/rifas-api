const db = require('../db/config');

const Rifas = {

	findAll: () => db.manyOrNone('SELECT * FROM rifas'),

	create: (flyer, price, finish_date, users) => {
		return db.one(
			`INSERT INTO rifas (flyer, price, finish_date, users) VALUES ($1, $2, $3, $4) returning id`,
			[flyer, price, finish_date, users]
		);
	},

/*	updateUserCredits: (id, credits) => {
		return db.one(
			'UPDATE users SET credits = $2 WHERE id = $1 returning id',
			[id, credits]
		);
	},*/

	update: (users, id) => {
	  return db.one(
	    'UPDATE rifas SET users = $1 WHERE id = $2 returning id',
	    [users, id]
	  );
	},




	/*update = (flyer, price, finish_date, users, rifaId) => {
	  return db.one(
	    'UPDATE rifas SET flyer = $1, price = $2, finish_date = $3, users = $4 WHERE rifaId = $5 returning id',
	    [flyer, price, finish_date, users, rifaId]
	  );
	},*/

	delete: (id) => db.none('DELETE FROM rifas WHERE id = $1', [id])

};


module.exports = Rifas;