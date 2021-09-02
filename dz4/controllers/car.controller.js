const { carDB } = require('../dataBase');

module.exports = {
    getAllCars: async (req, res, next) => {
        try {
            const allCars = await carDB.find({});
            res.json(allCars);
        } catch (e) {
            next(e);
        }
    },

    getCarById: (req, res, next) => {
        try {
            const { car } = req;
            res.json(car);
        } catch (e) {
            next(e);
        }
    },

    createCar: async (req, res, next) => {
        try {
            const createdCar = await carDB.create(req.body);
            res.json(createdCar);
        } catch (e) {
            next(e);
        }
    },

    deleteCar: async (req, res, next) => {
        try {
            const { car_id } = req.params;
            await carDB.findByIdAndDelete(car_id);
            res.json('car is deleted');
        } catch (e) {
            next(e);
        }
    },

    updateCar: async (req, res, next) => {
        try {
            const { car_id } = req.params;
            await carDB.findByIdAndUpdate(car_id, req.body);
            res.json('car is updated');
        } catch (e) {
            next(e);
        }
    }

};
