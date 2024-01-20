import {
    FILTER,
    GET_DRIVERS,
    TEAM_ORIGIN_ORDER_FILTER,
    SEARCH_BY_NAME,
} from "./action-types.js";
import axios from "axios";

import { handleError } from "./utils/error-handler";

import { API_URL } from "./config/api-config";

export const filterCards = (team) => ({
    type: FILTER,
    payload: team,
});

export const filterDrivers = (filterData) => ({
type: FILTER,
payload: team,
});

export const getDriversByName = async (name) => {
    const endpoint = `${API_URL}?name=${name}`;
    try {
        const response = await axios.get(endpoint);
        return handleError(response, SEARCH_BY_NAME);
    } catch (err) {
        return handleError(err, SEARCH_BY_NAME);
    }
};