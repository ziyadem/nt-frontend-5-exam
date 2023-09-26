import {Routes ,Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profiles from './pages/Profiles'
import Dashboard from './pages/Dashboard'
import Posts from './pages/Posts'
import CreateProfile from './pages/CreateProfile'
import Post from './pages/Post'
import Profile from './pages/Profile'
import EditProfile from './pages/EditProfile'
import AddEducation from './pages/AddEducation'
import AddExperience from './pages/AddExperience'

function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/profiles" element={<Profiles/>} />
      <Route path="/profile/:productId" element={<Profile/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/posts" element={<Posts/>} />
      <Route path="/create-profile" element={<CreateProfile/>} />
      <Route path="/posts/:postId" element={<Post/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/editProfile" element={<EditProfile/>}/>
      <Route path="/addEducation" element={<AddEducation/>} />
      <Route path="/addExperience" element={<AddExperience/>} />
     </Routes>
      
    </>
      )
    
}

export default App
