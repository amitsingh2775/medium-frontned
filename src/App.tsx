import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Blog from './pages/Blog'
import SingleBlog from './pages/SingleBlog'
import { Publish } from './pages/Publish'
import Profile from './pages/Profile'

function App() {
  
  return (
   
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Blog/>}/>
        <Route path='/blog/:id' element={<SingleBlog/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Signin/>}/>
        <Route path='/publish' element={<Publish/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
      </BrowserRouter>
   
  )
}

export default App
