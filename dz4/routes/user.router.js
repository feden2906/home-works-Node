const router = require('express').Router();
const { userMiddleware: { isUserPresent, isUniqueEmail } } = require('../middlewares');
const {
    userController: {
        getAllUsers, getUserById, createUser, deleteUser, updateUser
    }
} = require('../controllers');

router.get('/', getAllUsers);
router.post('/', isUniqueEmail, createUser);
router.get('/:user_id', isUserPresent, getUserById);
router.delete('/:user_id', isUserPresent, deleteUser);
router.put('/:user_id', updateUser);

module.exports = router;
