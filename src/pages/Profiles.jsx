import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import HeaderMain from '../components/HeaderMain'
import axios from 'axios'



const Profiles = () => {

  let [dataProfiles, setProfiles] = useState([])
  console.log(dataProfiles);

  useEffect(() => {
    async function getP() {
      try {
        let { data } = await axios.get('/profile')
        setProfiles(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    getP()

  }, [])


  // console.log(data);
  // dataProfiles.map(e=>{
  //   console.log(e);

  //   })

  return (


    <>

      <HeaderMain />

      {(dataProfiles.length === 0) ?
        <div className='container d-flex justify-content-center mt-5'>
          <img src="/load.gif" alt="" />
        </div>
        :
        <section className='developers container p-3'>
          <h2 className='devSignLogin'>Developers</h2>
          <div className='d-flex gap-3 mb-3'>
            <span className="material-symbols-outlined display-5">groups</span>
            <p className='fs-2'> Browse and connect with developers</p>
          </div>
          {(dataProfiles) ?
              dataProfiles.map(e => {
                return  <div key={e._id} className='developer-card p-4 d-flex  mb-4'>
                <div className='d-flex gap-4 devImgCard'>
                  <div className='one-item'>
                    <img src={e.user.avatar} alt="" />
                  </div>
                  <div className='d-flex flex-column justify-content-center gap-1 devCardHero'>
                    <h3>{e.user.name}</h3>
                    <p>{e.status} at {e.company}</p>
                    <p>{e.location}</p>
                    <div>
                      <Link to={`/profile/${e.user._id}`} className=' signin text-white text-decoration-none '>View Profile</Link>
                    </div>
                  </div>
                </div>
                <div className=' skils-card'>
                  {
                    (e.skills[0]) ?  <div className='d-flex gap-2 skils'><span className="material-symbols-outlined fs-3 ">done</span><p>{e.skills[0]}</p></div>: <p></p>
                  }
                  {
                    (e.skills[1]) ?  <div className='d-flex gap-2 skils'><span className="material-symbols-outlined fs-3 ">done</span><p>{e.skills[1]}</p></div>: <p></p>
                  }
                   {
                    (e.skills[2]) ?  <div className='d-flex gap-2 skils'><span className="material-symbols-outlined fs-3 ">done</span><p>{e.skills[2]}</p></div>: <p></p>
                  }
                   {
                    (e.skills[3]) ?  <div className='d-flex gap-2 skils'><span className="material-symbols-outlined fs-3 ">done</span><p>{e.skills[3]}</p></div>: <p></p>
                  }
                  
                </div>
              </div>

              })
              :
              <p>hato</p>
          }
         
         
          {/* <div className='developer-card p-4 d-flex  mb-4'>
            <div className='d-flex gap-4 devImgCard'>
              <div className='one-item'>
                <img src="/profileImg.jpg" alt="" />
              </div>
              <div className='d-flex flex-column justify-content-center gap-1 devCardHero'>
                <h3>Egamberdiyev Alisherjon</h3>
                <p>Developer at Tribute</p>
                <p>Developer at Tribute</p>
                <div>
                  <Link to='/profile' className=' signin text-white text-decoration-none '>View Profile</Link>
                </div>
              </div>
            </div>
            <div className=' skils-card'>
              <div className='d-flex gap-2 skils'><span className="material-symbols-outlined fs-3 ">done</span><p>HTML</p></div>
              <div className='d-flex gap-2 skils'><span className="material-symbols-outlined fs-3 ">done</span><p>CSS</p></div>
              <div className='d-flex gap-2 skils'><span className="material-symbols-outlined fs-3 ">done</span><p>React</p></div>

            </div>
          </div>
          <div className='developer-card p-4 d-flex  mb-4'>
            <div className='d-flex gap-4 devImgCard'>
              <div className='one-item'>
                <img src="/profileImg.jpg" alt="" />
              </div>
              <div className='d-flex flex-column justify-content-center gap-1 devCardHero'>
                <h3>Egamberdiyev Alisherjon</h3>
                <p>Developer at Tribute</p>
                <p>Developer at Tribute</p>
                <div>
                  <Link to='/profile' className=' signin text-white text-decoration-none '>View Profile</Link>
                </div>
              </div>
            </div>
            <div className=' skils-card'>
              <div className='d-flex gap-2 skils'><span className="material-symbols-outlined fs-3 ">done</span><p>HTML</p></div>
              <div className='d-flex gap-2 skils'><span className="material-symbols-outlined fs-3 ">done</span><p>CSS</p></div>
              <div className='d-flex gap-2 skils'><span className="material-symbols-outlined fs-3 ">done</span><p>React</p></div>

            </div>
          </div> */}

        </section>

      }
    </>
  )
}

export default Profiles
