import React from 'react'
import Link from './Link'
import { Button } from './Button';





function NavBar() {
  return (
    <div className='w-screen bg-sky-600 flex items-center justify-around p-1 '>

        <img src="https://statics.soniccdn.com/images/logo-new.png"
         className='w-40' />

        <Link text='Texto1'/>
        <Link text='Texto1'/>
        <Link text='Texto1'/>
        <Link text='Texto1'/>
      
        <Button text='Iniciar'/>
        <Button text='Registrarse'/>
    </div>
  )
}

export default NavBar
