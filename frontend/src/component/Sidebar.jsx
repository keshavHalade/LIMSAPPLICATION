import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faFolder } from "@fortawesome/free-solid-svg-icons";
import groups from "../assets/Group";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

function Sidebar({ sides, className }) {
  const [collapsed, setCollapsed] = useState(false);
  const [activeGroups, setActiveGroups] = useState({});

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const toggleGroup = (groupIndex) => {
    setActiveGroups((prev) => ({
      ...prev,
      [groupIndex]: !prev[groupIndex],
    }));
  };

  return (
    <div
      className={`${className} d-flex flex-column`}
      style={{ width: collapsed ? "80px" : "250px", transition: "width 0.3s" }}
    >
      {/* Sidebar Header */}
      <div className="d-flex align-items-center justify-content-between px-3 py-2"
      style={{ backgroundColor: "#e3fdfd" }}>
        <span className={`fw-bold ${collapsed ? "d-none" : ""}`}>{sides} Sidebar</span>
        <button
          className="btn btn-sm btn-light"
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      {/* Sidebar Content */}
      <div className="flex-grow-1 p-2 overflow-auto">
        {groups
          .filter((group) => group.side === sides)
          .map((group, groupIndex) => (
            <React.Fragment key={group.title}>
              {/* Group Title */}
              <div
                className="d-flex align-items-center justify-content-between p-2 mb-2 rounded bg-light border"
                onClick={() => toggleGroup(groupIndex)}
                style={{ cursor: "pointer" }}
              >
                <span className={`fw-bold ${collapsed ? "d-none" : ""}`}>
                  {group.title}
                </span>
                <span>
                  {activeGroups[groupIndex] ? <FaChevronDown /> : <FaChevronRight />}
                </span>
              </div>

              {/* Group Items */}
              {activeGroups[groupIndex] &&
                group.items?.map((item) => (
                  <Link
                    key={item.value}
                    to={`/${item.value}`}
                    className="d-flex align-items-center px-3 py-2 text-decoration-none text-dark rounded"
                    style={{
                      transition: "background-color 0.2s",
                      fontSize: collapsed ? "0" : "1rem",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={item.icon || faFolder}
                      className="me-2"
                    />
                    <span className={collapsed ? "d-none" : ""}>{item.label}</span>
                  </Link>
                ))}
            </React.Fragment>
          ))}
      </div>

      {/* Sidebar Footer */}
      <div className="px-3 py-2 bg-light border-top">
        <span className={`text-muted ${collapsed ? "d-none" : ""}`}>Footer Info</span>
      </div>
    </div>
  );
}

export default Sidebar;
