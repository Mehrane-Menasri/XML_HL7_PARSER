var fs = require('fs')
var xml2js = require('xml2js')
var Reader = require('hl7js').Reader
var { response } = require('express');
var express = require('express');
var app = express();
app.use(express.static('public'));


var parser = new xml2js.Parser()
var reader = new Reader('BASIC')


app.get('/express_get', function(req, res) {
    response = {
		file : req.query.file,
		format: req.query.format
	}

	if(req.query.format === 'xml') {
	
		
			parser.parseString(response.file, function (err, result) {
				res.json(result)
			})
		
	
	} else {
		
			reader.read(response.file.toString(), function (err, hl7Data) {
				res.json(hl7Data)
			})
		
	}
});

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('App running on http://%s:%s', host, port);
});
