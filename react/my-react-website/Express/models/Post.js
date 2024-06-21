import { Timestamp } from "mongodb";
import mongoose from "mongoose";
import { Schema,model } from "mongoose";


const postSchema=new mongoose.Schema({
    title:String,
    summary:String,
    content:String,
    image:String,
    author:{
        type:Schema.Types.ObjectId,ref:'UsersData'
    }
},{
    timestamps: true
})


const postModel=model('Post',postSchema);

export default postModel