import React, { useEffect, useState } from "react";
import Sidebar from "../../component/Sidebar";
import { deleteReportData, listReportDetails } from "../../services/ReportService";
import { useNavigate } from 'react-router-dom';


function ReportMarksTable() {
  const [reports, setReports] = useState([]);


  useEffect(() => {
    const fetchExamDetails = async () => {
      try {
        const response = await listReportDetails();
        if (response.status === 200) { // Check for success
          setReports(response.data);
          
        } else {
          console.error('Error fetching report details', response.status);
        }
      } catch (error) {
        console.error("Error fetching report details:", error);
      }
    };
  
    fetchExamDetails();
  }, []); // Empty dependency array ensures useEffect runs only once
  
  const navigater = useNavigate();


  function updateReport(id){
    navigater(`/report-marks-update/${id}`)
  }

  async function deleteExamDetails(id) {
    console.log(id);
  
    try {
      await deleteReportData(id);  // Call your delete API endpoint
      
      // Refetch updated data
      const response = await listReportDetails(); 
      if (response.status === 200) {   
        setReports(response.data);  // Update the exams state
      } else {
        console.error('Error refetching exams after deletion', response.status);
      }
    } catch (error) {
      console.error(error);
    }
  }
  

  function addMarks(){
    navigater(`/report-marks-add`)
  }

  function addProposalMarks(){
    navigater(`/addProposal`)
  }

  

  function addProgress(){
    navigater(`/addProgress`)
  }

  function addProgress2(){
    navigater(`/addProgress2`)
  }

  function addFinal(){
    navigater(`/add-final-pracentation`)
  }

  return (
    <div className="container-fluid">
      
      <div className="row">
       <div className="col-md-3">
          <Sidebar />
        </div>

        <div className="col-md-9"> 
          <div className="mt-4 mx-5" style={{ marginBottom: "-40px" }}>
            <h2>Report Mark Table</h2>
          </div>

          <div className="exam-table-container">
          <table class="table table-bordered"  style={{ backgroundColor: 'white', marginTop: '200px',marginLeft: '-40px', borderRadius: '10px' }}> 
              <thead>
                <tr style={{ backgroundColor: 'rgb(35, 52, 70)' }}>
                  <th >ID</th>
                  <th>Sdudent ID</th>
                  <th>Group ID</th>
                  <th>Proposal</th>
                  <th>Progress 1</th>
                  <th>Progress 2</th>
                  <th>Final Presentations</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((report) => (
                  <tr key={report.ID}>
                    <td>{report.studentID}</td>
                    <td>{report.groupId}</td> 
                    <td>{report.statusdocument1}</td>
                    <td>{report.logbook}</td>
                    <td>{report.proposal}</td> 
                    <td>{report.statusdocument2}</td> 
                    <td>{report.finalthesis}</td>   
                    <td>
                    <button className="btn btn-outline-info" style={{marginRight: '40px' }} onClick={()=>updateReport(report.id)}>Update</button>
                    <button className="btn btn-outline-danger" onClick={()=>deleteExamDetails(report.id)}>Delete</button>
                    </td> 
                  </tr>
                ))}
              </tbody>
            </table>

            <button className="btn btn-outline-info" style={{ float: 'right', marginRight: '40px' }}  onClick={()=>addMarks()  }>Add Report Marks</button>
            </div>

            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <button className="btn btn-outline-danger" style={{ float: 'right', marginRight: '40px' }}  onClick={()=>addProposalMarks()  }>Add Proposal Marks</button>
            <button className="btn btn-outline-danger" style={{ float: 'right', marginRight: '40px' }}  onClick={()=>addProgress()  }>Add Progress Marks</button>
            <button className="btn btn-outline-danger" style={{ float: 'right', marginRight: '40px' }}  onClick={()=>addProgress2()  }>Add Progress 2 Marks</button>
            <button className="btn btn-outline-danger" style={{ float: 'right', marginRight: '40px' }}  onClick={()=>addFinal()  }>Add Final Prasantation Marks</button>



                    
        </div>
      </div>
    </div>
  );
}

export default ReportMarksTable;
