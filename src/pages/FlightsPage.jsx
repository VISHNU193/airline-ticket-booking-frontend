import { useState, useEffect } from "react";
import FlightCard from "../components/FlightCard";

function FlightsPage() {
    const [flights, setFlights] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch flight data from the backend
        fetch("/api/flights")
            .then((response) => response.json())
            .then((data) => {
                setFlights(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching flights:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading flights...</div>;
    }

    return (
        <div style={{ padding: "20px" }}>
            <h2>Available Flights</h2>
            {flights.length > 0 ? (
                flights.map((flight) => (
                    <FlightCard key={flight.id} flight={flight} />
                ))
            ) : (
                <p>No flights available.</p>
            )}
        </div>
    );
}

export default FlightsPage;
