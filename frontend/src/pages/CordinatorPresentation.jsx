import React, { useState } from 'react';
import Sidebar from '../component/Sidebar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CordinatorPresentation() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [groupId, setGroupId] = useState('');
  const [title, setTitle] = useState('');
  const [examiner, setExaminer] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const presentationData = {
      groupId,
      title,
      examiner,
      date: selectedDate,
      time: selectedTime,
    };

    try {
      const response = await axios.post('http://localhost:8080/presentation', presentationData);
      console.log(response.data);
      toast.success('Presentation created successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (error) {
      console.error('Error creating presentation:', error);
      toast.error('Error creating presentation!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>

        <div className="mt-5 mx-5" style={{ marginBottom: "-40px" }}>
          <h2>Precentation Schedule page</h2>
        </div>

        <div
          className="shadow-sm p-3 mb-5 bg-white rounded"
          style={{
            marginLeft: "450px",
            width: "900px",
            height: "500px",
            marginTop: "90px",
          }}
        >
          <div>
            <form className="p-4" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control mb-4"
                  placeholder="group number"
                  value={groupId}
                  onChange={(e) => setGroupId(e.target.value)}
                />
              </div>

              <div className="form-group mb-4">
                <select
                  className="form-control"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                >
                  <option value="">presentation title</option>
                  <option value="proposal">proposal</option>
                  <option value="progress 1">progress 1</option>
                  <option value="progress 2">progress 2</option>
                  <option value="final presentation">final presentation</option>
                </select>
              </div>

              <div className="form-group mb-4">
                <select
                  className="form-control"
                  value={examiner}
                  onChange={(e) => setExaminer(e.target.value)}
                >
                  <option value="">examiner</option>
                  <option value="examiner 1">examiner 1</option>
                  <option value="examiner 2">examiner 2</option>
                  <option value="examiner 3">examiner 3</option>
                  <option value="examiner 4">examiner 4</option>
                </select>
              </div>

              <div className="form-group mb-4 d-flex justify-content-start">
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  className="form-control"
                  placeholderText="Select date"
                />
              </div>

              <div className="form-group mb-4">
                <div className="input-group">
                  <input
                    type="time"
                    className="form-control"
                    value={selectedTime}
                    onChange={(e) => handleTimeChange(e.target.value)}
                  />
                </div>
              </div>

              <div className="d-flex justify-content-between">
                <button type="submit" className="btn btn-outline-info mt-5">
                  Submit
                </button>

                <button type="button" className="btn btn-outline-danger mt-5">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}