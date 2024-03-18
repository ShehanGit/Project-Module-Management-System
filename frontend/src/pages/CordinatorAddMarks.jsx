import React, { useEffect, useState } from "react";
import Sidebar from "../component/Sidebar";

export default function CordinatorAddMarks() {
  const [years, setYears] = useState([]);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const yearArray = Array.from(
      { length: currentYear - 1900 + 1 },
      (_, index) => currentYear - index
    );
    setYears(yearArray);
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <Sidebar />
            </div>

            <div
              className="shadow-sm p-3 mb-5 bg-white rounded"
              style={{
                marginLeft: "350px",
                width: "1200px",
                height: "auto",
                marginTop: "50px",
              }}
            >
              <div>
                <div className="d-flex justify-content-between">
                  <div className="form-group col-md-4 p-2">
                    <select className="form-control" id="yearSelect">
                      <option value="">Select Year</option>
                      {years.map((year, index) => (
                        <option key={index} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group col-md-4 p-2">
                    <select className="form-control" id="yearSelect">
                      <option value="">Specialization</option>
                      <option value="">IT</option>
                      <option value="">SE</option>
                      <option value="">DS</option>
                      <option value="">CSNE</option>
                    </select>
                  </div>

                  <div className="form-group col-md-4 p-2">
                    <select className="form-control" id="yearSelect">
                      <option value="">Project Type</option>
                      <option value="">proposal</option>
                      <option value="">progress 1</option>
                      <option value="">progress 2</option>
                      <option value="">final project</option>
                    </select>
                  </div>
                </div>

                <div className="d-flex justify-content-between">
                  <div className="form-group col-md-4 p-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Group number"
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />
                  </div>

                  <div
                    className="form-group col-4  p-2"
                    style={{ marginRight: "600px" }}
                  >
                    <select className="form-control" id="yearSelect">
                      <option value="">Semester</option>
                      <option value="">1</option>
                      <option value="">2</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
            <table class="table table-bordered w-100 mt-4">
              <thead>
                <tr>
                 <th scope="col">ID Number</th>
                  <th scope="col">Student Name</th>
                  <th scope="col">Assignment Type</th>
                  <th scope="col">Marks</th>
                 
                 
                </tr>
              </thead>
              <tbody>
                <tr>
                 
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
       
                </tr>
                <tr>
                 
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                
                
                </tr>
                <tr>
                  
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  
               
                </tr>
                <tr>
                
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  
             
                </tr>
              </tbody>
            </table>
          </div>

          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-outline-info mt-5  ">
              Save
            </button>

            <button
              type="submit"
              className="btn btn-outline-danger mt-5 d-flex "
            >
              Edit
            </button>
          </div>

              
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
}
