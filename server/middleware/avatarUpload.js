const multer = require('multer');

const upload = multer({
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpeg|jpg)$/)) {
            cb(new Error('Please upload an image'))
        }
        cb(undefined, true)
    }
})

module.exports = { upload };