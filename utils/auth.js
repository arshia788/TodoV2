import { hash, compare } from "bcryptjs";

const hashPassword= async (password)=>{
    const hashedPassword= await hash(password,13)
    return hashedPassword
}

const verifyPassword=async(password,userPassword)=>{
    const verify= await compare(password,userPassword)
    return verify
}


export {hashPassword, verifyPassword};
