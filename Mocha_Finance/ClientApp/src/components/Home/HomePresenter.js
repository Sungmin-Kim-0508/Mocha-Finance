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
  console.log(stockInfos);
  return (
    <div className={style.homeContainer}>
      {/* Menu Bar: Favourite, Predict */}
      <section className={style.btnWrapper}></section>
      <section className={style.searchResult}>
        {/* If no searching the stock */}
        {isLoading === false && isSearch === false && <News />}
        {/* If loading the stock */}
        {isLoading && stockInfos.length === 0 && <p>Loading...</p>}
        {/* If finishing loading the stock */}
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
