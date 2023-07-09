import mongoose, { connection } from "mongoose";

export async function connect(){
    try{
        mongoose.connect(process.env.MONGO_URL)
        const connection = mongoose.connection
        
        connection.on('connected',()=>{
            console.log("mongodb connected successfully");
        })
        
        connection.on('error',(err)=>{
            console.log('MongoDB error' + err)
            process.exit()
        })
      
    }
    catch(err){
        console.log(err);
    }
}