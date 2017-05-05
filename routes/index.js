var express = require('express');
var router = express.Router();
var multer  = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/upload/images/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
})
var converter = require('converter');
var upload = multer({ storage: storage })
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
/* GET home page. */
router.get('/', function(req, res, next) {
res.render('fileupload');
});

router.post('/', upload.any(), function(req, res, next){
res.send(req.files)
});
module.exports = router;
