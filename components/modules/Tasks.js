import { RiMastodonLine } from 'react-icons/ri';
import {BiRightArrow, BiLeftArrow} from 'react-icons/bi'

function Tasks({ data, next, back, fetchTodos }){

    const statusHandler=async(id,status)=>{

        const res= await fetch('/api/todos',{
            method:"PATCH",
            body:JSON.stringify({id,status}),
            headers:{"Content-Type":"application/json"}
        })

        const data= await res.json();
        console.log(data);
        if(data.status === 'success') fetchTodos()
    }

    return (
        <div className='p-1'>

            {

                // * havaset bashe ke in dareh map mizaneh tamam todos ha ro ke daroon onha ye title,status va id hast. 

                 data?.map((item, index) => {
                    return (
                        <div key={index} className='shadow-md shadow-gray-400 px-2 py-3 mb-1 rounded'>
                            <p className={`${item.status === 'todo' ? `h-1 bg-orange-500 w-1/3 rounded` : null}`}></p>
                            <p className={`${item.status === 'inprogress' ? `h-1 bg-blue-500 w-1/3 rounded` : null}`}></p>
                            <p className={`${item.status === 'review' ? `h-1 bg-yellow-500 w-1/3 rounded` : null}`}></p>
                            <p className={`${item.status === 'done' ? `h-1 bg-pink-500 w-1/3 rounded` : null}`}></p>
                            
                            <div className='flex items-center'>
                                <RiMastodonLine />
                                <p>{item.title}</p>
                            </div>

                            <div className='flex items-center justify-between mt-2'>
                                {
                                    back ? <button 
                                    onClick={()=>statusHandler(item._id, back)}
                                    className='bg-orange-200 px-2 rounded flex items-center'>
                                    <BiLeftArrow />    
                                    Back</button> : null
                                }

                                {
                                    next ? <button
                                    onClick={()=>statusHandler(item._id, next)}
                                    className='bg-green-300 px-2 rounded flex items-center'>
                                        <BiRightArrow />
                                        Next</button> : null
                                }

                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Tasks