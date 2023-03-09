import React from 'react'
import Middle from './Middle'
import Navbar from './Navbar'
import './Home.css'
import Center from './Center'

export default function Home() {
  return (
  <>
  <div className='navigation'>
<Navbar/>


  </div>
  <div className='center'>
    <Center/>
  </div>
  <div className='product'>
    <Middle/>
  </div>
  
  
  
  </>
  )
}
