
import './App.css'
import {BrowserRouter , Routes ,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
function App() {

  const routes = (
    <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
  )

  return (
    <>
      {routes}
    </>
  )
}

export default App
