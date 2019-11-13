import React from "react";
import style from "./favourite.module.scss";
import Spinner from "../../utils/Spinner";
import uuid4 from "uuid4";
import AddFavouriteModal from "./addFavouriteModal";

const FavouritePresenter = ({
  myFavouriteNames,
  handleAddFavourite,
  handleInput
}) => {
  return (
    <div className={style.container}>
      <section>
        <button type="button" data-toggle="modal" data-target="#favModal">
          Add My Favourites
        </button>
      </section>
      <section>
        {myFavouriteNames.length === 0 && <Spinner />}
        {myFavouriteNames &&
          myFavouriteNames.map(item => <span key={uuid4()}>{item}</span>)}
      </section>
      <section>
        <div>
          <p>Apple Inc. (AAPL)</p>
          <p>Open: </p>
          {/* Previous day's Close */}
          <p>Close: </p>
          <p>Date: 2019-01-01</p>
        </div>
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
