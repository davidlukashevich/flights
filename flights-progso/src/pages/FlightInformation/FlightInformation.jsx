import cn from 'classnames';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getFlightThunk } from '../../store/reducers/flightReducer';
import s from './FlightInformation.module.css';
import Loader from '../../components/Loader/Loader';
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const FlightInformation = () => {
    const {flightCode} = useParams();
    const dispatch = useDispatch();
    const flightInformation = useSelector(state => state.flightPage);
    const timeArr = flightInformation.timeArr?.split(' ')[1];
    const timeDep = flightInformation.timeDep?.split(' ')[1];
    const duration_h = Math.floor(flightInformation.duration / 60);
    const duration_m = flightInformation.duration % 60;
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: "AIzaSyCtq5AgLR7Qwv6ZanZY0GwthbjKa5ST12g"
    });
      
    useEffect(() => {
        dispatch(getFlightThunk(flightCode));
    }, []);

    if(!isLoaded) {
        return <div>Loading...</div>
    }

    return (
        <section className={s.flight}>
            {flightInformation.isFetching ? <div className={s.loader}><Loader /></div> : <><h1 className={s.flight_title}>Flight {flightCode} {flightInformation.cityDep} – {flightInformation.cityArr} by {flightInformation.airlineName}</h1>
            <div className={s.flight_info}>
                <div className={s.city_info}>
                    <h2 className={s.city}>{flightInformation.cityDep}</h2>
                    <p className={s.airport}>{flightInformation.airportDep}</p>
                    <p className={cn(s.departure_title, s.title)}>Departure</p>
                    <p className={s.time}>{timeDep}</p>
                </div>
                <div className={s.additional_info}>
                    <hr className={s.line} />
                    <p className={s.flight_time}>{duration_h}h {duration_m}min</p>
                </div>
                <div className={cn(s.city_info, s.arrival_city)}>
                    <h2 className={cn(s.city, s.arrival_item)}>{flightInformation.cityArr}</h2>
                    <p className={cn(s.airport, s.arrival_item)}>{flightInformation.airportArr}</p>
                    <p className={cn(s.arrival_item, s.title)}>Arrival</p>
                    <p className={cn(s.time, s.arrival_item)}>{timeArr}</p>
                </div>
            </div>
            <div className={s.flight_block}><div className={s.flight_detail_info}>
                <h3>Detailed Information</h3>
                <div className={s.airline_info}>
                    <img src={`https://airlabs.co/img/airline/m/${flightInformation.airlineCode}.png`} alt="logo" />
                    <h4 className={s.airline_name}>{flightInformation.airlineName}</h4>
                </div>
                <div className={s.detail_info}>
                    <div className={s.city_detail_info}>
                        <h4 className={s.city_name}>{flightInformation.cityDep}</h4>
                        <div><p className={s.title}>Terminal:</p><p className={s.info}>{flightInformation.terminalDep ? flightInformation.terminalDep : 'no'}</p></div>
                        <div><p className={s.title}>Gate:</p><p className={s.info}>{flightInformation.gateDep ? flightInformation.gateDep : 'no'}</p></div>
                    </div>
                    <div className={s.city_detail_info}>
                        <h4 className={s.city_name}>{flightInformation.cityArr}</h4>
                        <div><p className={s.title}>Terminal:</p><p className={s.info}>{flightInformation.terminalArr ? flightInformation.terminalArr : 'no'}</p></div>
                        <div><p className={s.title}>Gate:</p><p className={s.info}>{flightInformation.gateArr ? flightInformation.gateArr : 'no'}</p></div>
                        <div><p className={s.title}>Baggage carousel:</p><p className={s.info}>{flightInformation.baggage ? flightInformation.baggage : 'no'}</p></div>
                    </div>
                </div>
            </div>
            <div>
                <GoogleMap mapContainerClassName={s.flight_map} zoom={flightInformation.lat ? 10 : 5} center={{lat: flightInformation.lat ? flightInformation.lat : 52.231457, lng: flightInformation.lng ? flightInformation.lng : 21.008305}} >
                    {flightInformation.lat && flightInformation.lng && <Marker position={{lat: flightInformation.lat, lng: flightInformation.lng}}></Marker>}
                </GoogleMap>
            </div></div>
            </>}

        </section>
    )
}

export default FlightInformation;