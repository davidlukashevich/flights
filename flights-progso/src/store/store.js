import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import flightReducer from "./reducers/flightReducer";
import allFlightsReducer from "./reducers/allFlightsReducer";

let reducers = combineReducers({
    flightPage: flightReducer,
    allFlightsPage: allFlightsReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;