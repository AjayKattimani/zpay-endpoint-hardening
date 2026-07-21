function authorize(req, res, next) {

    const role = req.headers["x-role"];

    if (role !== "merchant") {
        return res.status(403).json({
            success: false,
            error: "Access denied"
        });
    }

    next();
}

module.exports = authorize;