import connectDB from "@/utils/connectDB";
import Account from "@/models/Account";
import { getSession } from "next-auth/react";
import { sortTodos } from "@/utils/sortTodos";

export default async function handler(req,res){

    if(req.method ==="POST"){

        try {
            await connectDB()
        } catch (error) {
            res.status(500).json({status:'failed', message:"failed to connect to DB"})
        }


        const session= await getSession({req});

        if(!session){
            return res.status(401).json({status:'failed', message:"You are not Logged in."})
        }

        const user= await Account.findOne({email:session.user.email})

        if(!user) {
            return res.status(404).json({status:'failed', messsage:"No user exists."})
        }

            const {title, status}= req.body;

            if(!title || !status){
                return res.status(422).json({status:"failed", message:"Invalid data"})
            }


            user.todos.push({title, status})
            console.log(user.todos);
            user.save();

            res.status(201).json({status:'success', message:"Todo created!. "})

    }
    
    else if(req.method === "GET"){
        try {
            await connectDB()
        } catch (error) {
            res.status(500).json({status:'failed', message:"failed to connect to DB"})
        }

        const session= await getSession({req});
        const user= await Account.findOne({email:session.user.email})
        const sortedData= sortTodos(user.todos);

        res.status(200).json({status:'success', data:{todos:sortedData}})
    }

    else if (req.method === "PATCH"){
        try {
            await connectDB()
        } catch (error) {
            res.status(500).json({status:'failed', message:"failed to connect to DB"})
        }

        const {id, status}= req.body;

        if(!id || !status){
            return res.status(422).json({status:'failed', message:"Invalid Data!"})
        }
        
        const user= await Account.updateOne({"todos._id":id},{$set: {"todos.$.status":status}})

        res.status(200).json({status:'success'})
    }
};