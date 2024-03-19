import React, { useState } from 'react';
import Sidebar2 from '../component/Sidebar2';
import "../css/marking rubrics.css";

export default function CreateRubricsforPres() {
  const [selectedAcademicYear, setSelectedAcademicYear] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('');
  const [selectedAssessmentType, setSelectedAssessmentType] = useState('');
  const [error, setError] = useState('');

  const assessmentTypeToExcelUrl = {
    'Presentation 1': 'presentation1-excel-sheet-url',
    'Proposal': 'https://docs.google.com/spreadsheets/d/1161hKdUMuWSzkjFqdyFi99iJm50IWGOD9jgXE9qKxcE/edit?usp=sharing',
    'Final Progress': 'final-progress-excel-sheet-url',
  };

  const handleCreate = () => {
    if (!selectedAcademicYear || !selectedSemester || !selectedAssessmentType) {
      setError('Please fill out all fields');
      return;
    }
    const excelSheetUrl = assessmentTypeToExcelUrl[selectedAssessmentType];
    if (excelSheetUrl) {
      window.location.href = excelSheetUrl;
    }
  };

  return (
    <div className="form-container">
      <Sidebar2 />
      <div className="form-wrapper">
        <h1 className="form-title">Marking Rubrics</h1>
        <form className="p-4">
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="form-group">
            <select
              className="form-control"
              value={selectedAcademicYear}
              onChange={(e) => setSelectedAcademicYear(e.target.value)}
            >
              <option disabled value="">
                Select Academic Year
              </option>
              <option>Year 3</option>
              <option>Year 4</option>
            </select>
          </div>
          <div className="form-group">
            <select
              className="form-control"
              value={selectedSemester}
              onChange={(e) => setSelectedSemester(e.target.value)}
            >
              <option disabled value="">
                Select Semester
              </option>
              <option>Semester 1</option>
              <option>Semester 2</option>
            </select>
          </div>
          <div className="form-group">
            <select
              className="form-control"
              value={selectedAssessmentType}
              onChange={(e) => setSelectedAssessmentType(e.target.value)}
            >
              <option disabled value="">
                Select Assessment Type
              </option>
              <option>Presentation 1</option>
              <option>Proposal</option>
              <option>Final Progress</option>
            </select>
          </div>
          <div className="d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-info mt-5"
              onClick={handleCreate}
            >
              Create
            </button>
            <button type="submit" className="btn btn-danger mt-5">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}