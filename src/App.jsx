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
import TRules1 from './pages/GDWS/Rules'
import TOverview1 from './pages/GDWS/Overview'
import TDescription1 from './pages/GDWS/Description'
import TOverview2 from './pages/C101/Overview'
import TDescription2 from './pages/C101/Description'
import TRules2 from './pages/C101/Rules'
import TOverview3 from './pages/CodeComputing/Overview'
import TDescription3 from './pages/CodeComputing/Description'
import TRules3 from './pages/CodeComputing/Rules'

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
    path: '/c101',
    element: (
      <>
      <EventNavbar/>
      <TOverview2/>
      <TDescription2/>
      <TRules2/>
      <Footer/>
      </>
    )
  },

  {
    path: '/cccp',
    element: (
      <>
      <EventNavbar/>
      <TOverview3/>
      <TDescription3/>
      <TRules3/>
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