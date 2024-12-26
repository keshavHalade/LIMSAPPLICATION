import "./App.css";
import { Dashboard, PatientDashboard } from "./containers";
import { AddPatient } from "./pages";
// import Patients from "./pages/Patients";
import Login from "./useAuth/Login";
import { Route, Routes } from "react-router-dom";
import SignupForm from "./useAuth/SignUpForm";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/patientDash" element={<PatientDashboard />} />
        {/* <Route path="/viewPatient" element={ <Patients />} /> */}
        <Route path="/patientDash/add" element={ <AddPatient />} />
      </Routes>
    </div>
  );
}

export default App;
