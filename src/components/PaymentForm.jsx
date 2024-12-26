
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./PaymentForm.css";

function PaymentForm({ onPaymentSuccess }) {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });

        if (error) {
            console.error("Payment failed:", error.message);
        } else {
            console.log("Payment successful!", paymentMethod);
            onPaymentSuccess(paymentMethod);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="payment-form">
            <CardElement className="card-element" />
            <button
                type="submit"
                disabled={!stripe}
                className="payment-form-button"
            >
                Pay Now
            </button>
        </form>
    );
}

export default PaymentForm;
