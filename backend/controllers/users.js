const User = require("../models/User");

const getUsers = (req, res) => {
  User.find()
    .then((user) => res.json(user))
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
};

const createUser = (req, res) => {
  const newUser = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
  });
  newUser
    .save()
    .then((res) => res.json(res))
    .catch((err) => console.log(err.message));
};

const findUserById = (req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(404).json({ message: err.message }));
};

module.exports = {
  getUsers,
  createUser,
  findUserById,
};
