import AsyncHandler from "../utils/AsyncHandler.js";
import ApiError from '../utils/ApiError.js'
import { userModel } from "../models/users.models.js";
import ApiResponce from "../utils/ApiResponce.js";
import { options } from "../constants.js";

const generateAccessAndRefreshToken = async (userId) => {

    const user = await userModel.findById(userId)

    const AccessToken = await user.generateAccessToken()
    const RefreshToken = await user.generateRefreshToken()

    user.refreshToken = RefreshToken
    user.save({
        validateBeforeSave: false
    })

    return { AccessToken, RefreshToken }
}

const createUser = AsyncHandler(async (req, res) => {
    const { displayName, email, password } = req.body;
    console.log(displayName);
    if ([displayName, email, password].some((field) => field?.trim() == '')) {
        throw new ApiError(400, "All fields are required")
    }
    const userExisted = await userModel.findOne({
        email: email
    })
    if (userExisted) {
        throw new ApiError(400, "User with same email or phone number already existed")
    }
    const user = await userModel.create({
        email: email.trim(),
        password: password.trim(),
        displayName: displayName
    })

    if (!user) {
        throw new ApiError(500, "Failed to register user")
    }

    return res.status(200)
        .json(
            new ApiResponce(200, user, "User registered")
        )
})

const loginUser = AsyncHandler(async (req, res) => {
    const { email, password } = req.body
    const existedUser = await userModel.findOne({ email })
    if (!existedUser) {
        throw new ApiError(400, "User not existed")
    }
    if (! await existedUser.isPasswordCorrect(password)) {
        throw new ApiError(407, "invalid credentials")
    }

    const { AccessToken, RefreshToken } = await generateAccessAndRefreshToken(existedUser._id)

    return res.status(200)
        .cookie("AccessToken", AccessToken, options)
        .cookie("RefreshToken", RefreshToken, options)
        .json(
            new ApiResponce(200, { AccessToken, RefreshToken }, "Login Successful")
        )
})

const logoutUser = AsyncHandler(async (req, res) => {
    const user = await req.user;
    console.log(user);
    await userModel.findByIdAndUpdate(user._id, 
            { $set: { refreshToken: undefined } }, { new: true })
        .then(() => {
            console.log("user is proceed to lgout");
            res.status(200)
                .clearCookie("AccessToken", options)
                .clearCookie("RefreshToken", options)
                .json(
                    new ApiResponce(200, {}, "Logout Successful")
                )
        })
        .catch((err) => {
            throw new ApiError(500, "Failed to logout", err)
        })
})

export {
    createUser,
    loginUser,
    logoutUser
}