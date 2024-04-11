import React from 'react'
import NavbarX from './Navbar'
import ImgX from './Img'
import Info from './Info'
import Reclutamient from './Reclutamient'
import Asosiation from './Asosiation'
import Footer from './Footer'
import './FirstSection.css'


function FirstSection() {
  return (
    <div className='containerHome'>
    <NavbarX/>
    <ImgX/>
    <Info/>
    <Reclutamient/>
    <Asosiation/>
    <Footer/>


    </div>
  )
}

export default FirstSection