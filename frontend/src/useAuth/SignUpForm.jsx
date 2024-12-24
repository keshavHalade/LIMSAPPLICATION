import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginImg } from "../assets";
import { getRoles, getSites } from "../api";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    site: "",
    role: "",
  });
  const [errors, setErrors] = useState({});
  const [role, setRole] = useState([]);
  const [sites, setSites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [rolesResponse, sitesResponse] = await Promise.all([getRoles(), getSites()]);
        setRole(rolesResponse.data || []);
        setSites(sitesResponse.data || []);
      } catch (error) {
        console.error("Error fetching roles/sites:", error);
      }
    };
    fetchData();
  }, []); // Ensures this runs only once on mount

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email.includes("@")) newErrors.email = "Invalid email.";
    if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";
    if (!formData.site) newErrors.site = "Site is required.";
    if (!formData.role) newErrors.role = "Role is required.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      const resData = {
        USER_ID: 6,
        NAME: formData.name,
        EMAIL: formData.email,
        PASSWORD: formData.password,
        ROLE: formData.role,
        SITE: formData.site,
      };

      try {
        const response = await fetch("http://localhost:5000/api/register-user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(resData),
        });

        if (response.ok) {
          const data = await response.json();
          alert(`Signup successful! ${data.status}`);
          setErrors({});
          setFormData({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            site: "",
            role: "",
          });
          navigate("/login");
        } else {
          const errorData = await response.json();
          setErrors(errorData.error || "An error occurred during signup.");
        }
      } catch (err) {
        setErrors("Failed to connect to the server. Please try again.");
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div 
    className="d-flex justify-content-center align-items-center min-vh-100 bg-light"
    >
      <div
        className="d-flex shadow-lg rounded overflow-hidden"
        style={{ width: "900px", maxWidth: "100%", margin: "20px" }}
      >
        <div className="w-50 bg-dark p-0 d-none d-md-block">
          <img
            src={LoginImg}
            alt="Signup Illustration"
            className="img-fluid w-100 h-100"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Right Section: Form */}
        <div className="w-50 bg-white p-4">
          <h2 className="text-center mb-4">Signup</h2>
          <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
              />
              <small className="text-danger">{errors.name}</small>
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
              />
              <small className="text-danger">{errors.email}</small>
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="form-control"
              />
              <small className="text-danger">{errors.password}</small>
            </div>
            <div>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="form-control"
              />
              <small className="text-danger">{errors.confirmPassword}</small>
            </div>
            <div>
              <select
                name="site"
                value={formData.site}
                onChange={handleChange}
                className="form-select"
              >
                <option value="">Select Site</option>
              {
                sites.map((site) => (
                              <option key={site.SITE_ID} value={site.SITE_NAME}>
                    {site.SITE_NAME
                    }
                  </option>
                ))}
              </select>
              <small className="text-danger">{errors.site}</small>
            </div>
            <div>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="form-select"
              >
                <option value="">Select Role</option>
                {role.map((role) => (
                  <option key={role.ROLE_ID} value={role.ROLE_NAME}>
                    {role.ROLE_NAME}
                  </option>
                ))}
              </select>
              <small className="text-danger">{errors.role}</small>
            </div>
            <button type="submit" className="btn  bg-dark
            font-weight-bold text-white text-uppercase
            btn-block mt-3">
              Sign up
            </button>
            <div className="text-center mt-2">
              Are you a old user? If yes, please <a href="/login">Login</a>.
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;


