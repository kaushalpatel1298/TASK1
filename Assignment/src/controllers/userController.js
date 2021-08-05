const User = require('../models/user');

exports.signUp =async (req, res, next) => {

    const newUser = await User.create({
        ...req.body,
        
    });

    res.status(200).json({
        status: "success"
    })
        
};

exports.getUser = async(req, res, next) => {
    const data = await user.find().populate('profilePicture');

    res.status(200).json({
        status: "success",
        data
    })
};

