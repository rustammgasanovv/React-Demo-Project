import axios from "axios"
import { mainApi } from "../api"
import { changeStateValue } from "../redux/MainReducer";

export const getCars = () => async dispatch => {
    return await axios.get(`${mainApi}/cars`)
    .then(resp => {
        console.log(resp.data);
        dispatch(changeStateValue({
            name:'cars',
            value:resp.data
        }))
    })
}

export const deleteItem = (url, data) => async dispatch => {
    console.log(data);
    return await axios.delete(`${mainApi}/${url}`, data)
    .then(resp=>{
        return 'success'
    }).catch(err => {return'error'})
}

export const getUser = () => async dispatch =>{
    return await axios.get(`${mainApi}/user`)
    .then(resp=>{
        console.log(resp.data);
        dispatch(changeStateValue({
            name:'user',
            value: resp.data
        }))
    })
}

export const getBranch = () => async dispatch => {
    return await axios.get(`${mainApi}/branch`)
    .then(resp => {
        console.log(resp.data);
        dispatch(changeStateValue({
            name:'branch',
            value:resp.data
        }))
    })
}

export const getOrders = () => async dispatch => {
    return await axios.get(`${mainApi}/order`)
    .then(resp => {
        console.log(resp.data);
        dispatch(changeStateValue({
            name:'order',
            value:resp.data
        }))
    })
}

export const insertData = (url,data) => async dispatch =>{
    return await axios.post(`${mainApi}/${url}`, data)
    .then(resp =>{
        console.log(resp.data);
        return 'success'
    }).catch (err => console.log(err))
}

export const getOneData = (url) => async dispatch =>{
    return await axios.get(`${mainApi}/${url}`)
    .then(resp =>{
        dispatch(changeStateValue({
            name:'oneData',
            value: resp.data
        }))
        console.log("oneData"+resp);
    })
}
export const updateData = (url, data) => async dispatch =>{
    return await axios.put(`${mainApi}/${url}`, data)
    .then(resp => {
        return 'success'
    }).catch(err => {return 'err'})
}