import React from "react";
import Sidebar from "../component/Sidebar";
import "../css/permission.css";

export default function CordinatorPermission() {

  const handleSwitchChange = (event) => {
    if (event.target.checked) {
      const confirmed = window.confirm("Are you sure?");
      if (!confirmed) {
        // Revert the switch to its original state if not confirmed
        event.target.checked = !event.target.checked;
      }
    }
    // Handle the switch change here if confirmed
  };
  return (
    <div className="wrapper">
      <Sidebar />
      <div
        className="main-content"
        style={{ marginBottom: "-60px", marginLeft: "200px" }}
      >
        <h1>Permissions</h1>
      </div>

      <div
        className=" p-4 card-container"
        style={{ marginLeft: "300px", marginTop: "100px" }}
      >
        <div className="d-flex">

          <div
            className="card shadow p-3 mb-5 bg-white rounded"
            style={{
              borderRadius: "20px 20px 0 0",
              height: "auto",
              width: "600px",
            }}
          >
            
            <h2>Semester 1</h2>

            <div className=" mt-4">
            <div className="dgbody d-flex align-items-center   mb-3  ">
              <div className=" dgname" >
                <p>Proposal</p>
              </div>
              <div className="swbtn">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                    onChange={handleSwitchChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                  ></label>
                </div>
              </div>
            </div>
            <div className="dgbody d-flex  align-items-center mb-3">
              <div className=" dgname" style={{marginRight:"40px"}}>
                <p>Progress 1</p>
              </div>
              <div className="swbtn">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                    onChange={handleSwitchChange}

                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                  ></label>
                </div>
              </div>
            </div>
            <div className="dgbody d-flex  align-items-center mb-3">
              <div className=" dgname" style={{marginRight:"50px"}} >
                <p>Progress 2</p>
              </div>
              <div className="swbtn">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                    onChange={handleSwitchChange}

                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                  ></label>
                </div>
              </div>
            </div>
            <div className="dgbody d-flex  align-items-center mb-3">
              <div className=" dgname" style={{marginRight:"120px"}}>
                <p>Final Presentation</p>
              </div>
              <div className="swbtn">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                    onChange={handleSwitchChange}

                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                  ></label>
                </div>
              </div>
            </div>
            <div className="dgbody d-flex align-items-center mb-3">
              <div className=" dgname" style={{marginRight:"130px"}} >
                <p>Status Document 1</p>
              </div>
              <div className="swbtn">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                    onChange={handleSwitchChange}

                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                  ></label>
                </div>
              </div>
            </div>
            <div className="dgbody d-flex  align-items-center mb-3">
              <div className=" dgname" >
                <p>Log Book</p>
              </div>
              <div className="swbtn">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                    onChange={handleSwitchChange}

                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                  ></label>
                </div>
              </div>
            </div>

            <div className="dgbody d-flex  align-items-center mb-3">
              <div className=" dgname" >
                <p>Proposal Document</p>
              </div>
              <div className="swbtn">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                    onChange={handleSwitchChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                  ></label>
                </div>
              </div>
            </div>

            <div className="dgbody d-flex  align-items-center mb-3">
              <div className=" dgname" >
                <p>Status Document 2</p>
              </div>
              <div className="swbtn">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                    onChange={handleSwitchChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                  ></label>
                </div>
              </div>
            </div>

            <div className="dgbody d-flex  align-items-center mb-3">
              <div className=" dgname" >
                <p>Final Thesis</p>
              </div>
              <div className="swbtn">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                    onChange={handleSwitchChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                  ></label>
                </div>
              </div>
            </div>
    
            </div>

     


          </div>

          <div
            className="card shadow p-3 mb-5 bg-white rounded"
            style={{
              borderRadius: "20px 20px 0 0",
              height: "auto",
              width: "600px",
              marginLeft: "100px",
            }}
          >
            <h2>Semester 2</h2>
            <div className=" mt-4">
            <div className="dgbody d-flex align-items-center   mb-3  ">
              <div className=" dgname" >
                <p>Proposal</p>
              </div>
              <div className="swbtn">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                    onChange={handleSwitchChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                  ></label>
                </div>
              </div>
            </div>
            <div className="dgbody d-flex  align-items-center mb-3">
              <div className=" dgname" style={{marginRight:"40px"}}>
                <p>Progress 1</p>
              </div>
              <div className="swbtn">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                    onChange={handleSwitchChange}

                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                  ></label>
                </div>
              </div>
            </div>
            <div className="dgbody d-flex  align-items-center mb-3">
              <div className=" dgname" style={{marginRight:"50px"}} >
                <p>Progress 2</p>
              </div>
              <div className="swbtn">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                    onChange={handleSwitchChange}

                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                  ></label>
                </div>
              </div>
            </div>
            <div className="dgbody d-flex  align-items-center mb-3">
              <div className=" dgname" style={{marginRight:"120px"}}>
                <p>Final Presentation</p>
              </div>
              <div className="swbtn">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                    onChange={handleSwitchChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                  ></label>
                </div>
              </div>
            </div>
            <div className="dgbody d-flex align-items-center mb-3">
              <div className=" dgname" style={{marginRight:"130px"}} >
                <p>Status Document 1</p>
              </div>
              <div className="swbtn">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                    onChange={handleSwitchChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                  ></label>
                </div>
              </div>
            </div>
            <div className="dgbody d-flex  align-items-center mb-3">
              <div className=" dgname" >
                <p>Log Book</p>
              </div>
              <div className="swbtn">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                    onChange={handleSwitchChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                  ></label>
                </div>
              </div>
            </div>

            <div className="dgbody d-flex  align-items-center mb-3">
              <div className=" dgname" >
                <p>Proposal Document</p>
              </div>
              <div className="swbtn">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                    onChange={handleSwitchChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                  ></label>
                </div>
              </div>
            </div>

            <div className="dgbody d-flex  align-items-center mb-3">
              <div className=" dgname" >
                <p>Status Document 2</p>
              </div>
              <div className="swbtn">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                    onChange={handleSwitchChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                  ></label>
                </div>
              </div>
            </div>

            <div className="dgbody d-flex  align-items-center mb-3">
              <div className=" dgname" >
                <p>Final Thesis</p>
              </div>
              <div className="swbtn">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                    onChange={handleSwitchChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                  ></label>
                </div>
              </div>
            </div>
    
            </div>
          </div>
        </div>
      </div>




    </div>
  );
}
