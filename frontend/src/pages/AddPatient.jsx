import React, { useState } from "react";

function AddPatient() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
    address: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (validateForm()) {
    //   // Add your code here
    // }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="container" >
          <div className="d-flex flex-row">
            <label className="form-label">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="form-control"
            />
            {errors.name && <div className="text-danger">{errors.name}</div>}
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddPatient;
