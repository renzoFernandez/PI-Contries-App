import { GET_COUNTRIES , GET_COUNTRY,GET_COUNTRIES_QUERY,CLEAN_COUNTRY,FILTER_CONTINENT,FILTER_ACTIVITY,ORDER_NAME,ORDER_POPULATION,ERROR,GET_ACTIVITIES,GET_COUNTRIES_ALL} from "./action-types";
import axios from 'axios'


export const getCountry = (id) =>{
    return async function(dispatch){
        let response = await axios(`http://localhost:3001/countries/${id}`)
        return dispatch({type:GET_COUNTRY , payload:response.data})
    }
}

export const cleanCountry=()=>{
    return {type:CLEAN_COUNTRY}
}

export const getCountryByQuery = (name)=>{
    return function(dispatch){
        axios(`http://localhost:3001/countries?name=${name}`)
        .then(res => res.data)
        .then(data => dispatch({type:GET_COUNTRIES_QUERY,payload:data}))
        .catch(err =>{
            dispatch({type:ERROR , payload:err.response.data.error})
        })
    }
}
export const filterContinent = (value)=>{
    return {type:FILTER_CONTINENT , payload:value}
}
export const filterActivity = (value)=>{
    return {type:FILTER_ACTIVITY , payload:value}
}
export const orderName = (value)=>{
    return {type:ORDER_NAME , payload:value}
}
export const orderPopulation = (value)=>{
    return {type:ORDER_POPULATION , payload:value}
}
export const getActivities = ()=>{
    return async function(dispatch){
        let response = await axios('http://localhost:3001/activities');
        return dispatch({type: GET_ACTIVITIES , payload : response.data})
    } 
}

export const getCountriesAll = ()=>{
    return async function(dispatch){
        let response = await axios('http://localhost:3001/countries');
        return dispatch({type: GET_COUNTRIES_ALL , payload : response.data})
    }
}

