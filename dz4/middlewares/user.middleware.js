const { ErrorHandler } = require('../errors');
const { userDB } = require('../dataBase');

module.exports = {
  isUserPresent: async (req, res, next) => {
    try {
      console.log(req.params);
      const { user_id } = req.params;
      const currentUser = await userDB.findById(user_id);

      if (!currentUser) {
        throw new ErrorHandler(404, 'user not found');
      }
      req.user = currentUser;
      next();
    } catch (e) {
      next(e);
    }
  },

  isUniqueEmail: async (req, res, next) => {
    try {
      const { email } = req.body;
      const isUnique = await userDB.findOne({ email });
      if (isUnique) {
        throw new ErrorHandler(400, 'email already exist');
      }
      next();
    } catch (e) {
      next(e);
    }
  }
};
