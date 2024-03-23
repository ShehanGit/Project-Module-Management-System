import React, { useState } from 'react';
import Sidebar from '../component/Sidebar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function CordinatorPresentation() {
  const [selectedDate, setSelectedDate] = useState(null); // State variable to hold selected date
  const [selectedTime, setSelectedTime] = useState(null); // State variable to hold selected time

  const handleDateChange = (date) => {
    setSelectedDate(date); // Update state with selected date
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time); // Update state with selected time
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
            <form className="p-4">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control mb-4"
                  placeholder="group number"
                />
              </div>

              <div className="form-group mb-4">
                <select className="form-control">
                  <option>presentation title</option>
                  <option>proposal</option>
                  <option>progress 1</option>
                  <option>progress 2</option>
                  <option>final presentation</option>

                </select>
              </div>


              <div className="form-group mb-4">
                <select className="form-control">
                  <option>examiner 1</option>
                  <option>examiner 2</option>
                  <option>examiner 3</option>
                  <option>examiner 4</option>
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
                  {/* Use a regular input field for time input */}
                  <input
                    type="time"
                    className="form-control"
                    value={selectedTime}
                    onChange={(e) => handleTimeChange(e.target.value)}
                  />
                </div>
              </div>

              <div className="d-flex justify-content-between">
                <button
                  type="submit"
                  className="btn btn-outline-info mt-5"
                >
                  Submit
                </button>

                <button
                  type="button"
                  className="btn btn-outline-danger mt-5"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
