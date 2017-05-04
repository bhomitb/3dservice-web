var express = require('express');
var router = express.Router();
var multer  = require('multer');
var upload = multer({ dest: 'public/uploads/' });
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
/* GET home page. */
router.get('/', function(req, res, next) {
res.render('fileupload');
});

module.exports = router;
