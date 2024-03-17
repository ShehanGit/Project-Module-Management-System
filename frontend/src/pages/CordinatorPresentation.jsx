import React, { useState } from 'react'
import Sidebar from '../component/Sidebar'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import TimePicker from 'react-time-picker'
import 'react-time-picker/dist/TimePicker.css';

export default function CordinatorPresentation() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState('10:00');

    
  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const handleTimeChange = time => {
    setSelectedTime(time);
  };

  return (
    <div className="container-fluid">
    <div className="row">
      <div className="col-md-3">
        <Sidebar />
      </div>

      <div className="mt-4 mx-5" style={{ marginBottom: "-40px" }}>
        <h2>Add Users Page</h2>
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
                <option>project member</option>
                <option>supervisor</option>
                <option>co-supervisor</option>
              </select>
            </div>

            <div className="form-group mb-4">
              
            </div>

            <div className="form-group mb-4">
              
            </div>

            <div className="form-group mb-4">
              <select className="form-control">
                <option>examiner 1</option>
                <option>examiner 2</option>
                <option>examiner 3</option>
                <option>examiner 4</option>
              </select>
            </div>

            <div className="d-flex justify-content-between">
              <button
                type="submit"
                className="btn btn-outline-info mt-5  "
              >
                Submit
              </button>

              <button
                type="submit"
                className="btn btn-outline-danger mt-5 d-flex "
              >
                cancle
              </button>
            </div>
          </form>
        </div>
      </div>


    </div>
  </div>
  )
}
