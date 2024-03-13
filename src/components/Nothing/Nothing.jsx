import React from 'react'
import Nothngtoshow from './arcticons_nothing-x.png'
import './Nothing.css'

const Nothing = () => {
  return (
    <div className='flex flex-col items-center justify-center Nothing'>
        <img src={Nothngtoshow} alt='nothing to show'/>

        <p className='text-white text-base font-light'>Nothing to Show</p>




    </div>
  )
}

export default Nothing