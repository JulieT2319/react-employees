import React from "react";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <div>
      <form className="col s12">
        <div className="row">
          <div className="input-field col s6 l3">
            <label htmlFor="searchFirst">First Name:</label>
            <input
              onChange={props.handleInputChange}
              value={props.value}
              name="searchFirst"
              type="text"
              className="form-control"
              placeholder="First Name"
              id="searchFirst"
            />
          </div>
          <div className="input-field col s6 l3">
            <label htmlFor="searchFirst">Last name:</label>
            <input
              onChange={props.handleInputChange}
              value={props.value}
              name="searchLast"
              type="text"
              className="form-control"
              placeholder="Last Name"
              id="searchLast"
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6 l3">
            <label htmlFor="searchPosition">Position:</label>
            <input
              onChange={props.handleInputChange}
              value={props.value}
              name="searchPosition"
              type="text"
              className="form-control"
              placeholder="Position"
              id="searchPosition"
            />
          </div>
          <div className="input-field col s6 l3">
            <label htmlFor="searchLocation">Last name:</label>
            <input
              onChange={props.handleInputChange}
              value={props.value}
              name="searchLocation"
              type="text"
              className="form-control"
              placeholder="location"
              id="searchLocation"
            />
          </div>
        </div>
        <div className="row center-align">
          <div className="col s3"></div>
          <div className="col">

            <button onClick={props.handleFormSubmit} className="btn btn-primary">
              Search
        </button>
          </div>
          <div className="col s1"></div>
          <div className="col">

            <button onClick={props.handleFormReset} className="btn btn-primary">
              reset
        </button>

          </div>
          <div className="col s3"></div>
        </div>
      </form>
      <hr />
    </div>
  );
}

export default SearchForm;