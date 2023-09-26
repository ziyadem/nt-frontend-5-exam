import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import HeaderMain from '../components/HeaderMain'


const Register = () => {
  let navigate=useNavigate();
  let tokenId=localStorage.getItem('token');
  useEffect(()=>{
    if(tokenId){ 
      navigate('/');
    }
  }, [])
  let [values,setValues]=useState({
    name:'',
    email:'',
    password:'',
    confirmPassword:'',
  })
  async function handleRegister(e){
    e.preventDefault();
    //validate
    if(values.password !== values.confirmPassword) return toast("passwords do not match", {type:'error' })
    //register
    let axiosData={
      'name':values.name,
      'email':values.email,
      'password':values.password
    }
    try {  
      let {data:token}=await axios.post('/users' , axiosData)
      console.log(token);
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
  console.log(12);
  return (
    <div>
      <HeaderMain/>
      <div className='container register'>
        <h2 className='devSignLogin'>Sign Up</h2>
        <div className='d-flex gap-3 mb-4'>  
          <span className="material-symbols-outlined display-6">person</span>
          <p className='fs-2'>Create Your Account</p>
        </div>
        <form onSubmit={handleRegister}>
          <input type="text" onChange={handelInputChange} value={values.name}  required min={1} name='name'  className='form-control mb-4' placeholder='Name'/>
          <input type="email" className='form-control' onChange={handelInputChange} name='email' value={values.email} required min={11} placeholder='Email Adres'/>
          <p className='emailparagrf'>This site uses Gravatar so if you want a profile image, use a Gravatar email</p>
          <input type="password" onChange={handelInputChange} name='password' value={values.password} className='form-control mb-4' required min={6} placeholder='Password'/>
          <input type="password" onChange={handelInputChange} name='confirmPassword' value={values.confirmPassword} className='form-control mb-4' required min={6} placeholder='Confirm Password'/>
          <button type='submit'  className=' signin text-white text-decoration-none mb-2'>Register</button>
        </form>
        <span className='d-flex'>
          <p>Already have an account?</p>
          <Link to='/login' className='text-decoration-none registerSignIn'>Sign In</Link>
        </span>

      </div>
    </div>
  )
}

export default Register
