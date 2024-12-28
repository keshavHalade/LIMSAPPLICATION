import React from "react";
import { Navbar, Sidebar } from "../component";

function Dashboard() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <div className="d-flex flex-grow-1">
        {/* Left Sidebar */}
        <div className="d-none d-lg-flex flex-column col-lg-2 bg-light border-end overflow-auto">
          <Sidebar sides="left" />
        </div>

        {/* Main Content */}
        <div className="flex-grow-1 p-3 bg-white">
          {/* <MainContent /> */}
          <h1>Lab Portal </h1>
          <h4>Welcome to our lab portal</h4>
          
        </div>

        {/* Right Sidebar */}
        <div className="d-none d-lg-flex flex-column col-lg-2 bg-light border-start overflow-auto">
          <Sidebar sides="right" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
