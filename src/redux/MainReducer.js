import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./InitialState";


export const MainReducer = createSlice({
    name:"MAIN_SLICE",
    initialState: initialState,
    reducers:{
        changeStateValue: (state,action)=>{
            console.log(action);
            // state.firstName = action.payload.value
            const check = action.payload.name.includes('.')
            console.log(check);
            if(!check){
                state[action.payload.name] = action.payload.value
            }else{
                const groups = action.payload.name.split('.')
                console.log(groups);
                if(groups.length == 2){
                    state[groups[0]][groups[1]]= action.payload.value
                }else if(groups == 3){
                    state[groups[0]][groups[1]][groups[2]]= action.payload.value
                }else if(groups == 4){
                    state[groups[0]][groups[1]][groups[2]][groups[3]]= action.payload.value
                }
            }
        }
    }
})

export const Data = MainReducer.reducer
export const {changeStateValue} = MainReducer.actions