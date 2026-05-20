import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import Blog from './pages/Blogs'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />}/>
        <Route path='/blogs' element={<Blog />}/>
        <Route path='/' element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
