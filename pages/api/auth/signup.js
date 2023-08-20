import Account from "@/models/Account";
import { hashPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";

export default async function handler(req,res){

    if(req.method !=="POST") return;

    try {
        await connectDB()
    } catch (error) {
        res.status(500).json({status:"failed", message:"failed to connect to DB"})
    }

    const {email, password}= req.body;

    if(!email || !password){
        return res.status(422).json({status:'failed', messaeg:"Invalid data"})
    }

    const existingUser= await Account.findOne({email})


    if(existingUser){
        return res.status(422).json({status:'failed', message:"User exists"})
    }

    const hashPass= await hashPassword(password)
    console.log(hashPass);

    const user= await Account.create({email, password:hashPass});
    console.log(user);

    res.status(201).json({status:'success', message:"User created."})
}
