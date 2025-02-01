import { useState } from "react";
import { CreditCard, Building2 } from "lucide-react";
import { usePayment } from "../../hooks/usePayment";

export function PaymentMethods() {
  const [selectedMethod, setSelectedMethod] = useState<"creditcard" | "ideal" | "">("");
  const [isPaymentConfirmed, setIsPaymentConfirmed] = useState(false);  // Track if payment is confirmed
  const { handlePayment } = usePayment();

  const handlePayNow = () => {
    if (selectedMethod) {
      handlePayment(selectedMethod);
      setIsPaymentConfirmed(true);
    } else {
      alert("Please select a payment method first.");
    }
  };

  return (
    <div className="space-y-8">
      <h3 className="text-sm font-medium text-gray-700">Select Payment Method</h3>

      {/* Credit Card Payment */}
      <button
        onClick={() => setSelectedMethod("creditcard")}
        className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
          selectedMethod === "creditcard"
            ? "border-emerald-500 bg-emerald-50"
            : "border-gray-200 hover:border-emerald-200"
        }`}
      >
        <div className="flex items-center gap-3">
          <CreditCard className="w-6 h-6 text-gray-600" />
          <span className="font-medium">Credit Card</span>
        </div>
      </button>

      {/* iDEAL Payment */}
      <button
        onClick={() => setSelectedMethod("ideal")}
        className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
          selectedMethod === "ideal"
            ? "border-emerald-500 bg-emerald-50"
            : "border-gray-200 hover:border-emerald-200"
        }`}
      >
        <div className="flex items-center gap-3">
          <Building2 className="w-6 h-6 text-gray-600" />
          <span className="font-medium">iDEAL</span>
        </div>
      </button>

      {/* Pay Now Button */}
      <button
        onClick={handlePayNow}
        disabled={!selectedMethod || isPaymentConfirmed}
        className={`w-full p-4 mt-4 rounded-lg ${
          !selectedMethod || isPaymentConfirmed
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-emerald-500 text-white hover:bg-emerald-600 transition-all"
        }`}
      >
        Pay Now
      </button>

      {/* Payment Confirmation (optional) */}
      {isPaymentConfirmed && (
        <div className="mt-4 text-center text-green-600">
          Payment in process...
        </div>
      )}
    </div>
  );
}
