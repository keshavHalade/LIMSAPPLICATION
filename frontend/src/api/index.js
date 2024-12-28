import axios from "axios";

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

const getRoles = () => API.get("/roles");
const getAllUsers = () => API.get("/users");
const getSites = () => API.get("/sites");
const getPatients = () => API.get("/patientsWithTests");
const getSamples = () => API.get("/getSamples");

export { getRoles, getAllUsers, getSites, getPatients, getSamples };
