import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Component/Layout/Layout'
import Home from './Component/Pages/Home'
import SignInContaner from './Component/Pages/SignInContaner'
import LogInContainer from './Component/Pages/LogInContainer'

function App() {
  return (
    <>
     {/* <Layout> */}
      {/* <Home/> */}
     {/* </Layout> */}

     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth/signIn' element={<SignInContaner/>}/>
        <Route path='/auth/logIn' element={<LogInContainer/>}/>
     </Routes>
    </>
  )
}

export default App
