var express = require('express');
var router = express.Router();
var multer = require('multer');
var path = 'D:\3DService\3dservice-web\public\upload\image\';
 /* Function to convert 2D to 3D Model*/
var conv = (function(){
    var exe = require("child_process").execFile
    var spawn = require("child_process").spawn
        exe('VisualSFM', ['sfm+cmp', path , path], (err, stdout, stderr) => {
            if (err) throw err;
            console.log(stdout, stderr);
       // spawn('cmpmvs.exe',["C:/Users/admin/Desktop/phn/.nvm.cmp/00/mvs.ini"]);

});
});


/* GET home page. */
router.get('/converting', function(req, res, next) {
res.render('loading');
//Calling conv function
conv();
console.log('Finished');
});

router.post('/', upload.any(), function(req, res, next){
    console.log(req.files);
 res.send(req.files);
});
module.exports = router;
