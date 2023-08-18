import mongoose from "mongoose"
const Postschema =new mongoose.Schema({
    name:{type:String,required:true},
    prompt:{type:String,required:true},
    image:{type:String,required:true}

})

export const  Post=mongoose.model('Post',Postschema)