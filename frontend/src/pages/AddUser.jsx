import React, { useState } from "react";
import Sidebar from "../component/Sidebar";
import axios from 'axios'

export default function AddUser() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const [user, setUser] = useState({
    name:"",
    userName:"",
    userType:"",
    email:"",
    contactNumber:"",
    password:"",
    profilePicture:""
  })

  const { name, userName, userType, email, contactNumber, password } = user;

  const onInputChange = (e) => {
    let value = e.target.value;

    // If it's the contactNumber field, limit input to 10 characters
    if (e.target.name === 'contactNumber') {
      value = value.slice(0, 10); // Only take the first 10 characters
    }

    setUser({...user, [e.target.name]: value});
  };

  const onSubmit = async (e) => {
    e.preventDefault(); 

    // Basic input validations
    if (name === "" || userName === "" || userType === "" || email === "" || contactNumber === "" || password === "") {
      setError("Please fill in all required fields.");
      return;
    }

    // Additional validations (e.g., email format, password strength) can be added here

    try {
      await axios.post("http://localhost:8080/users", user);
      setSuccess(true); 
      setError("");
    } catch (err) {
      console.error("Error adding user:", err);
      setError("Error adding user. Please try again later.");
    }
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
            {success && (
              <div className="alert alert-success mt-3" role="alert">
                User added successfully!
              </div>
            )}

            {error && (
              <div className="alert alert-danger mt-3" role="alert">
                {error}
              </div>
            )}

            <form className="p-4" onSubmit={(e) => onSubmit(e)}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control mb-4"
                  placeholder="enter name"
                  value={name}
                  name="name"
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control mb-4"
                  placeholder="enter username"
                  value={userName}
                  name="userName"
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <div className="form-group mb-4">
                <select className="form-control" 
                  value={userType}
                  name="userType"
                  onChange={(e) => onInputChange(e)}
                >
                  <option value="">Select user type</option>
                  <option value="examiner">Examiner</option>
                  <option value="project member">Project Member</option>
                  <option value="supervisor">Supervisor</option>
                  <option value="co-supervisor">Co-Supervisor</option>
                </select>
              </div>

              <div className="form-group mb-4">
                <input
                  type="email"
                  className="form-control"
                  placeholder="enter email"
                  value={email}
                  name="email"
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <div className="form-group mb-4">
                <input
                  type="number"
                  className="form-control"
                  placeholder="enter mobile"
                  value={contactNumber}
                  name="contactNumber"
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <div className="form-group mb-4">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  name="password"
                  onChange={(e) => onInputChange(e)}
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
                  type="reset"
                  className="btn btn-outline-danger mt-5 d-flex "
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
