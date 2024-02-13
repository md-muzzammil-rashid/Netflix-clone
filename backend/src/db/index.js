import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.DATABASE_URL}/${process.env.DB_NAME}`).then(()=>{
            console.log("Connected to Database");
        })
    } catch (error) {
        console.log("Failed to connect from Database")
    }
}