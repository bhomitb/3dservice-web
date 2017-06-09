/* Importing Modules*/
var express = require('express');
var router = express.Router();
var path =  __dirname + '\\public\\upload\\images\\'; //cloud ka path
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
     var exe = require("child_process").execFile
     var spawn = require("child_process").spawn
     exe('VisualSfm', ['sfm+cmp', 'D:/3DService/3dservice-web/public/upload/images' , 'D:/3DService/3dservice-web/public/upload/images' ], (err, stdout, stderr) => {
             if (err) throw err;
             console.log(stdout, stderr);
       spawn('cmpmvs.exe',["D:/3DService/3dservice-web/public/upload/images.nvm.cmp/00/mvs.ini"]);
       console.log('Awesome ' + path);
     })
}




/* GET home page. */
router.get('/', function(req, res, next) {
res.render('fileupload');
});

router.post('/converting', upload.any(), function(req, res, next){
  conv();
  res.send(req.files);
  })
module.exports = router;

router.get('/data', function (req, res) {
    res.sendFile('C:/Users/admin/Downloads/ai.jpg');
})