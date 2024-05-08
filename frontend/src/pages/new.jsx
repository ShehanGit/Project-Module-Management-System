import React from 'react';

const EditModal = ({ marks, onSave, onClose, onUpdateMarks }) => {
  const handleChange = (index, field, value) => {
    const updatedMarks = [...marks];
    updatedMarks[index][field] = value;
    onUpdateMarks(updatedMarks);
  };

  const handleSave = () => {
    onUpdateMarks(marks);
    onSave(marks);
    onClose();
  };

  return (
    <div className="modal" style={{ display: 'block' }}>
      <div className="modal-dialog mt-5" style={{ maxWidth: '1400px', marginLeft: "280px" }}>
        <div className="modal-content glass-effect" style={{ height: "600px" }}>
          <div className="modal-header">
            <h5 className="modal-title">Edit Marks</h5>
            <button type="button" className="close" onClick={onClose}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body p-5">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Proposal</th>
                  <th>Progress 1</th>
                  <th>Progress 2</th>
                  <th>Final Presentation</th>
                  <th>Status Doc</th>
                  <th>Log Book</th>
                  <th>Proposal Document</th>
                  <th>Status Doc 2</th>
                  <th>Final Thesis</th>
                  <th>Total Marks</th>
                </tr>
              </thead>
              <tbody>
                {marks.map((mark, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        type="text"
                        value={mark.studentName}
                        style={{ width: "80px" }}
                        onChange={(e) => handleChange(index, 'studentName', e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={mark.proposal}
                        style={{ width: "60px" }}
                        onChange={(e) => handleChange(index, 'proposal', e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={mark.progress1}
                        style={{ width: "60px" }}
                        onChange={(e) => handleChange(index, 'progress1', e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={mark.progress2}
                        style={{ width: "60px" }}
                        onChange={(e) => handleChange(index, 'progress2', e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={mark.finalPresentation}
                        style={{ width: "60px" }}
                        onChange={(e) => handleChange(index, 'finalPresentation', e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={mark.statusDoc}
                        style={{ width: "60px" }}
                        onChange={(e) => handleChange(index, 'statusDoc', e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={mark.logBook}
                        style={{ width: "60px" }}
                        onChange={(e) => handleChange(index, 'logBook', e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={mark.proposalDocument}
                        style={{ width: "60px" }}
                        onChange={(e) => handleChange(index, 'proposalDocument', e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={mark.statusDoc2}
                        style={{ width: "60px" }}
                        onChange={(e) => handleChange(index, 'statusDoc2', e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={mark.finalThesis}
                        style={{ width: "60px" }}
                        onChange={(e) => handleChange(index, 'finalThesis', e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={mark.totalMarks}
                        style={{ width: "60px" }}
                        onChange={(e) => handleChange(index, 'totalMarks', e.target.value)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={handleSave}>
              Save
            </button>
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;