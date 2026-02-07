const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;

const app = express();
app.use(express.json());

app.use(cors({
  origin: ["http://localhost:3000", "https://your-frontend-domain"]
}));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);
// Order schema
const orderSchema = new mongoose.Schema({
  orderId: String,
  name: String,
  service: String,
  fileName: String,
  paper: String,
  color: String,
  binding: String,
  quantity: Number,
  delivery: String,
  slot: String,
  quote: Number,
  timestamp: String
});
const Order = mongoose.model("Order", orderSchema);

// Contact schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  timestamp: String
});
const Contact = mongoose.model("Contact", contactSchema);

const serviceSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  duration: String,
  createdAt: { type: Date, default: Date.now }
});
const Service = mongoose.model("Service", serviceSchema);

// User schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);


// API endpoints
app.post("/api/orders", async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.json({ success: true });
});

app.get("/api/orders", async (req, res) => {
  const orders = await Order.find().sort({ timestamp: -1 }).limit(20);
  res.json(orders);
});

// Update order by ID
app.put("/api/orders/:id", async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,   // get order id from URL
      req.body,        // new data from frontend
      { new: true }    // return the updated document
    );
    if (!updatedOrder) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }
    res.json({ success: true, order: updatedOrder });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Delete order by ID
app.delete("/api/orders/:id", async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);
    if (!deletedOrder) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }
    res.json({ success: true, message: "Order deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.post("/api/services", async (req, res) => {
  try {
    const service = new Service(req.body);
    await service.save();
    res.json({ success: true, service });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Get all services
app.get("/api/services", async (req, res) => {
  try {
    const services = await Service.find().sort({ createdAt: -1 });
    res.json(services);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Update a service by ID
app.put("/api/services/:id", async (req, res) => {
  try {
    const updatedService = await Service.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedService) {
      return res.status(404).json({ success: false, message: "Service not found" });
    }
    res.json({ success: true, service: updatedService });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Delete a service by ID
app.delete("/api/services/:id", async (req, res) => {
  try {
    const deletedService = await Service.findByIdAndDelete(req.params.id);
    if (!deletedService) {
      return res.status(404).json({ success: false, message: "Service not found" });
    }
    res.json({ success: true, message: "Service deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});
// Get all contacts (l  atest first)
app.get("/api/contacts", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ timestamp: -1 }).limit(20);
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Delete contact by ID
app.delete("/api/contacts/:id", async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedContact) {
      return res.status(404).json({ success: false, message: "Contact not found" });
    }
    res.json({ success: true, message: "Contact deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Contact API endpoint
app.post("/api/contact", async (req, res) => {
  const contact = new Contact(req.body);
  await contact.save();
  res.json({ success: true });
});

// User Signup
app.post("/api/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.json({ success: true, message: "Signup successful" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// User Login
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ success: false, message: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ success: false, message: "Invalid email or password" });

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "4h" });

    res.json({ success: true, message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Profile (protected)
app.get("/api/profile", async (req, res) => {
  try {
    const token = req.headers["authorization"];
    if (!token) return res.status(401).json({ success: false, message: "No token" });

    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");

    res.json({ success: true, user });
  } catch (err) {
    res.status(401).json({ success: false, message: "Unauthorized" });
  }
});

// Logout
app.post("/api/logout", (req, res) => {
  res.json({ success: true, message: "Logged out" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


