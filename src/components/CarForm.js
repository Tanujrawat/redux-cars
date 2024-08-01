import React from "react";
import { changeName, changeCost, addCar } from "../store";
import { useSelector, useDispatch } from "react-redux";
function CarForm() {
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost,
    };
  });

  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
    // console.log(name);
  };

  const handleCostChange = (event) => {
    // event.target.value is going to be a string , and we want cost as a number
    // so we have to convert it, and if there is not a numnber then we have simply put 0 in the OR condition
    const carCost = parseInt(event.target.value) || 0;
    dispatch(changeCost(carCost));
    // console.log(cost);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCar({ name: name, cost: cost })); // or you say it like dispatch(addCar({name, car}));
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              value={name}
              className="input is-expanded"
              onChange={handleNameChange}
            />
          </div>

          <div className="field">
            <label className="label">Cost</label>
            <input
              value={cost || ""}
              className="input is-expanded"
              onChange={handleCostChange}
              type="number"
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;

// Again: steps to Accessing state
//1.  find the components that needs to access some state from store
//2.  import useSelector hook from 'react-redux
//3.  call the hook, passing in a selector function
//4.  use the state! Anytime state changes, the component will automatically rerender

// Again: steps to update/change state in your component through redux system

//1. Add a reducer to one of your slices that changes state in some particular way
//2. export the action creator that the slcice automatically creates
//3. find the component that you want to dispatch from
//4. Import the action creator function and useDispatch from react-redux
//5. call the useDispatch hook to get access to the dispatch function
//6.  when the user does something, call the action creator to get an action, then dispatch it.
