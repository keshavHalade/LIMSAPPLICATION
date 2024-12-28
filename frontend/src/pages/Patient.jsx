import React, { useEffect, useState } from "react";
import { Search, UserPlus, Filter } from "lucide-react";
import { Navbar, PatientDetailsModal } from "../component";
import { getPatients } from "../api/index";
import { useNavigate } from "react-router-dom";

const Patient = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPatients() {
      try {
        const data = await getPatients();
        console.log(data.data);
        setPatients(data.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch patient data.");
        setLoading(false);
      }
    }
    fetchPatients();
  }, []);

  const handleView = (patient) => {
    setSelectedPatient(patient);
    setShowModal(true);
  };

  const filteredPatients = patients.filter(
    (patient) =>
      patient.FirstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.LastName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.PatientID?.toString()
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  if (loading)
    return (
      <div className="min-vh-100 d-flex justify-content-center align-items-center">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="min-vh-100 d-flex justify-content-center align-items-center">
        {error}
      </div>
    );

  return (
    <div className="min-vh-100 d-flex flex-column">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="container my-4 flex-grow-1">
        {/* Header Section */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="h4 mb-0">Patient Management</h1>
          <button
            className="btn btn-primary d-flex align-items-center"
            onClick={() => navigate("/patientDash/add")}
          >
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
                    <th scope="col">DOB</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Email</th>
                    <th scope="col">Address</th>
                    <th scope="col">Tests</th>
                    <th scope="col" className="text-center">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPatients.length > 0 ? (
                    filteredPatients.map((patient) => (
                      <tr key={patient.PatientID}>
                        <td>{patient.PatientID}</td>
                        <td>{`${patient.FirstName} ${patient.LastName}`}</td>
                        <td>{patient.DOB}</td>
                        <td>{patient.Gender}</td>
                        <td>{patient.ContactNumber}</td>
                        <td>{patient.Email}</td>
                        <td>{patient.Address}</td>
                        <td>
                          {patient.Tests.length > 0
                            ? patient.Tests.join(", ")
                            : "No tests available"}
                        </td>
                        <td className="text-center">
                          <button
                            className="btn btn-link text-primary"
                            onClick={() => handleView(patient)}
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="9" className="text-center">
                        No patients found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <PatientDetailsModal
        patient={selectedPatient}
        showModal={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
};

export default Patient;
