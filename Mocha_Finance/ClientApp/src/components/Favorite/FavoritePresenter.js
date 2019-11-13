import React from "react";
import style from "./favourite.module.scss";
const FavouritePresenter = ({ handleAddFavourite }) => {
  return (
    <div className={style.container}>
      <section>
        <button type="button" data-toggle="modal" data-target="#favModal">
          Add My Favourites
        </button>
      </section>
      <section>
        <span>Toronto</span>
        <span>New York</span>
        <span>LA</span>
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
      <section
        className="modal fade"
        id="favModal"
        tabIndex="3"
        role="dialog"
        aria-labelledby="favModal"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="favModal">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={handleAddFavourite}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FavouritePresenter;
