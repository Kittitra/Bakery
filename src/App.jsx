import { useState } from 'react'
import Hero from './components/Hero'
import Profile from './components/Profile'
import Comments from './components/Comments'
import Address from './components/Address'
import Footer from './components/Footer'
import Nav from './components/Nav'

function App() {
  return (
    <main className=' relative min-h-screen w-screen overflow-x-hidden'>
      <Nav />
      <Hero />
      <Profile />
      <Comments />
      <Address />
      <Footer />
    </main>
  )
}

export default App
