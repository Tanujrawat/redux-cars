import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";
import '.././styles.css';

function CarList() {
  const dispatch = useDispatch();
  
  //const cars = useSelector((state) => state.cars.data); //below is another way of writing it
  
  // we have to change from above cars to below cars because if there is something in the searchTerm then we nned to filter our cars and display them accordingly
  // be careful in using return statments 
  const {cars, name} = useSelector(({ form, cars: { data, searchTerm } }) => {
    const filteredCars = data.filter((car) => 
       car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return {
      cars: filteredCars, 
      name: form.name,
    }
  });

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  const renderedCars = cars.map((car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
    return (
      <div key={car.id} className={`panel ${bold && 'bold'}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(car)}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div>
      {renderedCars}
      <hr />
    </div>
  );
}

export default CarList;
