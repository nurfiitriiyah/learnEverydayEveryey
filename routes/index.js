var express = require('express');
var router = express.Router();
var backendInsertLogger = require("../backend/backend_log/log")

/* GET home page. */
router.get('/', function(req, res, next) {
  var datas = backendInsertLogger.insertLogger()
  res.render('index', { title: 'Express' });
});

module.exports = router;
