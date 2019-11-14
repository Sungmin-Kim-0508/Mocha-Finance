import React from "react";
import Spinner from "../../utils/Spinner";
import style from "./searchResult.module.scss";
import StockDetails from "../StockDetails";

const SearchResultPresenter = ({
  stock,
  myFavourites,
  handleChecked,
  handleAddStockOnFavourite
}) => {
  const { symbol, companyName, stockInfos, isSearch, isLoading } = stock;
  console.log(myFavourites);
  return (
    <section className={style.searchResultContainer}>
      {isLoading && stockInfos.length === 0 && <Spinner />}
      {isLoading === false && isSearch === true && stockInfos.length > 0 && (
        <StockDetails
          stock={stock}
          myFavourites={myFavourites}
          symbol={symbol}
          companyName={companyName}
          stockInfos={stockInfos}
          handleChecked={handleChecked}
          handleAddStockOnFavourite={handleAddStockOnFavourite}
        />
      )}
      {isLoading === false && isSearch === true && stockInfos.length === 0 && (
        <p>No Results</p>
      )}
    </section>
  );
};

export default SearchResultPresenter;
