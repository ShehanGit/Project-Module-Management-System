import React, { useState } from "react";
import Sidebar from "../component/Sidebar";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CordinatorAssesment() {
  const [projectType, setProjectType] = useState("");
  const [assesmentName, setAssesmentName] = useState("");
  const [assesmentFile, setAssesmentFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("projectType", projectType);
    formData.append("assesmentName", assesmentName);
    formData.append("assesment", assesmentFile);

    try {
      const response = await axios.post("http://localhost:8080/assessment", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
      toast.success('Assessment uploaded successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (error) {
      console.error("Error:", error);
      toast.error('Error uploading assessment!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>

        <div className="mt-5 mx-5" style={{ marginBottom: "-40px" }}>
          <h2>Add Assessment</h2>
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
            <form className="p-4" onSubmit={handleSubmit}>
              <div className="form-group mb-4">
                <select className="form-control" onChange={(e) => setProjectType(e.target.value)}>
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
                  type="text"
                  className="form-control mb-4"
                  placeholder="Assessment Name"
                  value={assesmentName}
                  onChange={(e) => setAssesmentName(e.target.value)}
                />
              </div>

              <div className="form-group mb-4">
                <div className="mb-3">
                  <input
                    type="file"
                    className="form-control"
                    id="formFile"
                    onChange={(e) => setAssesmentFile(e.target.files[0])}
                  />
                </div>
              </div>

              <div className="d-flex justify-content-between">
                <button type="submit" className="btn btn-outline-info mt-5  ">
                  Submit
                </button>

                <button type="reset" className="btn btn-outline-danger mt-5 d-flex ">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Toast Container for displaying notifications */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        progress={undefined}
        theme="colored"
      />
    </div>
  );
}
