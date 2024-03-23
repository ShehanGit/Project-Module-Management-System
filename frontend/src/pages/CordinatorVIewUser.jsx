import React, { useEffect, useState } from "react";
import Sidebar from "../component/Sidebar";
import axios from "axios";

export default function CoordinatorViewUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/users`);
      setUsers(result.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>

        <div className="mt-4 mx-5" style={{ marginBottom: "-40px" }}>
          <h2>View User</h2>
        </div>

        <div
          className="shadow-sm p-5 mb-5 bg-white rounded"
          style={{
            marginLeft: "450px",
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
                  placeholder="user name"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                  style={{
                    width: "350px",
                  }}
                />
              </div>

              <div className="mt-2 " style={{ marginLeft: "100px" }}>
                <button className="btn btn-info">Search</button>
              </div>
            </div>
          </div>

          {users.map((user) => (
            <div
              key={user.userId}
              className="shadow p-3 mb-5 bg-white rounded "
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
                <div className="card-body r">
                  <div
                    className=""
                    style={{ marginLeft: "50px", textAlign: "start" }}
                  >
                    <div className="d-flex mb-1">
                      <p
                        className="card-title"
                        style={{ paddingRight: "100px" }}
                      >
                        Name{" "}
                      </p>
                      <p
                        className="card-title"
                        style={{ paddingRight: "50px" }}
                      >
                        {" "}
                        :{" "}
                      </p>
                      <p className="card-title">{user.name}</p>
                    </div>

                    <div className="d-flex mb-1">
                      <p
                        className="card-title"
                        style={{ paddingRight: "56px" }}
                      >
                        User Name{" "}
                      </p>
                      <p
                        className="card-title"
                        style={{ paddingRight: "50px" }}
                      >
                        {" "}
                        :{" "}
                      </p>
                      <p className="card-title">{user.userName}</p>
                    </div>

                    <div className="d-flex mb-1">
                      <p
                        className="card-title"
                        style={{ paddingRight: "67px" }}
                      >
                        User Type
                      </p>
                      <p
                        className="card-title"
                        style={{ paddingRight: "50px" }}
                      >
                        {" "}
                        :{" "}
                      </p>
                      <p className="card-title">{user.userType}</p>
                    </div>

                    <div className="d-flex mb-1">
                      <p
                        className="card-title"
                        style={{ paddingRight: "105px" }}
                      >
                        Email{" "}
                      </p>
                      <p
                        className="card-title"
                        style={{ paddingRight: "50px" }}
                      >
                        {" "}
                        :{" "}
                      </p>
                      <p className="card-title">{user.email}</p>
                    </div>

                    <div className="d-flex mb-4">
                      <p
                        className="card-title"
                        style={{ paddingRight: "95px" }}
                      >
                        Mobile
                      </p>
                      <p
                        className="card-title"
                        style={{ paddingRight: "50px" }}
                      >
                        {" "}
                        :{" "}
                      </p>
                      <p className="card-title">{user.contactNumber}</p>
                    </div>

                   
                  </div>
                  
                </div>
                
              </div>
               
               <div className=" d-flex mt-4">

                  <div className=" justify-content-start">
                  <button className="btn btn-outline-info" >Save</button>
                    <button className="btn btn-outline-warning" style={{marginLeft:"20px"}}>Edit</button>
                   </div>
             
                <div>
                <button className="btn btn-outline-danger" style={{marginLeft:"600px"}}>Delete</button>
                </div>
               </div>
              
            </div>
            
          ))}
        </div>
      </div>
    </div>
  );
}
