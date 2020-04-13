import React from "react";
import SearchForm from './SearchForm'
// import { employees } from '../utils/employees';

export default function SearchContainer({ value, handleInputChange, handleFormSubmit }) {
  return (

    <header className="App-header" >
      <h1>Employee Search</h1>
      <SearchForm value={value}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
      />
    </header>

  );
}
