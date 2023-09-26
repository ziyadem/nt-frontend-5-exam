import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'

const HeaderMain = () => {
  let token =localStorage.getItem('token')
  let navigate=useNavigate()
  function handleLogOut(){
    console.log(123);
    localStorage.removeItem('token')
    toast ('delete token' , {type:'success'})
    console.log(45);
    return navigate('/login')

  }
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
      <li className={(token)? 'd-none' : 'd-block'}><Link to='/register' className='text-decoration-none fs-5'>Register</Link></li>
      <li className={(token)? 'd-none' : 'd-block'}><Link to='/login' className='text-decoration-none fs-5'>Login</Link></li>
      <li className={(token)? 'd-block' : 'd-none'}><Link to='/posts' className='text-decoration-none fs-5'>Posts</Link></li>
      <li className={(token)? 'd-block' : 'd-none'}><Link to='/dashboard' className='text-decoration-none fs-5 header-dashboard'><span class="material-symbols-outlined">person</span> Dashboard</Link></li>
      <li onClick={handleLogOut} className={(token)? 'd-block' : 'd-none'}><Link to='/login' className='text-decoration-none fs-5 header-logout'><span class="material-symbols-outlined">login</span>Logout</Link></li>
   
    </ul>
  </nav>
  
  
      </header>
  )
}

export default HeaderMain
