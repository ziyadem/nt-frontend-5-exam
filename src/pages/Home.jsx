import React, { useEffect } from 'react'
import Header from '../components/HeaderHome'
import {Link, useNavigate} from 'react-router-dom'

const Home = () => {
  const navigate=useNavigate();
  let token =localStorage.getItem('token');
  useEffect(()=>{
    if(token){navigate("/dashboard")}
  },[])
  return (
    <div className='hero'>
      <Header/>
      <div className='hero-bg d-flex align-items-center  justify-content-center flex-column'>
        <h1 className='text-white fs-1'>Developer Connector</h1>
        <p className='text-white fs-3 text-center'>Create a developer profile/portfolio, share posts and get help from other developers</p>
        <span className='d-flex gap-1'>
          <Link to='/register' className=' signin text-white text-decoration-none'>Sign In</Link>
          <Link  to="/login"  className='login text-decoration-none'>Login</Link>
        </span>
        

      </div>
      
    </div>
  )
}

export default Home
