import {
  FILTER,
  GET_DRIVERS,
  TEAM_ORIGIN_ORDER_FILTER,
} from "./action-types.js";
import axios from "axios";

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
      return dispatch({
        type: GET_DRIVERS,
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getDriversByName = (name) => {
  const endpoint = "http://localhost:3001/drivers";
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint, { params: { name } });
      return dispatch({
        type: "SEARCH_BY_NAME",
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getAllTeams = () => {
  const teamsEndpoint = "http://localhost:3001/teams";
  return async (dispatch) => {
    try {
      const { data } = await axios.get(teamsEndpoint);
      console.log(data);
      return dispatch({
        type: "GET_ALL_TEAMS",
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
