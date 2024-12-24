import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginImg } from "../assets";
import {LoginInput} from "../component";
import { getAllUsers } from "../api";
const Login = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [storedUser, setStoredUser] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    site: "",
    role: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email.includes("@")) newErrors.email = "Invalid email.";
    if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";
    if (!formData.site) newErrors.site = "Site is required.";
    if (!formData.role) newErrors.role = "Role is required.";
    return newErrors;
  };


  useEffect(() => {
    getAllUsers()
      .then((data) => {
        console.log("data", data.data);
        setStoredUser(data.data || []);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      const matchingUser = storedUser.find(
        (user) =>
          user.EMAIL === formData.email && user.PASSWORD === formData.password
      );
  
      if (matchingUser) {
        setIsAuthenticated(true);
        alert(`Welcome, ${matchingUser.NAME}!`);
        navigate("/Dashboard");
      } else {
        setErrors({ email: "Invalid email or password." });
      }
    } else {
      setErrors(validationErrors);
    }
  };
  

  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-light">
      <div
        className="row shadow-lg rounded overflow-hidden w-100"
        style={{ maxWidth: "900px", margin: "20px" }}
      >
        {/* Image Section */}
        <div className="col-md-6 p-0 d-none d-md-block">
          <img
            src={LoginImg}
            alt="Login Illustration"
            className="img-fluid w-100 h-100"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Form Section */}
        <div className="col-12 col-md-6 bg-white p-4 d-flex flex-column justify-content-center">
          <h2 className="text-center mb-4">Login</h2>
          <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
            <div>
              <LoginInput
                placeHolder={"Email Id"}
                inputState={formData.email}
                inputStateFunc={handleChange}
                type="email"
                name="email"
              />
              <small className="text-danger">{errors.email}</small>
            </div>
            <div>
              <LoginInput
                placeHolder={"Password"}
                inputState={formData.password}
                inputStateFunc={handleChange}
                type="password"
                name="password"
              />
              <small className="text-danger">{errors.password}</small>
            </div>
            <div>
            
               <LoginInput
                placeHolder={"Site (e.g., example.com)"}
                inputState={formData.site}
                inputStateFunc={handleChange}
                type="text"
                name="site"
              />
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
                <option value="admin">Admin</option>
                <option value="editor">Editor</option>
                <option value="viewer">Viewer</option>
              </select>
              <small className="text-danger">{errors.role}</small>
            </div>
            <button type="submit" className="btn btn-primary btn-block mt-3">
              Login
            </button>
            <div className="text-center mt-2">
              Are you a new user? If yes, please <a href="/signup">sign up</a>.
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
