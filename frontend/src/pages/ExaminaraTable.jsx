import React, { useEffect, useState } from "react";
import Sidebar from "../component/Sidebar";
import { deleteExamData, listExamDetails } from "../services/ExamService";
import { useNavigate } from 'react-router-dom';


function ExaminarTable() {
  const [exams, setExams] = useState([]);


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
  


  return (
    <div className="container-fluid">
      
      <div className="row">
       <div className="col-md-3">
          <Sidebar />
        </div>

        <div className="col-md-9"> 
          <div className="mt-4 mx-5" style={{ marginBottom: "-40px" }}>
            <h2>Examinar Table</h2>
          </div>

          <div className="exam-table-container">
          <table class="table table-bordered"  style={{ backgroundColor: 'white', marginTop: '200px',marginLeft: '-40px', borderRadius: '10px' }}> 
              <thead>
                <tr style={{ backgroundColor: '#ACE2E1' }}>
                  <th >ID</th>
                  <th>Sdudent ID</th>
                  <th>Name</th>
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
                    <td>{exam.studentId}</td>
                    <td>{exam.name}</td> 
                    <td>{exam.proposal}</td>
                    <td>{exam.progress1}</td> 
                    <td>{exam.progress2}</td> 
                    <td>{exam.finalPresentations}</td>   
                    <td>
                    <button className="btn btn-outline-info" onClick={()=>updateExam(exam.id)}>Update</button>
                    <button className="btn btn-outline-danger" onClick={()=>deleteExamDetails(exam.id)}>Delete</button>
                    </td> 
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

                    


        </div>
      </div>
    </div>
  );
}

export default ExaminarTable;
