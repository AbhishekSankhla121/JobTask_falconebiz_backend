import catchAsyncError from "../middelwares/catchAsyncError.js";
import User from "../model/User.js";
import customErrorHandler from "../utils/customErrorHandler.js";


export const getUserDetails = catchAsyncError(async (req, res, next) => {
    let response = await User.find({});
    if (!response) {
        return next(new customErrorHandler("data not found", 404));
    }
    res.status(200).json({
        success: true,
        data: response
    })
});

export const registerUser = catchAsyncError(async (req, res, next) => {
    const { name, email, password, gender, experienced, cities, sendUpdates } = req.body;
    if (!name || !email || !password || !gender || !cities) {
        return new customErrorHandler("Required all fileds", 401);
    }

    let response = await User.findOne({ email });
    if (response) {
        return next(new customErrorHandler("email already register", 409));
    }

    response = await User.create({
        name, email, password, gender, experienced, cities, sendUpdates
    });

    res.status(200).json({
        success: true,
        message: "User Created succesfully",
        response
    })
});