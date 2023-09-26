import React from 'react'
import {useEffect,useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import HeaderMain from '../components/HeaderMain'




const Login = () => {
  let navigate=useNavigate();
  let tokenId=localStorage.getItem('token');
  useEffect(()=>{
    if(tokenId){ 
      navigate('/');
    }
  }, [])

  let [values,setValues]=useState({
    email:'',
    password:'',
  })
  async function handleLogin(e){
    e.preventDefault();
    //register
    try {  
      let {data:token}=await axios.post('/auth' , values)
      localStorage.setItem("token" ,token.token);
      axios.defaults.headers.common['x-auth-token']=token.token;
      toast('user created successfuly' , {type:'success'})
      navigate('/dashboard')
    } catch (error) { 
      toast(error.response.data.errors[0].msg, {type:'error'})
    }
 
  }
  function handelInputChange(e){
    setValues(oldV=>({
      ...oldV,
      [e.target.name]:e.target.value,
    }));
  }
 
  return (
    <div>
      <HeaderMain/>
      <div className='container register'>
        <h2 className='devSignLogin'>Sign In</h2>
        <div className='d-flex gap-3 mb-4'>  
          <span className="material-symbols-outlined display-6">person</span>
          <p className='fs-2'>Sign Into Your Account</p>
        </div>
        <form onSubmit={handleLogin}>
          <input type="email" onChange={ handelInputChange} value={values.email} name='email' className='form-control mb-4' placeholder='Email Adres' required/>
          <input type="password" onChange={ handelInputChange} value={values.password}  name='password' className='form-control mb-4' placeholder='Password'  required/>
          <button type='submit' className=' signin text-white text-decoration-none mb-2'>Login</button>
        </form>
        <span className='d-flex'>
          <p>Don't have an account?</p>
          <Link to='/register' className='text-decoration-none registerSignIn'>Sign Un</Link>
        </span>

      </div>
    </div>
  )
}

export default Login
