
import { Link } from "react-router-dom";


import { FaSync } from "react-icons/fa";

const Navbar = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <header className="header container">
      <div className="titleContainer">
      <Link to="/">
      <i className="fas fa-video"></i> BIT TV SEARCH
    </Link>
      </div>
      <div className="iconsContainer" onClick={handleRefresh}>
        <FaSync className="icon" />
        <Link to="/about" className="link">
          <p className="title">About</p>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
