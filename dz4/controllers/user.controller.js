const { userDB } = require('../dataBase');

module.exports = {
    getAllUsers: async (req, res, next) => {
        try {
            const allUsers = await userDB.find({});
            res.json(allUsers);
        } catch (e) {
            next(e);
        }
    },

    getUserById: (req, res, next) => {
        try {
            const { user } = req;
            res.json(user);
        } catch (e) {
            next(e);
        }
    },

    createUser: async (req, res, next) => {
        try {
            const createdUser = await userDB.create(req.body);
            res.status(201).json(createdUser);
        } catch (e) {
            next(e);
        }
    },

    deleteUser: async (req, res, next) => {
        try {
            const { user_id } = req.params;
            await userDB.findByIdAndDelete(user_id);
            res.status(204).json('user is deleted');
        } catch (e) {
            next(e);
        }
    },

    updateUser: async (req, res, next) => {
        try {
            const { user_id } = req.params;
            await userDB.findByIdAndUpdate(user_id, req.body);
            res.status(201).json('user is updated');
        } catch (e) {
            next(e);
        }
    }

};
