
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import FlightsPage from "./pages/FlightsPage";
import BookingPage from "./pages/BookingPage";
import PaymentPage from "./pages/PaymentPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import "./index.css";


function App() {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <main style={{ flex: 1, padding: "0px" }}>
                    <Routes>
                        {/* Home Page */}
                        <Route path="/" element={<HomePage />} />

                        {/* Flights List Page */}
                        <Route path="/flights" element={<FlightsPage />} />

                        {/* Booking Page */}
                        <Route path="/book/:flightId" element={<BookingPage />} />

                        {/* Payment Page */}
                        <Route path="/payment/:bookingId" element={<PaymentPage />} />

                        {/* Confirmation Page */}
                        <Route path="/confirmation" element={<ConfirmationPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
