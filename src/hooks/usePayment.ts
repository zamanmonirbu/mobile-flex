import axios from "axios";
import { useCart } from "./useCart";
import { BASE_URL as baseUrl } from "../api/baseUrl";


export function usePayment() {
  const { items, clearCart } = useCart();

  const handlePayment = async (method: "creditcard" | "ideal") => {
    try {
      const response = await axios.post(`${baseUrl}/api/payments/initiate`, {
        items,
        method,
      });

      if (response.data.paymentUrl) {
        console.log("response.data",response.data)
        clearCart();
        window.location.href = response.data.paymentUrl;
      } else {
        alert("Payment successful without redirect!");
      }
    } catch (error) {
      console.error("Payment initiation failed:", error);
      alert("Payment initiation failed. Please try again.");
    }
  };

  return { handlePayment };
}


