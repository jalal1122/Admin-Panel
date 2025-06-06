import React from 'react'
import { MdDashboard, MdShoppingCart, MdDeliveryDining, MdRestaurant, MdBarChart, MdSettings } from 'react-icons/md';

const Sidebar = () => {
    // Sidebar li style to avoid repetitions
    const li_Styles = 'flex items-center gap-1 '


  return (
    // Sidebar Div
    <div className='w-1/8 h-screen border border-black'>
        {/* SideBar elements */}
      <ul className='flex flex-col gap-5 p-5'>
        {/* li's for sidebar with react icons */}
        <li className={li_Styles}><MdDashboard /> Dashboard</li>
        <li className={li_Styles}><MdShoppingCart /> User Order</li>
        <li className={li_Styles}><MdDeliveryDining /> Riders</li>
        <li className={li_Styles}><MdRestaurant /> Resturants</li>
        <li className={li_Styles}><MdBarChart /> Reports</li>
        <li className={li_Styles}><MdSettings /> Settings</li>
      </ul>
    </div>
  )
}

export default Sidebar
