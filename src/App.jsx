import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Component/Layout/Layout'
import Home from './Component/Pages/Home'

function App() {
  return (
    <>
     {/* <Layout> */}
      {/* <Home/> */}
     {/* </Layout> */}

     <Routes>
        <Route path='/' element={<Home/>}/>
     </Routes>
    </>
  )
}

export default App
