import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import ChiefGuest from './components/ChiefGuest'
import Events from './components/Events'
import Footer from './components/Footer'
import Sponsor from './components/Sponsor'
import EventNavbar from './components/EventNav'
import CloudInnovatorsOverview from './pages/CI/CloudInnovators'
import CloudInnovatorsDescription from './pages/CI/CIDescription'
import CloudInnovatorsRules from './pages/CI/CIRules'
import TRules1 from './pages/GDWS/Rules'
import TOverview1 from './pages/GDWS/Overview'
import TDescription1 from './pages/GDWS/Description'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
      <Navbar/>
      <Hero/>
      <About/>
      <Events/>
      <Sponsor/>
      <Footer/>
      </>
    )
  },
  {
    path: '/events',
    element: (
      <>
      <Navbar/>   
      <Events/>
      <Footer/>
      </>
    )
  },

  {
    path: '/gdws',
    element: (
      <>
      <EventNavbar/>
      <TOverview1/>
      <TDescription1/>
      <TRules1/>
      <Footer/>
      </>
    )
  },

  {
    path: '/ci',
    element: (
      <>
      <EventNavbar/>
      <CloudInnovatorsOverview/>
      <CloudInnovatorsDescription/>
      <CloudInnovatorsRules/>
      <Footer/>
      </>
    )
  },
])

const App = () => {
  return (

    <div className='bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-[#ffe4e6]  to-[#ccfbf1]'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App