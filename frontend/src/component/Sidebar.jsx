import React, { useState } from "react";
import "../css/sidebar.css";
import "../css/home.css"
import { Link } from "react-router-dom";

export default function Sidebar() {
 
 

  return (
    <div className="">

    
    <nav className="sidebar  shadow p-3 mb-5 bg-dark rounded" style={{width:"270px"}}>
   
      <div>
        <header className="">
          <div className="image-text">
            <span className="image">
           
            </span>
            <div className="text logo-text ">
              <span className="sidebar-title text-uppercase text-truncate app-brand-text demo menu-text fw-bold ms-2 fs-1 " style={{color:"white"}}>
                PMS
              </span>
            </div>
          </div>
        </header>
        <hr/>

        <div>
          <div className="menu " style={{marginTop:"-20px"}}>
            <ul >

              <li className="home mb-4 mt-4 " >
                <a className="d-inline-flex align-items-center rounded border-0 collapsed d-flex p-2">
                  <i className="menu-icon tf-icons bx bx-home-circle " style={{marginLeft:"-60px",color:"white"}} />
                  <div className=" " data-i18n="Dashboard" style={{paddingLeft:"20px",color:"white"}} >
                    Home
                  </div>
                </a>
              </li>

               <Link to="/addusers" style={{ textDecoration: 'none', color: 'inherit' }}>
              <li className="home mb-4">
                <div>
                  <div className="d-inline-flex align-items-center d-flex p-2">
                   <i class='bx bxs-user-plus ' style={{marginLeft:"-20px",color:"white"}}></i>   
                    <div className="text-truncate ml-3 mx-2" data-i18n="Employee" style={{paddingLeft:"12px",color:"white"}}>
                      Add Users
                      <i />
                    </div>
                  </div>
                </div>
              </li>
              </Link>

              <Link to="/viewuser" style={{ textDecoration: 'none', color: 'inherit' }}>
              <li className="home mb-4">
                <div>
                  <div className="d-inline-flex align-items-center d-flex p-2">
                   <i class='bx bxs-group' style={{marginLeft:"-20px",color:"white"}}></i>   
                    <div className="text-truncate ml-3 mx-2" data-i18n="Employee" style={{paddingLeft:"12px",color:"white"}}>
                      View Users
                      <i />
                    </div>
                  </div>
                </div>
              </li>
              </Link>

             <Link to="/addmarks" style={{textDecoration:"none" , color:"inherit"}}>
              <li className="home mb-4">
                <div>
                  <div className="d-inline-flex align-items-center d-flex p-2">
                    <i className="menu-icon tf-icons bx bx-book" style={{marginLeft:"-70px",color:"white"}}></i>
                    <div className="text-truncate ml-3" data-i18n="Employee" style={{paddingLeft:"12px",color:"white"}}>
                     Marks
                    </div>
                  </div>
                </div>
              </li>
              </Link>

              
           <Link to="/add-presentation" style={{textDecoration:"none" , color:"inherit"}}>
              <li className="home mb-4">
                <div>
                  <div className="d-inline-flex align-items-center d-flex p-2">
                  <i className='bx bx-slideshow' style={{marginLeft:"-10px",color:"white"}}></i>   
                 <div className="text-truncate ml-3  mx-2" data-i18n="Employee" style={{paddingLeft:"12px",color:"white"}}>
                      Presentation
                    </div>
                  </div>
                </div>
              </li>
              </Link>

             
            <Link to="/rubrics" style={{textDecoration:"none" , color:"inherit"}}>
              <li className="home mb-4">
                <a className="d-inline-flex align-items-center rounded border-0 collapsed d-flex p-2 ">
                <i className='bx bx-edit ' style={{marginLeft:"10px",color:"white"}}></i>         
                 <div className="text-truncate ml-3 mx-2" data-i18n="Dashboard" style={{paddingLeft:"12px",color:"white"}}>
                    Create Rubrics
                  </div>
                </a>
              </li>
              </Link>

             <Link to="/add-permission" style={{textDecoration:"none" , color:"inherit"}}>
              <li className="home mb-4">
                <a className="d-inline-flex align-items-center rounded border-0 collapsed d-flex p-2 ">
                <i className='bx bxs-shield-plus' style={{marginLeft:"-20px",color:"white"}}></i>  
                    <div className="text-truncate ml-3 mx-2" data-i18n="Dashboard" style={{paddingLeft:"12px",color:"white"}}>
                    Permissions
                  </div>
                </a>
              </li>
              </Link>

              <Link to="/assesment" style={{textDecoration:"none" , color:"inherit"}}>
              <li className="home mb-4">
                <a className="d-inline-flex align-items-center rounded border-0 collapsed d-flex p-2 ">
                <i className='bx bx-edit-alt' style={{marginLeft:"-20px",color:"white"}}></i>                 
                 <div className="text-truncate ml-3  mx-2 " data-i18n="Dashboard" style={{paddingLeft:"12px",color:"white"}}>
                    Assesments
                  </div>
                </a>
              </li>
              </Link>

               <Link to="/groups" style={{textDecoration:"none" , color:"inherit"}}>
              <li className="home">
                <a className="d-inline-flex align-items-center rounded border-0 collapsed d-flex p-2 ">
                <i className='bx bxs-group ' style={{marginLeft:"-55px",color:"white"}}></i>
                  <div className="text-truncate ml-3  mx-2" data-i18n="Dashboard" style={{paddingLeft:"12px",color:"white"}}>
                    Groups
                  </div>
                </a>
              </li>
              </Link>


            </ul>
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
}
