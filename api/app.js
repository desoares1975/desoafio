(()=>{
	process.env.NODE_ENV = (process.env.NODE_ENV || 'develop');
	console.log('Running on enviroment', process.env.NODE_ENV);
}());

var express = require('express'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	http = require('http'),
	woole = express(),
	models = require('./models');

woole.use(bodyParser.json());
woole.listen(6900, ()=>{
	'use strict';

	console.log('                                 ll');
	console.log('                                 ll');
	console.log('                        ******   ll');
	console.log('                  ****    **     ll');
	console.log('                   **      **    ll');
	console.log('ww        ww  ooooooo   ooooooo  ll  eeeeeee');
	console.log('ww        ww oo  ** oo oo  ** oo ll ee     ee');
	console.log('ww   ww   wwoo  *****ooo****** oolleeeeeeeeeee');
	console.log(' ww wwww ww  oo     oo oo     oo ll ee');
	console.log('  ww    ww    ooooooo   ooooooo  ll  eeeeeee');
	console.log('______________________________________________');
	console.log('______________________________________________');
	console.log('_________________CHALLENGE____________________');
});

(()=>{
	'use strict';

	let locus = models.Locus;
	locus.findOne((err, doc)=>{

		if (!doc){
			let data = require('../data/points-of-interest').features;

	 		locus.collection.insert(data, (err, saved)=>{
				if(err || !saved) {
					console.log('ERROR::ERROR::ERROR::ERROR::ERROR::ERROR::ERROR::ERROR', err);
				}
			});
		}
	});
}());

woole.get('/points', (req, res)=>{
	'use strict';
	let locus = require('./models').Locus;
	locus.find({}, (err, docs)=>{
		if (err) { return  res.status(500).json(err); }

		return res.status(200).json(docs);
	});
});
woole.get('/:start/:destiny/:points', (req, res)=>{
	'use strict';
	//get to resolve the order here and them call the frontend
	return res.status(200).json({'route': req.params});
});
woole.all('*', (req, res)=>{
	'use strict';
	return res.status(404).json({'message': 'This section of the web page has not been set yeat, we\'re sorry...' });
});

/*
google maps api key:AIzaSyBA6TMCMzjanLkWqqajC4W9TSSfYYOXoms
*/
module.exports = woole;