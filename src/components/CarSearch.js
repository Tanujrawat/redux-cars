import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeSearchTerm } from "../store";

function CarSearch() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => {
    return state.cars.searchTerm;
  });

  const handleSearchTermChange = (event) => {
    dispatch(changeSearchTerm(event.target.value));
  };

  return (
    <div className="list-header">
      <h3 className="title is-3">My Cars</h3>
      <div className="search field is-horizontal">
        <label>searchCar</label>
        <input
          value={searchTerm}
          className="input"
          onChange={handleSearchTermChange}
        />
      </div>
    </div>
  );
}

export default CarSearch;
