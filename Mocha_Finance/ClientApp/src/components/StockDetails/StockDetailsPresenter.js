import React from "react";
import uuid4 from "uuid4";
import style from "./stockDetail.module.scss";
import AddStockModal from "./addStockModal";

const StockDetailsPresenter = ({
  stock,
  auth,
  match,
  myFavourites,
  handleChecked,
  handleAddStockOnFavourite
}) => {
  const { symbol, companyName, stockInfos } = stock;
  const { isAuthenticated } = auth;
  const { params } = match;
  return (
    <div className={style.detailsContainer}>
      <section className={style.companyName_symbol_addBtn}>
        <div className={style.companyName_symbol}>
          <h4>{companyName}</h4>
          <h6>{symbol}</h6>
        </div>
        {isAuthenticated && params.hasOwnProperty("symbol") === false && (
          <div className={style.addBtn}>
            <button
              type="button"
              data-toggle="modal"
              data-target="#addStockModal"
            >
              Add To Favourite
            </button>
          </div>
        )}
      </section>
      <section className={style.graph_details}>
        <div className={style.graph}>Graph Image</div>
        <div className={style.details}>
          {stockInfos.map(item => (
            <p key={uuid4()}>
              <span className={style.category}>
                <span className={style.title}>Date</span>
                <span>{item.date}</span>
              </span>
              <span className={style.category}>
                <span className={style.title}>high</span>
                <span>{item.high}</span>
              </span>
              <span className={style.category}>
                <span className={style.title}>low</span>
                <span>{item.low}</span>
              </span>
              <span className={style.category}>
                <span className={style.title}>Open</span>
                <span>{item.open}</span>
              </span>
              <span className={style.category}>
                <span className={style.title}>Close</span>
                <span>{item.close}</span>
              </span>
            </p>
          ))}
        </div>
      </section>
      {params.hasOwnProperty("symbol") ? (
        ""
      ) : (
        <AddStockModal
          myFavourites={myFavourites}
          handleChecked={handleChecked}
          handleAddStockOnFavourite={handleAddStockOnFavourite}
        />
      )}
    </div>
  );
};

export default StockDetailsPresenter;
