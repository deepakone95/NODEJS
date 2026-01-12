const { constants } = require('../constants');

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    switch (statusCode) {
        case constants.VALIDAITON_ERROR:
            res.status(statusCode).json({ "title": "Validation Error", message: err.message, stack: err.stack });
            break;
        case constants.FORBIDDEN:
            res.status(statusCode).json({ "title": "Forbidden", message: err.message, stack: err.stack });
            break;
        case constants.NOT_FOUND:
            res.status(statusCode).json({ "title": "Not Found", message: err.message, stack: err.stack });
            break;
        case constants.SERVER_ERROR:
            res.status(statusCode).json({ "title": "Server Error", message: err.message, stack: err.stack });
            break; 
        default:
            console.log("No Error, All Good");
            break;

    }


    res.json({
        message: err.message,
        // stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
}

module.exports = {
    errorHandler
};