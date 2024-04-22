const {constants} = require("../constants")
const { title } = require("process");

const errorHandler = (err, req, res, next) => {
    const statuscode = res.statuscode ? res.statuscode : 500;

    switch (statuscode) {
        case constants.VALIDATION_ERROR:
            res.json({ title: "Validation Failed", message: err.message, stackTrace: err.stack });
            break;

        case constants.NOT_FOUND:
            res.json({title:"Not found", message: err.message, stackTrace: err.stack });
            break;
            
        case constants.FORBIDDEN:
            res.json({title:"FORBIDDEN", message: err.message, stackTrace: err.stack });
            break;

        case constants.UNAUTHORIZED:
            res.json({title:"UNAUTHORIZED", message: err.message, stackTrace: err.stack });
            break;

        case constants.SERVER_ERROR:
            res.json({title:"Internal server error", message: err.message, stackTrace: err.stack });
            break;

        default:
        console.log("No error found!!");
        break;
    }

};

module.exports = errorHandler;