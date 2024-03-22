import React, { useState } from "react";
import Sidebar from "../component/Sidebar";
import { createExam } from "../services/ExamService";
import { useNavigate, useParams } from "react-router-dom";

export default function Examinarmarkadd() {
  const [ID, setID] = useState('');
  const [name, setName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [proposal, setProposal] = useState('');
  const [progress1, setProgress1] = useState('');
  const [progress2, setProgress2] = useState('');
  const [finalPresentations, setFinalPresentations] = useState('');
  const [errors, setErrors] = useState({ // State to manage errors
    name: '',
    studentId: '',
    proposal: '', 
    progress1: '',
    progress2: '',
    finalPresentations: ''
  });

  const navigater = useNavigate();

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
      const exam = { name, studentId, proposal, progress1, progress2, finalPresentations  };
      console.log(exam);

      createExam(exam).then((Response) => {
        console.log(Response.data);
        navigater('/examinartable');
      });
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
                placeholder="Enter Student ID"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <div className="text-danger">{errors.name}</div>} {/* Error message display */}
            </div>


            <div className="form-group mb-4">
              <label htmlFor="studentID" >Group ID :</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Group ID"
                value={studentId}
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
                  value={proposal}
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
                  value={progress1}
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
                  value={progress2}
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
                  value={finalPresentations}
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



// import React, { useState } from "react";
// import Sidebar from "../component/Sidebar";
// import { createExam } from "../services/ExamService";
// import { useNavigate } from "react-router-dom";

// export default function Examinarmarkadd() {
//   const [ID, setID] = useState('');
//   const [name, setName] = useState('');
//   const [proposal, setProposal] = useState('');
//   const [progress1, setProgress1] = useState('');
//   const [progress2, setProgress2] = useState('');

//   const navigater =  useNavigate();

//   function saveExamDetail(e) {
//     e.preventDefault();

//     const exam = { name, proposal, progress1, progress2 };
//     console.log(exam);

//     createExam(exam).then((Response) => {
//       console.log(Response.data);
//       navigater('/examinartable');
//     })

//   }

//   return (
//     <div className="container-fluid">
//       <div className="row">
//         <div className="col-md-3">
//           <Sidebar />
//         </div>

//         <div className="mt-4 mx-5" style={{ marginBottom: "-40px" }}>
//           <h2>Add Marks</h2>
//         </div>

//         <div
//           className="shadow-sm p-10 mb-5 bg-white rounded"
//           style={{
//             marginLeft: "450px",
//             width: "900px",
//             height: "500px",
//             marginTop: "90px",
//           }}
//         >
//           <div>
//             <form className="p-4" onSubmit={saveExamDetail}> {/* Add onSubmit */}
//               <div className="form-group mb-4">
//                 <label htmlFor="studentID">Student ID :</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Enter Student ID"
//                   value={ID}
//                   onChange={(e) => setID(e.target.value)}
//                 />
//               </div>

//               {/* ... Other input fields ... */}

//               <div className="form-group mb-4">
//                 <label htmlFor="studentID">Name :</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Enter Student Name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                 />
//               </div>

              // <div className="form-group mb-4">
              //   <label htmlFor="studentID">Proposal :</label>
              //   <input
              //     type="text"
              //     className="form-control"
              //     placeholder="Enter Proposal Marks"
              //     value={proposal}
              //     onChange={(e) => setProposal(e.target.value)}
              //   />
              // </div>

              // <div className="form-group mb-4">
              //   <label htmlFor="studentID">progress 1 :</label>
              //   <input
              //     type="text"
              //     className="form-control"
              //     placeholder="Enter progress 1 Marks"
              //     value={progress1}
              //     onChange={(e) => setProgress1(e.target.value)}
              //   />
              // </div>

              // <div className="form-group mb-4">
              //   <label htmlFor="studentID">progress 2 :</label>
              //   <input
              //     type="text"
              //     className="form-control"
              //     placeholder="Enter progress 2 Marks"
              //     value={progress2}
              //     onChange={(e) => setProgress2(e.target.value)}
              //   />
              // </div>

            

//               <div className="d-flex justify-content-between">
//                 <button type="submit" className="btn btn-outline-info mt-3">
//                   Add Marks
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




