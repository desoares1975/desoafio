/* jshint esversion: 6, strict: true */
var express = require('express'),
	bodyParser = require('body-parser'),
	http = require('http'),
	app = express();

app.use(bodyParser.json());


app.listen(6900, ()=>{
	'use strict';
	console.log('');
	console.log('');
	console.log('WW   WW    WW                   lll');
	console.log('WW  WWW   WW   oooooo   oooooo  lll    eeeee');
	console.log('WW WW WW WW   ooo  ooo ooo  ooo lll   eee__ee');
	console.log('WWWW  WWWW    ooo  ooo ooo  ooo lll   eee');
	console.log('WWW   WWW      oooooo   oooooo   llll  eeeee');
	console.log('______________________________________________');
	console.log('______________________________________________');
	console.log('_________________CHALENGE_____________________');
	console.log('_______desoares - primary_data_unity__________');
});

module.exports = app;
app.get('/:start/:destiny/:points', (req, res)=>{
	return res.status(200).json({'route': req.params})
});
app.all('*', (req, res)=>{
	return res.status(404).json({'message': 'This section of the web page has not been set yeat, we\'re sorry...' });
});