import React from "react";

function Sort() {
  return (
    <div className="btn-group ml-4">
      <button
        type="button"
        className="btn btn-danger dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Action
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item">Action</a>
        <a className="dropdown-item">Another action</a>
        <a className="dropdown-item">Something else here</a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item">Separated link</a>
      </div>
    </div>
  );
}

export default Sort;
