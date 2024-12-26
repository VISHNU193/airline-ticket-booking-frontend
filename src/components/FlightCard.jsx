

import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/FlightCard.css";

function FlightCard({ flight }) {
    return (
        <div className="flight-card">
            <h3>{flight.airlineName}</h3>
            <p>From: {flight.departureAirport}</p>
            <p>To: {flight.arrivalAirport}</p>
            <p>Departure: {new Date(flight.departureTime).toLocaleString()}</p>
            <p>Arrival: {new Date(flight.arrivalTime).toLocaleString()}</p>
            <Link to={`/book/${flight.id}`} className="flight-card-button">
                Book Now
            </Link>
        </div>
    );
}

FlightCard.propTypes = {
    flight: PropTypes.shape({
        airlineName: PropTypes.string.isRequired,
        departureAirport: PropTypes.string.isRequired,
        arrivalAirport: PropTypes.string.isRequired,
        departureTime: PropTypes.string.isRequired,
        arrivalTime: PropTypes.string.isRequired,
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }).isRequired,
};

export default FlightCard;
