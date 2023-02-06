import mongoose from "mongoose";



mongoose.set('strictQuery', false);

async function dbConnect(){
    
    
    await mongoose.connect('mongodb://127.0.0.1/crudApp').then(console.log("db connected"))
}

export default dbConnect



