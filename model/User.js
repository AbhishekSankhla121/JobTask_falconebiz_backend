import mongoose, { Schema } from "mongoose";
import validator from "validator"

const user = Schema({
    name: {
        type: String,
        required: [true, "Please Enter Your Name "]
    },
    email: {
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: true,
        validate: validator.isEmail
    },
    password: {
        type: String,
        required: [true, "please Enter your password"],
        minLength: [2, "Password must be atleast 2 characters"],
        select: false,
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: [true, "select gnder"]
    },
    experienced: {
        type: Boolean,
        required: true
    },
    cities: {
        type: [String],
        required: true
    },
    sendupdates: {
        type: Boolean
    }
});

const User = mongoose.model("User", user);

export default User;