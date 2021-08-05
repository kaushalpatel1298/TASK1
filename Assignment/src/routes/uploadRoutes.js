const express = require('express');
const imgModel = require('../models/image');
const path = require('path');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/');
    },
    filename: (req, file, cb) => {
        const names = file.originalname.split(".")
        cb(null, names[0] + '-' + Date.now() +"."+ names[names.length-1]);
    }
});
const upload = multer({ storage: storage })
const router = express.Router();

router.post("/upload", upload.single('productImage'), async (req, res) => {

    const uploadedImage = await imgModel.create(req.file)

    console.log(req.file);
    res.status(200).json({
        status: "success",
        data: uploadedImage
    })
});

module.exports = router;