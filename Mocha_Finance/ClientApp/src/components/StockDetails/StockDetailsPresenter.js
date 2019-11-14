import React from "react";

const StockDetailsPresenter = ({ stock }) => {
  const { symbol, companyName, stockInfos } = stock;

  return (
    <div>
      <section>
        <div>
          <h4>{companyName}</h4>
          <h6>{symbol}</h6>
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
    </div>
  );
};

export default StockDetailsPresenter;
