import { configureStore } from "@reduxjs/toolkit";
import { changeName, changeCost, formReducer } from "./slices/formSlice";
import { changeSearchTerm, addCar, removeCar, carsReducer } from "./slices/carsSlice";

const store = configureStore({
    reducer:{
        form:formReducer,
        cars: carsReducer,
    }
});

// const currState = store.getState();
// console.log(currState);

// store.dispatch({ type: "form/changeName", payload:"dfsdsfds"});
// const state2 = store.getState();
// console.log(state2);

// store.dispatch({ type: "form/changeCost", payload:45});
// const state3 = store.getState();
// console.log(state3);


export { store, changeCost, changeName, changeSearchTerm, addCar, removeCar };