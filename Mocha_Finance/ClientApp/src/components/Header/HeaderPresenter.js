import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
import style from "./header.module.scss";
import SearchBar from "../Search";
import Toggler from "../../utils/NavToggleBtn";

const HeaderPresenter = () => {
  const AuthLink = () => (
    <>
      <a
        class="nav-link dropdown-toggle"
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
        <a className="dropdown-item">Log Out</a>
      </div>
    </>
  );
  const GuestLink = () => (
    <div className={style.guestLink}>
      <li>
        <NavLink to={routes.login}>Login</NavLink>
      </li>
    </div>
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
            <li className={`nav-item ${style.mobileLink}`}>
              <a href="#" className="nav-link">
                My User Name
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <NavLink to={routes.favorite} className="nav-link">
                My Favourite
              </NavLink>
            </li>
            <li className={`nav-item dropdown ${style.desktopLink}`}>
              {/* <GuestLink /> */}
              <AuthLink />
            </li>
          </ul>
        </section>
      </nav>
    </header>
  );
};

export default HeaderPresenter;
