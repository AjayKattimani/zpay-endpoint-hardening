function versioning(req, res, next) {

    const version = req.headers["x-api-version"];

    if (!version) {
        return res.status(400).json({
            success: false,
            error: "API version header is required"
        });
    }

    if (version !== "v1") {
        return res.status(400).json({
            success: false,
            error: "Unsupported API version"
        });
    }

    next();
}

module.exports = versioning;