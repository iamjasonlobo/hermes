import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li className="home-link" key="home-button">
            <Link to="/">
              Home
            </Link>
          </li>
          <li><Link to="/user">Points</Link></li>
           <li><Link to="/user">Profile</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;