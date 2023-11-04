import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/Views/Home/Home";
import Landing from "./Views/Landing/Landing";
import Create from "./Views/Create/Create";
import Details from "./Views/Details/Details";
import Dashboard from "./Components/Dashboard/Dashboard";

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
