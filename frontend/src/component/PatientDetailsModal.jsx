import React from "react";

const PatientDetailsModal = ({ patient, showModal, onClose }) => {
  if (!patient) return null;

  return (
    <div className={`modal ${showModal ? "d-block" : "d-none"}`} tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Patient Details</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <h5>Personal Details</h5>
            <p><strong>Full Name:</strong> {patient.FirstName} {patient.LastName}</p>
            <p><strong>DOB:</strong> {patient.DOB}</p>
            <p><strong>Gender:</strong> {patient.Gender}</p>
            <p><strong>Contact:</strong> {patient.ContactNumber}</p>
            <p><strong>Email:</strong> {patient.Email}</p>
            <p><strong>Address:</strong> {patient.Address}</p>

            <h5 className="mt-4 mb-3">Test Details</h5>
            {patient.Tests && patient.Tests.length > 0 ? (
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Test Name</th>
                  </tr>
                </thead>
                <tbody>
                  {patient.Tests.map((test, index) => (
                    <tr key={index}>
                      <td>{test}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No test records available for this patient.</p>
            )}
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

export default PatientDetailsModal;
