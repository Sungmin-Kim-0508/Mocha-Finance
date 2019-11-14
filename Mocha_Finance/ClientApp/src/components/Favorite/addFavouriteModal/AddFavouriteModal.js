import React, { Component } from "react";

class AddFavouriteModal extends Component {
  render() {
    const { handleAddFavourite, handleInput } = this.props;
    return (
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
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    Name of the favourite
                  </span>
                </div>
                <input
                  type="text"
                  aria-label="Favourite Name"
                  className="form-control"
                  name="myFavouriteName"
                  onChange={handleInput}
                />
              </div>
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
                onClick={handleAddFavourite}
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

export default AddFavouriteModal;
