import React from "react";
// import { Route } from "react-router-dom";
import "./App.css";
import Table from "./components/Table";
import Filter from "./components/Filter";

function App() {
  return (
    <div>
    <br></br>
    <Filter></Filter>
    <br></br>
    <Table></Table>
    </div>
  )
};

export default App;
