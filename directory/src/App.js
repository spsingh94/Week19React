import React from "react";
// import { Route } from "react-router-dom";
import "./App.css";
import Table from "./components/Table";
import Filter from "./components/Filter";
import Employee from "./components/Employee";

function App() {
  return (
    <div>
    <br></br>
    <Filter></Filter>
    <br></br>
    <Table></Table>
    <br></br>
    <Employee></Employee>
    </div>
  )
};

export default App;
