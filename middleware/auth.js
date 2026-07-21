function authenticate(req, res, next) {

    const apiKey = req.headers["x-api-key"];

    if (!apiKey) {
        return res.status(401).json({
            success: false,
            error: "API Key is required"
        });
    }

    if (apiKey !== "zpay-secret-key") {
        return res.status(401).json({
            success: false,
            error: "Invalid API Key"
        });
    }

    next();
}

module.exports = authenticate;