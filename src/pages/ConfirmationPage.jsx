

function ConfirmationPage() {
    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>Payment Successful!</h1>
            <p>Your booking is confirmed. Thank you for choosing our airline!</p>
            <a href="/" style={{ textDecoration: "none", color: "blue", fontSize: "18px" }}>
                Back to Home
            </a>
        </div>
    );
}

export default ConfirmationPage;
