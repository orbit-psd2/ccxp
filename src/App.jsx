import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { motion } from 'framer-motion'
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
import NTOverview1 from './pages/DD/Overview'
import NTDescription1 from './pages/DD/Description'
import NTRules1 from './pages/DD/Rules'
import NTOverview2 from './pages/FO/Overview'
import NTDescription2 from './pages/FO/Description'
import NTRules2 from './pages/FO/Rules'
import NTOverview3 from './pages/WOTV/Overview'
import NTDescription3 from './pages/WOTV/Description'
import NTRules3 from './pages/WOTV/Rules'
import NTOverview4 from './pages/OM/Overview'
import NTDescription4 from './pages/OM/Description'
import NTRules4 from './pages/OM/Rules'
import NTOverview5 from './pages/GOBVID/Overview'
import NTDescription5 from './pages/GOBVID/Description'
import NTRules5 from './pages/GOBVID/Rules'
import NTOverview6 from './pages/CZZ/Overview'
import NTDescription6 from './pages/CZZ/Description'
import NTRules6 from './pages/CZZ/Rules'
import NTOverview7 from './pages/Nostalgia/Overview'
import NTDescription7 from './pages/Nostalgia/Description'
import NTRules7 from './pages/Nostalgia/Rules'
import ContactPage from './components/Contact'
import ManiaOverview from './pages/GameMania/ManiaOverview'
import ManiaDesc from './pages/GameMania/ManiaDescription'
import ManiaRules from './pages/GameMania/ManiaRules'
import CloudDesc from './pages/Cloudathon/Description'
import CloudOverview from './pages/Cloudathon/Overview'
import CloudRules from './pages/Cloudathon/Rules'
import PaymentPage from './components/PaymentPage'
import RecommendedEventsGameMania from './pages/GameMania/RecommendedEventsProps'
import RecommendedEventsC101 from './pages/C101/RecomendedEventsC101'
import RecommendedEventsCloudathon from './pages/Cloudathon/RecEventsCloudathon'
import RecommendedEventsCC from './pages/CodeComputing/RecEventsCC'
import RecommendedEventsCZ from './pages/CZZ/RecEventsCZ'
import RecommendedEventsDD from './pages/DD/RecEventsDD'
import RecommendedEventsFO from './pages/FO/RecEventsFO'
import RecommendedEventsGDWS from './pages/GDWS/RecEventsGDWS'
import RecommendedEventsGOB from './pages/GOBVID/RecEventsGOB'
import RecommendedEventsNOS from './pages/Nostalgia/RecEventsNOS'
import RecommendedEventsOM from './pages/OM/RecEventsOM'
import RecommendedEventsWOTV from './pages/WOTV/RecEventsWOTV'
import CloudConLearnMore from './components/CloudConLearnMore'
import PulseLearnMore from './components/PulseLearnMore'
import ImageCarousel from './components/Carousel'
import TeamPage from './components/Team'
import EventSpecificNavbar from './components/EventSpecificNav'
import NavbarTeam from './components/NavTeam'

const Layout = ({ children, useEventNavbar = false }) => (
  <>
    {useEventNavbar ? <EventNavbar /> : <Navbar />}
    <ScrollToTop />
    {children}
    <Footer />
  </>
);

const EventLayout = ({ children }) => (
  <Layout useEventNavbar={true}>
    {children}
  </Layout>
);



const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
      <Navbar/>
      <Hero/>
      <About/>
      <ImageCarousel/>
      <Events/>
      
      <Footer/>
      </>
    )
  },

  {
    path: '/contact',
    element: (
      <>
      <NavbarTeam/>
      <ContactPage/>
      <Footer/>
      </>
    )
  },

  {
    path: '/events',
    element: (
      <>
      <EventNavbar/>   
      <Events/>
      <Footer/>
      </>
    )
  },

  {
    path: '/gdws',
    element: (
      <>
      <EventSpecificNavbar/>
      <TOverview1/>
      <TDescription1/>
      <TRules1/>
      <RecommendedEventsGDWS/>
      <Footer/>
      </>
    )
  },

  {
    path: '/c101',
    element: (
      <>
      <EventSpecificNavbar/>
      <TOverview2/>
      <TDescription2/>
      <TRules2/>
      <RecommendedEventsC101/>
      <Footer/>
      </>
    )
  },

  {
    path: '/cccp',
    element: (
      <>
      <EventSpecificNavbar/>
      <TOverview3/>
      <TDescription3/>
      <TRules3/>
      <RecommendedEventsCC/>
      <Footer/>
      </>
    )
  },

  {
    path: '/dd',
    element: (
      <>
      <EventSpecificNavbar/>
      <NTOverview1/>
      <NTDescription1/>
      <NTRules1/>
      <RecommendedEventsDD/>
      <Footer/>
      </>
    )
  },

  {
    path: '/fo',
    element: (
      <>
      <EventSpecificNavbar/>
      <NTOverview2/>
      <NTDescription2/>
      <NTRules2/>
      <RecommendedEventsFO/>
      <Footer/>
      </>
    )
  },

  {
    path: '/wotv',
    element: (
      <>
      <EventSpecificNavbar/>
      <NTOverview3/>
      <NTDescription3/>
      <NTRules3/>
      <RecommendedEventsWOTV/>
      <Footer/>
      </>
    )
  },

  {
    path: '/om',
    element: (
      <>
      <EventSpecificNavbar/>
      <NTOverview4/>
      <NTDescription4/>
      <NTRules4/>
      <RecommendedEventsOM/>
      <Footer/>
      </>
    )
  },

  {
    path: '/gob',
    element: (
      <>
      <EventSpecificNavbar/>
      <NTOverview5/>
      <NTDescription5/>
      <NTRules5/>
      <RecommendedEventsGOB/>
      <Footer/>
      </>
    )
  },

  {
    path: '/cz',
    element: (
      <>
      <EventSpecificNavbar/>
      <NTOverview6/>
      <NTDescription6/>
      <NTRules6/>
      <RecommendedEventsCZ/>
      <Footer/>
      </>
    )
  },

  {
    path: '/nostalgia',
    element: (
      <>
      <EventSpecificNavbar/>
      <NTOverview7/>
      <NTDescription7/>
      <NTRules7/>
      <RecommendedEventsNOS/>
      <Footer/>
      </>
    )
  },

  {
    path: '/hackathon1',
    element: (
      <>
      <EventSpecificNavbar/>
      <ManiaOverview/>
      <ManiaDesc/>
      <ManiaRules/>
      <RecommendedEventsGameMania/>
      <Footer/>
      </>
    )
  },

  {
    path: '/hackathon2',
    element: (
      <>
      <EventSpecificNavbar/>
      <CloudOverview/>
      <CloudDesc/>
      <CloudRules/>
      <RecommendedEventsCloudathon/>
      <Footer/>
      </>
    )
  },
  {
    path: '/payment',
    element: (
      <>
      <PaymentPage/>
      </>
    )
  },

  {
    path: '/cclearnmore',
    element: (
      <>
      <EventNavbar/>
      <CloudConLearnMore/>
      <Footer/>
      </>
    )
  },

  {
    path: '/pulselearnmore',
    element: (
      <>
      <EventNavbar/>
      <PulseLearnMore/>
      <Footer/>
      </>
    )
  },

  {/* 
  {
    path: '/team',
    element: (
      <>
      <NavbarTeam/>   
      <TeamPage/>
      <Footer/>
      </>
    )
  },
  */}

])

const App = () => {
  return (

    <div className='min-h-screen w-full bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-violet-100 via-pink-500 to-zinc-900 bg-[length:400%_400%] animate-gradient'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App