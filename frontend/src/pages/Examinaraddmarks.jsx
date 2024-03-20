import React from "react";
import Sidebar from "../component/Sidebar";

export default function Examinarmarkadd() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>

        <div className="mt-4 mx-5" style={{ marginBottom: "-40px" }}>
          <h2>Add Marks</h2>
        </div>

        <div
          className="shadow-sm p-10 mb-5 bg-white rounded"
          style={{
            marginLeft: "450px",
            width: "900px",
            height: "500px",
            marginTop: "90px",
          }}
        >
          <div>
            <form className="p-4">

              <div className="form-group mb-4">
              <label htmlFor="studentID">Student ID :</label> 
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Student ID"
                />
              </div>

              <div className="form-group mb-4">
              <label htmlFor="studentID">Student ID :</label> 
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Student ID"
                />
              </div>

              <div className="form-group mb-4">
              <label htmlFor="studentID">Student ID :</label> 
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Student ID"
                />
              </div><div className="form-group mb-4">
              <label htmlFor="studentID">Student ID :</label> 
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Student ID"
                />
              </div>


              {/* <div className="form-group mb-4">
              <label htmlFor="assessmentType">Assessment Type :</label>
              <select className="form-control">
                  <option>Proposal</option>
                  <option>Progress 1</option>
                  <option>Progress 2</option>
                </select>
              </div>
            */}

              <div className="d-flex justify-content-between">
                <button
                  type="submit"
                  className="btn btn-outline-info mt-3  "
                >
                  Add Marks
                </button>


              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
