var mongoose = require('mongoose'),
	options = {},
	db = 'mongodb://localhost/woole_' + process.env.NODE_ENV || 'develop';

mongoose.connect(db, options, (err)=>{
	'use strict';

	if (err) {
		console.log('Error while connecting to the DB' + db + '.');
		return;
	}

	console.log('MongoDB is connected on database ' + db + '.');
});

module.exports = {
	'Locus': require('./locus')
};