import React from "react";
import Sidebar from "../component/Sidebar";
import '../css/home.css'
import '../images/img1.jpg'

export default function Cordinator() {
  return (

   <div className="wrapper" >

     <div >
      <Sidebar />
  

      <div className="main-content" style={{marginBottom:"-60px" , marginLeft:"200px"}}>
        <h1 >Project Cordinator's Dashboard</h1>
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
          >
             <img src="./assests/img/chart.jpg"
             style={{height:"540px"}}
            />
          </div>

          <div
            className="card shadow p-3 mb-5 bg-white rounded"
            style={{
              borderRadius: "20px 20px 0 0",
              height: "540px",
              width: "600px",
              marginLeft:"100px"
            }}
          >
            <img src="./assests/img/chart3.jpg"
             style={{height:"520px"}}
            />
          </div>


        </div>
      </div>
    </div>
   </div>
  );
}
