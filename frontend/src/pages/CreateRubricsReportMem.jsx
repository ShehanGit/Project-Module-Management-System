
import React, { useState } from 'react';
import Sidebar2 from '../component/Sidebar2';

export default function CreateRubricsReportMem() {
  
 const [selectedAcademicYear, setSelectedAcademicYear] = useState('');
 const [selectedCalenderYear, setSelectedCalenderYear] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('');
  const [selectedReportType, setSelectedReportType] = useState('');
  const [error, setError] = useState('');

  const assessmentTypeToExcelUrl = {
    ' topic assessment form,': 'presentation1-excel-sheet-url',
    'projectchater': 'https://docs.google.com/spreadsheets/d/1161hKdUMuWSzkjFqdyFi99iJm50IWGOD9jgXE9qKxcE/edit?usp=sharing',
    'status document 1': 'final-progress-excel-sheet-url',
    'status document 2': 'final-progress-excel-sheet-url2',
    'logbook': 'final-progress-excel-sheet-url',
    'proposal document': 'final-progress-excel-sheet-url',
    'final thesis': 'final-progress-excel-sheet-url'
  };

  const handleCreate = () => {
    if (!selectedAcademicYear ||!selectedCalenderYear|| !selectedSemester || !selectedReportType) {
      setError('Please fill out all fields');
      return;
    }
    const excelSheetUrl = assessmentTypeToExcelUrl[selectedReportType];
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
              value={selectedCalenderYear}
              onChange={(e) => setSelectedCalenderYear(e.target.value)}
            >
              <option disabled value="">
                Select calender Year
              </option>
              <option>2023</option>
              <option>2024</option>
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
              value={selectedReportType}
              onChange={(e) => setSelectedReportType(e.target.value)}
            >
              <option disabled value="">
                Select Report Type
              </option>
              <option>topic assessment form</option>
              <option>projectchater</option>
              <option>status document 1</option>
              <option>status document 2</option>
              <option>logbook</option>
              <option>Proposal document</option>
              <option>Final thesis</option>
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
  )
}
