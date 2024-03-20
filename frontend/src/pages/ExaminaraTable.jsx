import React from "react";
import Sidebar from "../component/Sidebar";

export default function examinarTable() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>

        <div className="mt-4 mx-5" style={{ marginBottom: "-40px" }}>
          <h2>Examinar Table</h2>
        </div>

        <div>
          {/* CSS within a style block */}
          <style>
          {`
              .custom-table {
                width: 80%; 
                border-collapse: collapse; 
                font-family: 'Times New Roman', serif;
                background-color: white; /* White background */
                border-radius: 10px;   /* Rounded corners */
                margin-top: 100px;      /* Top margin */
                margin-left: 260px; 
              }

              .custom-table th,
              .custom-table td {
                border: 2px solid #ddd;
                text-align: left;
                padding: 12px;
              }

                    .custom-table th {
                        font-weight: bold; 
                    }

                    /* Style for all buttons in the table */
                    button {
                    border: none;
                    color: red;
                    padding: 8px 46px;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 16px;
                    border-radius: 4px; /* Slightly rounded corners */
                    cursor: pointer;  /* Change the cursor to a hand on hover */
                    }

                    /* Style for buttons on hover */
                    table button:hover {
                    background-color: #3e8e41; /* Darker green on hover */
                    }
            `}
          </style>

          <table className="table table-sm custom-table">
          <tr>
    <th>ID</th>
    <th>name</th>
    <th>proposal</th>
    <th>progress 1</th>
    <th>progress 2</th>
    <th>action</th>
  </tr>
  <tr>
    <td>001</td>
    <td>20</td>
    <td>50</td>
    <td>40</td>
    <td>25</td>
    <td><button>Add</button></td>
  </tr>
  <tr>
    <td>002</td>
    <td>50</td>
    <td>45</td>
    <td>78</td>
    <td>45</td>
    <td><button>Add</button></td>
  </tr>
  <tr>
    <td>003</td>
    <td>80</td>
    <td>50</td>
    <td>90</td>
    <td>90</td>
    <td><button>Add</button></td>
  </tr>
  <tr>
    <td>004</td>
    <td>50</td>
    <td>26</td>
    <td>50</td>
    <td>80</td>
    <td><button>Add</button></td>
  </tr>
          </table>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px', marginRight: '80px' }}>
                <button

                  
                  type="submit"
                  className="btn btn-outline-info mt-5"
                >
                  Add
                </button>

                <button
                  type="submit"
                  className="btn btn-outline-danger mt-5"
                >
                  Delete
                </button>
              </div>
    </div>
  );
}
