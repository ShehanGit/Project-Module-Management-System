import React, { useState } from 'react';
import Sidebar2 from '../component/Sidebar2';
import '../css/assessment.css'


const MemberAssessment = () => {
  const [specialization, setSpecialization] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  

  const handleSpecializationChange = (e) => {
    setSpecialization(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form Submitted:", { specialization, description, file });
  };

  

  return (
    <div className="form-container">
      <Sidebar2 />
      <div className="form-wrapper">
        <h1 className="form-title">Assessment </h1>
        <form onSubmit={handleSubmit} className="p-4">
          <div>
            <label htmlFor="specialization">Assessment Type:</label>
            <select id="specialization" value={specialization} onChange={handleSpecializationChange}>
              <option value="">Select Assesment type</option>
              <option value="ds">Presentation shedules</option>
              <option value="se">Reports</option>
            </select>
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea id="description" value={description} onChange={handleDescriptionChange}></textarea>
          </div>
          <div>
            <label htmlFor="file">File:</label>
            <input type="file" id="file" onChange={handleFileChange} />
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
         
          <div class="button-container">
  <button class="button">submit</button>
  <div class="separator"></div>
  <button class="button">view</button>
</div>

        </form>
      </div>
    </div>
  );
};

export default MemberAssessment;
