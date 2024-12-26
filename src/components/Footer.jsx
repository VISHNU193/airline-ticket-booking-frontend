
import "../styles/Footer.css";

function Footer() {
    return (
        <footer className="footer" style={{ textAlign: "center", padding: "15px"}}>
            <p>&copy; {new Date().getFullYear()} Airline Booking. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
