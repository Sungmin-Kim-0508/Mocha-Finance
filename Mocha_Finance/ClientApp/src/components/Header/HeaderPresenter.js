import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
import style from "./header.module.scss";

const HeaderPresenter = () => {
  const AuthLink = () => (
    <div className={style.authLink}>
      <li>MY USER NAME</li>
      <div>
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
  const Navigations = () => (
    <>
      <section className={style.logo}>
        <li>
          <NavLink to={routes.home}>logo</NavLink>
        </li>
      </section>
      <section className={style.navLinks}>
        {/* if(user is authenticated) MY USER NAME : GUEST */}
        <NavLink to={routes.favorite}>My Favourite</NavLink>
        <GuestLink />
        <AuthLink />
      </section>
    </>
  );
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <ul className={style.ul}>
          <Navigations />
        </ul>
      </nav>
    </header>
  );
};

export default HeaderPresenter;
