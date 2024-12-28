import React, { useState } from "react";
import { Navbar } from "../component";
import axios from "axios";
import { User, Phone, Mail, Calendar, MapPin } from "lucide-react";
function AddPatient() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    DOB: "",
    gender: "",
    email: "",
    contactNumber: "",
    address: "",
    selectedTests: [],
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [currentTest, setCurrentTest] = useState("");

  const dummyTests = ["Blood Test", "X-Ray", "MRI", "CT Scan", "ECG"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNextStep = () => {
    if (step === 1 && validateForm()) {
      setStep(2);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim())
      newErrors.lastName = "Last name is required.";
    if (!formData.DOB.trim()) newErrors.DOB = "Date of birth is required.";
    if (!formData.gender.trim()) newErrors.gender = "Gender is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid.";
    if (!formData.contactNumber.trim())
      newErrors.contactNumber = "Contact number is required.";
    else if (!/^\d{10}$/.test(formData.contactNumber))
      newErrors.contactNumber = "Contact number must be 10 digits.";
    if (!formData.address.trim()) newErrors.address = "Address is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddTest = () => {
    if (currentTest && !formData.selectedTests.includes(currentTest)) {
      setFormData((prevData) => ({
        ...prevData,
        selectedTests: [...prevData.selectedTests, currentTest],
      }));
      setCurrentTest(""); // Clear the dropdown
    }
  };

  const handleDeleteTest = (test) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedTests: prevData.selectedTests.filter((t) => t !== test),
    }));
  };

  const handleEditTest = (test) => {
    setCurrentTest(test);
    setFormData((prevData) => ({
      ...prevData,
      selectedTests: prevData.selectedTests.filter((t) => t !== test),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");

    if (validateForm()) {
      try {
        console.log(formData);
        console.log("submitted");
        const response = await axios.post(
          "http://localhost:5000/api/addPatients",
          formData
        ); // Backend API
        setSuccessMessage(response.data.status);
        setFormData({
          firstName: "",
          lastName: "",
          DOB: "",
          gender: "",
          email: "",
          contactNumber: "",
          address: "",
          selectedTests: [],
        });
        setErrors({});
        setStep(1);
      } catch (error) {
        console.error(error);
        setErrors({ api: "Failed to register patient. Please try again." });
      }
    }
  };

  return (
    <div className="container-fluid">
      <Navbar />
      <div className="text-center my-4">
        <h3>{step === 1 ? "Register New Patient" : "Assign Tests"}</h3>
      </div>
      <div className="container bg-light rounded p-4 shadow-lg">
        {successMessage && (
          <div className="alert alert-success text-center">
            {successMessage}
          </div>
        )}

        {/* Step 1: Patient Registration */}
        {step === 1 && (
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="row mb-4">
              <div className="col-md-3 text-center mb-3">
                <User className="text-primary mb-1" />
                <label className="form-label d-block">Patient ID</label>
                <span className="badge bg-primary p-2">123</span>
              </div>
              <div className="col-md-3">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`form-control ${
                    errors.firstName ? "is-invalid" : ""
                  }`}
                  placeholder="Enter first name"
                />
                {errors.firstName && (
                  <div className="invalid-feedback">{errors.firstName}</div>
                )}
              </div>
              <div className="col-md-3">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`form-control ${
                    errors.lastName ? "is-invalid" : ""
                  }`}
                  placeholder="Enter last name"
                />
                {errors.lastName && (
                  <div className="invalid-feedback">{errors.lastName}</div>
                )}
              </div>
              <div className="col-md-3">
                <Phone className="text-primary mx-2" size={18} />
                <label className="form-label">Contact Number</label>
                <input
                  type="text"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  className={`form-control ${
                    errors.contactNumber ? "is-invalid" : ""
                  }`}
                  placeholder="Enter contact number"
                />
                {errors.contactNumber && (
                  <div className="invalid-feedback">{errors.contactNumber}</div>
                )}
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-md-4 mb-3">
                <label className="form-label d-block">Gender</label>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    value="Male"
                    id="genderMale"
                    checked={formData.gender === "Male"}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="genderMale">
                    Male
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    value="Female"
                    id="genderFemale"
                    checked={formData.gender === "Female"}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="genderFemale">
                    Female
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    value="Other"
                    id="genderOther"
                    checked={formData.gender === "Other"}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="genderOther">
                    Other
                  </label>
                </div>
                {errors.gender && (
                  <div className="text-danger mt-1">{errors.gender}</div>
                )}
              </div>
              <div className="col-md-4">
                <Calendar className="text-primary mx-2" size={18} />
                <label className="form-label">Date of Birth</label>
                <input
                  type="date"
                  name="DOB"
                  value={formData.DOB}
                  onChange={handleChange}
                  className={`form-control ${errors.DOB ? "is-invalid" : ""}`}
                />
                {errors.DOB && (
                  <div className="invalid-feedback">{errors.DOB}</div>
                )}
              </div>
              <div className="col-md-4">
                <Mail className="text-primary mx-2" size={18} />
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  placeholder="Enter email address"
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
            </div>

            <div className="mb-4">
              <MapPin className="text-primary mx-2" size={18} />
              <label className="form-label">Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                className={`form-control ${errors.address ? "is-invalid" : ""}`}
                placeholder="Enter address"
                rows="3"
              ></textarea>
              {errors.address && (
                <div className="invalid-feedback">{errors.address}</div>
              )}
            </div>
          </form>
        )}

        {/* Step 2: Test Selection */}
        {step === 2 && (
          <div>
            <h5>Select Tests</h5>
            <div className="row mb-3">
              <div className="col-md-6">
                <select
                  className="form-select"
                  value={currentTest}
                  onChange={(e) => setCurrentTest(e.target.value)}
                >
                  <option value="">Select a Test</option>
                  {dummyTests.map((test) => (
                    <option key={test} value={test}>
                      {test}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-3">
                <button
                  className="btn btn-primary"
                  onClick={handleAddTest}
                  disabled={!currentTest}
                >
                  Add Test
                </button>
              </div>
            </div>

            <div>
              <h6>Selected Tests</h6>
              {formData.selectedTests.length === 0 ? (
                <p>No tests selected yet.</p>
              ) : (
                <ul className="list-group">
                  {formData.selectedTests.map((test, index) => (
                    <li
                      key={index}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      {test}
                      <div>
                        <button
                          className="btn btn-sm btn-warning mx-1"
                          onClick={() => handleEditTest(test)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-sm btn-danger mx-1"
                          onClick={() => handleDeleteTest(test)}
                        >
                          Delete
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="text-center mt-4">
          {step > 1 && (
            <button
              type="button"
              className="btn btn-secondary mx-2"
              onClick={handlePrevStep}
            >
              Previous
            </button>
          )}
          {step < 2 && (
            <button
              type="button"
              className="btn btn-primary mx-2"
              onClick={handleNextStep}
            >
              Next
            </button>
          )}
          {step === 2 && (
            <button
              type="submit"
              className="btn btn-success"
              onClick={handleSubmit}
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddPatient;
