import React from "react";
import Spinner from "../../utils/Spinner";
import uuid4 from "uuid4";
import AddFavouriteModal from "./addFavouriteModal";
import style from "./favourite.module.scss";
import { NavLink } from "react-router-dom";
import routes from "../../routes";

const FavouritePresenter = ({
  stock,
  myFavourites,
  handleClickList,
  handleAddFavourite,
  handleInput,
  handleGetAllStockByFavID
}) => {
  const { myFavouriteStocks, isLoading } = stock;
  return (
    <div className={style.container}>
      <section className={style.button}>
        <button type="button" data-toggle="modal" data-target="#favModal">
          Add My Favourites
        </button>
      </section>
      <section className={style.fav}>
        {myFavourites.length === 0 && <Spinner />}
        {myFavourites &&
          myFavourites.map(item => (
            <span
              key={uuid4()}
              className={style.favList}
              id={item.myFavouriteID}
              onClick={handleGetAllStockByFavID}
            >
              {item.myFavouriteName}
            </span>
          ))}
      </section>
      <section className={style.myFavStocks}>
        {isLoading && myFavouriteStocks.length === 0 && <Spinner />}
        {isLoading === false && myFavouriteStocks.length === 0 && (
          <p>No Result</p>
        )}
        {myFavouriteStocks.length > 0 &&
          myFavouriteStocks !== null &&
          myFavouriteStocks.map(stock => (
            <NavLink
              key={uuid4()}
              id={stock.symbol}
              className={style.myFavStocks__list}
              to={`${routes.favourite}/${stock.symbol}`}
            >
              <div className={style.company_name_symbol}>
                <span className={style.company_name}>{stock.name}</span>
                <span className={style.symbol}>({stock.symbol})</span>
              </div>
              <div className={style.company_stock_price}>
                <span className={style.label}>price:</span>
                <h4>{stock.price}</h4>
              </div>
            </NavLink>
          ))}
      </section>
      {/* Modal */}
      <AddFavouriteModal
        handleAddFavourite={handleAddFavourite}
        handleInput={handleInput}
      />
    </div>
  );
};

export default FavouritePresenter;
