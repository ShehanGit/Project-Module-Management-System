import React, { useState } from "react";
import Sidebar from "../component/Sidebar";
import axios from "axios";
import CommentModal from "../component/CommentModal";
import EditModal from "../component/EditModal";
import '../css/EditModal.css';

export default function CordinatorGroupSearch() {
  const [groupId, setGroupId] = useState("");
  const [marks, setMarks] = useState([]);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedMarks, setEditedMarks] = useState([]);

  const handleSearch = () => {
    // Check if groupId is empty
    if (!groupId.trim()) {
      setError("Please enter a group number.");
      return;
    }

    axios
      .get(`http://localhost:8080/marks/${groupId}`)
      .then((response) => {
        console.log("Response data:", response.data); // Log response data
        setMarks(response.data);
        setError(null); // Reset error state
      })
      .catch((error) => {
        console.error("Error fetching marks data:", error.response); // Log detailed error
        setError("Error fetching marks data. Please try again."); // Set error state
      });
  };

  const handleViewComments = (group) => {
    setSelectedGroup(group);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedGroup(null);
  };

  const getPassFailStatusColor = (status) => {
    return status.toLowerCase() === "pass" ? "bg-success text-white" : "bg-danger text-white";
  };

  const handleEditMarks = () => {
    setEditedMarks(marks);
    setShowEditModal(true);
  };

  const handleSaveMarks = (updatedMarks) => {
    handleUpdateMarks(updatedMarks);
  };

  const handleUpdateMarks = (updatedMarks) => {
    const groupId = updatedMarks[0].groupId;
    const studentId = updatedMarks[0].studentId;
  
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    axios
      .put(`http://localhost:8080/marks/${groupId}/${studentId}`, updatedMarks, config)
      .then((response) => {
        console.log("Marks updated successfully:", response.data);
        setMarks(updatedMarks);
        setEditedMarks([]);
        setShowEditModal(false);
      })
      .catch((error) => {
        console.error("Error updating marks:", error);
        // Handle error scenario
      });
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setEditedMarks([]);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>

        <div
          className="shadow-sm p-5 mb-5 bg-white rounded mt-5"
          style={{
            marginLeft: "300px",
            width: "1350px",
            height: "auto",
          }}
        >
          <div className="mb-4" style={{ marginLeft: "-10px" }}>
            <div className="d-flex">
              <div className="form-group col-md-4 p-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Group number"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                  style={{
                    width: "350px",
                  }}
                  value={groupId}
                  onChange={(e) => setGroupId(e.target.value)}
                />
              </div>

              <div className="mt-2">
                <button className="btn btn-info" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </div>

          {error && <div className="alert alert-danger">{error}</div>}

          <div>
            <table className="table table-bordered w-50">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Proposal</th>
                  <th scope="col">Progress 1</th>
                  <th scope="col">Progress 2</th>
                  <th scope="col">Final Presentation</th>
                  <th scope="col">Status Doc</th>
                  <th scope="col">Log Book</th>
                  <th scope="col">Proposal Document</th>
                  <th scope="col">Status Doc 2</th>
                  <th scope="col">Final Thesis</th>
                  <th scope="col">Total Marks</th>
                  <th scope="col">Pass/Fail</th>
                </tr>
              </thead>
              <tbody>
                {marks.map((mark, index) => (
                  <React.Fragment key={index}>
                    <tr>
                      <td>{mark.id}</td>
                      <td>{mark.studentName}</td>
                      <td>{mark.proposal}</td>
                      <td>{mark.progress1}</td>
                      <td>{mark.progress2}</td>
                      <td>{mark.finalPresentation}</td>
                      <td>{mark.statusDoc}</td>
                      <td>{mark.logBook}</td>
                      <td>{mark.proposalDocument}</td>
                      <td>{mark.statusDoc2}</td>
                      <td>{mark.finalThesis}</td>
                      <td>{mark.totalMarks}</td>
                      <td className={getPassFailStatusColor(mark.passFailStatus)}>{mark.passFailStatus}</td>
                    </tr>
                    <tr></tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          <div className="d-flex justify-content-between">
            <button
              type="submit"
              className="btn btn-outline-info mt-5"
              onClick={() => handleViewComments(marks[0])}
            >
              View Comments
            </button>

            <button type="submit" className="btn btn-outline-danger mt-5 d-flex" onClick={handleEditMarks}>
              Edit
            </button>
          </div>
        </div>

        {showModal && (
          <CommentModal
            group={selectedGroup}
            onClose={handleCloseModal}
          />
        )}

        {showEditModal && (
          <EditModal
            marks={editedMarks}
            onSave={handleSaveMarks}
            onClose={handleCloseEditModal}
            onUpdateMarks={handleUpdateMarks}
          />
        )}
      </div>
    </div>
  );
}