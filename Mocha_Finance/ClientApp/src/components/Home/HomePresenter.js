import React from "react";
import NavMenu from "../NavMenu";
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
    <div>
      {/* Search Bar */}
      <section>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="keyword"
            placeholder="Search for news, symbols or companies"
            onChange={handleSearch}
          />
          <button type="submit">
            <span>Submit</span>
          </button>
        </form>
      </section>
      {/* Menu Bar: Favourite, Predict */}
      {/* <section>
        <NavMenu />
      </section> */}
      <section>
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
