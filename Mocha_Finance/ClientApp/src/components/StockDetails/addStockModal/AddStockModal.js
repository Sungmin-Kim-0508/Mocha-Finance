import React, { Component } from "react";
import Spinner from "../../../utils/Spinner";
import uuid4 from "uuid4";

class AddStockModal extends Component {
  render() {
    console.log(this.props);
    const {
      myFavourites,
      handleAddStockOnFavourite,
      handleChecked
    } = this.props;
    console.log(myFavourites);
    return (
      <section
        className="modal fade"
        id="addStockModal"
        tabIndex="3"
        role="dialog"
        aria-labelledby="addStockModal"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addStockModal">
                Add the favourites
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
            <div className="modal-body">
              {myFavourites.length === 0 && <Spinner />}
              {myFavourites.length > 0 &&
                myFavourites.map(item => (
                  <div key={uuid4()} className="input-group mb-3">
                    <div className="input-input-group-append">
                      <input
                        type="radio"
                        value={item.myFavouriteID}
                        onChange={handleChecked}
                        name="myFavCategory"
                      />
                    </div>
                    <span>{item.myFavouriteName}</span>
                  </div>
                ))}
            </div>
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
                onClick={handleAddStockOnFavourite}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AddStockModal;
