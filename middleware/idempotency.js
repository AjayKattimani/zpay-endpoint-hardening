const processedKeys = require("../cache/cache");

function idempotency(req, res, next) {

    const key = req.headers["idempotency-key"];

    if (!key) {
        return res.status(400).json({
            success: false,
            error: "Idempotency-Key header is required"
        });
    }

    if (processedKeys.has(key)) {
        return res.status(409).json({
            success: false,
            error: "Duplicate payment request"
        });
    }

    processedKeys.add(key);

    next();
}

module.exports = idempotency;