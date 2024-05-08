import React, { useState, useEffect } from "react";
import Sidebar from "../component/Sidebar";
import axios from "axios";
import styled from "styled-components";
import Swal from "sweetalert2";

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
  background-color: ${(props) => (props.danger ? "#f44336" : "#4CAF50")};
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

export default function ViewPresentation() {
  const [presentations, setPresentations] = useState([]);

  useEffect(() => {
    fetchPresentations();
  }, []);

  const fetchPresentations = async () => {
    try {
      const response = await axios.get("http://localhost:8080/presentations");
      setPresentations(response.data);
    } catch (error) {
      console.error("Error fetching presentations:", error);
    }
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:8080/presentations/${id}`);
          Swal.fire("Deleted!", "Presentation has been deleted.", "success");
          fetchPresentations(); // Refresh the presentations list
        } catch (error) {
          Swal.fire(
            "Error",
            "Failed to delete presentation. Please try again.",
            "error"
          );
          console.error("Error deleting presentation:", error);
        }
      }
    });
  };

  const handleUpdate = (id) => {
    // Implement update logic here
    console.log(`Updating presentation with id: ${id}`);
  };

  return (
    <div className="wrapper">
      <div>
        <Sidebar />
        <div
          className="main-content"
          style={{ marginBottom: "-60px", marginLeft: "300px" }}
        >
          <h2>Presentations</h2>
          <Table className="w-85 shadow mt-5" style={{ marginLeft: "0px" }}>
            <thead>
              <tr>
                <Th>Group ID</Th>
                <Th>Title</Th>
                <Th>Examiner</Th>
                <Th>Date</Th>
                <Th>Time</Th>
                <Th>Actions</Th>
              </tr>
            </thead>
            <tbody>
              {presentations.map((presentation) => (
                <Tr key={presentation.id}>
                  <Td>{presentation.groupId}</Td>
                  <Td>{presentation.title}</Td>
                  <Td>{presentation.examiner}</Td>
                  <Td>{new Date(presentation.date).toLocaleDateString()}</Td>
                  <Td>{presentation.time.slice(0, 5)}</Td>
                  <Td>
                    <Button onClick={() => handleUpdate(presentation.id)}>
                      Update
                    </Button>
                    <Button
                      danger
                      onClick={() => handleDelete(presentation.id)}
                    >
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
  );
}