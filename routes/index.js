var express = require('express');
var router = express.Router();
var ENV = require('dotenv').config();
/*Get Json Config data*/
const path = require('path')
var fs = require('fs');
var DataSet;
fs.readFile('dataset.json', 'utf8', function (err, data) {
  if (err) throw err;
  DataSet = JSON.parse(data);
});
/*Get Json Config data end*/
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , EnvData:process.env, DataSet:DataSet});
});

module.exports = router;
