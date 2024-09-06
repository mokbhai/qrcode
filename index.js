// Server setup
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const { user, medicine, medicinePrices } = require("./data.js");

const app = express();
const PORT = 3002;
const stringGen = "aufyv38igybas9q3g";
let connectedUser = "";
let connectedStatus = false;
let paymentStatus = "pending"; // "success", "failed"
let isAuthenticated = true;

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware to check authentication
app.use((req, res, next) => {
  if (req.path !== "/login" && !isAuthenticated) {
    return res.redirect("/login");
  }
  next();
});

// Serve the login page
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "login.html"));
});

// Handle login form submission
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if ((username === "admin") & (password === "admin")) {
    isAuthenticated = true;
    res.redirect("/");
  }
});

// Serve JSON data at /api endpoint
app.get("/api", (req, res) => {
  res.json({ message: "API is working" });
});

app.get("/api/gen/string", (req, res) => {
  res.send(stringGen);
});

app.get("/api/gen/status", (req, res) => {
  res.send(connectedStatus); // true or false
});

app.get("/api/payment/status", (req, res) => {
  res.send(paymentStatus); // "success", "failed", "pending"
});

app.get("/api/gen/user", (req, res) => {
  res.send(connectedUser);
});

app.post("/api/status", (req, res) => {
  const { change, userId } = req.body;

  if (change) {
    connectedStatus = change;
    connectedUser = user.find((item) => item.id === userId);
  }

  res.send(connectedStatus);
});

app.post("/api/payment/status", (req, res) => {
  const { status } = req.body;

  if (status) {
    paymentStatus = status;
  }

  res.send(paymentStatus);
});

app.post("/api/get/medicine", (req, res) => {
  const { userId } = req.body;

  const userMedicines = medicine.find((item) => item.userId === userId);

  if (!userMedicines) {
    return res.status(404).send({ error: "User not found" });
  }

  // Calculate total price and add price per piece to each medicine
  let totalPrice = 0;
  const medicinesWithPrices = userMedicines.medicines.map((med) => {
    const pricePerPiece = medicinePrices[med.name] || 0;
    const totalMedPrice = pricePerPiece * med.inDay * med.upto;
    totalPrice += totalMedPrice;
    return {
      ...med,
      pricePerPiece: pricePerPiece.toFixed(2),
      totalMedPrice: totalMedPrice.toFixed(2),
    };
  });

  // Send response with medicines including prices and total price
  res.send({
    medicines: medicinesWithPrices,
    totalPrice: totalPrice.toFixed(2),
  });
});

// Serve HTML file from views directory at the root
app.get("/gen", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "qrCodeGenrator.html"));
});

app.get("/bill", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "bill.html"));
});

app.get("/scan", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "qrCodeScanner.html"));
});

app.get("/payment", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "paymentQR.html"));
});

app.get("/do/payment", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "doPayment.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
