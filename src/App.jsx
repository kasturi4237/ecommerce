import React from 'react'
import { Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Collection from './pages/Collection'
import Contact from './pages/Contact'


import Navbar from './components/NavBar'
import Footer from './components/Footer'
import SearchBar from './components/searchBar'
import Product from './pages/Product'




const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[pvw]'>
       <Navbar />
       <SearchBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/collection' element={<Collection/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/product/:productId' element={<Product/>}/>
       
       

        

      </Routes>
      <Footer/>
      
    </div>
  )
}

export default App
