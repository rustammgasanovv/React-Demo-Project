import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Data } from "./MainReducer";

const rootReducer = combineReducers({
    Data
})

export const setupStore = () =>{
    return configureStore({
        reducer: rootReducer
    })
}

