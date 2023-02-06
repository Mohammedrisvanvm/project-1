import mongoose, { model } from "mongoose"

const userSchema =new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Email:{ type:String,
        required:true
    },
    Password:{type:Number,
        required:true
    }

})

export default mongoose.model('user',userSchema)