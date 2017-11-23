'use strict'

const _ = require('underscore');
const model = require('../models/badges');

 const badges = () => {
	const save = (req, res, next) => {
		//console.log("I am here");
		const badges = _.clone(req.body);
		model.save(badges, (err) => {
			if (err) return res.json(503, {error: true});
			next();
		});
	};

	const send = (req, res, next) => {
		next();
	};
};
module.exports = badges;