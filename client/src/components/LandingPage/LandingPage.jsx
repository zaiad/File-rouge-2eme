import React from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import HeadlineCards from './HeadlineCards/HeadlineCards'
import Products from './Products/Products'

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Products />
    </div>
  )
}

export default LandingPage