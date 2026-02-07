import React from "react";
import BookingForm from "../components/BookingForm";

function OrderPrints() {
  return (
    <div className="max-w-2xl mx-auto mt-8 p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold text-[#041869] mb-2">Order Prints</h2>
      <p className="text-[#041869]">Place your print orders for documents, posters, assignments, and more.</p>
      <BookingForm />
    </div>
  );
}

export default OrderPrints;
