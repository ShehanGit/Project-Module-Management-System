import React from "react";
import Sidebar from "../component/Sidebar";

export default function CordinatorGroupSearch() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>

        <div
          className="shadow-sm p-5 mb-5 bg-white rounded mt-5"
          style={{
            marginLeft: "300px",
            width: "1300px",
            height: "auto",
          }}
        >
          <div className="mb-4" style={{ marginLeft: "-10px" }}>
            <div className="d-flex  ">
              <div className="form-group col-md-4 p-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Group number"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                  style={{
                    width: "350px",
                  }}
                />
              </div>

              <div className="mt-2 ">
                <button className="btn btn-info">Search</button>
              </div>
            </div>
          </div>

          <div>
            <table class="table table-bordered w-50">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Proposal</th>
                  <th scope="col">Progress 1</th>
                  <th scope="col">Progress 2</th>
                  <th scope="col">Final Presenation</th>
                  <th scope="col">Status Doc</th>
                  <th scope="col">Log Book</th>
                  <th scope="col">Proposal Document</th>
                  <th scope="col">Status Doc 2</th>
                  <th scope="col">Final Thesis</th>
                  <th scope="col">Pass/Fail</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
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

        <div className="d-flex justify-content-between">
          <div
            className="shadow-sm p-5 mb-5 bg-white rounded mt-5"
            style={{
              marginLeft: "300px",
              width: "1300px",
              height: "auto",
            }}
          >
            <div className="">
              <h5 style={{ marginTop: "-30px" }}>Comments by Examiner</h5>
            </div>
            <div className="form-group col-6 p-2" style={{ marginRight: "300px" }}>
              <select className="form-control" id="yearSelect">
                <option value="">Project Type</option>
                <option value="">1</option>
                <option value="">2</option>
              </select>
            </div>
          </div>

          <div
            className="shadow-sm p-5 mb-5 bg-white rounded mt-5 "
            style={{
              marginLeft: "100px",
              width: "1300px",
              height: "500px",
            }}
          >
            <div className="">
              <h5 style={{ marginTop: "-30px" }}>Comments by Examiner</h5>
            </div>
            <div
              className="form-group col-6  p-2"
              style={{ marginRight: "300px" }}
            >
              <select className="form-control" id="yearSelect">
                <option value="">Project Type</option>
                <option value="">1</option>
                <option value="">2</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
