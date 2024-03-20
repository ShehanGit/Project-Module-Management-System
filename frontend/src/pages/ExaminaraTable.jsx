import React, { useEffect, useState } from "react";
import Sidebar from "../component/Sidebar";
import { listExamDetails } from "../services/ExamService";

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
  

  return (
    <div className="container-fluid">
      <style jsx>{`
        .container-fluid {
          /* Styles for the main container */
        }

        .exam-table-container {
          width: 80%; 
          margin: 100px auto; /* Center the table */
        }

        .exam-table {
          width: 80%; 
          border-collapse: collapse; 
          font-family: 'Times New Roman', serif;
          background-color: white; 
          border-radius: 10px; 
          margin-top: 20px;   
          margin-left: auto;
          margin-right: auto;  
        }

        .exam-table th,
        .exam-table td {
          border: 2px solid #ddd;
          text-align: left;
          padding: 12px;
        }

        .exam-table th {
          font-weight: bold; 
        }

        .button-container {
          display: flex; 
          justify-content: flex-end; 
          margin-top: 20px;
        }

        button {
          border: none;
          color: red;
          padding: 8px 46px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          border-radius: 4px; 
          cursor: pointer;
        }

        button:hover {
          background-color: #3e8e41; 
        }
      `}</style>

      <div className="row">
       <div className="col-md-3">
          <Sidebar />
        </div>

        <div className="col-md-9"> 
          <div className="mt-4 mx-5" style={{ marginBottom: "-40px" }}>
            <h2>Examinar Table</h2>
          </div>

          <div className="exam-table-container">
            <table className="exam-table"> 
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Proposal</th>
                  <th>Progress 1</th>
                  <th>Progress 2</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {exams.map((exam) => (
                  <tr key={exam.ID}>
                    <td>{exam.ID}</td>
                    <td>{exam.name}</td> 
                    <td>{exam.proposal}</td>
                    <td>{exam.progress1}</td> 
                    <td>{exam.progress2}</td>  
                    <td>
                      <button>Edit</button> 
                    </td> 
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="button-container">
            <button className="btn btn-outline-info mt-5">Add</button>
            <button className="btn btn-outline-danger mt-5">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExaminarTable;
