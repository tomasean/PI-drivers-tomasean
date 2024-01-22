import {
  FILTER,
  GET_DRIVERS,
  TEAM_ORIGIN_ORDER_FILTER,
  SEARCH_BY_NAME,
  GET_ALL_TEAMS
} from "./action-types.js";

const initialState = {
  drivers: [],
  allDrivers: [],
  allTeams: [],
  name: "tomi",
  filter: {
    team: "",
    origin: "Api",
    order: "Asc",
    dob: "Sin filtro",
  },
  loading: false,
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER:
      return {
        ...state,
        drivers: state.drivers.filter(
          (driver) => driver.team === action.payload
        ),
      };

      case GET_ALL_TEAMS:
        return {
          ...state,
          allTeams:["Todos"].concat(action.payload)

        }

    case GET_DRIVERS:
      return {
        ...state,
        drivers: action.payload,
        allDrivers: action.payload,
        loading: false,
      };

    case TEAM_ORIGIN_ORDER_FILTER:
      const { who, data } = action.payload;
      const updatedFilter = {
        ...state.filter,
        [who]: data,
      };
      if (who === "team" && data === "Todos") {
        updatedFilter.drivers = state.allDrivers;
      }

      if (who === "order") {
        updatedFilter.dob = "Sin filtro";
      }

      if (who === "dob") {
        updatedFilter.order = "Sin filtro";
      }

      return {
        ...state,
        filter: updatedFilter,
      };

    case SEARCH_BY_NAME:
      const { payload, error } = action;
      if (error) {
        return {
          ...state,
          error: error,
        };
      }
      return {
        ...state,
        drivers: payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
