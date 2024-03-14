import React from 'react';
import './dashboard.css';
import dashboardData from '../data/data';
import { CiSettings } from "react-icons/ci";


const Dashboard = () => {
  return (
    <div className='flex flex-col gap-5 w-full dash_height'>
      {dashboardData.map(item => (
        <div className='dashboard_box' key={item.id}>
          <div className='flex items-center gap-5'>
            <img src={item.image} alt='' width={40} height={40} className='svg_bg' />
            <div className='flex flex-col gap-1'>
              <h1 className='header_text'>{item.HeaderText}</h1>
              <p className='integrtae_paragraph'>{item.Paragraph}</p>
            </div>
          </div>
          <div className='' >
    
            <button className='flex gap-2 items-center btn_dashboard text-white text-sm'> <CiSettings />Manage</button>
          </div>
        </div>
      ))}



    </div>
  );
};

export default Dashboard;
