import React from 'react'
import { BrowserRouter , Routes, Route, Link } from 'react-router-dom'
import { logo} from './assets'
import { Home,Createpost } from './pages'


function App() {
  return (
   <BrowserRouter>
   <header className='w-full flex justify-between 
   items-center bg-white sm:px-8 px-4 py-4 border-b
    border-b-[#f2f5fa]'>
      <Link to="/">
        <img src={logo} alt="logo" className='w-28 object-contain'/>
      </Link>
      <Link to="/create-post" className='font-inter font-medium bg-[#6469ff] text-white 
      px-4 py-2 rounded-md' >
        Create Post
      </Link>


    </header>
    <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] main-h-[calc(100vh-73px)]'>
  <Routes>   
    <Route exact path="/" element={<Home/>} />
      <Route exact path="/create-post" element={<Createpost/>} /></Routes>
   
    </main>
   
   </BrowserRouter>
   
    )

  }


export default App
