import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Sidebar2 from '../component/Sidebar2';

const Plist = () => {
  const [presentations, setPresentations] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPresentations = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/presentationshedu');
        setPresentations(response.data);
        setError(null);
      } catch (error) {
        console.error('Error fetching presentations:', error);
        setError('Error fetching presentations. Please try again later.');
      }
    };

    fetchPresentations();
  }, []);

  const handleEdit = (id) => {
    console.log(`Edit presentation with ID: ${id}`);
    // Navigate to UpdatePresentation page with the ID
  };

  const handleDelete = (id) => {
    console.log(`Delete presentation with ID: ${id}`);
    // Implement your delete logic here
  };

  return (
    <div>
      <Sidebar2/>
      <div className="container mt-4">
        <h1 className="mb-4">All Presentations</h1>
        {error && <div className="alert alert-danger">{error}</div>}
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th style={{ maxWidth: '500px' }}>Project Group</th>
              <th style={{ maxWidth: '200px' }}>Title</th>
              <th style={{ maxWidth: '800px' }}>Date</th>
              <th style={{ maxWidth: '100px' }}>Time</th>
              <th style={{ maxWidth: '200px' }}>Venue</th>
              <th style={{ maxWidth: '150px' }}>Examiner 1</th>
              <th style={{ maxWidth: '150px' }}>Examiner 2</th>
              <th style={{ maxWidth: '150px' }}>Examiner 3</th>
              <th style={{ maxWidth: '300px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {presentations.map(presentation => (
              <tr key={presentation.id}>
                <td>{presentation.projectgroup}</td>
                <td>{presentation.tital}</td>
                <td >{presentation.date}</td>
                <td>{presentation.time}</td>
                <td>{presentation.venue}</td>
                <td>{presentation.examinar1}</td>
                <td>{presentation.examinar2}</td>
                <td>{presentation.examinar3}</td>
                <td>
                  {/* Use Link to navigate to UpdatePresentation */}
                  <Link to={`/update/${presentation.id}`} className="btn btn-primary btn-sm">Edit</Link>
                  
                  <Link to={`/delete/${presentation.id}`} className="btn btn-danger btn-sm ml-2">Delete</Link>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Plist;
