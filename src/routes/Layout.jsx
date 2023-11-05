import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>

<div>
      <div className="sidenav">
        <img src="https://i.imgur.com/R0Glr9A.png" width="150px"></img>
        <Link className='sidenav-link' to="/services">Find Services</Link>
        <Link className='sidenav-link' to="/add-service">Add a Service</Link>
      <Link className='sidenav-link' to="/user">Profile</Link>
      <p>Balance: </p>
      <img className="sidenav-img" src="https://shimmering-stardust-c75334.netlify.app/assets/peeking.7c0ab599.png" ></img>
      </div>
      <div className="whole-page">
        <Outlet />
      </div>
      </div>



    </div>
  );
};

export default Layout;