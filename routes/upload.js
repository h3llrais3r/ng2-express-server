var express = require('express');
var multer = require('multer');

var router = express.Router();

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
})

// var upload = multer({ dest: './uploads/' }); // default storage for multer
var upload = multer({ storage: storage }) // disk storage for multer

/* Singe file upload. */
router.post('/', upload.single('file'), function(req, res, next) {
    console.log('uploading ' + req.file.originalname + '...');
    res.send(req.files);
});

module.exports = router;