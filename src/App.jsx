import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import CoursesPage from './pages/CoursesPage'
import WebinarsPage from './pages/WebinarsPage'
import ManifestoPage from './pages/ManifestoPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-grow'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<CoursesPage />} />
          <Route path='/webinars' element={<WebinarsPage />} />
          <Route path='/manifesto' element={<ManifestoPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
