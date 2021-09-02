const router = require('express').Router();
const {
  carController: {
    getAllCars, getCarById, createCar, deleteCar, updateCar
  }
} = require('../controllers');

const { carMiddleware: { isCarPresent, isCorrectYear, isCorrectPrice } } = require('../middlewares');

router.get('/', getAllCars);
router.get('/:car_id', isCarPresent, getCarById);
router.post('/', isCorrectYear, isCorrectPrice, createCar);
router.delete('/:car_id', isCarPresent, deleteCar);
router.put('/:car_id', updateCar);

module.exports = router;
