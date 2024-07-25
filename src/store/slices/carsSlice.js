import { createSlice, nanoid } from '@reduxjs/toolkit';
import { act } from 'react';

const carsSlice = createSlice({
    name: 'cars',
    initialState:{
        searchTerm: '',
        cars:[]
    },
    reducers: {
        changeSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        // assuming that our action contains payload which has 
        // name and cost of the car => action.payload = {name:"car1", cost:45}
        addCar: (state, action) => {
            state.cars.push({
                id: nanoid(),
                name:action.payload.name,
                cost: action.payload.cost
            });
        },

        // assuming that action comes with payload containing id of the 
        // car that needs to be removed
        removeCar: (state, action) => {
            state.cars = state.cars.filter((car) => {
                if(car.id !== action.payload){
                    return car;
                }
            });
        },
    },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer; 