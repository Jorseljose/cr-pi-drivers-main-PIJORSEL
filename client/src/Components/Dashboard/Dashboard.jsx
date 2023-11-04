import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import style from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={style.Dashboard}>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
