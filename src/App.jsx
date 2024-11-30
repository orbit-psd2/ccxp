import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import ChiefGuest from './components/ChiefGuest'
import Events from './components/Events'
import Footer from './components/Footer'
import Sponsor from './components/Sponsor'
import EventOverview from './pages/CCWS/CCWSoverview'
import EventNavbar from './components/EventNav'

import CloudInnovatorsOverview from './pages/CI/CloudInnovators'
import EventDescription from './pages/CCWS/EventDescription'
import EventRules from './pages/CCWS/Eventrules'
import CloudInnovatorsDescription from './pages/CI/CIDescription'
import CloudInnovatorsRules from './pages/CI/CIRules'

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
    path: '/ccws',
    element: (
      <>
      <EventNavbar/>
      <EventOverview/>
      <EventDescription/>
      <EventRules/>
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