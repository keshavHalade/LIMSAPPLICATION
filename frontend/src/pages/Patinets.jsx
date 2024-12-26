import React, { useState } from "react";
import { Search, UserPlus, Filter } from "lucide-react";
import { Navbar } from "../component";

const Patients = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const patients = [
    {
      id: "PT123456",
      name: "John Doe",
      age: 45,
      gender: "Male",
      lastTest: "2024-03-12",
      status: "Active",
    },
    {
      id: "PT123457",
      name: "Jane Smith",
      age: 37,
      gender: "Female",
      lastTest: "2024-03-11",
      status: "Inactive",
    },
    // Add more mock data as needed
  ];

  return (
    <div className="min-vh-100 d-flex flex-column">
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <div className="container my-4 flex-grow-1">
        {/* Header Section */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="h4 mb-0">Patient Management</h1>
          <button className="btn btn-primary d-flex align-items-center">
            <UserPlus className="me-2" />
            Add New Patient
          </button>
        </div>

        {/* Search and Filter Section */}
        <div className="card mb-4 shadow-sm">
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-md-8 mb-3 mb-md-0">
                <div className="input-group">
                  <span className="input-group-text bg-light">
                    <Search />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search patients..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-4 text-md-end">
                <button className="btn btn-outline-secondary d-flex align-items-center">
                  <Filter className="me-2" />
                  Filters
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Patient Table */}
        <div className="card shadow-sm">
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered table-hover">
                <thead className="table-light">
                  <tr>
                    <th scope="col">Patient ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Last Test</th>
                    <th scope="col">Status</th>
                    <th scope="col" className="text-center">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {patients.map((patient) => (
                    <tr key={patient.id}>
                      <td>{patient.id}</td>
                      <td>{patient.name}</td>
                      <td>{patient.age}</td>
                      <td>{patient.gender}</td>
                      <td>{patient.lastTest}</td>
                      <td>
                        <span
                          className={`badge ${
                            patient.status === "Active"
                              ? "bg-success"
                              : "bg-secondary"
                          }`}
                        >
                          {patient.status}
                        </span>
                      </td>
                      <td className="text-center">
                        <a href="#" className="text-primary">
                          View
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patients;
