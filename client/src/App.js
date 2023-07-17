import logo from "./logo.svg";
import "./App.css";

// components
import NavBar from "./components/NavBar";
import VinayakChittora from "./components/VinayakChittora";
import AllUsers from "./components/AllUsers";
import AddUser from "./components/AddUser";
import Edituser from "./components/EditUser";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<VinayakChittora />} />
        <Route path="/allusers" element={<AllUsers />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/edituser/:id" element={<Edituser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
