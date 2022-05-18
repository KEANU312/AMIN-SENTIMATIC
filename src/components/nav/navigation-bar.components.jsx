import "./navigatoin-bar.style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSmile,
  faFrown,
  faMagnifyingGlass,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Outlet, Link, useLocation, NavLink } from "react-router-dom";
import { SearchBar } from "../searchBar/searhbar.components";
import { useState, useEffect, useLayoutEffect } from "react";
import { Footer } from "../footer/footer.components";

// const activeTab = (history, path) => {
//   if (history.location.pathname === path) {
//     return { color: "red" };
//   }

export const NavigationBar = () => {
  const [click, setClick] = useState(false);

  const location = useLocation();

  const changeIcon = () => setClick(!click);

  useLayoutEffect(() => {
    if (click) {
      setClick(false);
    }
  }, [location]);

  const activeLine = ({ isActive }) =>
    isActive ? "nav-link nav-link-active" : "nav-link";

  return (
    <div className="main-nav-container">
      <div className="nav-container">
        <Link to="/" className="logo-container-link">
          <div className="logo-container">
            <div className="logo">AMIN-SENTIMATIC</div>
            <div className="logo-small">A-SENT</div>
            <div className="favicons">
              <FontAwesomeIcon icon={faSmile} className="icon-smile" />
              <FontAwesomeIcon icon={faFrown} className="icon-frown" />
            </div>
          </div>
        </Link>
        <div className="nav-menu">
          <NavLink to="/" className={activeLine}>
            TYPE
          </NavLink>
          <NavLink to="/Comming-Soon" className={activeLine}>
            CSV
          </NavLink>
          <NavLink to="/Comming-Soon1" className={activeLine}>
            TEXT FILE
          </NavLink>
          <NavLink to="/About" className={activeLine}>
            About
          </NavLink>
          <div onClick={changeIcon}>
            <FontAwesomeIcon
              icon={click ? faTimes : faMagnifyingGlass}
              className="fa-nav-mag"
            />
          </div>
        </div>
      </div>
      <div
        className={`${
          click ? "search-barcontainer-nav" : "search-barcontainer-nav-none"
        }`}
      >
        <SearchBar searchPlaceholder={"Search Site "} />
      </div>
      <div className="outlet-bottom">
        <Outlet />
      </div>
      {/* // put margin to deal with footer */}
      <div className="nav-footer">
        <Footer />
      </div>
    </div>
  );
};
