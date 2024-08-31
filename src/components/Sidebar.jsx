import React from 'react';
import { MdOutlineDashboard } from "react-icons/md";
import { VscChecklist } from "react-icons/vsc";
import { LuUserPlus2 } from "react-icons/lu";
import { CiGlobe } from "react-icons/ci";
import { ImProfile } from "react-icons/im";
function Sidebar() {
    return (
        <div className='sidebar'>
          <h2>EasyDash</h2>
          <ul>
            <li><MdOutlineDashboard /> Dashboard</li>
            <li><VscChecklist /> Orders</li>
            <li><LuUserPlus2 /> Customer</li>
            <li><CiGlobe /> Website</li>
            <li className='selected'><ImProfile /> users</li>
          </ul>
           
        </div>
    )
}
export default Sidebar