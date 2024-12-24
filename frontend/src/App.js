import "./App.css";
import { Dashboard } from "./containers";
import Login from "./useAuth/Login";
import { Route, Routes } from "react-router-dom";
import SignupForm from "./useAuth/SignUpForm";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupForm/>} />
      </Routes>
    </div>
  );
}

export default App;
