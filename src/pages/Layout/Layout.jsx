import React from 'react'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import Integration from '../Integartions/Integration'
import './Layout.css'

const Layout = () => {
  return (
    <div className=''>
      <Header/>
      <div className='mt-5 flex gap-6  medium  '>
        <Sidebar className=''/>

        <Integration/>
     

      </div>


        
    </div>
  )
}

export default Layout