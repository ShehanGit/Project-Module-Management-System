import React, { useState } from "react";
import Sidebar from "../component/Sidebar";

export default function AddUser() {

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>

        <div className="mt-4 mx-5" style={{ marginBottom: "-40px" }}>
          <h2>Add Users Page</h2>
        </div>

        <div
          className="shadow-sm p-3 mb-5 bg-white rounded"
          style={{
            marginLeft: "450px",
            width: "900px",
            height: "auto",
            marginTop: "90px",
          }}
        >
          <div>
            <form className="p-4">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control mb-4"
                  placeholder="enter name"
                />
              </div>

              <div className="form-group">
                <input
                  type="password"
                  className="form-control mb-4"
                  placeholder="enter username"
                />
              </div>

              <div className="form-group mb-4">
                <select className="form-control">
                  <option>examiner</option>
                  <option>project member</option>
                  <option>supervisor</option>
                  <option>co-supervisor</option>
                </select>
              </div>

              <div className="form-group mb-4">
                <input
                  type="password"
                  className="form-control"
                  placeholder="enter email"
                />
              </div>

              <div className="form-group mb-4">
                <input
                  type="password"
                  className="form-control"
                  placeholder="enter mobile"
                />
              </div>

              <div className="form-group mb-4">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>

              <div className="form-group mb-4">
                <div class="mb-3">
                  <input class="form-control" type="file" id="formFile" />
                </div>
              </div>

              <div className="d-flex justify-content-between">
                <button
                  type="submit"
                  className="btn btn-outline-info mt-5  "
                >
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
