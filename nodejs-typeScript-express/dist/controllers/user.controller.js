"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUser = exports.createUser = exports.getUsers = void 0;
const typeorm_1 = require("typeorm");
const user_1 = require("../entity/user");
const getUsers = async (req, res) => {
    const users = await typeorm_1.getRepository(user_1.User).find();
    return res.json(users);
};
exports.getUsers = getUsers;
const createUser = async (req, res) => {
    const newUser = typeorm_1.getRepository(user_1.User).create(req.body);
    const results = typeorm_1.getRepository(user_1.User).save(newUser);
    return res.json(results);
};
exports.createUser = createUser;
const getUser = async (req, res) => {
    const result = await typeorm_1.getRepository(user_1.User).findOne(req.params.id);
    return res.json(result);
};
exports.getUser = getUser;
const updateUser = async (req, res) => {
    const user = await typeorm_1.getRepository(user_1.User).findOne(req.params.id);
    if (user) {
        typeorm_1.getRepository(user_1.User).merge(user, req.body);
        const results = await typeorm_1.getRepository(user_1.User).save(user);
        return res.json(results);
    }
    return res.status(404).json({ msg: "Not User found." });
};
exports.updateUser = updateUser;
const deleteUser = async (req, res) => {
    const result = await typeorm_1.getRepository(user_1.User).delete(req.params.id);
    return res.json(result);
};
exports.deleteUser = deleteUser;
