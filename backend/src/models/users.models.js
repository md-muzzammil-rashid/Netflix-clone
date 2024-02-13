import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

const userSchema =  new mongoose.Schema({
    email:{
        type: String,
        require:true,
        unique:true,
        trim:true,
        lowercase:true
    },
    password:{
        type: String,
        require:true,
        trim: true
    },
    displayName :{
        type: String,
        require: true
    },
    likedMovies:[{
        type:String
    }],
    watchingHistory:[{
        type:String
    }]
},{timestamps:true})

userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next()
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function (password){
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = async function(){
    return await jwt.sign({
        _id: this.id,
        email:this.email
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    })
}

userSchema.methods.generateRefreshToken = async function (){
    return jwt.sign({
        email:this.email
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    })
}

export const userModel = mongoose.model("Users",userSchema)