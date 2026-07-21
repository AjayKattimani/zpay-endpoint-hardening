const express = require("express");
const authenticate = require("./middleware/auth");
const authorize = require("./middleware/authorization");
const idempotency = require("./middleware/idempotency");
const rateLimiter = require("./middleware/rateLimiter");
const app = express();

app.use(express.json());

// Import payment routes
const paymentRoutes = require("./routes/payment");

// Register routes
app.use(authenticate);
app.use(authorize);
app.use(rateLimiter);
app.use(idempotency);
app.use("/", paymentRoutes);

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to ZPay API");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});