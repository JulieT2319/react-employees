import React from 'react';
import Table from "../components/Table"
import { SearchContainer } from '../components/SearchContainer'

export default function Main() {

  return (
    <div className="center container">
      <SearchContainer />
      <Table />

    </div>
  );

}