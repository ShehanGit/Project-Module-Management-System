import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UpdatePresentation = () => {
  const { id } = useParams();

  const [presentation, setPresentation] = useState({
    projectgroup: '',
    tital: '',
    date: '',
    time: '',
    venue: '',
    examinar1: '',
    examinar2: '',
    examinar3: ''
  });
  const [error, setError] = useState(null);
  const [titles, setTitles] = useState([]);
  const [examiners, setExaminers] = useState([]);

  useEffect(() => {
    const fetchPresentation = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/presentationshedu/${id}`);
        setPresentation(response.data);
        setError(null);
      } catch (error) {
        console.error('Error fetching presentation:', error);
        setError('Error fetching presentation. Please try again later.');
      }
    };

    fetchPresentation();

    // Fetch titles and examiners from API
    const fetchTitlesAndExaminers = async () => {
      try {
        const titlesResponse = await axios.get(`http://localhost:8080/api/v1/presentationshedu/${id}/titles`);
        const examinersResponse = await axios.get(`http://localhost:8080/api/v1/presentationshedu/${id}/examiners`);
        const apiTitles = titlesResponse.data;
        const apiExaminers = examinersResponse.data;
        
        // Add manual options to titles and examiners
        const mergedTitles = [...apiTitles, 'Sample Title 1', 'Sample Title 2', 'Sample Title 3'];
        const mergedExaminers = [...apiExaminers, 'Sample Examiner 1', 'Sample Examiner 2', 'Sample Examiner 3'];

        setTitles(mergedTitles);
        setExaminers(mergedExaminers);
      } catch (error) {
        console.error('Error fetching titles and examiners:', error);
        setError('Error fetching titles and examiners. Please try again later.');
      }
    };

    fetchTitlesAndExaminers();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPresentation(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/v1/presentationshedu/${id}`, presentation);
      // Redirect to home page after successful update
    } catch (error) {
      console.error('Error updating presentation:', error);
      setError('Error updating presentation. Please try again later.');
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Update Presentation</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="projectgroup">Project Group</label>
          <input type="text" className="form-control" id="projectgroup" name="projectgroup" value={presentation.projectgroup} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="tital">Title</label>
          <select className="form-control" id="tital" name="tital" value={presentation.tital} onChange={handleChange}>
            <option value="">Select Title</option>
            {titles.map((title, index) => (
              <option key={index} value={title}>{title}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input type="text" className="form-control" id="date" name="date" value={presentation.date} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time</label>
          <input type="text" className="form-control" id="time" name="time" value={presentation.time} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="venue">Venue</label>
          <input type="text" className="form-control" id="venue" name="venue" value={presentation.venue} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="examinar1">Examiner 1</label>
          <select className="form-control" id="examinar1" name="examinar1" value={presentation.examinar1} onChange={handleChange}>
            <option value="">Select Examiner 1</option>
            {examiners.map((examiner, index) => (
              <option key={index} value={examiner}>{examiner}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="examinar2">Examiner 2</label>
          <select className="form-control" id="examinar2" name="examinar2" value={presentation.examinar2} onChange={handleChange}>
            <option value="">Select Examiner 2</option>
            {examiners.map((examiner, index) => (
              <option key={index} value={examiner}>{examiner}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="examinar3">Examiner 3</label>
          <select className="form-control" id="examinar3" name="examinar3" value={presentation.examinar3} onChange={handleChange}>
            <option value="">Select Examiner 3</option>
            {examiners.map((examiner, index) => (
              <option key={index} value={examiner}>{examiner}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  );
};

export default UpdatePresentation;
