const router = require('express').Router();

const {
    carController: {
        getAllCars, getCarById, createCar, deleteCar, updateCar
    }
} = require('../controllers');
const { carMiddleware: { isCarPresent, isCorrectYear, isCorrectPrice } } = require('../middlewares');

router.get('/', getAllCars);
router.post('/', isCorrectYear, isCorrectPrice, createCar);

router.get('/:car_id', isCarPresent, getCarById);
router.put('/:car_id', updateCar);
router.delete('/:car_id', isCarPresent, deleteCar);

module.exports = router;
