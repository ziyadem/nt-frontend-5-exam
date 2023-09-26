import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/HeaderMain'
import { useState,useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
//api/profile/user/:user_id

const Profile = () => {

  let [dataProfiles, setProfiles] = useState([])
  // let [git, setGithub] = useState([])
  console.log(dataProfiles);
  const {productId}=useParams();

  useEffect(() => {
    async function getP() {
      try {
        let {data} = await axios.get(`/profile/user/${productId}`)
        setProfiles(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    getP()
  }, [])

    // if(dataProfiles?.githubusername){
    //   console.log('git',dataProfiles.githubusername);
    //   async function getGithub() {
    //     try {
    //       let github= await axios.get(`/profile/github/${dataProfiles.githubusername}`)
    //       setGithub(github)
    //       console.log(github);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   }
    //   getGithub()
    
    // }
    // console.log('dd',git);

  return (
    <>
      <Header/>
      {(dataProfiles.length===0)? 
          <div className='container d-flex justify-content-center mt-5'>
          <img src="/load.gif" alt="" />
        </div>
      :
      <section className="profile container py-3">
           <Link to='/profiles' className='networkLink text-dark text-decoration-none mb-3'>Back to Profiles</Link>
           <div className="profile-card mb-3 d-flex flex-column align-items-center p-5 ">
               <img src={dataProfiles?.user?.avatar} alt="profileimg" />
               <h2 className='text-center'>{dataProfiles?.user?.name}</h2>
               <p className='fs-2'>{dataProfiles?.status} at {dataProfiles.company}</p>
               <p className='fs-4'>{dataProfiles?.location}</p>
                <span className="fs-1 material-symbols-outlined "> language</span>
           </div>
           <div className='bio-skil'>
               <h2 className='text-center mb-4'>{dataProfiles?.user?.name} Bio</h2>
               <p className='text-center mb-4'>{dataProfiles.bio}</p>
               <hr />
               <h2 className='text-center bio'>Skill Set</h2>
               <div  className=' skils-card d-flex justify-content-center gap-3'>
                {
                  dataProfiles?.skills?.map((e)=>{
                  return  <div key={e} className='d-flex skils'><span class="material-symbols-outlined fs-3 ">done</span><p>{e}</p></div>
                       
                  })
                }
               </div>
           </div>
           <div className="e-e d-flex justify-content-between flex-wrap  mt-3">
            <div className='profil-education bio-skil mb-3'>
                <h2 className='bio'>Experience</h2>
                {(dataProfiles?.experience?.[0] ) ?
                <div>
                  <h3>{dataProfiles?.experience?.[0].company}</h3>
                  <p>{dataProfiles?.experience?.[0].from} - Now</p>
                  <p><strong>Position: </strong>{dataProfiles.experience?.[0].title}</p>
                  <p><strong>Location: </strong>{dataProfiles.experience?.[0].location}</p>
                  <p><strong>Description: </strong>{dataProfiles?.experience?.[0].description}</p>

                </div>
                :
                <h3>No experience credentials</h3>}
            </div>
            <div className="profil-experience bio-skil mb-3">
            <h2 className='bio'>Education</h2>
            {(dataProfiles?.education?.[0] ) ?
                <div>
                  <h3>{dataProfiles?.education?.[0].school}</h3>
                  <p>{dataProfiles?.education?.[0].to} - Now</p>
                  <p><strong>Fieldofstudy: </strong>{dataProfiles.education?.[0].fieldofstudy}</p>
                  <p><strong>School: </strong>{dataProfiles.education?.[0].school}</p>
                  <p><strong>Description: </strong>{dataProfiles?.education?.[0].description}</p>
                  <p><strong>degree: </strong>{dataProfiles?.education?.[0].degree}</p>

                </div>
                :
                <h3>No education credentials</h3>}
            </div>
           </div>
           <h2>Website: <a href={dataProfiles?.website} target='_blank'>{dataProfiles?.website}</a></h2>

        <div className='d-flex mb-5 gap-3 mt-5'>
            <a className='url-img'    href={dataProfiles?.social?.twitter}   target="_blank"><img src="/twiter.png" alt="" /></a>
            <a className='url-img'    href={dataProfiles?.social?.facebook}  target="_blank"><img src="/facebook.png" alt="" /></a>
            <a className='url-img'    href={dataProfiles?.social?.youtube}   target="_blank"><img src="/youtube.png" alt="" /></a>
            <a className='url-img'    href={dataProfiles?.social?.linkedin}  target="_blank"><img src="/linkedin.png" alt="" /></a>
            <a className='url-img'    href={dataProfiles?.social?.instagram} target="_blank"><img src="/insta.png" alt="" /></a>
            
        </div>
        {/* {(git.length!==0) ? git?.map(e=>{
          return   <div  className="profile-github my-3">
          <h2 className='bio'>Github Repos</h2>
          <div className='d-flex justify-content-between profil-github-card p-4'>
              <a className='bio h3 text-decoration-none'>{e?.name}</a>
              <div className='d-flex flex-column gap-2'>
                  <button className='btn'>stars:0</button>
                  <button className='bg-dark'>Watches:0</button>
                  <button className='text-dark'>Forks:0</button>
              </div>
          </div>
         </div>
          
        })
        :
        <p></p>
      } */}

      </section>

    }
    </>
    )
}

export default Profile
