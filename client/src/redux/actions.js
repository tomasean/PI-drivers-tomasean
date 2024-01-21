import {
    FILTER,
    GET_DRIVERS,
    TEAM_ORIGIN_ORDER_FILTER,
    SEARCH_BY_NAME,
} from "./action-types.js";
import axios from "axios";

//import { API_URL } from "./config/api-config";

export const filterCards = (team) => {
    return {
        type: FILTER,
        payload: team,
    };
};  

export const filterDrivers = (filterData) => {
    return {
        type: TEAM_ORIGIN_ORDER_FILTER,
        payload: filterData,
    };
};

export const getDrivers = () => {
    const endpoint = "http://localhost:3001/drivers";
    return async (dispatch) => {
        try {
            const { data } = await axios.get(endpoint);
            return dispatch ({
                type:GET_DRIVERS,
                payload: data,
            });
        } catch (err) {
            console.log(err);
        }
    };
};

export const getDriversByName = async (name) => {
    const endpoint = "http://localhost:3001/drivers";
    return async (dispatch) => {
        try {
            const { data } = await axios.get(endpoint,{params:{name}});
            return dispatch({
                type: 'SEARCH_BY_NAME',
                payload:data,
            });
        } catch (err) {
            return dispatch({
                type:'SEARCH_BY_NAME',
                payload: err.response.data,
            });
        }
    };
};