import React from "react";
import News from "../News";
import uuid4 from "uuid4";
import style from "./home.module.scss";
import AddStockModal from "./addStockModal";

const HomePresenter = ({ stock }) => {
  const { isLoading } = stock;
  return (
    <div className={style.homeContainer}>
      {/* Menu Bar: Favourite, Predict */}
      <section className={style.btnWrapper}></section>
      <section className={style.searchResult}>
        {isLoading === false && <News />}
      </section>
    </div>
  );
};

export default HomePresenter;
