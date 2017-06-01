/* Importing Modules*/
var express = require('express');
var router = express.Router();
var path =  __dirname + '/public/upload/images';
var multer  = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/upload/images/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
})

var upload = multer({ storage: storage })
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

/* Functions */

 /* Function to convert 2D to 3D Model*/
var conv = function(){
    // var exe = require("child_process").execFile
    // var spawn = require("child_process").spawn
    //     exe('VisualSFM', ['sfm+cmp', path , path], (err, stdout, stderr) => {
    //         if (err) throw err;
    //         console.log(stdout, stderr);
       // spawn('cmpmvs.exe',["C:/Users/admin/Desktop/phn/.nvm.cmp/00/mvs.ini"]);
       console.log('function');

};
//});




/* GET home page. */
router.get('/', function(req, res, next) {
res.render('fileupload');
});

router.post('/converting', upload.any(), function(req, res, next){
res.send(req.files);
})
module.exports = router;

router.post('/data', function(req, res){
  res.send([{'name':'Bhomit'},{'name':'Akash'},{'name':'Mata'}])
})