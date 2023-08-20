import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router';

function SignUpPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { status } = useSession();
    const router = useRouter();

    useEffect(() => {

        if (status === 'authenticated') window.location.href('/')

    }, [status])

    const signInHandler = async () => {
        const res = await signIn('credentials', {
            email, password, redirect: false
        });
        console.log(res);
        if (!res.error) router.push('/')

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

                <div className='flex items-center mt-4'>
                    <p className='mr-1'>Create An Account </p>
                    <Link href="/signup" className='text-blue-600'>sign up</Link>
                </div>



            </div>

        </div>
    )
}

export default SignUpPage;