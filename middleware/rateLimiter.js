const requestCounts = new Map();

function rateLimiter(req, res, next) {

    const apiKey = req.headers["x-api-key"];

    const currentTime = Date.now();

    if (!requestCounts.has(apiKey)) {
        requestCounts.set(apiKey, {
            count: 1,
            startTime: currentTime
        });

        return next();
    }

    const user = requestCounts.get(apiKey);

    // Reset after 1 minute
    if (currentTime - user.startTime > 60000) {
        user.count = 1;
        user.startTime = currentTime;

        return next();
    }

    if (user.count >= 5) {
        return res.status(429).json({
            success: false,
            error: "Rate limit exceeded"
        });
    }

    user.count++;

    next();
}

module.exports = rateLimiter;