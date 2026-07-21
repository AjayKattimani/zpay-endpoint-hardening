const express = require("express");

const app = express();

// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to ZPay API");
});

// Start Server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});