import React, { useState } from "react";
import "../css/sidebar.css";
import "../css/home.css"

export default function Sidebar() {
 
 

  return (
    <div className="">

    
    <nav className="sidebar  shadow p-3 mb-5 bg-white rounded" style={{width:"270px"}}>
   
      <div>
        <header className="">
          <div className="image-text">
            <span className="image">
           
            </span>
            <div className="text logo-text ">
              <span className="sidebar-title text-uppercase text-truncate app-brand-text demo menu-text fw-bold ms-2 fs-1 ">
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
                  <i className="menu-icon tf-icons bx bx-home-circle " style={{marginLeft:"-60px"}} />
                  <div className=" " data-i18n="Dashboard" style={{paddingLeft:"20px"}} >
                    Home
                  </div>
                </a>
              </li>

              <li className="home mb-4">
                <div>
                  <div className="d-inline-flex align-items-center d-flex p-2">
                   <i class='bx bxs-user-plus ' style={{marginLeft:"-20px"}}></i>   
                    <div className="text-truncate ml-3 mx-2" data-i18n="Employee" style={{paddingLeft:"12px"}}>
                      Add Users
                      <i />
                    </div>
                  </div>
                </div>
              </li>


              <li className="home mb-4">
                <div>
                  <div className="d-inline-flex align-items-center d-flex p-2">
                    <i className="menu-icon tf-icons bx bx-book" style={{marginLeft:"-70px"}}></i>
                    <div className="text-truncate ml-3" data-i18n="Employee" style={{paddingLeft:"12px"}}>
                     Marks
                    </div>
                  </div>
                </div>
              </li>

              

              <li className="home mb-4">
                <div>
                  <div className="d-inline-flex align-items-center d-flex p-2">
                  <i className='bx bx-slideshow' style={{marginLeft:"-10px"}}></i>   
                 <div className="text-truncate ml-3  mx-2" data-i18n="Employee" style={{paddingLeft:"12px"}}>
                      Presentation
                    </div>
                  </div>
                </div>
              </li>

             

              <li className="home mb-4">
                <a className="d-inline-flex align-items-center rounded border-0 collapsed d-flex p-2 ">
                <i className='bx bx-edit ' style={{marginLeft:"10px"}}></i>         
                 <div className="text-truncate ml-3 mx-2" data-i18n="Dashboard" style={{paddingLeft:"12px"}}>
                    Create Rubrics
                  </div>
                </a>
              </li>

              <li className="home mb-4">
                <a className="d-inline-flex align-items-center rounded border-0 collapsed d-flex p-2 ">
                <i className='bx bxs-shield-plus' style={{marginLeft:"-20px"}}></i>  
                    <div className="text-truncate ml-3 mx-2" data-i18n="Dashboard" style={{paddingLeft:"12px"}}>
                    Permissions
                  </div>
                </a>
              </li>

              
              <li className="home mb-4">
                <a className="d-inline-flex align-items-center rounded border-0 collapsed d-flex p-2 ">
                <i className='bx bx-edit-alt' style={{marginLeft:"-20px"}}></i>                 
                 <div className="text-truncate ml-3  mx-2 " data-i18n="Dashboard" style={{paddingLeft:"12px"}}>
                    Assesments
                  </div>
                </a>
              </li>

              <li className="home">
                <a className="d-inline-flex align-items-center rounded border-0 collapsed d-flex p-2 ">
                <i className='bx bxs-group ' style={{marginLeft:"-55px"}}></i>
                  <div className="text-truncate ml-3  mx-2" data-i18n="Dashboard" style={{paddingLeft:"12px"}}>
                    Groups
                  </div>
                </a>
              </li>


            </ul>
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
}
