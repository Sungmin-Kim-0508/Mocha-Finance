import React from "react";
import style from "./navToggleBtn.module.scss";

const NavToggleBtnPresenter = () => {
  return (
    <>
      <section className={style.toggleBtn}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </section>
    </>
  );
};

export default NavToggleBtnPresenter;
