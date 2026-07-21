const express = require("express");

const app = express();

app.use(express.json());

// Import payment routes
const paymentRoutes = require("./routes/payment");

// Register routes
app.use("/", paymentRoutes);

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to ZPay API");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});