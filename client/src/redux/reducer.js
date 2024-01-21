import { FILTER, GET_DRIVERS, TEAM_ORIGIN_ORDER_FILTER, SEARCH_BY_NAME, minecraft } from "./action-types.js";

const initialState = {
    drivers: [],
    allDrivers: [],
    name: "tomi",
    filter: {
        team: "",
        origin: "API",
        order: "ASC",
        dob: null,
    },
    loading: false,
};
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER:
            return {
                ...state,
                drivers: state.drivers.filter((driver) => driver.team === action.payload),
            };
            // case GET_DRIVERS:
            //     return {
            //         ...state,
            //         error: action.payload,
            //     };

                case GET_DRIVERS:
                    return {
                        ...state,
                        drivers: action.payload,
                        allDrivers: action.payload,
                        loading: false,
                    };

                case TEAM_ORIGIN_ORDER_FILTER:
                    const {who, data} = action.payload;
                    const updatedFilter = {
                        ...state.filter,
                        [who]: data,
                    };

                    //si el filtro team es "-", se debe devolver la lista completa de drivers
                    if (who === "team" && data === "-") {
                        updatedFilter.drivers = state.allDrivers;
                    }

                    return {
                        ...state,
                        filter: updatedFilter,
                    };

                case SEARCH_BY_NAME:
                    const { payload, error } = action;
                    if(error) {
                        return {
                            ...state,
                            error: error,
                        };
                    }
                    return {
                        ...state,
                        drivers: payload.data,
                    };
                    case minecraft:
                        return{
                            ...state,
                            name: action.payload,
                        };
                    default:
                        return state;
    }
};

export default rootReducer;