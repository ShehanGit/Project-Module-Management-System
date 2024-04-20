import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DeletePresentation = () => {
  const { id } = useParams();
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/presentationshedu/${id}`);
      // Redirect to a success page or back to the list page after deletion
      
    } catch (error) {
      console.error('Error deleting presentation:', error);
      setError('Error deleting presentation. Please try again later.');
    }
  };

  return (
    <div className="container mt-4">
      <h1>Delete Presentation</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <p>Are you sure you want to delete this presentation?</p>
      <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeletePresentation;
