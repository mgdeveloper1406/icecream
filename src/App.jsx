import { Route, Routes, Navigate } from 'react-router-dom'
import Navbar from '@organisms/Navbar'
import Footer from '@organisms/Footer'
import Home from '@pages/Home'
import Recipes from '@pages/Recipes'
import Recipe from '@pages/Recipe'
import Blog from '@pages//Blog'
import About from '@pages/About'
import Contact from '@pages/Contact'
import { ToastProvider } from '@contexts/ToastContext'

import './App.scss'

const App = () => {
  return (
    <div className='App'>
      <ToastProvider>
        <Navbar />
        <Routes>
          <Route path='*' element={<Navigate to='/' />} />
          <Route path='/' element={<Home />} />
          <Route path='/recipes' element={<Recipes />} />
          <Route path='/recipe/:recipeId' element={<Recipe />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </ToastProvider>
    </div>
  )
}

export default App
