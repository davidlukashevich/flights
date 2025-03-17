import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import airportsConfig from '../../config/airportsConfig.json';
import { getAllFlightsThunk } from '../../store/reducers/allFlightsReducer';
import s from './Flights.module.css';
import { useNavigate } from 'react-router';
import cn from 'classnames';
import Loader from '../../components/Loader/Loader';

const Flights = () => {
    const [airportType, setAirportType] = useState('arrivals');
    const [airport, setAirport] = useState('');
    const dispatch = useDispatch();
    const allFlights = useSelector(state => state.allFlightsPage);
    const navigate = useNavigate();

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPage = 10;
    const startIndex = (currentPage - 1) * itemsPage;
    const endIndex = startIndex + itemsPage;
    const displayFlights = allFlights.flightData.slice(startIndex, endIndex);
    const totalPages = Math.ceil(allFlights.flightData.length / itemsPage);

    useEffect(() => {
        if (airportType === 'arrivals') {
            dispatch(getAllFlightsThunk(airport, ''))
        } else {
            dispatch(getAllFlightsThunk('', airport))
        }
    }, [airport, airportType]);

    const handleTypeChange = (e) => {
        const { value } = e.target;
        setAirportType(value);
        setCurrentPage(1);
    }

    const handleChangeAirport = (e) => {
        const { value } = e.target;
        setAirport(value);
        setCurrentPage(1);
    }

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleClick = (flightCode) => {
        navigate(`/flights/${flightCode}`);
    }

    return (
        <section className={s.flights}>
            <select value={airport} className={s.flights_airports} onChange={handleChangeAirport}>
                <option value="">Select airport</option>
                {airportsConfig.airports.map((airport) => (
                    <option key={airport.iata_code} value={airport.iata_code}>{airport.name} ({airport.iata_code})</option>
                ))}
            </select>
            {airport ? allFlights.isFetching ? <Loader /> : <>
                <div className={s.flights_radio}>
                    <input type="radio" id="arrivals" name="flightType" value="arrivals" checked={airportType === 'arrivals'} onChange={handleTypeChange} />
                    <label htmlFor='arrivals' className={cn(s.radio_label, airportType === 'arrivals' ? s.active : '')}>Arrivals</label>

                    <input type="radio" id="departures" name="flightType" value="departures" checked={airportType === 'departures'} onChange={handleTypeChange} />
                    <label htmlFor='departures' className={cn(s.radio_label, airportType === 'departures' ? s.active : '')}>Departures</label>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th className={s.carrier}>Carrier</th>
                            <th>Flight</th>
                            <th>{airportType === 'arrivals' ? 'Origin' : 'Destination'}</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayFlights.map(flight => (
                            <tr key={flight.flight} onClick={() => handleClick(flight.flight)}>
                                <td>{airportType === 'arrivals' ? flight.timeArr : flight.timeDep}</td>
                                <td className={s.carrier}><img src={`https://airlabs.co/img/airline/s/${flight.carrier}.png`} alt="logo" /></td>
                                <td>{flight.flight}</td>
                                <td>{airportType === 'arrivals' ? flight.airportDep : flight.airportArr}</td>
                                <td>{flight.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className={s.flights_pagination}>
                    <button
                        className={cn(s.prev_btn, currentPage === 1 ? s.disabled : '')}
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            className={cn(s.paginator_page, currentPage === index + 1 ? s.active : '')}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button className={s.paginator_mobile}>{currentPage}</button>
                    <button
                        className={cn(s.next_btn, currentPage === totalPages ? s.disabled : '')}
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>

            </> : ''}
        </section>
    )
}

export default Flights;