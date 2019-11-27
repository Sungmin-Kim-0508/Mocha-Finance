import React from "react";
import Spinner from "../../utils/Spinner";
import style from "./searchResult.module.scss";
import StockDetails from "../StockDetails";
import uuid4 from "uuid4";

const SearchResultPresenter = ({
  stock,
  myFavourite,
  futurePrices,
  msg,
  isFuturePricesLoading,
  handleChecked,
  handleChange,
  handleAddStockOnFavourite,
  submitFurturePrice
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
    <>
      <section className={style.searchResultContainer}>
        {isLoading && stockInfos.length === 0 && <Spinner />}
        {isLoading === false && isNotFoundSymbol && (
          <span>Not Found Company's Symbol</span>
        )}
        {isLoading === false &&
          isSearched === true &&
          stockInfos.length > 0 && (
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
      <section className={style.futureValueContainer}>
        {isLoading === false && isSearched === true && stockInfos.length > 0 && (
          <>
            <form onSubmit={submitFurturePrice}>
              <div>
                <h2>Expect your future values</h2>
              </div>
              <div className={style.insertValue}>
                <span>I want to find expected stock prices at time </span>
                <span>
                  <input
                    type="text"
                    placeholder="number of days"
                    name="numDays"
                    onChange={handleChange}
                  />
                </span>
                <span> using </span>
                <span>
                  <input
                    type="text"
                    placeholder="number of data"
                    name="numData"
                    onChange={handleChange}
                  />
                </span>
                <span> numbers of data</span>
              </div>
              <div>
                <input type="submit" value="submit" hidden />
              </div>
            </form>
            {msg.length > 0 && { msg }}
            {isFuturePricesLoading && <Spinner />}
            {futurePrices.length > 0 && isFuturePricesLoading === false && (
              <table>
                <tbody>
                  <tr>
                    <th>Current Value</th>
                    <th>Expected Price(Up)</th>
                    <th>Expected Price(Down)</th>
                  </tr>
                  <tr>
                    {futurePrices.map((val, index) => (
                      <td key={uuid4()}>{Math.round(val)}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            )}
          </>
        )}
      </section>
    </>
  );
};

export default SearchResultPresenter;
