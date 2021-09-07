const router = require('express').Router();
const { getAllUsers, getUserByID, createUser } = require('../controllers/user.controller');

router.get('/', getAllUsers);
router.post('/', createUser);
router.get('/:user_id', getUserByID);

module.exports = router;
