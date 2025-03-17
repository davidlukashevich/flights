import flightsAPI from "../../api/flightsAPI";

const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING'
const SET_FLIGHTS_DATA = 'SET_FLIGHTS_DATA';

let initialState = {
    isFetching: false,
    flightData: []
}

const allFlightsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOOGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }

        case SET_FLIGHTS_DATA: {
            return {
                ...state,
                flightData: [...action.flightData]
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

const setFlightsData = (flightData) => {
    return {
        type: SET_FLIGHTS_DATA,
        flightData
    }
}

export const getAllFlightsThunk = (arrivalAirport, departureAirport) => async (dispatch) => {
    dispatch(toogleIsFetching(true));
    let response = await flightsAPI.getAllFlights(arrivalAirport, departureAirport);
    if (response) {
        const flightData = response.map(data => ({
            timeArr: data.arr_time,
            timeDep: data.dep_time,
            flight: data.flight_iata,
            status: data.status,
            airportArr: data.arr_iata,
            airportDep: data.dep_iata,
            carrier: data.airline_iata
        }));

        dispatch(setFlightsData(flightData));
    }
    dispatch(toogleIsFetching(false));
}

export default allFlightsReducer;