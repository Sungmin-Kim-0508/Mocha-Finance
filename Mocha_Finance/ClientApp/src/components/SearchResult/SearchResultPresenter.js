import React from "react";
import Spinner from "../../utils/Spinner";
import style from "./searchResult.module.scss";
import StockDetails from "../StockDetails";

const SearchResultPresenter = ({
  stock,
  myFavourite,
  handleChecked,
  handleAddStockOnFavourite
}) => {
  const {
    symbol,
    companyName,
    stockInfos,
    isSearched,
    isLoading,
    isNotFoundSymbol
  } = stock;
  const { myFavourites } = myFavourite;
  return (
    <section className={style.searchResultContainer}>
      {isLoading && stockInfos.length === 0 && <Spinner />}
      {isLoading === false && isNotFoundSymbol && (
        <span>Not Found Company's Symbol</span>
      )}
      {isLoading === false && isSearched === true && stockInfos.length > 0 && (
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
      {isLoading === false &&
        isSearched === true &&
        stockInfos.length === 0 && <p>No Results</p>}
    </section>
  );
};

export default SearchResultPresenter;
