import { useState } from "react";
import { CreditCard, Building2 } from "lucide-react";
import { usePayment } from "../../hooks/usePayment";

export function PaymentMethods() {
  const [selectedMethod, setSelectedMethod] = useState<"creditcard" | "ideal" | "">("");
  const { handlePayment } = usePayment();

  return (
    <div className="space-y-8">
      <h3 className="text-sm font-medium text-gray-700">Select Payment Method</h3>

      {/* Credit Card Payment */}
      <button
        onClick={() => {
          setSelectedMethod("creditcard");
          handlePayment("creditcard");
        }}
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
        onClick={() => {
          setSelectedMethod("ideal");
          handlePayment("ideal");
        }}
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
    </div>
  );
}
