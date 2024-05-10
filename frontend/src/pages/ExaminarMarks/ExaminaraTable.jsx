import React, { useEffect, useState } from "react";
import Sidebar from "../../component/Sidebar";
import { deleteExamData, listExamDetails } from "../../services/ExamService";
import { useNavigate } from 'react-router-dom';


function ExaminarTable() {
  const [exams, setExams] = useState([]);
  const [searchStudentID, setSearchStudentID] = useState("");
  const [searchGroupID, setSearchGroupID] = useState("");


  useEffect(() => {
    const fetchExamDetails = async () => {
      try {
        const response = await listExamDetails();
        if (response.status === 200) { // Check for success
          setExams(response.data);
          
        } else {
          console.error('Error fetching exam details', response.status);
        }
      } catch (error) {
        console.error("Error fetching exam details:", error);
      }
    };
  
    fetchExamDetails();
  }, []); // Empty dependency array ensures useEffect runs only once
  
  const navigater = useNavigate();


  function updateExam(id){
    navigater(`/examinarupdatemark/${id}`)
  }

  async function deleteExamDetails(id) {
    console.log(id);
  
    try {
      await deleteExamData(id);  // Call your delete API endpoint
      
      // Refetch updated data
      const response = await listExamDetails(); 
      if (response.status === 200) {   
        setExams(response.data);  // Update the exams state
      } else {
        console.error('Error refetching exams after deletion', response.status);
      }
    } catch (error) {
      console.error(error);
    }
  }
  

  function addMarks(){
    navigater(`/examinaraddmark`)
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


  function searchMarks() {
    // Filter reports based on search criteria
    const filteredReports = exams.filter(exam =>
      String(exam.id).includes(searchStudentID) && // Convert exam.id to string
      String(exam.name).includes(searchGroupID)
    );
    return filteredReports;
  }
  



  return (
    <div className="container-fluid">
      
      <div className="row">
       <div className="col-md-3">
          <Sidebar />
        </div>

        <div className="col-md-9"> 
          <div className="mt-4 mx-5" style={{ marginBottom: "-40px" }}>
            <h2>Examinar Mark Table</h2>
          </div>

          <div className="search">
          <input
                type="text"
                placeholder="Search by Student ID"
                value={searchStudentID}
                onChange={(e) => setSearchStudentID(e.target.value)}
                className="search-input"
              />
              <input
                type="text"
                placeholder="Search by Group ID"
                value={searchGroupID}
                onChange={(e) => setSearchGroupID(e.target.value)}
                className="search-input"
              />
              <button className="search-btn"  onClick={() => setExams(searchMarks())}>
                Search
              </button>
            </div>


          <div className="exam-table-container">
          <table class="table table-bordered"  style={{ backgroundColor: 'white', marginTop: '200px',marginLeft: '-40px', borderRadius: '10px' }}> 
              <thead>
                <tr style={{ backgroundColor: 'rgb(35, 52, 70)' }}>
                  <th >ID</th>
                  <th>Student ID</th>
                  <th>Group ID</th>
                  <th>Proposal</th>
                  <th>Progress 1</th>
                  <th>Progress 2</th>
                  <th>Final Presentations</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {exams.map((exam) => (
                  <tr key={exam.ID}>
                    <td>{exam.id}</td>
                    <td>{exam.name}</td> 
                    <td>{exam.studentId}</td>
                    <td>{exam.proposal}</td>
                    <td>{exam.progress1}</td> 
                    <td>{exam.progress2}</td> 
                    <td>{exam.finalPresentations}</td>   
                    <td>
                    <button className="btn btn-outline-info" style={{marginRight: '40px' }} onClick={()=>updateExam(exam.id)}>Update</button>
                    <button className="btn btn-outline-danger" onClick={()=>deleteExamDetails(exam.id)}>Delete</button>
                    </td> 
                  </tr>
                ))}
              </tbody>
            </table>

            <button className="btn btn-outline-info" style={{ float: 'right', marginRight: '40px' }}  onClick={()=>addMarks()  }>Add Marks</button>
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

export default ExaminarTable;
