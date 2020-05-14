const multer =require('multer');
const path=require('path');


//file upload vanai ko client lai  request to server ma file upload garnai so using 
//multer module which handle multipart /form data and which is libary  for uploading file sand middlewware 

var storage =multer.diskStorage({
    destination:'./public/image',
    filename:(req,file,callback) =>
    {
        let ext =path.extname(file.originalname);
        let img =file.originalname.split('.').slice(0,-1).joint('.');
        let imgname=img+"-"+Date.now()+ext;
        callback(null,imgname);
    }
});

var imageFileFilter =(req,file,cb)=>{
    if(!file.originalname.match(/\.(jpeg|jpg|png|gif)$/)){
        return cb(newError("you can upload only images files!"),false);
    }
    cb(null,true);

    };
    var upload=multer({
        storage:storage,
        fileFilter:imageFileFilter,
        limits:{fieldSize:10000000000000}

    }).array('image',1);
module.exports=upload