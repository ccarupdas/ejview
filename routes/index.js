var express = require('express');
var router = express.Router();
var ENV = require('dotenv').config();
var os = require('os');

/*Get Json Config data*/
const path = require('path')
var fs = require('fs');
var DataSet;
fs.readFile('dataset.json', 'utf8', function (err, data) {
  if (err) throw err;
  DataSet = JSON.parse(data);
});
const URLDIR = '\n \n'+os.homedir()+'\n'+__dirname+'\n'+__filename;
/*Get Json Config data end*/
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', SEO: URLDIR, EnvData:process.env, DataSet:DataSet});
});

module.exports = router;
