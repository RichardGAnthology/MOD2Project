import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="navBarContainer">
      <nav className="navBar">
        <ul className="ul">
          <Link to="/home">
            <li>Home</li>
          </Link>

          <Link to="/watchlist">
            <li>Watch List</li>
          </Link>

          <Link to="/locations">
            <li>Locations</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
