import React, { useState } from "react";
import { createReport } from "../../services/ReportService";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../component/Sidebar";


export default function ReportMarksAdd() {
  const [studentID, setStudentID] = useState('');
  const [groupId, setGroupId] = useState('');
  const [statusdocument1, setStatusdocument1] = useState('');
  const [logbook, setLogbook] = useState('');
  const [proposal, setProposal] = useState('');
  const [statusdocument2, setStatusdocument2] = useState('');
  const [finalthesis, setFinalthesis] = useState('');
  // const [errors, setErrors] = useState({ // State to manage errors
  //   name: '',
  //   studentId: '',
  //   proposal: '', 
  //   progress1: '',
  //   progress2: '',
  //   finalPresentations: ''
  // });

  const navigater = useNavigate();

  function saveExamDetail(e) {
    e.preventDefault();

    // // Reset errors before validation
    // setErrors({ name: '', studentId: '', proposal: '', progress1: '', progress2: '', finalPresentations: '' });

    // // Validation logic
    // let isValid = true;
    // const newErrors = {...errors}; // Duplicate errors object

    // if (!name) {
    //   newErrors.name = 'Student ID is required';
    //   isValid = false;
    // }

    // if (!studentId) {
    //   newErrors.studentId = 'Group ID is required';
    //   isValid = false;
    // }

    // if (isNaN(proposal) || proposal < 0 || proposal > 100 || (!proposal)) {
    //   newErrors.proposal = 'Proposal marks must be a number between 0 and 100';
    //   isValid = false;
    // }

    // if (isNaN(progress1) || progress1 < 0 || progress1 > 100 || (!progress1)) {
    //   newErrors.progress1 = 'Progress 1 marks must be a number between 0 and 100';
    //   isValid = false;
    // }

    // if (isNaN(progress2) || progress2 < 0 || progress2 > 100 || (!progress2)) {
    //   newErrors.progress2 = 'Progress 2 marks must be a number between 0 and 100';
    //   isValid = false;
    // }

    // if (isNaN(finalPresentations) || finalPresentations < 0 || finalPresentations > 100 || (!finalPresentations)) {
    //   newErrors.finalPresentations = 'finalPresentations  marks must be a number between 0 and 100';
    //   isValid = false;
    // }

    // setErrors(newErrors); // Update errors state

    // if (isValid) {
      const report = { studentID, groupId, statusdocument1, logbook, proposal, statusdocument2, finalthesis };
      console.log(report);

      createReport(report).then((Response) => {
        console.log(Response.data);
        navigater('/report-marks');
      });
    }
  //}

  return (
    <div >

    <Sidebar />
      {/* ... Sidebar & Other Components ... */}
      <h2>Add Report Marks</h2>

      <div 
        className=""
        style={{
          marginLeft: "450px",
          width: "900px",
          height: "500px",
          marginTop: "90px",
        }}
      >
        <div>
          <form className="p-4" onSubmit={saveExamDetail}>
            {/* ... Other input fields */}

            <div className="form-group mb-4">
              <label htmlFor="studentID" >Student ID :</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Student ID"
                onChange={(e) => setStudentID(e.target.value)}
              />
              {/* {errors.name && <div className="text-danger">{errors.name}</div>} Error message display */}
            </div>


            <div className="form-group mb-4">
              <label htmlFor="studentID" >Group ID :</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Group ID"
                onChange={(e) => setGroupId(e.target.value)}
              />
              {/* {errors.studentId && <div className="text-danger">{errors.studentId}</div>}  */}
            </div>


             <div className="form-group mb-4">
                <label htmlFor="studentID">Proposal :</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Proposal Marks"
                  onChange={(e) => setStatusdocument1(e.target.value)}
                />
                {/* {errors.proposal && <div className="text-danger">{errors.proposal}</div>}  */}

              </div>

              <div className="form-group mb-4">
                <label htmlFor="studentID">Progress 1 :</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter progress 1 Marks"
                  onChange={(e) => setLogbook(e.target.value)}
                />
                {/* {errors.progress1 && <div className="text-danger">{errors.progress1}</div>}  */}
              </div>

              <div className="form-group mb-4">
                <label htmlFor="studentID">Progress 2 :</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter progress 2 Marks"
                  onChange={(e) => setProposal(e.target.value)}
                />
                {/* {errors.progress2 && <div className="text-danger">{errors.progress2}</div>}  */}
              </div>


              <div className="form-group mb-4">
                <label htmlFor="studentID">Final Presentation :</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter progress 2 Marks"
                  onChange={(e) => setStatusdocument2(e.target.value)}
                />
                {/* {errors.finalPresentations && <div className="text-danger">{errors.finalPresentations}</div>}  */}
              </div>


              <div className="form-group mb-4">
                <label htmlFor="studentID">Final Presentation :</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter progress 2 Marks"
                  onChange={(e) => setFinalthesis(e.target.value)}
                />
                {/* {errors.finalPresentations && <div className="text-danger">{errors.finalPresentations}</div>}  */}
              </div>
            




            <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-outline-info mt-3">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

