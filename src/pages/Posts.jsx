import React from 'react'
import Header from '../components/HeaderMain'
import {Link} from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useRef } from 'react'


const Posts = () => {
    let [values,setValues]=useState({
      text:'',
    })
  let [posts, setPost] = useState([])
  let [myPost, setMyPost] = useState('')
  let [userId, setUser] = useState('')
  useEffect(() => {
    async function getMe() {
      try {
        let {data } = await axios.get("/auth");
        setUser(data._id);
      } catch (error) {
        toast('turn on user information' , {type:'error'})
      }
    }
    getMe();

  }, []);

  useEffect(() => {
    async function getPosts() {
      try {
        let {data} = await axios.get('/posts')
        setPost(data);
        console.log(data);
      } catch (error) {
        toast('post error', {type:'error'})
      }
    }
    getPosts()

  }, [])
  function textAreaChange(e){
    setValues(()=>({
      [e.target.name]:e.target.value,
    }));
  
  }
  function handleNewPost(){
    async function getPostsNew() {
      try {
        let {data }= await axios.post('/posts',values)
        // console.log( 'tata',data);
        toast('post create' , {type:'success'})
        setMyPost(data);
      } catch (error) {
        toast('post error' , {type:'error'})
      }
    }
    getPostsNew()
  }
  function deletePost(e){
    console.log(67);
    let s=e.target?.name;
    console.log(s);
    console.log(e.target?.value);
    console.log(e.target?.name);
  }
  return (
    <>
        <Header/>
        {
          (posts.length===0)?
          <div className='container d-flex justify-content-center mt-5'>
          <img src="/load.gif" alt="" />
        </div>
        :

        <section className='posts container'>
        <h2 className='devSignLogin'>Posts</h2>
        <div className='d-flex gap-3 mb-2'>  
          <span className="material-symbols-outlined display-5">person</span>
          <p className='fs-2'> Welcome to the community</p>
        </div>
        <p className='posts-say mb-4'> Say Something...</p>
        <div className="form-floating ">
        <textarea onChange={textAreaChange} value={values.text} name='text'   placeholder="Create a post"  rows="4" cols="50" className='d-flex w-100'></textarea>      
        </div>
        <button onClick={handleNewPost} className='mt-3 posts-submit mb-5'>Submit</button>

        { posts?.map((e)=>{
        return   <div key={e._id} className='d-flex gap-4 postImgCard p-2 mb-3'>
        <div className='one-item'>
          <Link to={`/profile/${e.user}`}><img src={e.avatar} alt="" /> </Link>
          
          <h5 className='posts-name text-center'>{e.name}</h5>
        </div>
        <div className='d-flex flex-column justify-content-between gap-1 devCardHero mt-2'>
            <p className='fs-4 mt-4'>{e.text}</p>
            <div>
            <p className='emailparagrf p-0 m-0 mb-4'>Posted on   {e.date[5]}{e.date[6]}/{e.date[8]}{e.date[9]}/{e.date[2]}{e.date[3]}</p>
            <div>
                <button className='networkLink me-2 '><img src="/zor.png" className='zor' alt="" />{(e.likes.length===0)? '' : e.likes.length}</button>
                <button className='networkLink me-2'><img src="/yomon.svg" className='yomon' alt="" /></button>
                <Link to={`/posts/${e._id}`} className=' signin text-white text-decoration-none me-2'>Discussion</Link>
                <button onClick={(e)=>deletePost(e)} value={e._id} name={e._id} className={ (e.user===userId)? 'd=block networkLink px-3 py-2 me-2 bg-danger text-white mt-3' : 'd-none networkLink px-3 py-2 me-2 bg-danger text-white mt-3'} ><span className="material-symbols-outlined">close</span></button>
            </div>

            </div>
        </div>
    </div>
         
        
        // <div className='d-flex gap-4 postImgCard p-2 mb-3'>
        //     <div className='one-item'>
        //     <Link to={`/posts/${e._id}`} className='post-img'><img src={e.avatar} alt="" /> </Link>
        //       <h5 className='posts-name text-center'>{e.name}</h5>
        //     </div>
        //     <div className='d-flex flex-column justify-content-between gap-1 devCardHero mt-2'>
        //         <p>{e.text}</p>
        //         <div>
        //         <p className='emailparagrf p-0 m-0'>Develope  {e.date}</p>
        //         <div>
        //             <button className='networkLink me-2 '><img src="/zor.png" className='zor' alt="" />1</button>
        //             <button className='networkLink me-2'><img src="/yomon.svg" className='yomon' alt="" /></button>
        //         <Link to={`/posts/${e._id}`} className=' signin text-white text-decoration-none me-2'>Discussion</Link>
               
        //         </div>

        //         </div>
        //     </div>
        // </div>

        
        
      
    })
 }
 
        {/* <div className='d-flex gap-4 postImgCard p-2 mb-3'>
            <div className='one-item'>
              <img src="/profileImg.jpg" alt="" />
              <h5 className='posts-name text-center'>Egamber</h5>
            </div>
            <div className='d-flex flex-column justify-content-between gap-1 devCardHero mt-2'>
                <p>Developer at Tribute</p>
                <div>
                <p className='emailparagrf p-0 m-0'>Develope  12/12/23</p>
                <div>
                    <button className='networkLink me-2 '><img src="/zor.png" className='zor' alt="" />1</button>
                    <button className='networkLink me-2'><img src="/yomon.svg" className='yomon' alt="" /></button>
                    <Link to='/discussion' className=' signin text-white text-decoration-none me-2'>Discussion</Link>
                
                </div>

                </div>
            </div>
        </div>
        <div className='d-flex gap-4 postImgCard p-2 mb-3'>
            <div className='one-item'>
              <img src="/profileImg.jpg" alt="" />
              <h5 className='posts-name text-center'>Egamber</h5>
            </div>
            <div className='d-flex flex-column justify-content-between gap-1 devCardHero mt-2'>
                <p>Developer at Tribute</p>
                <div>
                <p className='emailparagrf p-0 m-0'>Develope  12/12/23</p>
                <div>
                    <button className='networkLink me-2 '><img src="/zor.png" className='zor' alt="" />1</button>
                    <button className='networkLink me-2'><img src="/yomon.svg" className='yomon' alt="" /></button>
                <Link to='/discussion' className=' signin text-white text-decoration-none me-2'>Discussion</Link>
                
                </div>

                </div>
            </div>
        </div>  */}
        </section>
        }
      
    </>
  )
}

export default Posts
