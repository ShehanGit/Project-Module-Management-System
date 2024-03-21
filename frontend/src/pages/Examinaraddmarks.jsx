import React, { useState } from "react";
import Sidebar from "../component/Sidebar";

export default function Examinarmarkadd() {
  const [ID, setID] = useState('');
  const [name, setName] = useState('');
  const [proposal, setProposal] = useState('');
  const [progress1, setProgress1] = useState('');
  const [progress2, setProgress2] = useState('');

  function saveExamDetail(e) {
    e.preventDefault();

    const exam = { ID, name, proposal, progress1, progress2 };
    console.log(exam);
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>

        <div className="mt-4 mx-5" style={{ marginBottom: "-40px" }}>
          <h2>Add Marks</h2>
        </div>

        <div
          className="shadow-sm p-10 mb-5 bg-white rounded"
          style={{
            marginLeft: "450px",
            width: "900px",
            height: "500px",
            marginTop: "90px",
          }}
        >
          <div>
            <form className="p-4" onSubmit={saveExamDetail}> {/* Add onSubmit */}
              <div className="form-group mb-4">
                <label htmlFor="studentID">Student ID :</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Student ID"
                  value={ID}
                  onChange={(e) => setID(e.target.value)}
                />
              </div>

              {/* ... Other input fields ... */}

              <div className="d-flex justify-content-between">
                <button type="submit" className="btn btn-outline-info mt-3">
                  Add Marks
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}






// import React, { useState } from "react";
// import Sidebar from "../component/Sidebar";

// export default function Examinarmarkadd() {

//   const [ID ,setID] = useState('')
//   const [name ,setName] = useState('')
//   const [proposal ,setProposal] = useState('')
//   const [progress1 ,setProgress1] = useState('')
//   const [progress2 ,setProgress2] = useState('')


//   function saveExamDetail(e){
//     e.preventDefault();

//     const exam = {ID, name, proposal, progress1, progress2}
//     console.log(exam)
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
//             <form className="p-4">

//               <div className="form-group mb-4">
//               <label htmlFor="studentID">Student ID :</label> 
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Enter Student ID"
//                   value={ID}
//                   onChange={(e) => setID(e.target.value)}
//                 />
//               </div>

//               <div className="form-group mb-4">
//               <label htmlFor="studentID">Name :</label> 
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Enter Name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                 />
//               </div>

//               <div className="form-group mb-4">
//               <label htmlFor="studentID">proposal :</label> 
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Enter proposal marks"
//                   value={proposal}
//                   onChange={(e) => setProposal(e.target.value)}
//                 />
//               </div><div className="form-group mb-4">
//               <label htmlFor="studentID">progress1 :</label> 
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Enter progress 1 Marks"
//                   value={progress1}
//                   onChange={(e) => setProgress1(e.target.value)}
//                 />
//               </div>

//               <div className="form-group mb-4">
//               <label htmlFor="studentID">progress2 :</label> 
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Enter progress 2 Marks"
//                   value={progress2}
//                   onChange={(e) => setProgress2(e.target.value)}
//                 />
//               </div>


//               {/* <div className="form-group mb-4">
//               <label htmlFor="assessmentType">Assessment Type :</label>
//               <select className="form-control">
//                   <option>Proposal</option>
//                   <option>Progress 1</option>
//                   <option>Progress 2</option>
//                 </select>
//               </div>
//             */}

//               <div className="d-flex justify-content-between">
//                 <button
//                   type="submit"
//                   className="btn btn-outline-info mt-3 "
//                   onChange={saveExamDetail}
//                 >
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
