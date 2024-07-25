import React from "react";
import { changeName, changeCost } from "../store";
import { useSelector, useDispatch } from "react-redux";
function CarForm() {
  const dispatch = useDispatch();
  const formState = useSelector((state)=> state.form);
  const {name, cost} = formState;
  
  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
    // console.log(name);
  }
  const handleCostChange = (event) => {
    // event.target.value is going to be a string , and we want cost as a number
    // so we have to convert it, and if there is not a numnber then we have simply put 0 in the OR condition
    const carCost = parseInt(event.target.value) || 0;    
    dispatch(changeCost(carCost));
    // console.log(cost);
  }

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form>
        <div className="field-group">
          <div className="field">
            <label>Name</label>
            <input
              value={name}
              className="input is-expanded"
              onChange={handleNameChange}
            />
          </div>
          <div className="field">
            <label>Value</label>
            <input
              value={cost||''}
              className="input is-expanded"
              onChange={handleCostChange}
              type="number"
            />
          </div>
        </div>
      </form>
      <button>Submit</button>
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
