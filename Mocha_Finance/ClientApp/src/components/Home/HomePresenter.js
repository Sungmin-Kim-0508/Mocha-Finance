import React from "react";
import ToggleBtn from "../../utils/NavToggleBtn";
import News from "../News";
import uuid4 from "uuid4";
import style from "./home.module.scss";
import AddStockModal from "./addStockModal";

const HomePresenter = ({
  myFavourites,
  symbol,
  companyName,
  stockInfos,
  isSearch,
  isLoading,
  error,
  handleSearch,
  handleSubmit,
  handleChecked,
  handleAddStockOnFavourite
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
          <StockDetails
            myFavourites={myFavourites}
            symbol={symbol}
            companyName={companyName}
            stockInfos={stockInfos}
            handleChecked={handleChecked}
            handleAddStockOnFavourite={handleAddStockOnFavourite}
          />
        )}
        {isLoading === false &&
          isSearch === true &&
          stockInfos.length === 0 && <p>No Results</p>}
      </section>
    </div>
  );
};

const StockDetails = ({
  myFavourites,
  symbol,
  companyName,
  stockInfos,
  handleChecked,
  handleAddStockOnFavourite
}) => {
  return (
    <div>
      <section>
        <div>
          <h4>{companyName}</h4>
          <h6>{symbol}</h6>
        </div>
        <div>
          <button
            type="button"
            data-toggle="modal"
            data-target="#addStockModal"
          >
            Add Favourite
          </button>
        </div>
      </section>
      <section>
        <div>Graph Image</div>
        <div>
          {stockInfos.map(item => (
            <p key={uuid4()}>
              <span>date: {item.date}</span>
              <span>high: {item.high}</span>
              <span>low: {item.low}</span>
              <span>Open: {item.open}</span>
              <span>Close: {item.close}</span>
              <br />
            </p>
          ))}
        </div>
      </section>
      <AddStockModal
        myFavourites={myFavourites}
        handleChecked={handleChecked}
        handleAddStockOnFavourite={handleAddStockOnFavourite}
      />
    </div>
  );
};

export default HomePresenter;
