import React from "react";
import Sidebar from "../component/Sidebar";

export default function CoordinatorViewUser() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>

        <div className="mt-5 mx-5" style={{ marginBottom: "-40px" }}>
          <h2>View User</h2>
        </div>

        <div
          className="shadow-sm p-3 mb-5 bg-white rounded"
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            width: "1000px",
            marginTop: "90px",
            height: "auto",
          }}
        >

            <div>
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


          <div
            className="shadow-sm p-3 mb-5 bg-white rounded"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              width: "900px",
              marginTop: "90px",
            }}
          >
            <div className="card-horizontal d-flex">
              <div className="img-square-wrapper ">
                <img
                  className="img-fluid"
                  src="https://via.placeholder.com/150"
                  alt="User Profile"
                />
              </div>
              <div className="card-body ">
                <div
                  className=""
                  style={{ marginLeft: "50px", textAlign: "start" }}
                >
                  <div className="d-flex mb-1">
                    <p className="card-title" style={{ paddingRight: "100px" }}>
                      Name{" "}
                    </p>
                    <p className="card-title" style={{ paddingRight: "50px" }}>
                      {" "}
                      :{" "}
                    </p>
                    <p className="card-title">Anjana</p>
                  </div>

                  <div className="d-flex mb-1">
                    <p className="card-title" style={{ paddingRight: "56px" }}>
                      User Name{" "}
                    </p>
                    <p className="card-title" style={{ paddingRight: "50px" }}>
                      {" "}
                      :{" "}
                    </p>
                    <p className="card-title">Anjana24</p>
                  </div>

                  <div className="d-flex mb-1">
                    <p className="card-title" style={{ paddingRight: "67px" }}>
                      User Type
                    </p>
                    <p className="card-title" style={{ paddingRight: "50px" }}>
                      {" "}
                      :{" "}
                    </p>
                    <p className="card-title">Examiner</p>
                  </div>

                  <div className="d-flex mb-1">
                    <p className="card-title" style={{ paddingRight: "105px" }}>
                      Email{" "}
                    </p>
                    <p className="card-title" style={{ paddingRight: "50px" }}>
                      {" "}
                      :{" "}
                    </p>
                    <p className="card-title">anjana@gmail.com</p>
                  </div>

                  <div className="d-flex mb-1">
                    <p className="card-title" style={{ paddingRight: "95px" }}>
                      Mobile
                    </p>
                    <p className="card-title" style={{ paddingRight: "50px" }}>
                      {" "}
                      :{" "}
                    </p>
                    <p className="card-title">0774436594</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="shadow-sm p-3 mb-5 bg-white rounded"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              width: "900px",
              marginTop: "90px",
            }}
          >
            <div className="card-horizontal d-flex">
              <div className="img-square-wrapper ">
                <img
                  className="img-fluid"
                  src="https://via.placeholder.com/150"
                  alt="User Profile"
                />
              </div>
              <div className="card-body ">
                <div
                  className=""
                  style={{ marginLeft: "50px", textAlign: "start" }}
                >
                  <div className="d-flex mb-1">
                    <p className="card-title" style={{ paddingRight: "100px" }}>
                      Name{" "}
                    </p>
                    <p className="card-title" style={{ paddingRight: "50px" }}>
                      {" "}
                      :{" "}
                    </p>
                    <p className="card-title">Anjana</p>
                  </div>

                  <div className="d-flex mb-1">
                    <p className="card-title" style={{ paddingRight: "56px" }}>
                      User Name{" "}
                    </p>
                    <p className="card-title" style={{ paddingRight: "50px" }}>
                      {" "}
                      :{" "}
                    </p>
                    <p className="card-title">Anjana24</p>
                  </div>

                  <div className="d-flex mb-1">
                    <p className="card-title" style={{ paddingRight: "67px" }}>
                      User Type
                    </p>
                    <p className="card-title" style={{ paddingRight: "50px" }}>
                      {" "}
                      :{" "}
                    </p>
                    <p className="card-title">Examiner</p>
                  </div>

                  <div className="d-flex mb-1">
                    <p className="card-title" style={{ paddingRight: "105px" }}>
                      Email{" "}
                    </p>
                    <p className="card-title" style={{ paddingRight: "50px" }}>
                      {" "}
                      :{" "}
                    </p>
                    <p className="card-title">anjana@gmail.com</p>
                  </div>

                  <div className="d-flex mb-1">
                    <p className="card-title" style={{ paddingRight: "95px" }}>
                      Mobile
                    </p>
                    <p className="card-title" style={{ paddingRight: "50px" }}>
                      {" "}
                      :{" "}
                    </p>
                    <p className="card-title">0774436594</p>
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
