import mongoose from "mongoose";

export async function Connect(){
    try{
        await mongoose.connect(process.env.MONGO_URL);
        const connection=mongoose.connection;
        connection.on('connected',()=>{
            console.log("Connected Successfully");
        })
        connection.on('error',(error)=>{
            console.log("Error",error)
        })
    }catch(error){
        console.log("Error: ",error)
    }
}