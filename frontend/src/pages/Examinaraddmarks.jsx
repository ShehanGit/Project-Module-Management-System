import React from "react";
import Sidebar from "../component/Sidebar";

<<<<<<< HEAD
export default function ExaminarMarkAdd() {
  const [ID, setID] = useState('');
  const [name, setName] = useState('');
  const [proposal, setProposal] = useState('');
  const [progress1, setProgress1] = useState('');
  const [progress2, setProgress2] = useState('');

  const saveExamDetail = (e) => {
    e.preventDefault();

    const exam = { ID, name, proposal, progress1, progress2 };
    console.log(exam);

    // TODO: Handle actual data submission to your backend (fetch, axios, etc.)
  };

=======
export default function Examinarmarkadd() {
>>>>>>> parent of 5502d3a (add for test)
=======
export default function Examinarmarkadd() {
>>>>>>> parent of 5502d3a (add for test)
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>

        <div className="col-md-9"> {/* Adjusted for Sidebar */}
          <div className="mt-4 mx-5" style={{ marginBottom: "-40px" }}>
            <h2>Add Marks</h2>
          </div>

          <div
            className="shadow-sm p-4 mb-5 bg-white rounded"
            style={{ marginLeft: "180px", width: "900px", marginTop: "90px" }} // Adjusted for Sidebar
          >
            <form onSubmit={saveExamDetail}> {/* Form submission handler */}
              <div className="form-group mb-4">
                <label htmlFor="studentID">Student ID:</label>
                <input
                  type="text"
                  className="form-control"
                  id="studentID" // Added id 
                  placeholder="Enter Student ID"
                />
              </div>

<<<<<<< HEAD
              {/* ... Other input fields similarly ... */}

              <button type="submit" className="btn btn-outline-info mt-3">
                Add Marks
              </button>
=======
              <div className="form-group mb-4">
              <label htmlFor="studentID">Name :</label> 
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Name"
                />
              </div>

              <div className="form-group mb-4">
              <label htmlFor="studentID">proposal :</label> 
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter proposal marks"
                />
              </div><div className="form-group mb-4">
              <label htmlFor="studentID">progress1 :</label> 
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter progress 1 Marks"
                />
              </div>

              <div className="form-group mb-4">
              <label htmlFor="studentID">progress2 :</label> 
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter progress 2 Marks"
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
>>>>>>> parent of 5502d3a (add for test)
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
