/* jshint esversion: 6, strict: true */
var express = require('express'),
	bodyParser = require('body-parser'),
	http = require('http'),
	woole = express();

woole.use(bodyParser.json());
woole.listen(6900, ()=>{
	'use strict';

	console.log('                                 ll');
	console.log('                        ******   ll');
	console.log('                  ****    **     ll');
	console.log('                   **      **    ll ');
	console.log('ww        ww  ooooooo   ooooooo  ll  eeeeeee   ');
	console.log('ww        ww oo  ** oo oo  ** oo ll ee     ee');
	console.log('ww   ww   wwoo  *****ooo****** oolleeeeeeeeee');
	console.log(' ww wwww ww  oo     oo oo     oo ll ee');
	console.log('  ww    ww    ooooooo   ooooooo  ll  eeeeeee');
	console.log('______________________________________________');
	console.log('______________________________________________');
	console.log('_________________CHALLENGE____________________');
});

module.exports = woole;

woole.get('/:start/:destiny/:points', (req, res)=>{
	//get to resolve the order here and them call the frontend
	return res.status(200).json({'route': req.params})
});
woole.all('*', (req, res)=>{
	return res.status(404).json({'message': 'This section of the web page has not been set yeat, we\'re sorry...' });
});

/*
google maps api key:AIzaSyBA6TMCMzjanLkWqqajC4W9TSSfYYOXoms
*/