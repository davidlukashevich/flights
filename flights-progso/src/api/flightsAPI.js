import axios from "axios";

const apiKey = '2cd4a185-98b4-422c-822d-4a4c3b7d58e2';

const base = axios.create({
    baseURL: 'https://airlabs.co/api/v9/'
});

const flightsAPI = {
    getAllFlights(arrivalAirport, departureAirport) {
        return base.get('schedules', {params: {
            dep_iata: departureAirport,
            arr_iata: arrivalAirport,
            api_key: apiKey
        }}).then(response => response.data.response);
    },
    getFlight(flightCode) {
        return base.get('flight', {params: {
            flight_iata: flightCode,
            api_key: apiKey
        }}).then(response => response.data.response)
    }
}

export default flightsAPI;