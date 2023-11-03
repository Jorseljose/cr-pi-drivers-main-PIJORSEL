import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "../src/Views/Home/Home";
import Landing from "./Views/Landing/Landing";
import Create from "./Views/Create/Create";
import Details from "./Views/Details/Details";
import Navbar from "./Components/Navbar/Navbar";

const Dashboard = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <div
        style={{
          backgroundColor: "red",
          flex: 1,
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/app" element={<Dashboard />}>
          <Route path="home" element={<Home />} />
          <Route path="detail:id" element={<Details />} />
          <Route path="create" element={<Create />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
