import "./Navbar.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="header">
      <img src={logo} className="App-logo" alt="logo" />

      <nav className="navbar">
        <a
          href="https://www.linkedin.com/in/alex-ivanov-260766202/"
          target="_blank"
          rel="noreferrer"
        >
          About Us
        </a>
        {/* <Link to="/Experience">Experience</Link> */}
        <a
          href="https://www.linkedin.com/in/alex-ivanov-260766202/"
          target="_blank"
          rel="noreferrer"
        >
          Garage
        </a>
        <a
          href="https://www.linkedin.com/in/alex-ivanov-260766202/"
          target="_blank"
          rel="noreferrer"
        >
          Contacts
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
