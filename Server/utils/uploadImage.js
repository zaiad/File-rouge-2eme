const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination : function (req,file,cb) {
        cb(null,'./public/images')
    },
    filename : function (req,file,cb) {
        cb(null,file.originalname)
    }
})

module.exports = multer({
    storage: storage,
    fileFilter: (req,file,cb)=>{
        const allowedFileTypes = ['image/jpeg','image/jpg','image/png']
        if (allowedFileTypes.includes(file.mimetype)) {
            cb(null,true)
        }else{
            cb(null,false)
        }
    }
})