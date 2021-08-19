const user = require('../model/user')
const jwt = require('jsonwebtoken')
const CatchAsync = require('../utils/CatchAsync.js')
const AppError = require('../utils/AppError.js');
const { promisify } = require('util')


const signToken = (newUser, expiresIn) => {
    const { firstName, middleName, lastName, address, email, phone, id } = newUser
    const data = {
        firstName, middleName, lastName, address, email, phone
    }
    return jwt.sign(data, process.env.JWT_SECRET, {
        expiresIn: expiresIn || process.env.JWT_EXPIRES_IN
    });
};

exports.signUp = CatchAsync(async (req, res, next) => {

    const newUser = await User.create({
        ...req.body,
        
    });

        res.send({
        success: true,
        token: signToken(newUser)
    });

});

exports.signIn = CatchAsync(async (req, res, next) => {
    const {userName, password } = req.body;

    // 1) Check if email and password exist
    if (!email || !password) {
        return next(new AppError('Please provide email and password!', 400));
    }
    // 2) Check if user exists && password is correct
    const user = await User.findOne({ email }).select('+password');

    if (!user || !(await user.correctPassword(password, user.password))) {
        return next(new AppError('Incorrect email or password', 401));
    }

    // generate a token and send back response
    res.send({
        success: true,
        token: signToken(user)
    })

});
exports.protect = (byePass) => {

    return CatchAsync(async (req, res, next) => {
        // 1) Getting token and check of it's there
        let token;
        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith('Bearer')
        ) {
            token = req.headers.authorization.split(' ')[1];
        } else if (req.cookies && req.cookies.jwt) {
            token = req.cookies.jwt;
        } else if(byePass){
            return next()
        }

        if (!token && !byePass) {
            return next(
                new AppError('You are not logged in! Please log in to get access.', 401)
            );
        }

        try {
            // 2) Verification token
            const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

            // 3) Check if user still exists
            const currentUser = await user.findById(decoded.id);
            if (!currentUser) {
                return next(
                    new AppError(
                        'The user belonging to this token does no longer exist.',
                        401
                    )
                );
            }

            // GRANT ACCESS TO PROTECTED ROUTE
            req.user = currentUser;
        } catch(err) {
            if(err.name === 'JsonWebTokenError' && byePass){
                return next()
            } else {
                throw err
            }
        }
        next();
    })
};

exports.getAllUser = async (req, res) => {

    try {
         const data = await User.find();

        res.status(200).json({
            status: "success",
            results: data.length,
            data
        });
    } catch (error) {
        console.log(error);
    }
}

exports.createUser = async (req, res) => {
    try {
        const data = await user.create(req.body);
        res.status(200).json({
            status: "success",
            data
        })
    } catch (error) {
        console.log(error);
    }
}

exports.getOneUser = async (req, res) => {
    try {
        const data = await user.findById(req.params.id);
                res.status(200).json({
            status: "success",
            data
                    })
    } catch (error) {
        console.log(error);
    }
}

exports.updateUser = async (req, res) => {
    try {
        const data = await user.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({
            status: "success",
            data
        })
    } catch (error) {
        console.log(error);
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const data = await User.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: "success",
            data
        })
    } catch (error) {
        console.log(error);
    }
}
