import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className='bg-white shadow fixed w-full z-50'>
      <div className='max-w-6xl mx-auto px-4 py-4 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <img src='/logo1.jpg' alt='logo' className='w-14 h-14 rounded-md' />
          <div className='text-xl font-bold text-sky-700'>LexanaVeriLex</div>
        </div>
        <nav className='hidden md:flex gap-6 items-center'>
          <NavLink to='/' className={({ isActive }) => isActive ? 'text-sky-600 font-semibold' : 'text-slate-700'}>Home</NavLink>
          <NavLink to='/courses' className={({ isActive }) => isActive ? 'text-sky-600 font-semibold' : 'text-slate-700'}>Courses</NavLink>
          <NavLink to='/webinars' className={({ isActive }) => isActive ? 'text-sky-600 font-semibold' : 'text-slate-700'}>Webinars</NavLink>
          <NavLink to='/manifesto' className={({ isActive }) => isActive ? 'text-sky-600 font-semibold' : 'text-slate-700'}>Manifesto</NavLink>
        </nav>
        <div className='hidden md:flex items-center gap-4'>
          <div
            className='text-sky-600 font-semibold hover:underline cursor-pointer'
            onClick={() => window.open('tel:+919569835188')}
          >
            +91 9569835188
          </div>
          <Link to='/contact' className='bg-sky-600 text-white px-4 py-2 rounded-md'>Contact Us</Link>
        </div>
        <div className='md:hidden'>
          {/* Simple mobile menu - route links stack */}
          <details className='relative'>
            <summary className='cursor-pointer px-3 py-2 bg-sky-50 rounded-md'>☰</summary>
            <div className='absolute right-0 mt-2 bg-white shadow p-3 rounded-md flex flex-col gap-2 w-48'>
              <Link to='/'>Home</Link>
              <Link to='/courses'>Courses</Link>
              <Link to='/webinars'>Webinars</Link>
              <Link to='/manifesto'>Manifesto</Link>
              <Link to='/contact'>Contact</Link>
            </div>
          </details>
        </div>
      </div>
    </header>
  )
}
