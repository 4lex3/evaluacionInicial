import React from 'react'

interface Props {
    text: string;
}



function Link(props: Props) {
  return (
    <a className='text-white font-bold hover:text-gray-300 m-1'>{props.text}</a>
  )
}

export default Link
