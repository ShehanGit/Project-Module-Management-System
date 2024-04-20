import React, { useState } from 'react';
import axios from 'axios';
import '../css/mempresen.css';
import Sidebar2 from '../component/Sidebar2';
import { Link } from 'react-router-dom'; 

const PresentationSchedule = () => {
  const [projectGroup, setProjectGroup] = useState('');
  const [title, setTitle] = useState('');
  const [presentationDate, setPresentationDate] = useState('');
  const [presentationTime, setPresentationTime] = useState('');
  const [Venue, setVenue] = useState('');
  const [examiner1, setExaminer1] = useState('');
  const [examiner2, setExaminer2] = useState('');
  const [examiner3, setExaminer3] = useState('');

  const examiners = ['Mr lalith', 'Mr sunil', 'Mr sahan']; // Sample list of examiners
  const titles=['proposal','progress 1','progress 2','final']

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (
      !projectGroup ||
      !title ||
      !presentationDate ||
      !presentationTime ||
      !Venue ||
      !examiner1 ||
      !examiner2 ||
      !examiner3
    ) {
      alert('Please fill in all fields.');
      return; // Prevent form submission if any field is empty
    }
    const presentationData = {
      projectgroup: projectGroup,
      tital: title,
      date: presentationDate,
      time: presentationTime,
      venue: Venue,
      examinar1: examiner1,
      examinar2: examiner2,
      examinar3: examiner3
    };

    axios.post('http://localhost:8080/api/v1/presentationshedu', presentationData)
      .then(response => {
        console.log(response.data);
        // Optionally, you can reset the form fields after successful submission
        setProjectGroup('');
        setTitle('');
        setPresentationDate('');
        setPresentationTime('');
        setVenue('');
        setExaminer1('');
        setExaminer2('');
        setExaminer3('');
      })
      .catch(error => {
        console.error('Error saving presentation:', error);
      });
    // Handle form submission logic here
  };
  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    let month = (now.getMonth() + 1).toString();
    if (month.length === 1) {
      month = '0' + month;
    }
    let day = now.getDate().toString();
    if (day.length === 1) {
      day = '0' + day;
    }
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="form-container">
      <Sidebar2 />
      <h1 className="form-title">Presentation Schedule</h1>
      
        
    <form onSubmit={handleSubmit}>
      <label>
        Project group:
        <input
          type="text"
          value={projectGroup}
          onChange={(e) => setProjectGroup(e.target.value)}
        />
      </label>
      <label>
        Presentation Title:
        <select value={title} onChange={(e) => setTitle(e.target.value)}>
          <option value="">Select Title</option>
          {titles.map((title, index) => (
            <option key={index} value={title}>{title}</option>
          ))}
        </select>
      </label>
      <label>
        Presentation Date:
        <input
            type="date"
            value={presentationDate}
            min={getCurrentDate()} // Set minimum date to current date
            onChange={(e) => setPresentationDate(e.target.value)}
          />
      </label>
      <label>
        Presentation time:
        <input
          type="time"
          value={presentationTime}
          onChange={(e) => setPresentationTime(e.target.value)}
        />
      </label>
      <label>
        Venue:
        <input
          type="text"
          value={Venue}
          onChange={(e) => setVenue(e.target.value)}
        />
      </label>
      <label>
        Select examiner 1:
        <select value={examiner1} onChange={(e) => setExaminer1(e.target.value)}>
          <option value="">Select Examiner 1</option>
          {examiners.map((examiner, index) => (
            <option key={index} value={examiner}>{examiner}</option>
          ))}
        </select>
      </label>
      <label>
        Select examiner 2:
        <select value={examiner2} onChange={(e) => setExaminer2(e.target.value)}>
          <option value="">Select Examiner 2</option>
          {examiners.map((examiner, index) => (
            <option key={index} value={examiner}>{examiner}</option>
          ))}
        </select>
      </label>
      <label>
        Select examiner 3:
        <select value={examiner3} onChange={(e) => setExaminer3(e.target.value)}>
          <option value="">Select Examiner 3</option>
          {examiners.map((examiner, index) => (
            <option key={index} value={examiner}>{examiner}</option>
          ))}
        </select>
      </label>
      <button type="submit">Save</button>
      <Link to="/presentations">
      <button type="button" className="view-button">View</button>
      </Link>
    </form>
    </div>
  );
};

export default PresentationSchedule;
