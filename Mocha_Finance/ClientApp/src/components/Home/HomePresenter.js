import React from "react";
import ToggleBtn from "../../utils/NavToggleBtn";
import News from "../News";
import uuid4 from "uuid4";
import style from "./home.module.scss";

const HomePresenter = ({
  stockInfos,
  isSearch,
  isLoading,
  error,
  handleSearch,
  handleSubmit
}) => {
  return (
    <div className={style.homeContainer}>
      {/* Menu Bar: Favourite, Predict */}
      <section className={style.btnWrapper}></section>
      <section className={style.searchResult}>
        {isLoading === false && isSearch === false && <News />}
        {isLoading && stockInfos.length === 0 && <p>Loading...</p>}
        {isLoading === false && isSearch === true && stockInfos.length > 0 && (
          <div>
            {stockInfos.map(item => (
              <p key={uuid4()}>
                <span>date: {item.date}</span>
                <span>high: {item.high}</span>
                <span>low: {item.low}</span>
                <br />
              </p>
            ))}
          </div>
        )}
        {isLoading === false &&
          isSearch === true &&
          stockInfos.length === 0 && <p>No Results</p>}
      </section>
    </div>
  );
};

export default HomePresenter;
