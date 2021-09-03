const { userDB } = require('../dataBase');
const { ErrorHandler, statusCodes, statusMessages } = require('../errors');

module.exports = {
    isUserPresent: async (req, res, next) => {
        try {
            const { user_id } = req.params;
            const currentUser = await userDB.findById(user_id);

            if (!currentUser) {
                throw new ErrorHandler(statusCodes.ERROR_404, statusMessages.NOT_FOUND);
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
