import React from 'react'
import Sidebar2 from '../component/Sidebar2'

export default function ProjectMember() {
  return (
    <div className="wrapper" >
     <div >
      <Sidebar2 />

      <div className="main-content" style={{marginBottom:"-60px" , marginLeft:"200px"}}>
        <h1 >Project Member's Dashboard</h1>
      </div>

      <div className=" p-4 card-container" style={{ marginLeft: "300px", marginTop: "100px" }}>
        <div className="d-flex">
          <div
            className="card shadow p-3 mb-5 bg-white rounded"
            style={{
              borderRadius: "20px 20px 0 0",
              height: "540px",
              width: "600px",
            }}
          ></div>

          <div
            className="card shadow p-3 mb-5 bg-white rounded"
            style={{
              borderRadius: "20px 20px 0 0",
              height: "540px",
              width: "600px",
              marginLeft:"100px"
            }}
          ></div>


        </div>
      </div>
    </div>
   </div>
  )
}

