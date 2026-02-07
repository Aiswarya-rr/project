
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const slots = [
  "9:00 AM - 9:30 AM",
  "9:30 AM - 10:00 AM",
  "10:00 AM - 10:30 AM",
  "10:30 AM - 11:00 AM",
  "11:00 AM - 11:30 AM",
  "11:30 AM - 12:00 PM",
];

const services = ["Assignment", "Poster", "Resume", "Document", "Other"];

const paperTypes = [
  { label: "A4", price: 2 },
  { label: "A3", price: 4 },
];

const colors = [
  { label: "Black & White", price: 0 },
  { label: "Color", price: 2 },
];

const bindings = [
  { label: "None", price: 0 },
  { label: "Staple", price: 5 },
  { label: "Spiral", price: 15 },
];

const deliveries = [
  { label: "Pickup at Shop", price: 0 },
  { label: "Campus Delivery", price: 10 },
];

// Small option card component
const OptionCard = ({ label, price, isSelected, onClick }) => (
  <div
    className={`flex items-center justify-between p-4 rounded-lg cursor-pointer transition-all duration-300 ${
      isSelected
        ? "bg-[#f3eee7] border-2 border-[#110366] shadow-lg scale-[1.02]"
        : "bg-white border-2 border-transparent hover:bg-[#f7f3ee] hover:shadow-md"
    }`}
    onClick={onClick}
  >
    <span className="font-semibold text-[#5c5043]">{label}</span>
    <span className="text-[#7a6c5d] font-bold text-sm">
      {price > 0 ? `+ ₹${price}` : "Free"}
    </span>
  </div>
);

// Stepper for quantity
const QuantityStepper = ({ quantity, setQuantity }) => (
  <div className="flex items-center justify-between border border-[#e0d6c3] rounded-lg bg-white mt-2">
    <button
      type="button"
      className="px-4 py-2 font-bold text-xl text-[#12035b] hover:bg-[#ffece5] rounded-l-lg transition-colors"
      onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
    >
      -
    </button>
    <span className="text-[#5c5043] font-bold text-lg">{quantity}</span>
    <button
      type="button"
      className="px-4 py-2 font-bold text-xl text-[#ff6f3c] hover:bg-[#ffece5] rounded-r-lg transition-colors"
      onClick={() => setQuantity((prev) => prev + 1)}
    >
      +
    </button>
  </div>
);

// Success screen
const OrderConfirmation = ({ orderId, delivery, name, quote, isEdit }) => (
  <div className="text-center p-8 bg-green-50 rounded-lg shadow-md border-2 border-green-200">
    <h3 className="text-3xl font-bold text-green-700 mb-4">
      {isEdit ? "✅ Order Updated!" : "🎉 Order Placed!"}
    </h3>
    <p className="text-lg text-green-600 font-semibold mb-2">
      Thank you, {name}!
    </p>
    <div className="bg-white rounded-lg p-4 mb-4 border border-green-300">
      <p className="text-2xl font-bold text-gray-800">
        Order ID: <span className="text-green-600">{orderId}</span>
      </p>
      <p className="text-lg font-medium text-gray-600 mt-2">
        Total: <span className="text-green-600 font-bold">₹{quote}</span>
      </p>
    </div>
    <p className="text-sm text-gray-500">
      Delivery method: <b>{delivery}</b>
    </p>
  </div>
);

function BookingForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = Boolean(id);

  const [name, setName] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [bookedSlots, setBookedSlots] = useState([]);
  const [service, setService] = useState("");
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [paper, setPaper] = useState(paperTypes[0].label);
  const [color, setColor] = useState(colors[0].label);
  const [binding, setBinding] = useState(bindings[0].label);
  const [quantity, setQuantity] = useState(1);
  const [delivery, setDelivery] = useState(deliveries[0].label);
  const [quote, setQuote] = useState(0);
  const [orderId, setOrderId] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [step, setStep] = useState(1);

  // Store original fetched data to enable cancel functionality
  const [originalOrder, setOriginalOrder] = useState(null);

  useEffect(() => {
    if (isEdit) {
      axios.get(`http://localhost:5000/api/orders/${id}`).then((res) => {
        const o = res.data;
        setName(o.name);
        setService(o.service);
        setPaper(o.paper);
        setColor(o.color);
        setBinding(o.binding);
        setQuantity(o.quantity);
        setDelivery(o.delivery);
        setSelectedSlot(o.slot);
        setQuote(o.quote);
        setOrderId(o.orderId);
        setOriginalOrder(o); // Store original data
      });
    }
  }, [id, isEdit]);

  useEffect(() => {
    const paperPrice = paperTypes.find((p) => p.label === paper)?.price || 0;
    const colorPrice = colors.find((c) => c.label === color)?.price || 0;
    const bindingPrice = bindings.find((b) => b.label === binding)?.price || 0;
    const deliveryPrice = deliveries.find((d) => d.label === delivery)?.price || 0;
    const total =
      (paperPrice + colorPrice) * quantity + bindingPrice + deliveryPrice;
    setQuote(total);
  }, [paper, color, binding, quantity, delivery]);

  const handleFileChange = (e) => {
    const f = e.target.files[0];
    setFile(f);
    setPreviewUrl(f ? URL.createObjectURL(f) : "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderData = {
      orderId: isEdit ? orderId : "ORD" + Math.floor(Math.random() * 100000),
      name,
      service,
      fileName: file ? file.name : "",
      paper,
      color,
      binding,
      quantity,
      delivery,
      slot: selectedSlot,
      quote,
      timestamp: new Date().toISOString(),
    };

    try {
      if (isEdit) {
        await axios.put(`http://localhost:5000/api/orders/${id}`, orderData);
      } else {
        await axios.post("http://localhost:5000/api/orders", orderData);
      }
      setOrderId(orderData.orderId);
      setIsSuccess(true);
    } catch (err) {
      console.error("Error saving order:", err);
      toast.error("❌ Failed to save order.");
    }
  };

  const nextStep = () => {
    if (step === 1 && (!name || !service)) return;
    if (step < 3) setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  // New function to handle cancellation
  const handleCancelEdit = () => {
    if (originalOrder) {
      // Revert state to original values
      setName(originalOrder.name);
      setService(originalOrder.service);
      setPaper(originalOrder.paper);
      setColor(originalOrder.color);
      setBinding(originalOrder.binding);
      setQuantity(originalOrder.quantity);
      setDelivery(originalOrder.delivery);
      setSelectedSlot(originalOrder.slot);
      setQuote(originalOrder.quote);
      setOrderId(originalOrder.orderId);
    }
    // Navigate back to the previous page or a specific route
    navigate(`/`); // Navigate to home or order list page
  };

  if (isSuccess) {
    return (
      <OrderConfirmation
        orderId={orderId}
        delivery={delivery}
        name={name}
        quote={quote}
        isEdit={isEdit}
      />
    );
  }

  return (
    <section className="max-w-3xl mx-auto bg-[#fffdf7] rounded-xl shadow-2xl p-8 my-12">
      <h2 className="text-3xl font-bold mb-6 text-[#041869] text-center">
        {isEdit ? "✏️ Edit Your Order" : "🖨️ Place Your Print Order"}
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        {step === 1 && (
          <div>
            <h3 className="text-xl text-[#041869] font-semibold mb-3">
              1. Your Details
            </h3>
            <input
              type="text"
              placeholder="Your Name"
              className="border p-3 rounded-lg mb-3 w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <select
              className="border p-3 text-[#041869] rounded-lg mb-3 w-full"
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
            >
              <option value="">Select Service</option>
              {services.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
            <input
              type="file"
              className="mb-3"
              accept=".pdf,.doc,.docx,.ppt,.pptx,.jpg,.png"
              onChange={handleFileChange}
            />
            {previewUrl && (
              <div className="border p-2 rounded">
                <span>Preview:</span>
                {file?.type?.startsWith("image") ? (
                  <img src={previewUrl} alt="Preview" className="h-32" />
                ) : (
                  <p>{file?.name}</p>
                )}
              </div>
            )}
          </div>
        )}

        {step === 2 && (
          <div>
            <h3 className="text-xl text-[#041869] font-semibold mb-3">
              2. Print Options
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p>Paper Size</p>
                {paperTypes.map((p) => (
                  <OptionCard
                    key={p.label}
                    label={p.label}
                    price={p.price}
                    isSelected={paper === p.label}
                    onClick={() => setPaper(p.label)}
                  />
                ))}
              </div>
              <div>
                <p>Color</p>
                {colors.map((c) => (
                  <OptionCard
                    key={c.label}
                    label={c.label}
                    price={c.price}
                    isSelected={color === c.label}
                    onClick={() => setColor(c.label)}
                  />
                ))}
              </div>
            </div>
            <p className="mt-4 text-[#041869]">Binding</p>
            <div className="grid grid-cols-3 gap-2">
              {bindings.map((b) => (
                <OptionCard
                  key={b.label}
                  label={b.label}
                  price={b.price}
                  isSelected={binding === b.label}
                  onClick={() => setBinding(b.label)}
                />
              ))}
            </div>
            <p className="mt-4 text-[#041869]">Quantity</p>
            <QuantityStepper quantity={quantity} setQuantity={setQuantity} />
          </div>
        )}

        {step === 3 && (
          <div>
            <h3 className="text-xl text-[#041869] font-semibold mb-3">
              3. Delivery
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {deliveries.map((d) => (
                <OptionCard
                  key={d.label}
                  label={d.label}
                  price={d.price}
                  isSelected={delivery === d.label}
                  onClick={() => setDelivery(d.label)}
                />
              ))}
            </div>
            <p className="mt-4">Pickup Time Slot</p>
            <div className="grid grid-cols-2 gap-2">
              {slots.map((slot) => (
                <div
                  key={slot}
                  className={`p-3 text-center rounded cursor-pointer ${
                    bookedSlots.includes(slot)
                      ? "bg-gray-300 text-gray-500"
                      : selectedSlot === slot
                      ? "bg-[#041869] text-white"
                      : "bg-[#f3eee7]"
                  }`}
                  onClick={() =>
                    !bookedSlots.includes(slot) && setSelectedSlot(slot)
                  }
                >
                  {slot}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-6 bg-[#f3eee7] p-4 rounded">
              <p className="font-bold text-lg">
                Instant Quote: <span className="text-[#041869]">₹{quote}</span>
              </p>
              <button
                type="submit"
                disabled={!selectedSlot}
                className="bg-[#041869] text-white px-6 py-2 rounded-lg font-bold"
              >
                {isEdit ? "Update Order" : "Pay & Place Order"}
              </button>
            </div>
          </div>
        )}
      </form>

      {/* Navigation and Cancel button */}
      <div className="flex justify-between mt-6">
        {step > 1 && (
          <button
            type="button"
            onClick={prevStep}
            className="bg-[#041869] text-white px-6 py-2 rounded-lg"
          >
            Back
          </button>
        )}
        {isEdit && (
          <button
            type="button"
            onClick={handleCancelEdit}
            className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
          >
            Cancel
          </button>
        )}
        {step < 3 && (
          <button
            type="button"
            onClick={nextStep}
            disabled={step === 1 && (!name || !service)}
            className="bg-[#041869] text-white px-6 py-2 rounded-lg"
          >
            Next
          </button>
        )}
      </div>
    </section>
  );
}

export default BookingForm;