import React, { useEffect,useState } from 'react'
import Header from '../components/HeaderMain'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'


const Dashboard = () => {
  let location =useLocation()
  console.log('LOCATION',location);
  const [name, setName] = useState();
  const [exp, setExperience] = useState();
  const [edu, setEducation] = useState();
  const [erorProfil, setErrorProfil] = useState(true);
  let navigate=useNavigate()
  let token=localStorage.getItem('token')
  useEffect(() => {
    if(!token){
     return navigate('/login')
    }
    async function getMe() {
      try {
        let {data } = await axios.get("/auth");
        setName(data.name);
     
      } catch (error) {
        toast('turn on user information' , {type:'error'})
      }
    }
    getMe();
    async function getCreateProfil() {
      try {
        let data  = await axios.get("/profile/me");
        console.log(data);
        setExperience(data.data);
        setEducation(data.data);  
        setErrorProfil(false);
      } catch (error) {
        setErrorProfil(true);
      }
    }
    getCreateProfil();
  }, []);
  function deleteExperience(e){
   let  k=e.target.value;
    console.log(k);
    async function delE(){
      try {
        let data=await axios.delete(`/profile/experience/${k}`)
        setExperience(data.data) 
         
      } catch (error) {
        console.log(error);
      }
    }
    delE()
    async function delEl(){
      try {
        let data=await axios.delete(`/profile/education/${k}`)  
        setEducation(data.data)  
      } catch (error) {
        console.log(error); 
      }
    }
    delEl()
    
  }
  function deleteAccount(){
    alert('Are you sure? This can NOT be undone!');
    async function deleteA(){
       try {
        axios.delete('/profile')
        toast("delete Account", {type:'success'})
        localStorage.removeItem('token')
        navigate('/login');
       } catch (error) {
        toast("delete Account error", {type:'error'})              
       }
    }
    deleteA()
  }

  return (
    <>
      <Header/>
      <section className="dashboard container">
        <h2 className='devSignLogin'>Dashboard</h2>
        <div className='d-flex gap-3 mb-1'>  
          <span className="material-symbols-outlined display-6">person</span>
          <p className='fs-2'>Welcom {name}</p>
        </div>
        {(erorProfil)? 
        <div>
          <p>You have not yet setup a profile, please add some info</p>
          <Link to='/create-profile' className=' signin text-white text-decoration-none'>Create Profile</Link>
        </div>
        :
        <div>
          <div className='d-flex gap-3 my-3'>
          <div className='d-flex'>
            <Link to='/editProfile' className='editProfile p text-decoration-none d-flex align-items-center '><img src="/edit.png" alt="" />Edit Profile</Link>
          </div>
          <div className='d-flex'>
            <Link to='/addExperience' className='editProfile p text-decoration-none d-flex align-items-center '><img src="/experience.webp" alt="" />Add Experience</Link>
          </div>
          <div className='d-flex'>
            <Link to='/addEducation' className='editProfile p text-decoration-none d-flex align-items-center '><img src="/education.png" alt="" />Add Education</Link>
          </div>
      </div>

        <h2 className='my-4' >Experience Credentials</h2>
        <div className="d-flex gap-1 ">
        <button className='editProfile'>Company</button>
        <button className='editProfile'>Title</button>
        <button className='editProfile'>Years</button>
        </div>
        {exp?.experience?.map(e=>{
        return <div key={e._id} className="d-flex gap-1 mt-2">
        <button className='editProfile'>{e.company}</button>
        <button className='editProfile'>{e.title}</button>
        <button className='editProfile'>{e.from[2]}{e.from[3]}/{e.from[5]}{e.from[6]}/{e.from[8]}{e.from[9]}-Now</button>
        <button onClick={(e)=>deleteExperience(e)} className='editProfile bg-danger text-white' value={e._id}>Delete</button>
        </div>
        })}
        <h2 className='my-4' >Education Credentials</h2>
        <div className="d-flex gap-1 ">
        <button className='editProfile'>School</button>
        <button className='editProfile'>Degree</button>
        <button className='editProfile'>Years</button>
        </div>

       {edu?.education?.map(e=>{
        return <div key={e._id} className="d-flex gap-1 mt-2">
        <button className='editProfile'>{e.school}</button>
        <button className='editProfile'>{e.degree}</button>
        {/* <button className='editProfile'>{e.fieldofstudy}</button> */}
        <button className='editProfile'>{e.from[2]}{e.from[3]}/{e.from[5]}{e.from[6]}/{e.from[8]}{e.from[9]}-Now</button>
        <button onClick={(e)=>deleteExperience(e)} className='editProfile bg-danger text-white' value={e._id}>Delete</button>
        </div>
        })}
       
        <div className="d-flex">
        <Link onClick={deleteAccount} className='editProfile text-decoration-none d-flex align-items-center my-3 bg-danger text-white'><span className="material-symbols-outlined">portrait_lighting_off</span>Delete My Account</Link>

        </div>

        </div>
        
        }
         {/* "/editProfile" element={<EditProfile/>}/>
      <Route path="/addEducation" element={<AddEducation/>} />
      <Route path="/addExperience"  */}


      </section>
    </>
  )
}

export default Dashboard
