import { createReport, getReportById, updateReportData } from "../../services/ReportService";
import { useNavigate, useParams } from "react-router-dom";
import React, { useState } from 'react';


export default function ReportMarksUpdate() {
  const [studentID, setStudentID] = useState('');
  const [groupId, setGroupId] = useState('');
  const [statusdocument1, setStatusdocument1] = useState('');
  const [logbook, setLogbook] = useState('');
  const [proposal, setProposal] = useState('');
  const [statusdocument2, setStatusdocument2] = useState('');
  const [finalthesis, setFinalthesis] = useState('');
  
  //For show in update field
  const [studentID1, setStudentID1] = useState('');
  const [groupId1, setGroupId1] = useState('');
  const [statusdocument11, setStatusdocument11] = useState('');
  const [logbook1, setLogbook1] = useState('');
  const [proposal1, setProposal1] = useState('');
  const [statusdocument21, setStatusdocument21] = useState('');
  const [finalthesis1, setFinalthesis1] = useState('');

  const navigater = useNavigate();

  const {id} = useParams();


  if (id){
      getReportById(id).then((response)=>{
        setStudentID1(response.data.studentID1);
        setGroupId1(response.data.groupId1 );
        setStatusdocument11(response.data.statusdocument11 );
        setLogbook1(response.data.logbook1 );
        setProposal1(response.data.proposal1 );
        setStatusdocument21(response.data.setStatusdocument21);
        setFinalthesis1(response.data.setFinalthesis1);

    })
  }

  function saveExamDetail(e) {

      const reports = { studentID, groupId, statusdocument1, logbook, proposal, statusdocument2, finalthesis  };
      console.log(reports);

      updateReportData(id, reports).then((response)=> {
        console.log(response.data);
        navigater('/report-marks');
      })
    }

  
  return (
    <div >
      {/* ... Sidebar & Other Components ... */}
      <h2>Update Report Marks</h2>

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
                placeholder="Enter Student Name"
                defaultValue={studentID1}
                // value={name} 
                onChange={(e) => setStudentID(e.target.value)}
              />
              {/* {errors.name && <div className="text-danger">{errors.name}</div>} Error message display */}
            </div>


            <div className="form-group mb-4">
              <label htmlFor="studentID" >Group ID :</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Student ID"
                defaultValue={groupId1}
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
                  defaultValue={statusdocument11}
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
                  defaultValue={logbook1}
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
                  defaultValue={proposal1}
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
                  defaultValue={statusdocument21}
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
                  defaultValue={finalthesis1}
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




