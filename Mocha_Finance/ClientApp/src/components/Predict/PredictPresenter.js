import React from "react";
import style from "./predict.module.scss";
import uuid4 from "uuid4";
import Spinner from "../../utils/Spinner";

const PredictPresenter = ({
  futurePrices,
  isFuturePricesLoading,
  msg,
  handleChange,
  submitFuturePrice
}) => {
  return (
    <>
      <form onSubmit={submitFuturePrice}>
        <div>
          <h2>Expect your future values</h2>
        </div>
        <div className={style.insertValue}>
          <span>I want to find expected stock prices at time </span>
          <span>
            <input
              type="number"
              placeholder="number of days"
              name="numDays"
              onChange={handleChange}
              min="0"
            />
          </span>
          <span> using </span>
          <span>
            <input
              type="number"
              placeholder="number of data"
              name="numData"
              onChange={handleChange}
              min="0"
            />
          </span>
          <span> numbers of data</span>
        </div>
        <div>
          <input type="submit" value="submit" hidden />
        </div>
      </form>
      {msg.length > 0 && { msg }}
      {isFuturePricesLoading && (
        <div>
          <Spinner />
        </div>
      )}
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
  );
};

export default PredictPresenter;
