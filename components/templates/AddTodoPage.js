import RadioButton from 'components/modules/RadioButton';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddTodoPage() {

    const [title, setTitle] = useState('');
    const [status, setStatus] = useState('todo');


    const addHandler = async () => {
        const res =await fetch('/api/todos',{
            method:"POST",
            body:JSON.stringify({title, status}),
            headers:{"Content-Type":"application/json"}
        })
        const data= await res.json()
        if(data.status==='success') toast.success(data.message)
    }

    return (
        <div className='p-2'>
            <h2>+ Add Todo</h2>

            <div className='flex flex-col gap-y-4 mt-4'>

                <div>
                    <input value={title}
                        placeholder='Title...'
                        onChange={e => setTitle(e.target.value)}
                        className='border-none outline-none rounded w-64 p-1' />
                </div>

                <div className='flex flex-col gap-y-4 text-white items-start list-disc [&>*:nth-child(1)]:bg-orange-600
                 [&>*:nth-child(2)]:bg-emerald-500
                 [&>*:nth-child(3)]:bg-indigo-600
                 [&>*:nth-child(4)]:bg-cyan-600 '>

                    <RadioButton value='todo' type='radio' status={status}
                        setStatus={setStatus} title='Todo'/>

                    <RadioButton value='inprogress' type='radio' status={status}
                        setStatus={setStatus} title='In Progress' />

                    <RadioButton value='review' type='radio' status={status}
                        setStatus={setStatus} title='Review' />

                    <RadioButton value="done" type='radio' status={status}
                        setStatus={setStatus} title='Done' />
                </div>

            </div>

            <button
                onClick={addHandler}
                className='mt-6 rounded bg-gray-800 text-white px-3 py-1'
            >Add</button>

            <ToastContainer />
        </div>
    )
}

export default AddTodoPage;
