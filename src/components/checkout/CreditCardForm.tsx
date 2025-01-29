import { useState } from "react";

interface CreditCardFormProps {
  onSubmit: (cardDetails: { number: string; expiry: string; cvv: string }) => void;
}

export function CreditCardForm({ onSubmit }: CreditCardFormProps) {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!cardNumber || !expiryDate || !cvv) {
      alert("Please fill in all card details.");
      return;
    }

    onSubmit({ number: cardNumber, expiry: expiryDate, cvv });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-lg">
      <div>
        <label className="block text-sm font-medium text-gray-700">Card Number</label>
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          placeholder="1234 5678 9101 1121"
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div className="flex gap-4">
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="MM/YY"
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700">CVV</label>
          <input
            type="password"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            placeholder="123"
            className="w-full p-2 border rounded-md"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-emerald-500 text-white p-2 rounded-md hover:bg-emerald-600"
      >
        Pay Now
      </button>
    </form>
  );
}
