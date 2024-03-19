import React, { useState } from "react";
import Sidebar from "../component/Sidebar";
import axios from 'axios'

export default function AddUser() {


  const [user, setUser] = useState({
    name:"",
    userName:"",
    userType:"",
    email:"",
    contactNumber:"",
    password:"",
    profilePicture:""
  })

  const {name,userName, userType,email,contactNumber,password, profilePicture } = user;

  const onInputChange=(e)=>{
    setUser({...user, [e.target.name]: e.target.value});
  };

  const onSubmit = async (e) => {
    e.preventDefault(); // Fix typo here
    await axios.post("http://localhost:8080/users", user);
};


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
            <form className="p-4" onSubmit={(e)=>onSubmit(e)}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control mb-4"
                  placeholder="enter name"
                  value={name}
                  name='name'
                  onChange={(e)=>onInputChange(e)}
                />
              </div>

              <div className="form-group">
                <input
                  type="name"
                  className="form-control mb-4"
                  placeholder="enter username"
                  value={userName}
                  name='userName'
                  onChange={(e)=>onInputChange(e)}
                />
              </div>

              <div className="form-group mb-4">
                <select className="form-control" 
                
                value={userType}
                name='userType'
                onChange={(e)=>onInputChange(e)}
                
                >
                  <option>examiner</option>
                  <option>project member</option>
                  <option>supervisor</option>
                  <option>co-supervisor</option>
                </select>
              </div>

              <div className="form-group mb-4">
                <input
                  type="email"
                  className="form-control"
                  placeholder="enter email"
                  value={email}
                  name='email'
                  onChange={(e)=>onInputChange(e)}
                />
              </div>

              <div className="form-group mb-4">
                <input
                  type="number"
                  className="form-control"
                  placeholder="enter mobile"
                  value={contactNumber}
                  name='contactNumber'
                  onChange={(e)=>onInputChange(e)}
                />
              </div>

              <div className="form-group mb-4">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  name='password'
                  onChange={(e)=>onInputChange(e)}
                />
              </div>

              <div className="form-group mb-4">
                <div class="mb-3">
                  <input class="form-control" type="file" id="formFile" 
                     value={ profilePicture}
                     name=' profilePicture'
                     onChange={(e)=>onInputChange(e)}
                  />
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
