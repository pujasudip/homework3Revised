var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('hw3', ['hw3']);
var db2 = mongojs('hw32', ['hw32']);
var db3 = mongojs('hw33', ['hw33']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/hw3', function(req, res){
	console.log('This is Get request.');

	db.hw3.find(function(err, docs){
		console.log(docs);
		res.json(docs);
	});
});

app.post('/hw3', function(req, res){
	console.log(req.body);
	db.hw3.insert(req.body, function(err, doc){
		res.json(doc);
	});
});

app.delete('/hw3/:id', function(req, res){
	var id = req.params.id;
	console.log(id);
	db.hw3.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.get('/hw3/:id', function(req, res){
	var id = req.params.id;
	console.log(id);
	db.hw3.findOne({_id: mongojs.ObjectId(id)}, function(err, doc){
		res.json(doc);
	});
});

app.put('/hw3/:id', function(req, res){
	var id = req.params.id;
	console.log(req.body.school);
	db.hw3.findAndModify({query: {_id: mongojs.ObjectId(id)},
	update: {$set: {school: req.body.school, degree: req.body.degree, last_year: req.body.last_year}},
	new: true}, function(err, doc){
		res.json(doc);
	});
});

app.get('/hw32', function(req, res){
	console.log('This is Get request.');

	db2.hw32.find(function(err, docs){
		console.log(docs);
		res.json(docs);
	});
});

app.post('/hw32', function(req, res){
	console.log(req.body);
	db2.hw32.insert(req.body, function(err, doc){
		res.json(doc);
	});
});

app.delete('/hw32/:id', function(req, res){
	var id = req.params.id;
	console.log(id);
	db2.hw32.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.get('/hw32/:id', function(req, res){
	var id = req.params.id;
	console.log(id);
	db2.hw32.findOne({_id: mongojs.ObjectId(id)}, function(err, doc){
		res.json(doc);
	});
});

app.put('/hw32/:id', function(req, res){
	var id = req.params.id;
	console.log(req.body.skill);
	db2.hw32.findAndModify({query: {_id: mongojs.ObjectId(id)},
	update: {$set: {skill: req.body.skill}},
	new: true}, function(err, doc){
		res.json(doc);
	});
});

app.get('/hw33', function(req, res){
	console.log('This is Get request.');

	db3.hw33.find(function(err, docs){
		console.log(docs);
		res.json(docs);
	});
});

app.post('/hw33', function(req, res){
	console.log(req.body);
	db3.hw33.insert(req.body, function(err, doc){
		res.json(doc);
	});
});

app.delete('/hw33/:id', function(req, res){
	var id = req.params.id;
	console.log(id);
	db3.hw33.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.get('/hw33/:id', function(req, res){
	var id = req.params.id;
	console.log(id);
	db3.hw33.findOne({_id: mongojs.ObjectId(id)}, function(err, doc){
		res.json(doc);
	});
});

app.put('/hw33/:id', function(req, res){
	var id = req.params.id;
	console.log(req.body.skill);
	db3.hw33.findAndModify({query: {_id: mongojs.ObjectId(id)},
	update: {$set: {title: req.body.title, description: req.body.description}},
	new: true}, function(err, doc){
		res.json(doc);
	});
});
app.listen(80);
console.log("Server running on port 80");
