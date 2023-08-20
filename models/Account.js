import { Schema, models, model } from "mongoose";

const accountSchema=new Schema({

    name:{
        type:String,
    },
    lastName:{
        type:String
    },
    email:{
        type:String,
        required:true
    }
    ,
    password:{
        type:String,
        required:true
    }
    ,
    todos:[
        {title:String,
        status:String}
    ]
    ,
    createdAt:{
        type:Date,
        default:()=> Date.now()
    },
})

const Account = models.Account || model("Account", accountSchema);

export default Account;