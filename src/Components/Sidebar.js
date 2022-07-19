import React from 'react';
import {Link} from 'react-router-dom';


function Sidebar() {
  return <>
     <div>
           {/* <!-- Sidebar --> */}
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0"/>

            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
            <i className="fas fa-fw fa-tachometer-alt"></i>
               <Link to='/Dashboard'><span style={{"color":"white"}}>Dashboard</span></Link>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider"/>

            {/* <!-- Heading --> */}
            <div className="sidebar-heading">
                Interface
            </div>

            {/* <!-- Nav Item - Pages Collapse Menu --> */}
            <li className="nav-item">
                <div className="nav-link collapsed" href="#!" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog"></i>
                    <Link to='/dashboard'><span style={{"color":"white"}}>Components</span></Link>
                </div>
                <div className='nav-link collapsed'>
                    <i className='fas fa-fw fa-cog'></i>
                    <Link to="/createstudent"><span style={{"color":"white"}}>CreateStudent</span></Link>
                    
                </div>
            </li>

        

        </ul>
        {/* <!-- End of Sidebar --></hr> */}
        </div> 
  </>
}

export default Sidebar