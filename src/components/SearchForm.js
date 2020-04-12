import React from "react";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="searchFirst"
          type="text"
          className="form-control"
          placeholder="First Name"
          id="searchFirst"
        />
        <br />
        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;