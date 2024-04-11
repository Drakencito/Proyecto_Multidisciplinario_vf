import React from 'react'
import cfe from '../assets/cfe.jpg'
import acciona from '../assets/acciona.jpg'
import '../components/Styles.atoms.css'


function Asosiation() {
  return (
    <div className='asociation'>
    <h1 className='tittle' >ASOCIADOS</h1>
    <div className='imgAsociados'>
    <img src={cfe} className='imgEmpres'/>
    <img src={acciona} className='imgEmpres'/>

    </div>
   




    </div>
  )
}

export default Asosiation