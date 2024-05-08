import React, { useState, useEffect } from 'react';
import Sidebar from '../component/Sidebar';
import axios from 'axios';
import Swal from 'sweetalert2';
import styled from 'styled-components';
import { Document, Page, pdfjs } from 'react-pdf';
import Modal from 'react-modal';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  font-family: Arial, sans-serif;
`;

const Th = styled.th`
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: left;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }

  &:hover {
    background-color: #e6e6e6;
  }
`;

const Button = styled.button`
  background-color: ${(props) => (props.danger ? '#f44336' : '#4CAF50')};
  border: none;
  color: white;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
`;

const customStyles = {
  content: {
    marginTop:"350px",
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-100%',
    transform: 'translate(-50%, -50%)',
    height:"600px"
  },
};

Modal.setAppElement('#root');

export default function ViewAssesment() {
  const [assessments, setAssessments] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    fetchAssessments();
  }, []);

  const fetchAssessments = async () => {
    try {
      const response = await axios.get('http://localhost:8080/assessments');
      setAssessments(response.data);
    } catch (error) {
      console.error('Error fetching assessments:', error);
    }
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:8080/assessments/${id}`);
          Swal.fire('Deleted!', 'Assessment has been deleted.', 'success');
          fetchAssessments(); // Refresh the assessments list
        } catch (error) {
          Swal.fire(
            'Error',
            'Failed to delete assessment. Please try again.',
            'error'
          );
          console.error('Error deleting assessment:', error);
        }
      }
    });
  };

  const handleUpdate = (id) => {
    // Implement update logic here
    console.log(`Updating assessment with id: ${id}`);
  };

  const openModal = (file) => {
    setSelectedFile(file);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedFile(null);
  };

  return (
    <div className="wrapper">
      <div>
        <Sidebar />
        <div
          className="main-content"
          style={{ marginBottom: '60px', marginLeft: '50px' }}
        >
          <div
            className="p-4 card-container"
            style={{ marginLeft: '300px', marginTop: '100px' }}
          >
            <div className="d-flex">
              <h2>Assessments</h2>
            </div>
            <Table>
              <thead>
                <tr>
                  <Th>Project Type</Th>
                  <Th>Assessment Name</Th>
                  <Th>Assessment File</Th>
                  <Th>View Assessment</Th>
                  <Th>Actions</Th>
                </tr>
              </thead>
              <tbody>
                {assessments.map((assessment) => (
                  <Tr key={assessment.id}>
                    <Td>{assessment.projectType}</Td>
                    <Td>{assessment.assesmentName}</Td>
                    <Td>
                      {assessment.assesmentBase64 && (
                        <a
                          href={`data:application/octet-stream;base64,${assessment.assesmentBase64}`}
                          download={assessment.assesmentName}
                        >
                          Download File
                        </a>
                      )}
                    </Td>
                    <Td>
                      <Button onClick={() => openModal(assessment.assesment)}>
                        View
                      </Button>
                    </Td>
                    <Td>
                      <Button onClick={() => handleUpdate(assessment.id)}>
                        Update
                      </Button>
                      <Button danger onClick={() => handleDelete(assessment.id)}>
                        Delete
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Assessment Preview"
      >
        {selectedFile && (
          <Document file={`data:application/pdf;base64,${selectedFile}`}>
            <Page pageNumber={1} />
          </Document>
        )}
      </Modal>
    </div>
  );
}