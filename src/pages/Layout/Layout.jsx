import React from 'react'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import Integration from '../Integartions/Integration'

const Layout = () => {
  return (
    <div className=''>
      <Header/>
      <div className='mt-5 flex gap-6'>
        <Sidebar/>

        <Integration/>
     

      </div>


        
    </div>
  )
}

export default Layout