const { carDB } = require('../dataBase');
const { ErrorHandler, statusCodes, statusMessages } = require('../errors');

module.exports = {
    isCarPresent: async (req, res, next) => {
        try {
            const { car_id } = req.params;
            const currentCar = await carDB.findById(car_id);

            if (!currentCar) {
                throw new ErrorHandler(statusCodes.ERROR_404, statusMessages.NOT_FOUND);
            }

            req.car = currentCar;
            next();
        } catch (e) {
            next(e);
        }
    },

    isCorrectYear: (req, res, next) => {
        try {
            const { year } = req.body;

            if (year < 1980 || year > 2021) {
                throw new ErrorHandler(400, 'incorrect year');
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    isCorrectPrice: (req, res, next) => {
        try {
            const { price } = req.body;

            if (price < 0 || price > 200000) {
                throw new ErrorHandler(400, 'incorrect price');
            }

            next();
        } catch (e) {
            next(e);
        }
    }
};
