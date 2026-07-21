const express = require("express");

const router = express.Router();

router.post("/v1/payments", (req, res) => {

    const { amount, currency, merchantId } = req.body;

    // Validation
    if (!amount || !currency || !merchantId) {
        return res.status(400).json({
            success: false,
            error: "Missing required fields"
        });
    }

    res.status(200).json({
        success: true,
        message: "Payment accepted",
        data: {
            amount,
            currency,
            merchantId
        }
    });

});

module.exports = router;