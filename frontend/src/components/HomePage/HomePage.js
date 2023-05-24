import React, { useEffect,useState } from 'react'
import InfoCardWrapper from './Dashboard/InfoCardWrapper'
import Sidebar from './Sidebar/Sidebar'
import PieChart from './Card/Pie'
import Activity from './Card/Activity'
import Schedule from './Card/Schedule'
import "./homepage.css"
import { useNavigate } from 'react-router-dom'
import {FiMenu,FiLogOut} from 'react-icons/fi'
function HomePage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const locuser = localStorage.getItem('email');
    if(locuser){
      setUser(locuser);
    }else{
      navigate('/signin')
    }
  },[user,navigate])
  return (
    <div className='p-12 flex justify-between bg-gray-100 align-cneter'>
      <Sidebar />
      <div className='w-10/12 pl-12 border-3 dashboard-padding align-cneter' >
          <div className='w-full h-fit flex justify-between '>
              <div className='flex h-fit w-fit'>
                <FiMenu className='menu-icon hidden'/>
              <div className='text-4xl font-bold ml-3'>DashBoard</div>
              </div>
              <div className='flex h-fit '>
                <div className='mr-2 mt-3 text-sm  text-gray-500 h-fit diable-user' >{user}</div>
                <FiLogOut onClick={() => {localStorage.clear();setUser('')}} className="w-5 h-5 mt-2"/>
              </div>
             </div>
      <InfoCardWrapper className = 'h-3/6' />
      <Activity/>
      <div className='flex justify-around w-full pie-schedule-flex'>
        <div className='w-1/2 pr-5 full-width'><PieChart/></div>
        <div className='w-1/2 pl-5 full-width'><Schedule/></div>
        </div>
      </div>
      </div>
    
  )
}

export default HomePage