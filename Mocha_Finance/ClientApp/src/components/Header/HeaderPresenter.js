import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
import style from "./header.module.scss";
import SearchBar from "../Search";

const HeaderPresenter = () => {
  const AuthLink = () => (
    <div className={style.authLink}>
      <li>MY USER NAME</li>
      <div className={style.dropList}>
        <li>Profile</li>
        <li>Log Out</li>
      </div>
    </div>
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
      <nav className={style.nav}>
        <section className={style.logo}>
          <li>
            <NavLink to={routes.home}>Mocha Finance</NavLink>
          </li>
        </section>
        <section className={style.searchBar}>
          <SearchBar />
        </section>
        <section className={style.navLinks}>
          <div className={style.normalLinks}>
            <li>
              <a href="#">About</a>
            </li>
            <NavLink to={routes.favorite}>My Favourite</NavLink>
          </div>
          <div className={style.userLinks}>
            {/* <GuestLink /> */}
            <AuthLink />
          </div>
        </section>
      </nav>
    </header>
  );
};

export default HeaderPresenter;
