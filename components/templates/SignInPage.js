import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import {signIn, useSession} from 'next-auth/react'

function SignInPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter();

    const {status} = useSession();


    useEffect(()=>{
        if(status === 'authenticated')  router.replace('/')

    },[status])

    const signInHandler = async () => {
        const res= await signIn('credentials', {
            email, password, redirect:false
        });
        console.log(res);
        if(!res.error)  router.push('/')

    }

    return (
        <div >

            <div className='bg-white w-64 mx-auto rounded-lg 
             p-5 flex flex-col text-center my-10'>

                <h3 className='text-md mb-3 font-semibold'>SignIn</h3>

                <input onChange={e => setEmail(e.target.value)} className='shadow-md outline-none shadow-gray-400 my-2 p-2 rounded' type='text' placeholder='email' value={email} />
                <input onChange={e => setPassword(e.target.value)} className='shadow-md outline-none shadow-gray-400 my-2 p-2 rounded' type='password' placeholder='password...' value={password} />

                <button
                    onClick={signInHandler}
                    className='px-3 w-fit mt-4 mx-auto py-1 rounded bg-zinc-400'
                >LogIn</button>

                <div className='flex items-center mt-4'>
                    <p className='mr-1'>Create An Account </p>
                    <Link href="/signup" className='text-blue-600'>sign up</Link>
                </div>

            </div>
        </div>
    )
}

export default SignInPage