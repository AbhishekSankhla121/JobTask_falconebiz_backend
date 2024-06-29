import express from "express";
import { getUserDetails, registerUser } from "../controller/userController.js";
const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).send("<h1>Router Working...</h1>")
});

// get all user details 
router.route("/getuser").get(getUserDetails);
router.route("/registeruser").post(registerUser);




export default router;