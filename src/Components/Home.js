import React from 'react'
import Categories from './Categories'
import Ccd from './Ccd'
import Contact from './Contact'
import Testimaonials from './Testimaonials'

export default function Home() {
  return (
    <div>
      {/* these components come together to form the  home page */}
        <Ccd/>
        <Categories/>
        <Testimaonials/>
        <Contact/>
    </div>
  )
}
