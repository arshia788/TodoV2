import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { getSession, signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router';

function SignUpPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {data,status}= useSession();
    const router= useRouter()

    useEffect(()=>{
        // if(status === 'authenticated') router.replace('/')
    },[status])

    async function signInHandler() {
        const res = await signIn("credentials", {
            email, password, redirect: false
        })
        console.log(res);
    }

    return (
        <div>

            <div className='bg-white rounded p-2 box-border flex flex-col w-3/12 mx-auto my-20'>
                <h2 className='text-lg text-center font-semibold text-blue-700'>SignIn-Page</h2>

                <input
                    className='shadow-md border-none outline-none shadow-gray-600 p-2 rouded my-4'
                    value={email} onChange={e => setEmail(e.target.value)} placeholder='Email...' />

                <input
                    className='shadow-md border-none outline-none shadow-gray-600 p-2 rouded my-4'
                    value={password} onChange={e => setPassword(e.target.value)} placeholder='Password...' />

                <button
                    onClick={signInHandler}
                    className='bg-gray-400 w-fit px-2 py-1 rounded mt-4 mx-auto'
                >SignIn</button>

                <p
                    className='text-center mt-4'
                >Don't Have An Account? <Link
                    className='text-blue-700'
                    href='/signup'>SignUp</Link></p>


            </div>

        </div>
    )
}

export default SignUpPage;


export async function getServerSideProps({req}){

    const session= await getSession({req})
    console.log(session);
}