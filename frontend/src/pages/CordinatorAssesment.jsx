import React from "react";
import Sidebar from "../component/Sidebar";

export default function CordinatorAssesment() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>

        <div className="mt-5 mx-5" style={{ marginBottom: "-40px" }}>
          <h2>Add Assesment</h2>
        </div>

        <div
          className="shadow-sm p-4 mb-5 bg-white rounded"
          style={{
            marginLeft: "450px",
            width: "900px",
            height: "auto",
            marginTop: "90px",
          }}
        >
          <div>
            <form className="p-4">
              <div className="form-group mb-4">
                <select className="form-control">
                  <option>project type</option>
                  <option>proposal</option>
                  <option>progress 1</option>
                  <option>progress 2</option>
                  <option>final presentation</option>
                  <option>status document 1</option>
                  <option>log book</option>
                  <option>proposal document</option>
                  <option>status document 2</option>
                  <option>final thesis</option>

                </select>
              </div>

              <div className="form-group">
                <input
                  type="password"
                  className="form-control mb-4"
                  placeholder="name"
                />
              </div>

              <div className="form-group mb-4">
                <div class="mb-3">
                  <input class="form-control" type="file" id="formFile" />
                </div>
              </div>

              <div className="d-flex justify-content-between">
                <button type="submit" className="btn btn-outline-info mt-5  ">
                  Submit
                </button>

                <button
                  type="submit"
                  className="btn btn-outline-danger mt-5 d-flex "
                >
                  cancle
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
