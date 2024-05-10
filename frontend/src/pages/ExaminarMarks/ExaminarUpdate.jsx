import { createExam, getExamById, updateExamData } from "../../services/ExamService";
import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';


export default function Examinarmarkadd() {
  const [ID, setID] = useState('');
  const [name, setName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [proposal, setProposal] = useState('');
  const [progress1, setProgress1] = useState('');
  const [progress2, setProgress2] = useState('');
  const [finalPresentations, setFinalPresentations] = useState('');
  //For sho in update field
  const [name2, setName2] = useState('');
  const [studentId2, setStudentId2] = useState('');
  const [proposal2, setProposal2] = useState('');
  const [progress12, setProgress12] = useState('');
  const [progress22, setProgress22] = useState('');
  const [finalPresentations2, setFinalPresentations2] = useState('');

  const [errors, setErrors] = useState({ // State to manage errors
    name: '',
    studentId: '',
    proposal: '', 
    progress1: '',
    progress2: '',
    finalPresentations: ''
  });

  const navigater = useNavigate();

  const {id} = useParams();

  // if (id){
  //   getExamById(id).then((response)=>{
  //     setName(response.data.name);
  //     setStudentId(response.data.studentId );
  //     setProposal(response.data.proposal );
  //     setProgress1(response.data.progress1 );
  //     setProgress2(response.data.progress2 );
  //     setFinalPresentations(response.data.finalPresentations);


  //   })
  // }


  if (id){
    getExamById(id).then((response)=>{
      setName2(response.data.name);
      setStudentId2(response.data.studentId );
      setProposal2(response.data.proposal );
      setProgress12(response.data.progress1 );
      setProgress22(response.data.progress2 );
      setFinalPresentations2(response.data.finalPresentations);
    })
  }

  function saveExamDetail(e) {



    e.preventDefault();

    // Reset errors before validation
    setErrors({ name: '', studentId: '', proposal: '', progress1: '', progress2: '', finalPresentations: '' });

    // Validation logic
    let isValid = true;
    const newErrors = {...errors}; // Duplicate errors object

    if (!name) {
      newErrors.name = 'Student ID is required';
      isValid = false;
    }

    if (!studentId) {
      newErrors.studentId = 'Group ID is required';
      isValid = false;
    }

    if (isNaN(proposal) || proposal < 0 || proposal > 100 || (!proposal)) {
      newErrors.proposal = 'Proposal marks must be a number between 0 and 100';
      isValid = false;
    }

    if (isNaN(progress1) || progress1 < 0 || progress1 > 100 || (!progress1)) {
      newErrors.progress1 = 'Progress 1 marks must be a number between 0 and 100';
      isValid = false;
    }

    if (isNaN(progress2) || progress2 < 0 || progress2 > 100 || (!progress2)) {
      newErrors.progress2 = 'Progress 2 marks must be a number between 0 and 100';
      isValid = false;
    }

    if (isNaN(finalPresentations) || finalPresentations < 0 || finalPresentations > 100 || (!finalPresentations)) {
      newErrors.finalPresentations = 'finalPresentations  marks must be a number between 0 and 100';
      isValid = false;
    }

    setErrors(newErrors); // Update errors state

    if (isValid) {

      //
      console.log(finalPresentations);
      setFinalPresentations(finalPresentations*2)
      console.log(finalPresentations);


      const exam = { name, studentId, proposal, progress1, progress2, finalPresentations  };
      console.log(exam);

      updateExamData(id, exam).then((response)=> {
        console.log(response.data);
        navigater('/examinartable');
      })
    }

  }

  
  return (
    <div >
      {/* ... Sidebar & Other Components ... */}
      <h2>Add Exam Marks</h2>

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
                defaultValue={name2}
                // value={name} 
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <div className="text-danger">{errors.name}</div>} {/* Error message display */}
            </div>


            <div className="form-group mb-4">
              <label htmlFor="studentID" >Group ID :</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Student ID"
                defaultValue={studentId2}
                onChange={(e) => setStudentId(e.target.value)}
              />
              {errors.studentId && <div className="text-danger">{errors.studentId}</div>} 
            </div>


             <div className="form-group mb-4">
                <label htmlFor="studentID">Proposal :</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Proposal Marks"
                  defaultValue={proposal2}
                  onChange={(e) => setProposal(e.target.value)}
                />
                {errors.proposal && <div className="text-danger">{errors.proposal}</div>} 

              </div>

              <div className="form-group mb-4">
                <label htmlFor="studentID">Progress 1 :</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter progress 1 Marks"
                  defaultValue={progress12}
                  onChange={(e) => setProgress1(e.target.value)}
                />
                {errors.progress1 && <div className="text-danger">{errors.progress1}</div>} 
              </div>

              <div className="form-group mb-4">
                <label htmlFor="studentID">Progress 2 :</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter progress 2 Marks"
                  defaultValue={progress22}
                  onChange={(e) => setProgress2(e.target.value)}
                />
                {errors.progress2 && <div className="text-danger">{errors.progress2}</div>} 
              </div>


              <div className="form-group mb-4">
                <label htmlFor="studentID">Final Presentation :</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter progress 2 Marks"
                  defaultValue={finalPresentations2}
                  onChange={(e) => setFinalPresentations(e.target.value)}
                />
                {errors.finalPresentations && <div className="text-danger">{errors.finalPresentations}</div>} 
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



