import React from "react";
import { Navbar, Sidebar } from "../component";
import { MainContent } from "../containers";

function PatientDashboard() {
  return (
    <div className="d-flex flex-column vh-100">
      {/* Navbar */}
      <Navbar />

      {/* Content Area */}
      <div className="d-flex flex-grow-1">
        {/* Sidebar */}
        <Sidebar sides="Patients" className="sidebar bg-light border-end" />

        {/* Main Content */}
        <div className="flex-grow-1 p-4">
          <MainContent />
        </div>
      </div>
    </div>
  );
}

export default PatientDashboard;
