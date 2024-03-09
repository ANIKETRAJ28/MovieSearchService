const { StatusCodes } = require("http-status-codes");

const movieCreateMiddleware = (req, res, next) => {
    if(
        !req.body.name ||
        !req.body.duration ||
        !req.body.genre ||
        !req.body.price ||
        !req.body.ratings
    ) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            data: {},
            message: "Invalid request for creating movie",
            success: false,
            err: "Missing mandatory properties for creating movie"     
        });
    }
    next();
}

const movieUpdateMiddleware = (req, res, next) => {
    if(
        !req.body.price
    ) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            data: {},
            message: "Invalid request for updating movie",
            success: false,
            err: "Missing mandatory properties for updating movie"          
        });
    }
    next();
}

module.exports = {
    movieCreateMiddleware,
    movieUpdateMiddleware
}