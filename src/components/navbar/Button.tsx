import React from 'react'

interface props {
    text: string;
}

export function Button(props: props) {



  return (
    <button className='bg-sky-700 text-center p-1 rounded hover:bg-blue-900 m-1 font-bold text-white border-none'>
        {props.text}
    </button>
  )
}

