import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className='headerstiky'>
  <nav className='container d-flex justify-content-between align-items-center py-1 header-nav'>
   <Link to='/' className='text-decoration-none d-flex align-items-center'>
    <span class="material-symbols-outlined display-4">
    code
    </span>
    <h2> DevConnector</h2>   
   </Link>

  <ul className='d-flex gap-3 align-items-center m-0 nav-right'>
    <li><Link to='/profiles' className='text-decoration-none fs-5'>Developers</Link></li>
    <li><Link to='/register' className='text-decoration-none fs-5'>Register</Link></li>
    <li><Link to='/login' className='text-decoration-none fs-5'>Login</Link></li>
 
  </ul>
</nav>


    </header>
  )
}

export default Header

