import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { routes } from '../utils/routes'


const Navbar = () => {

  const navigate = useNavigate()

  return (
    <div className='navbar'>
        <div className='links'>
            <h4 onClick={() => navigate(-1)}>↩Back</h4>
            <Link to={routes.home}><h4 className='link'>Home</h4></Link>
            <Link to={routes.contact}><h4 className='link'>Contacto</h4></Link>
            
        </div>
        <input className='search' type="text" />
    </div>
  )
}

export default Navbar