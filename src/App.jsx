import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Component/Layout/Layout'
import Home from './Component/Pages/Home'
import SignInContaner from './Component/Pages/SignInContaner'

function App() {
  return (
    <>
     {/* <Layout> */}
      {/* <Home/> */}
     {/* </Layout> */}

     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth/signIn' element={<SignInContaner/>}/>
     </Routes>
    </>
  )
}

export default App
