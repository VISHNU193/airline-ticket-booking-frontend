

function HomePage() {
    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>Welcome to Airline Booking</h1>
            <p>Book your flights conveniently and securely with our platform.</p>
            <a href="/flights" style={{ textDecoration: "none", color: "blue", fontSize: "18px" }}>
                Browse Flights
            </a>
        </div>
    );
}

export default HomePage;
