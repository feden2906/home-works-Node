const router = require('express').Router();

const {
  userController: { getAllUsers, getUserById, createUser, deleteUser, updateUser }
} = require('../controllers');
const { userMiddleware: { isUserPresent, isUniqueEmail } } = require('../middlewares');

router.get('/', getAllUsers);
router.post('/', isUniqueEmail, createUser);

router.get('/:user_id', isUserPresent, getUserById);
router.put('/:user_id', updateUser);
router.delete('/:user_id', isUserPresent, deleteUser);

module.exports = router;
