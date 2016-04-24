var mongoose = require('mongoose'),
	options = {},
	db = 'woole_' + process.env.NODE_ENV;

mongoose.connect(db, options, function (err) {
	if (err) {
		console.log('Error while connecting to the DB' + db + '.');
		return;
	}

	console.log('MongoDB is connected on database ' + db + '.');
});

module.exports = {
	'Locus': require('./locus');
};