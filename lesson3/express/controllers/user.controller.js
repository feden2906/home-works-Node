const users = require('../db/users');

module.exports = {
  getAllUsers: (req, res) => {
    res.send('user list');
  },
  createUser: (req, res) => {
    res.send('create user');
  },
  getUserByID: (req, res) => {
    const { user_id } = req.params;
    const currentUser = users[user_id];

    if (!currentUser) {
      res.status(404).json('User not found');
      return;
    }

    res.json(currentUser);
  }
};
