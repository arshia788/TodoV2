import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

function SignUpPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {status}= useSession();
    const router= useRouter()

    useEffect(()=>{
        if(status === 'authenticated') router.replace('/')
    },[status])

    async function signUpHandler(){
        const res= await fetch('/api/auth/signup',{
            method:"POST",
            body:JSON.stringify({email, password}),
            headers:{"Content-Type":"application/json"}
        })
        const data= await res.json();
    }

    return (
        <div>

            <div className='bg-white rounded p-2 box-border flex flex-col w-44 my-20'>

                <h2 className='text-lg text-center font-semibold text-blue-700'>SignUp-Page</h2>

                <input
                    className='shadow-md border-none outline-none shadow-gray-600 p-2 rouded my-4'
                    value={email} onChange={e => setEmail(e.target.value)} placeholder='Email...' />

                <input
                    className='shadow-md border-none outline-none shadow-gray-600 p-2 rouded my-4'
                    value={password} onChange={e => setPassword(e.target.value)} placeholder='Password...' />

                <button
                onClick={signUpHandler}
                className='bg-gray-400 w-fit px-2 py-1 rounded mt-4 mx-auto'
                >SignUp</button>

                <p 
                className='text-center mt-4'
                >Have An Account? <Link 
                className='text-blue-700'
                href='/signin'>SignIn</Link></p>
            </div>

        </div>
    )
}

export default SignUpPage