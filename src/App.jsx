import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import ChiefGuest from './components/ChiefGuest'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
      <Navbar/>
      <Hero/>
      <About/>
      <ChiefGuest/>
      </>
    )
  }
])

const App = () => {
  return (

    <div className='bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-[#ffe4e6]  to-[#ccfbf1]'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App