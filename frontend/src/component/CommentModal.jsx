import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentModal = ({ group, onClose }) => {
  const [examinerComments, setExaminerComments] = useState(null);
  const [supervisorComments, setSupervisorComments] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const examinerResponse = await axios.get(`http://localhost:8080/${group.groupId}/examiner/comments`);
        setExaminerComments(examinerResponse.data);

        const supervisorResponse = await axios.get(`http://localhost:8080/${group.groupId}/supervisor/comments`);
        setSupervisorComments(supervisorResponse.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [group.groupId]);

  return (
    <div className="modal" style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header bg-warning text-white">
            <h5 className="modal-title text-white ">Comments for Group {group.groupId}</h5>
            <button type="button" className="close" onClick={onClose}>
              <span aria-hidden="true" className="text-dark">&times;</span>
            </button>
          </div>
          <div className="modal-body ">
            <div className="row">
              <div className="col-md-6">
                <div className="card mb-4 shadow  w-100">
                  <div className="card-header bg-secondary text-white ">
                    <h6 className="mb-0 text-white fs-5">Examiner Comments</h6>
                  </div>
                  <div className="card-body mt-4 text-start">
                    {examinerComments ? (
                      <div>
                        <p >Proposal: {examinerComments.proposal}</p>
                        <p>Progress 1: {examinerComments.progress1}</p>
                        <p>Progress 2: {examinerComments.progress2}</p>
                        <p>Final Presentation: {examinerComments.finalPresentation}</p>
                      </div>
                    ) : (
                      <p>No examiner comments available.</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card mb-4 w-100 shadow">
                  <div className="card-header bg-secondary text-white">
                    <h6 className="mb-0 text-white fs-5">Supervisor Comments</h6>
                  </div>
                  <div className="card-body mt-4 text-start">
                    {supervisorComments ? (
                      <div>
                        <p>Status Document 1: {supervisorComments.statusDoc1}</p>
                        <p>Log Book: {supervisorComments.logBook}</p>
                        <p>Proposal Document: {supervisorComments.proposalDoc}</p>
                        <p>Status Document 2: {supervisorComments.statusDoc2}</p>
                        <p>Final Thesis: {supervisorComments.finalThesis}</p>
                      </div>
                    ) : (
                      <p>No supervisor comments available.</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentModal;