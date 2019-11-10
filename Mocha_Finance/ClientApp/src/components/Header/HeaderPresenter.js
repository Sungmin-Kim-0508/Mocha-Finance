import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
import style from "./header.module.scss";
import SearchBar from "../Search";
import Toggler from "../../utils/NavToggleBtn";

const HeaderPresenter = ({ auth }) => {
  const { isAuthenticated, user } = auth;
  const AuthLinkDesktop = () => (
    <li className={`nav-item dropdown ${style.desktopLink}`}>
      <a
        className="nav-link dropdown-toggle"
        href="#"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        MY USER NAME
      </a>
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <a className="dropdown-item">Profile</a>
        <NavLink to={routes.favorite} className="dropdown-item">
          My Favourite
        </NavLink>
        <a className="dropdown-item">Log Out</a>
      </div>
    </li>
  );
  const AuthLinkMobile = () => (
    <li className={`nav-item dropdown ${style.mobileLink}`}>
      <a
        className="nav-link dropdown-toggle"
        href="#"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        MY USER NAME
      </a>
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <a className="dropdown-item">Profile</a>
        <NavLink to={routes.favorite} className="dropdown-item">
          My Favourite
        </NavLink>
        <a className="dropdown-item">Log Out</a>
      </div>
    </li>
  );
  const GuestLink = () => (
    <>
      <li className="nav-item">
        <NavLink to={routes.login} className="nav-link">
          Login
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to={routes.register} className="nav-link">
          Register
        </NavLink>
      </li>
    </>
  );

  return (
    <header className={style.header}>
      <nav className="navbar navbar-expand-sm bg-dark">
        <NavLink className="navbar-brand" to={routes.home}>
          Mocha Finance
        </NavLink>
        <button
          className={`navbar-toggler ${style.toggleBtn}`}
          type="button"
          data-toggle="collapse"
          data-target="#navbarForCollapsing"
          aria-controls="navbarForCollapsing"
        >
          <Toggler />
        </button>

        <section className={style.searchBar}>
          <SearchBar />
        </section>

        <section
          className={`collapse navbar-collapse ${style.links}`}
          id="navbarForCollapsing"
        >
          <ul className="navbar-nav mr-auto">
            {/* <AuthLinkMobile /> */}
            <li className="nav-item">
              <NavLink to={routes.predict} className="nav-link">
                Predict Your Stock
              </NavLink>
            </li>
            {isAuthenticated === false && <GuestLink />}
            {isAuthenticated && user && <AuthLinkDesktop />}
            {isAuthenticated && user && <AuthLinkMobile />}
            {/* <AuthLinkDesktop /> */}
          </ul>
        </section>
      </nav>
    </header>
  );
};

export default HeaderPresenter;
