import { NavLink } from "react-router-dom";
import home from "../../images/home.svg";
import discover from "../../images/discover.svg";
import post from "../../images/post.svg";
import info from "../../images/info.svg";
import profile from "../../images/profile.svg";
import "./Nav.css";

export default function Nav() {
  return (
    <>
      <nav>
        <NavLink to="/">
          <div className="nav-dual-coding">
            <img src={home} alt="Home Icon" />
            <span>Home</span>
          </div>
        </NavLink>
        <NavLink to="/directory">
          <div className="nav-dual-coding">
            <img src={discover} alt="Discover Icon" />
            <span>Directory</span>
          </div>
        </NavLink>
        <NavLink to="/create">
          <div className="nav-dual-coding">
            <img src={post} alt="Post Icon" />
            <span>Post</span>
          </div>
        </NavLink>
        <NavLink to="/info">
          <div className="nav-dual-coding">
            <img src={info} alt="Info Icon" />
            <span>Events</span>
          </div>
        </NavLink>
        <NavLink to="/profile">
          <div className="nav-dual-coding">
            <img src={profile} alt="Profile Icon" />
            <span>Profile</span>
          </div>
        </NavLink>
      </nav>
    </>
  );
}
