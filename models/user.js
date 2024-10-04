const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const userSchema= new Schema({
    name:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        default:"bhubaneswar",
        set: (v)=> v===""?"bhubaneswar":v, 
    },
    age:{
        type:Number,
    },
    contact:{
        type:Number,
    },
});

const User= mongoose.model("User",userSchema);
module.exports=User;