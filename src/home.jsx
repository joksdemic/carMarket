import { Button } from './components/ui/button'
import { SignInButton } from '@clerk/clerk-react'
import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Categories from './components/Categories'
import MostSearchedCar from './components/MostSearchedCar'

function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Categories/>
      <MostSearchedCar/>
    </div>
  )
}

export default Home