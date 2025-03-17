import flightsAPI from "../../api/flightsAPI";

const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING'
const SET_FLIGHT = 'SET_FLIGHT';

let initialState = {
    isFetching: false,
    cityArr: undefined,
    cityDep: undefined,
    airportArr: undefined,
    airportDep: undefined,
    timeArr: undefined,
    timeDep: undefined,
    duration: undefined,
    airlineCode: undefined,
    airlineName: undefined,
    terminalArr: undefined,
    terminalDep: undefined,
    gateArr: undefined,
    gateDep: undefined,
    baggage: undefined,
    lat: undefined,
    lng: undefined
}

const flightReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOOGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }

        case SET_FLIGHT: {
            return {
                ...state,
                ...action.data
            }
        }

        default: {
            return state;
        }
    }
}

const toogleIsFetching = (isFetching) => {
    return {
        type: TOOGLE_IS_FETCHING,
        isFetching
    }
}

const setFlight = (cityArr, cityDep, airportArr, airportDep, timeArr, timeDep, duration, airlineName, terminalArr, terminalDep,
    gateArr, gateDep, baggage, airlineCode, lat, lng
) => {
    return {
        type: SET_FLIGHT,
        data: {cityArr, cityDep, airportArr, airportDep, timeArr, timeDep, duration, airlineName, terminalArr, terminalDep,
            gateArr, gateDep, baggage, airlineCode, lat, lng}
    }
}

export const getFlightThunk = (flightCode) => async (dispatch) => {
    dispatch(toogleIsFetching(true));
    let response = await flightsAPI.getFlight(flightCode);
    if(response) {
        dispatch(setFlight(response.arr_city, response.dep_city, response.arr_name, response.dep_name, response.arr_time, response.dep_time, response.duration, 
            response.airline_name, response.arr_terminal, response.dep_terminal, response.arr_gate, response.dep_gate, 
            response.arr_baggage, response.airline_iata, response.lat, response.lng
        ));
    }
    dispatch(toogleIsFetching(false));
}

export default flightReducer;