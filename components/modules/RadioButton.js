import React from 'react'

function RadioButton({value, title, setStatus, status, type, label}) {
  return (
    <div className='rounded px-2 py-1 flex items-center'>
        <label htmlFor={title}>{title}</label>

        <input 
        id={title}
        type={type}
        value={value}
        checked={status === value}
        onChange={e=> setStatus(e.target.value)}
        className='mt-1 ml-1 border-none outline-none'
        />

    </div>
  )
}

export default RadioButton