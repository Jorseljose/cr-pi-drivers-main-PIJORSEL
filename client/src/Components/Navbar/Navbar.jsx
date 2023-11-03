import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div
      style={{
        height: "75px",
        backgroundColor: "gray",
      }}
    >
      <div className="button-container">
        <Link to={"home"}>
          <button className="nav-button">Home</button>
        </Link>

        <Link to={"/form"}>
          <button className="nav-button">Create</button>
        </Link>

        <Link to={"/about"}>
          <button className="nav-button">About</button>
        </Link>

        <Link to={"/"}>
          <button className="nav-button">Exit</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
