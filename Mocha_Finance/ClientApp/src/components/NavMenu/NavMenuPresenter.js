import React from "react";
import { NavLink } from "react-router-dom";

const NavMenuPresenter = () => {
  const navList = [
    {
      to: "/favourite",
      menuName: "My Favourite"
    },
    {
      to: "/predict",
      menuName: "Predict"
    }
  ];
  return (
    <nav>
      <ul>
        {navList.map((item, index) => (
          <li key={index}>
            <NavLink to={item.to}>{item.menuName}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenuPresenter;
