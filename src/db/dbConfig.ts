import mongoose from "mongoose"

let isConnected = false;

export async function Connect(){
    if(isConnected){
        return;
    }

    try{
        await mongoose.connect(process.env.MONGO_URI!)
        isConnected = true
        console.log("Db Connected✅")
    }
    catch(error){
        console.log("Db Connect Failed❌", error)
        throw new Error("Failed connect to database")
    }
}