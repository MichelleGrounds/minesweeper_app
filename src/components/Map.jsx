import React, { Component } from "react";
import Cell from "./Cell";
import {
  nestedArray,
  populateNestedArray,
  valsAdjacentCount
} from "../helpers";

export default class map extends Component {
  state = {
    mapSize: 0,
    bombCount: 10,
    minesweeperMap: [],
    cellsClicked: 0
  };
  render() {
    return <div></div>;
  }
}
